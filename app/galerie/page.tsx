import { Suspense } from "react";
import ArtworkGrid from "../components/gallery/artworkGrid/artworkGrid";
import { Artwork } from "../generated/prisma/client";
import { getArtworks } from "../lib/artworks.model";
import ArtworkGridSkeleton from "../components/gallery/artworkGridSkeleton/artworkGridSkeleton";

export default async function GaleriePage() {
    const artworksPromise = await getArtworks();

    return (
        <Suspense fallback={<ArtworkGridSkeleton />}>
            <GalleryContent artworksPromise={artworksPromise}/>
        </Suspense>
    );
};

async function GalleryContent({ artworksPromise }: { artworksPromise: Artwork[] }) {
    const artworks = await artworksPromise;
    return <ArtworkGrid artworks={artworks} />;
};
