"use client";

import { useState } from "react";
import styles from "./adminPanel.module.css";
import ArtworkForm from "../artworkForm/artworkForm";
import ArtworkTable from "../artworkTable/artworkTable";
import ConfirmDialog from "../confirmDialog/confirmDialog";
import Toast from "../toast/toast";
import LogoutDialog from "../logoutDialog/logoutDialog";
import { Artwork } from "@/app/generated/prisma/client";

type ArtworkPayload = Omit<Artwork, "id" | "createdAt" | "updatedAt">;

export default function AdminPanel({ artworks }: { artworks: Artwork[] }) {
    const [realArtworks, setArtworks] = useState<Artwork[]>(artworks);
    const [editingArtwork, setEditingArtwork] = useState<Artwork | null>(null);
    const [pendingDelete, setPendingDelete] = useState<Artwork | null>(null);
    const [open, setOpen] = useState(false);

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

    async function handleCreate(artwork: ArtworkPayload) {
        try {
            const res = await fetch("/api/gallery", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(artwork),
            });

            if (!res.ok) {
                throw new Error("Create failed");
            }

            const created: Artwork = await res.json();
            setArtworks((prev) => [...prev, created]);
            showToast("success", "Oeuvre ajoutee avec succes !");
        } catch (err) {
            console.error("CREATE ERROR:", err);
            showToast("error", "La creation a echoue. Reessayez.");
        }
    }

    async function handleUpdate(updated: Artwork) {
        const res = await fetch(`/api/gallery/${updated.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updated)
        });

        if (!res.ok) return showToast("error", "Erreur lors de la modification");

        const newData = await res.json();

        setArtworks(prev =>
            prev.map(a => (a.id === newData.id ? newData : a))
        );

        setEditingArtwork(null);
        showToast("info", "Modifications enregistrées !");
    }

    function askDelete(artwork: Artwork) {
        setPendingDelete(artwork);
    }

    async function confirmDelete() {
        if (!pendingDelete) return;

        await fetch(`/api/gallery/${pendingDelete.id}`, {
            method: "DELETE",
        });

        setArtworks((prev) => prev.filter((a) => a.id !== pendingDelete.id));

        setPendingDelete(null);
        showToast("error", "Oeuvre supprimee !");
    }

    function cancelDelete() {
        setPendingDelete(null);
    }

    async function handleLogout() {
        try {
            await fetch("/api/admin/logout", { method: "POST" });
        } catch {
            // even if logout API fails, still redirect away
        }
        window.location.href = "/";
    }

    return (
        <div className={styles.panel}>
        <header className={styles.header}>
            <div>
            <h1>Espace administrateur</h1>
            <p>
                Gerez les oeuvres visibles dans la galerie. Vous pouvez en ajouter,
                les modifier ou les retirer facilement.
            </p>
            </div>
            <div className={styles.stats}>
            <div className={styles.statCard}>
                <span className={styles.statLabel}>Oeuvres publiees</span>
                <span className={styles.statValue}>{realArtworks.length}</span>
            </div>
            
            <button
                type="button"
                className={styles.logoutButton}
                onClick={() => setOpen(true)}
            >
                Se deconnecter
            </button>
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
            onEdit={(artwork) => setEditingArtwork(artwork)}
            onDelete={askDelete}
            />
        </div>
        
        <ConfirmDialog
            open={!!pendingDelete}
            title="Supprimer cette oeuvre ?"
            message={
            pendingDelete
                ? `Etes-vous sur de vouloir supprimer "${pendingDelete.title}" de la galerie ?`
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
        <LogoutDialog
            open={open}
            onCancel={() => setOpen(false)}
            onConfirm={handleLogout}
        />
        </div>
    );
};
