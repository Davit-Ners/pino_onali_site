import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json().catch(() => null) as { password?: string } | null;

    const password = body?.password ?? "";
    // const adminPassword = process.env.ADMIN_PASSWORD;
    const adminPassword = '1234';

    if (!adminPassword) {
        console.error("ADMIN_PASSWORD non défini dans les variables d'environnement.");
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

    const res = NextResponse.json({ success: true });

    // Cookie de session admin
    res.cookies.set("pino_admin", "1", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 4, // 4h
    });

    return res;
};

export async function GET() {
    // optionnel : savoir si déjà loggé
    return NextResponse.json({ ok: true });
};
