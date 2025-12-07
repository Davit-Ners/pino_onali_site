"use client";

import { Suspense, useMemo, useState, type FormEvent } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./login.module.css";

function LoginSkeleton() {
    return (
        <div className={styles.page}>
        <div className={styles.card} aria-hidden="true">
            <div className={styles.skeletonTitle} />
            <div className={styles.skeletonSubtitle} />

            <div className={styles.form}>
            <div className={styles.field}>
                <div className={styles.skeletonLabel} />
                <div className={styles.skeletonInput} />
            </div>
            <div className={styles.skeletonButton} />
            </div>

            <div className={styles.skeletonNote} />
        </div>
        </div>
    );
}

function AdminLoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const from = searchParams.get("from") || "/admin";

    const [password, setPassword] = useState("");
    const [captchaToken, setCaptchaToken] = useState("");
    const [requireCaptcha, setRequireCaptcha] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const turnstileSiteKey = useMemo(() => process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY, []);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setError(null);

        if (requireCaptcha && !captchaToken) {
            setError("Merci de valider le captcha.");
            return;
        }

        setLoading(true);

        try {
        const res = await fetch("/api/admin/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password, captchaToken: requireCaptcha ? captchaToken : undefined }),
        });

        if (!res.ok) {
            const data = await res.json().catch(() => null);
            setError(data?.error || "Mot de passe incorrect.");
            setRequireCaptcha(Boolean(data?.captchaRequired));
            setLoading(false);
            return;
        }

        setCaptchaToken("");
        setRequireCaptcha(false);

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

            {requireCaptcha && turnstileSiteKey && (
                <div style={{ marginTop: "0.75rem" }}>
                <Turnstile
                    siteKey={turnstileSiteKey}
                    onSuccess={(token) => setCaptchaToken(token)}
                    onExpire={() => setCaptchaToken("")}
                    options={{ theme: "dark" }}
                />
                </div>
            )}
            {requireCaptcha && !turnstileSiteKey && (
                <p className={styles.error}>
                Captcha requis mais la clé publique Turnstile est manquante.
                </p>
            )}

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
}

export default function AdminLoginPage() {
    return (
        <Suspense fallback={<LoginSkeleton />}>
            <AdminLoginForm />
        </Suspense>
    );
}
