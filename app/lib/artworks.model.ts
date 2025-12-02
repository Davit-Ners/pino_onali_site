import { Artwork } from "../galerie/page";
import { prisma } from "./prisma";

export async function getArtworks() {
  return prisma.artwork.findMany({
    orderBy: { order: "asc" },
  });
}

export async function createArtwork(data: {
  title: string;
  sizeDescription?: string;
  imageUrl: string;
  sold?: boolean;
}) {
  return prisma.artwork.create({ data });
}

export async function updateArtwork(id: string, data: Partial<Artwork>) {
  return prisma.artwork.update({
    where: { id },
    data,
  });
}

export async function deleteArtwork(id: string) {
  return prisma.artwork.delete({ where: { id } });
}
