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
    const [filter, setFilter] = useState<"all" | "available" | "sold">("all");
    const [selected, setSelected] = useState<Artwork | null>(null);
    const [activeOverlayId, setActiveOverlayId] = useState<number | null>(null);

    useEffect(() => {
        function handleEsc(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setSelected(null);
                setActiveOverlayId(null);
            }
        }
        if (selected) {
            document.addEventListener("keydown", handleEsc);
        } else {
            document.removeEventListener("keydown", handleEsc);
        }
        return () => document.removeEventListener("keydown", handleEsc);
    }, [selected]);

    const filteredArtworks = artworks.filter((artwork) => {
        if (filter === "available") return !artwork.sold;
        if (filter === "sold") return artwork.sold;
        return true;
    });

    function closeModal() {
        setSelected(null);
        setActiveOverlayId(null);
    }

    function handleOverlayClick(e: MouseEvent<HTMLDivElement>) {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    }
    
    return (
        <div className={styles.wrapper}>
        <div className={styles.panel}>
            <div className={styles.headerRow}>
            <div>
                <h1 className={styles.title}>{t.gallery.title}</h1>
                <p className={styles.subtitle}>
                {t.gallery.subtitle}
                </p>
            </div>
            <div className={styles.controls}>
                <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as "all" | "available" | "sold")}
                className={styles.filter}
                aria-label="Filtrer les oeuvres"
                >
                <option value="all">{t.gallery.filterAll}</option>
                <option value="available">{t.gallery.filterAvailable}</option>
                <option value="sold">{t.gallery.filterSold}</option>
                </select>
            </div>
            </div>

            <div className={styles.grid}>
                {filteredArtworks.map((artwork) => (
                    <ArtworkCard
                        key={artwork.id}
                        artwork={artwork}
                        onSelect={(art) => {
                            setSelected(art);
                            setActiveOverlayId(null);
                        }}
                        isActiveOverlay={activeOverlayId === artwork.id}
                        hasAnyOverlay={activeOverlayId !== null}
                        onShowOverlay={() => setActiveOverlayId(artwork.id)}
                        onHideOverlay={() => {
                            setActiveOverlayId(null);
                        }}
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
