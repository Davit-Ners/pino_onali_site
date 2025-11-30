"use client";

import Image from "next/image";
import styles from "./artworkTable.module.css";
import { Artwork } from "@/app/galerie/page";

type Props = {
    artworks: Artwork[];
    onEdit: (artwork: Artwork) => void;
    onDelete: (id: string) => void;
};

export default function ArtworkTable({ artworks, onEdit, onDelete }: Props) {
    return (
        <section className={styles.card}>
        <header className={styles.header}>
            <h2>Œuvres de la galerie</h2>
            <p>
            Voici les œuvres actuellement affichées. Vous pouvez les modifier ou
            les supprimer.
            </p>
        </header>

        {artworks.length === 0 ? (
            <p className={styles.empty}>Aucune œuvre pour le moment.</p>
        ) : (
            <div className={styles.table}>
            {artworks.map((artwork) => (
                <div key={artwork.id} className={styles.row}>
                <div className={styles.thumbnail}>
                    {artwork.imageUrl ? (
                    <Image
                        src={artwork.imageUrl}
                        alt={artwork.title}
                        fill
                        className={styles.image}
                    />
                    ) : (
                    <div className={styles.placeholder}>No image</div>
                    )}
                </div>

                <div className={styles.info}>
                    <h3>{artwork.title}</h3>
                    {artwork.description && (
                    <p className={styles.description}>{artwork.description}</p>
                    )}
                </div>

                <div className={styles.actions}>
                    <button
                    type="button"
                    className={styles.editButton}
                    onClick={() => onEdit(artwork)}
                    >
                    Modifier
                    </button>
                    <button
                    type="button"
                    className={styles.deleteButton}
                    onClick={() => onDelete(artwork.id)}
                    >
                    Supprimer
                    </button>
                </div>
                </div>
            ))}
            </div>
        )}
        </section>
    );
};
