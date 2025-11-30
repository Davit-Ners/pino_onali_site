"use client";

import { useState } from "react";
import styles from "./adminPanel.module.css";
import ArtworkForm from "../artworkForm/artworkForm";
import ArtworkTable from "../artworkTable/artworkTable";
import { artworks } from "@/app/lib/artworks";
import { Artwork } from "@/app/galerie/page";
import ConfirmDialog from "../confirmDialog/confirmDialog";
import Toast from "../toast/toast";

export default function AdminPanel() {
    const [realArtworks, setArtworks] = useState<Artwork[]>(artworks);
    const [editingArtwork, setEditingArtwork] = useState<Artwork | null>(null);
    const [pendingDelete, setPendingDelete] = useState<Artwork | null>(null);
    
    const [toast, setToast] = useState<{
        id: number;
        message: string;
        type: "success" | "error" | "info";
    } | null>(null);

    function showToast(type: "success" | "error" | "info", message: string) {
        setToast({
            id: Date.now(),
            type,
            message,
        });
    }

    function handleCreate(artwork: Omit<Artwork, "id" | "createdAt">) {
        const newArtwork: Artwork = {
            ...artwork,
            id: crypto.randomUUID(),
        };
        setArtworks((prev) => [newArtwork, ...prev]);
        showToast("success", "Œuvre ajoutée avec succès !");
    }

    function handleUpdate(updated: Artwork) {
        setArtworks((prev) =>
            prev.map((a) => (a.id === updated.id ? updated : a))
        );
        setEditingArtwork(null);
        showToast("info", "Modifications enregistrées !");
    }

    function askDelete(artwork: Artwork) {
        setPendingDelete(artwork);
    }

    function confirmDelete() {
        if (!pendingDelete) return;
        setArtworks((prev) => prev.filter((a) => a.id !== pendingDelete.id));
        if (editingArtwork?.id === pendingDelete.id) {
        setEditingArtwork(null);
        }
        setPendingDelete(null);
        showToast("error", "Œuvre supprimée !");
    }

    function cancelDelete() {
        setPendingDelete(null);
    }

    return (
        <div className={styles.panel}>
        <header className={styles.header}>
            <div>
            <h1>Espace administrateur</h1>
            <p>
                Gérez les œuvres visibles dans la galerie. Vous pouvez en ajouter,
                les modifier ou les retirer facilement.
            </p>
            </div>
            <div className={styles.stats}>
            <div className={styles.statCard}>
                <span className={styles.statLabel}>Œuvres publiées</span>
                <span className={styles.statValue}>{realArtworks.length}</span>
            </div>
            </div>
        </header>

        <div className={styles.grid}>
            <ArtworkForm
            onCreate={handleCreate}
            onUpdate={handleUpdate}
            editingArtwork={editingArtwork}
            cancelEdit={() => setEditingArtwork(null)}
            />

            <ArtworkTable
            artworks={realArtworks}
            onEdit={(artrealArtworkswork) => setEditingArtwork(artrealArtworkswork)}
            onDelete={askDelete}
            />
        </div>
        
        <ConfirmDialog
            open={!!pendingDelete}
            title="Supprimer cette œuvre ?"
            message={
            pendingDelete
                ? `Êtes-vous sûr de vouloir supprimer « ${pendingDelete.title} » de la galerie ?`
                : ""
            }
            confirmLabel="Supprimer"
            cancelLabel="Annuler"
            onConfirm={confirmDelete}
            onCancel={cancelDelete}
        />
        
        {toast && (
            <Toast
                key={toast.id}
                type={toast.type}
                message={toast.message}
                onClose={() => setToast(null)}
            />
        )}
        </div>
    );
};
