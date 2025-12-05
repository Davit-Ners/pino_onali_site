import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, issueAdminToken, verifyAdminToken } from "@/app/lib/auth";

export async function POST(req: NextRequest) {
    const body = (await req.json().catch(() => null)) as { password?: string } | null;

    const password = body?.password ?? "";
    const adminPassword = process.env.ADMIN_PASSWORD?.trim();

    if (!adminPassword) {
        console.error("ADMIN_PASSWORD non dÇ¸fini dans les variables d'environnement.");
        return NextResponse.json(
            { error: "Configuration serveur manquante." },
            { status: 500 }
        );
    }

    if (password !== adminPassword) {
        return NextResponse.json(
            { error: "Mot de passe incorrect." },
            { status: 401 }
        );
    }

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
