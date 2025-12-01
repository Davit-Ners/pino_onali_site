'use client';
import { Artwork } from "@/app/galerie/page";
import styles from "./artworkGrid.module.css";
import ArtworkCard from "../artworkCard/artworkCard";
import { useTranslations } from "../../languageProvider/languageProvider";

type Props = {
    artworks: Artwork[];
};

export default function ArtworkGrid({ artworks }: Props) {
    const t = useTranslations();
    
    return (
        <div className={styles.wrapper}>
        <div className={styles.panel}>
            <h1 className={styles.title}>{t.gallery.title}</h1>
            <p className={styles.subtitle}>
            {t.gallery.subtitle}
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
