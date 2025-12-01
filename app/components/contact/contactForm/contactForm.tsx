"use client";

import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./contactForm.module.css";
import { useTranslations } from "../../languageProvider/languageProvider";

export default function ContactForm() {
    const searchParams = useSearchParams();
    const artwork = searchParams.get("artwork");
    const t = useTranslations();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    useEffect(() => {
        if (artwork && !message) {
            setMessage(`${t.contactPage.form.interess}${artwork}\n\n`);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [artwork]);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setStatus("loading");

        try {
        // TODO: brancher avec ton API /api/contact plus tard
        // const res = await fetch("/api/contact", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify({ name, email, message }),
        // });
        // if (!res.ok) throw new Error("Erreur");

        // simulation de succès
        await new Promise((r) => setTimeout(r, 500));

        setStatus("success");
        setName("");
        setEmail("");
        setMessage(artwork ? `Je suis intéressé(e) par l’œuvre : ${artwork}\n\n` : "");
        } catch {
        setStatus("error");
        }
    }

    return (
        <div className={styles.card}>
        <h2>{t.contactPage.form.title}</h2>
        <p className={styles.subtitle}>{t.contactPage.form.subtitle}</p>

        <form className={styles.form} onSubmit={handleSubmit}>
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
        </form>
        </div>
    );
};
