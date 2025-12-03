import { createArtwork, getArtworks } from "@/app/lib/artworks.model";
import { NextResponse } from "next/server";

export async function GET() {
    const artworks = await getArtworks();
    return NextResponse.json(artworks);
};

export async function POST(req: Request) {
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
