import ArtworkGrid from "../components/gallery/artworkGrid/artworkGrid";
import { artworks } from "../lib/artworks";

export type Artwork = {
    id: string;
    title: string;
    description?: string;
    imageUrl: string;
};

export default function GaleriePage() {
    return (
        <section>
            <ArtworkGrid artworks={artworks} />
        </section>
    );
};
