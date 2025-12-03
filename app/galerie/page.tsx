import { Suspense } from "react";
import ArtworkGrid from "../components/gallery/artworkGrid/artworkGrid";
import { Artwork } from "../generated/prisma/client";
import { getArtworks } from "../lib/artworks.model";
import ArtworkGridSkeleton from "../components/gallery/artworkGridSkeleton/artworkGridSkeleton";

export default function GaleriePage() {
    return (
        <Suspense fallback={<ArtworkGridSkeleton />}>
            <GalleryContent />
        </Suspense>
    );
};

async function GalleryContent() {
    const artworksPromise = await getArtworks();
    return <ArtworkGrid artworks={artworksPromise} />;
};
