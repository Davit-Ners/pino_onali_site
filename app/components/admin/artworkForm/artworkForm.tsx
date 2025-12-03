"use client";

import { FormEvent, useEffect, useState } from "react";
import styles from "./artworkForm.module.css";
import { Artwork } from "@/app/generated/prisma/client";

type ArtworkFormProps = {
    onCreate: (artwork: Omit<Artwork, "id" | "createdAt" | "updatedAt">) => void;
    onUpdate: (artwork: Artwork) => void;
    editingArtwork: Artwork | null;
    cancelEdit: () => void;
};

export default function ArtworkForm({
    onCreate,
    onUpdate,
    editingArtwork,
    cancelEdit,
}: ArtworkFormProps) {
    const [title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");
    const [sold, setSold] = useState(false);

    useEffect(() => {
        if (editingArtwork) {
            setTitle(editingArtwork.title);
            setImageUrl(editingArtwork.imageUrl);
            setDescription(editingArtwork.sizeDescription || "");
            setSold(Boolean(editingArtwork.sold));
        } else {
            resetForm();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editingArtwork]);

    function resetForm() {
        setTitle("");
        setImageUrl("");
        setDescription("");
        setSold(false);
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if (!title.trim() || !imageUrl.trim()) {
            alert("Merci de renseigner au minimum le titre et l'image.");
            return;
        }

        if (editingArtwork) {
            onUpdate({
                ...editingArtwork,
                title: title.trim(),
                imageUrl: imageUrl.trim(),
                sizeDescription: description.trim() || null,
                sold,
            });
        } else {
            onCreate({
                title: title.trim(),
                imageUrl: imageUrl.trim(),
                sizeDescription: description.trim() || null,
                sold,
                order: 0
            });
            resetForm();
        }
    }

    const isEditing = Boolean(editingArtwork);

    return (
        <section className={styles.card}>
        <header className={styles.header}>
            <h2>{isEditing ? "Modifier une oeuvre" : "Ajouter une oeuvre"}</h2>
            <p>
            {isEditing
                ? "Mettez a jour les informations de cette oeuvre."
                : "Ajoutez une nouvelle oeuvre a la galerie."}
            </p>
        </header>

        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fieldGroup}>
            <div className={styles.field}>
                <label htmlFor="title">Titre</label>
                <input
                id="title"
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ex: Lune rouge"
                />
            </div>
            </div>

            <div className={styles.field}>
            <label htmlFor="imageUrl">Image (URL)</label>
            <input
                id="imageUrl"
                type="text"
                required
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="/artworks/mon-image.jpg"
            />
            <p className={styles.helper}>
                Pour cette premiere version, indiquez simplement le chemin de l'image
                (ex: <code>/artworks/mon-oeuvre.jpg</code>).
            </p>
            </div>

            <div className={styles.field}>
            <label htmlFor="description">Description (optionnel)</label>
            <textarea
                id="description"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Technique, format, serie..."
            />
            </div>

            <div className={styles.field}>
            <label htmlFor="sold" className={styles.checkboxLabel}>
                <input
                id="sold"
                type="checkbox"
                checked={sold}
                onChange={(e) => setSold(e.target.checked)}
                />
                Oeuvre vendue
            </label>
            </div>

            <div className={styles.actions}>
            <button type="submit" className={styles.primaryButton}>
                {isEditing ? "Enregistrer les modifications" : "Ajouter l'oeuvre"}
            </button>
            {isEditing && (
                <button
                type="button"
                className={styles.secondaryButton}
                onClick={cancelEdit}
                >
                Annuler
                </button>
            )}
            </div>
        </form>
        </section>
    );
};
