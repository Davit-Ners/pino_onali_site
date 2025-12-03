import { deleteArtwork, updateArtwork } from "@/app/lib/artworks.model";
import { NextResponse } from "next/server";

export async function PUT(req: Request, ctx: { params: Promise<{ id: string }> }) {
    const { id } = await ctx.params;

    if (!id) {
        return NextResponse.json({ error: "Missing id" }, { status: 400 });
    }

    const data = await req.json();
    
    if (!data) {
        return NextResponse.json({ error: "Missing data" }, { status: 400 });
    }
    
    const updated = await updateArtwork(id, data);
    return NextResponse.json(updated);
};

export async function DELETE(req: Request, ctx: { params: Promise<{ id: string }> }) {
    const { id } = await ctx.params;

    if (!id) {
        return NextResponse.json({ error: "Missing id" }, { status: 400 });
    }

    try {
        await deleteArtwork(id);

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("DELETE ERROR:", err);
        return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
    }
};
