import { Artwork } from "@/app/galerie/page";
import styles from "./artworkGrid.module.css";
import ArtworkCard from "../artworkCard/artworkCard";

type Props = {
    artworks: Artwork[];
};

export default function ArtworkGrid({ artworks }: Props) {
    return (
        <div className={styles.wrapper}>
        <div className={styles.panel}>
            <h1 className={styles.title}>Galerie</h1>
            <p className={styles.subtitle}>
            Découvrez une sélection d’œuvres issues de l’univers de Pino Onali.
            </p>

            <div className={styles.grid}>
                {artworks.map((artwork) => (
                    <ArtworkCard key={artwork.id} artwork={artwork} />
                ))}
            </div>
        </div>
        </div>
    );
};
