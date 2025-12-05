'use client';
import { useEffect, useState, type MouseEvent } from "react";
import Image from "next/image";
import styles from "./artworkGrid.module.css";
import ArtworkCard from "../artworkCard/artworkCard";
import { useTranslations } from "../../languageProvider/languageProvider";
import { Artwork } from "@/app/generated/prisma/client";

type Props = {
    artworks: Artwork[];
};

export default function ArtworkGrid({ artworks }: Props) {
    const t = useTranslations();
    const [selected, setSelected] = useState<Artwork | null>(null);

    useEffect(() => {
        function handleEsc(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setSelected(null);
            }
        }
        if (selected) {
            document.addEventListener("keydown", handleEsc);
        } else {
            document.removeEventListener("keydown", handleEsc);
        }
        return () => document.removeEventListener("keydown", handleEsc);
    }, [selected]);

    function closeModal() {
        setSelected(null);
    }

    function handleOverlayClick(e: MouseEvent<HTMLDivElement>) {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    }
    
    return (
        <div className={styles.wrapper}>
        <div className={styles.panel}>
            <h1 className={styles.title}>{t.gallery.title}</h1>
            <p className={styles.subtitle}>
            {t.gallery.subtitle}
            </p>

            <div className={styles.grid}>
                {artworks.map((artwork) => (
                    <ArtworkCard
                        key={artwork.id}
                        artwork={artwork}
                        onSelect={setSelected}
                    />
                ))}
            </div>
        </div>

        {selected && (
            <div className={styles.modalOverlay} onClick={handleOverlayClick}>
            <div className={styles.modal} role="dialog" aria-modal="true" aria-label={selected.title}>
                <button type="button" className={styles.closeButton} onClick={closeModal} aria-label="Fermer">
                ×
                </button>
                <div className={styles.modalImageWrap}>
                <Image
                    src={selected.imageUrl}
                    alt={selected.title}
                    fill
                    sizes="90vw"
                    className={styles.modalImage}
                    priority
                />
                </div>
                <div className={styles.modalInfo}>
                <h3>{selected.title}</h3>
                {selected.sizeDescription && <p>{selected.sizeDescription}</p>}
                </div>
            </div>
            </div>
        )}
        </div>
    );
};
