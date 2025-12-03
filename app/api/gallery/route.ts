import { createArtwork, getArtworks } from "@/app/lib/artworks.model";
import { NextResponse } from "next/server";

export async function GET() {
    const artworks = await getArtworks();
    return NextResponse.json(artworks);
};

export async function POST(req: Request) {
    const data = await req.json();
    const created = await createArtwork(data);
    return NextResponse.json(created, { status: 201 });
};
