"use client";

import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./contactForm.module.css";
import { useTranslations } from "../../languageProvider/languageProvider";
import { Turnstile } from "@marsidev/react-turnstile";

export default function ContactForm() {
    const searchParams = useSearchParams();
    const artwork = searchParams.get("artwork");
    const t = useTranslations();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [honeypot, setHoneypot] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "captchaError">("idle");
    const [token, setToken] = useState("");

    useEffect(() => {
        setHoneypot("");
    }, []);

    useEffect(() => {
        if (artwork && !message) {
            setMessage(`${t.contactPage.form.interess}${artwork}\n\n`);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [artwork]);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        
        if(!token) {
            setStatus("captchaError");
            return;
        }
        
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message, artwork, honeypot, token }),
            });
            if (!res.ok) throw new Error("Erreur");

            // simulation de succès
            await new Promise((r) => setTimeout(r, 500));

            setStatus("success");
            setName("");
            setEmail("");
            setMessage(artwork ? `Je suis intéressé(e) par l’œuvre : ${artwork}\n\n` : "");
        } catch {
        setStatus("error");
        }
    };

    return (
        <div className={styles.card}>
        <h2>{t.contactPage.form.title}</h2>
        <p className={styles.subtitle}>{t.contactPage.form.subtitle}</p>

        <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
            {/* Champ honeypot anti-bot */}
            <div
            style={{ position: "absolute", left: "-10000px", top: "auto", width: "1px", height: "1px", overflow: "hidden" }}
            aria-hidden="true"
            >
            <label htmlFor="website">Votre site web</label>
            <input
                id="website"
                name="hp_field"
                type="text"
                tabIndex={-1}
                autoComplete="new-password"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
            />
            </div>
            <div className={styles.field}>
            <label htmlFor="name">{t.contactPage.form.nameLabel}</label>
            <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.contactPage.form.nameEx}
            />
            </div>

            <div className={styles.field}>
            <label htmlFor="email">{t.contactPage.form.emailLabel}</label>
            <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.contactPage.form.emailEx}
            />
            </div>

            <div className={styles.field}>
            <label htmlFor="message">{t.contactPage.form.messageLabel}</label>
            <textarea
                id="message"
                required
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.contactPage.form.messageEx}
            />
            </div>
            
            <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                <Turnstile
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                onSuccess={(t) => setToken(t)}
                options={{
                    theme: "dark",
                }}
                />
            </div>

            <button
            type="submit"
            className={styles.button}
            disabled={status === "loading"}
            >
            {status === "loading" ? `${t.contactPage.form.buttonLoading}` : `${t.contactPage.form.button}`}
            </button>

            {status === "success" && (
            <p className={styles.success}>{t.contactPage.form.succesMsg}</p>
            )}
            {status === "error" && (
            <p className={styles.error}>{t.contactPage.form.errorMsg}</p>
            )}
            {status === "captchaError" && (
            <p className={styles.error}>{t.contactPage.form.captchaError}</p>
            )}
        </form>
        </div>
    );
};
