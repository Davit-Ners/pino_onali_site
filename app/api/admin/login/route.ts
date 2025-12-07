import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, issueAdminToken, verifyAdminToken } from "@/app/lib/auth";

type AttemptState = {
    failures: number;
    lockedUntil: number | null;
};

const attempts = new Map<string, AttemptState>();
const CAPTCHA_THRESHOLD = 3;
const LOCK_THRESHOLD = 8;
const LOCK_DURATION_MS = 15 * 60 * 1000;

function getClientId(req: NextRequest) {
    const forwardedFor = req.headers.get("x-forwarded-for");
    if (forwardedFor) {
        const [ip] = forwardedFor.split(",").map((v) => v.trim());
        if (ip) return ip;
    }

    const realIp = req.headers.get("x-real-ip") || req.headers.get("cf-connecting-ip");
    if (realIp) return realIp;

    return "unknown";
}

function recordFailure(id: string) {
    const previous = attempts.get(id) ?? { failures: 0, lockedUntil: null };
    const failures = previous.failures + 1;
    const lockedUntil =
        failures >= LOCK_THRESHOLD ? Date.now() + LOCK_DURATION_MS : previous.lockedUntil;

    attempts.set(id, { failures, lockedUntil });
    return attempts.get(id)!;
}

function clearAttempts(id: string) {
    attempts.delete(id);
}

async function verifyTurnstile(token: string, remoteip: string) {
    const secret = process.env.TURNSTILE_SECRET_KEY;
    if (!secret) {
        console.error("TURNSTILE_SECRET_KEY manquant.");
        return false;
    }

    try {
        const resp = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                secret,
                response: token,
                remoteip,
            }),
        });

        const data = (await resp.json()) as { success?: boolean };
        return Boolean(data.success);
    } catch (err) {
        console.error("TURNSTILE VERIFY ERROR:", err);
        return false;
    }
}

export async function POST(req: NextRequest) {
    const body = (await req.json().catch(() => null)) as { password?: string; captchaToken?: string } | null;
    const password = body?.password ?? "";
    const captchaToken = body?.captchaToken;
    const adminPassword = process.env.ADMIN_PASSWORD?.trim();
    const clientId = getClientId(req);
    const now = Date.now();
    const attemptState = attempts.get(clientId);

    if (attemptState?.lockedUntil && attemptState.lockedUntil > now) {
        const retryAfterSeconds = Math.ceil((attemptState.lockedUntil - now) / 1000);
        return NextResponse.json(
            { error: "Trop de tentatives. Réessayez dans quelques minutes.", captchaRequired: true },
            { status: 429, headers: { "Retry-After": `${retryAfterSeconds}` } }
        );
    }

    const captchaNeeded = (attemptState?.failures ?? 0) >= CAPTCHA_THRESHOLD;
    if (captchaNeeded) {
        if (!captchaToken) {
            return NextResponse.json(
                { error: "Captcha requis.", captchaRequired: true },
                { status: 400 }
            );
        }

        const captchaValid = await verifyTurnstile(captchaToken, clientId);
        if (!captchaValid) {
            recordFailure(clientId);
            return NextResponse.json(
                { error: "Vérification du captcha échouée.", captchaRequired: true },
                { status: 401 }
            );
        }
    }

    if (!adminPassword) {
        console.error("ADMIN_PASSWORD non dÇ¸fini dans les variables d'environnement.");
        return NextResponse.json(
            { error: "Configuration serveur manquante." },
            { status: 500 }
        );
    }

    if (password !== adminPassword) {
        const state = recordFailure(clientId);
        const requiresCaptcha = state.failures >= CAPTCHA_THRESHOLD;
        const isLocked = state.lockedUntil !== null && state.lockedUntil > Date.now();

        return NextResponse.json(
            {
                error: isLocked
                    ? "Trop de tentatives. Réessayez plus tard."
                    : "Mot de passe incorrect.",
                captchaRequired: requiresCaptcha,
            },
            { status: isLocked ? 429 : 401 }
        );
    }

    clearAttempts(clientId);

    try {
        const token = await issueAdminToken();

        const res = NextResponse.json({ success: true });

        res.cookies.set(ADMIN_COOKIE, token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: 60 * 60 * 4, // 4h
        });

        return res;
    } catch (err) {
        console.error("ADMIN TOKEN ERROR:", err);
        return NextResponse.json(
            { error: "Configuration serveur manquante." },
            { status: 500 }
        );
    }
};

export async function GET(req: NextRequest) {
    try {
        const token = req.cookies.get(ADMIN_COOKIE)?.value;
        const valid = Boolean(await verifyAdminToken(token));
        return NextResponse.json({ ok: valid });
    } catch (err) {
        console.error("ADMIN TOKEN ERROR:", err);
        return NextResponse.json({ ok: false });
    }
};
