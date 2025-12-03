import ArtworkGrid from "../components/gallery/artworkGrid/artworkGrid";
import { getArtworks } from "../lib/artworks.model";

export default async function GaleriePage() {
    const artworks = await getArtworks();

    return (
        <section>
            <ArtworkGrid artworks={artworks} />
        </section>
    );
};
