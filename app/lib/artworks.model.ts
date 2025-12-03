import { prisma } from "./prisma";
import { Artwork } from "../generated/prisma/client";

export async function getArtworks(): Promise<Artwork[]> {
  return prisma.artwork.findMany({
    orderBy: { id: "asc" },
  });
}

type CreateArtworkInput = {
  title: string;
  sizeDescription?: string | null;
  imageUrl: string;
  sold?: boolean;
  order?: number | null;
  id?: unknown;
};

export async function createArtwork(data: CreateArtworkInput) {
  const { title, sizeDescription, imageUrl, sold, order } = data;

  return prisma.artwork.create({
    data: {
      title,
      imageUrl,
      sizeDescription: sizeDescription ?? null,
      sold: sold ?? false,
      order: order ?? 0,
    },
  });
}

export async function updateArtwork(id: number, data: Partial<Artwork>) {
  return prisma.artwork.update({
    where: { id },
    data,
  });
}

export async function deleteArtwork(id: number) {
  return prisma.artwork.delete({ where: { id } });
}
