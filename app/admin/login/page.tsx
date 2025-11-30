"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./login.module.css";

export default function AdminLoginPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const from = searchParams.get("from") || "/admin";

    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
        const res = await fetch("/api/admin/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password }),
        });

        if (!res.ok) {
            const data = await res.json().catch(() => null);
            setError(data?.error || "Mot de passe incorrect.");
            setLoading(false);
            return;
        }

        // Succès → rediriger vers /admin (ou la page d'origine)
        router.push(from);
        router.refresh();
        } catch {
            setError("Une erreur est survenue. Réessayez plus tard.");
            setLoading(false);
        }
    }

    return (
        <div className={styles.page}>
        <div className={styles.card}>
            <h1>Espace administrateur</h1>
            <p className={styles.subtitle}>
            Connectez-vous pour gérer les œuvres de la galerie.
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
                <label htmlFor="password">Mot de passe</label>
                <input
                id="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mot de passe administrateur"
                required
                />
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <button
                type="submit"
                className={styles.button}
                disabled={loading}
            >
                {loading ? "Connexion..." : "Se connecter"}
            </button>
            </form>

            <p className={styles.note}>
            Cette section est réservée à l’artiste. Si vous êtes visiteur,
            vous pouvez découvrir ses œuvres dans la galerie.
            </p>
        </div>
        </div>
    );
};
