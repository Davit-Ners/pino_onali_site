import { cookies } from "next/headers";
import { createArtwork, getArtworks } from "@/app/lib/artworks.model";
import { ADMIN_COOKIE, verifyAdminToken } from "@/app/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
    const artworks = await getArtworks();
    return NextResponse.json(artworks);
};

export async function POST(req: Request) {
    try {
        const token = (await cookies()).get(ADMIN_COOKIE)?.value;
        if (!(await verifyAdminToken(token))) {
            return NextResponse.json({ error: "Non autorise." }, { status: 401 });
        }
    } catch (err) {
        console.error("ADMIN AUTH ERROR:", err);
        return NextResponse.json({ error: "Configuration manquante." }, { status: 500 });
    }

    const raw = await req.json();
    const payload = {
        title: raw?.title,
        imageUrl: raw?.imageUrl,
        sizeDescription: raw?.sizeDescription ?? null,
        sold: raw?.sold ?? false,
        order: typeof raw?.order === "number" ? raw.order : undefined,
    };

    if (!payload.title || !payload.imageUrl) {
        return NextResponse.json({ error: "Missing title or imageUrl" }, { status: 400 });
    }

    const created = await createArtwork(payload);
    return NextResponse.json(created, { status: 201 });
};
