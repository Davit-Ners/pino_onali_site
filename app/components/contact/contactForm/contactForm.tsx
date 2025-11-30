"use client";

import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./contactForm.module.css";

export default function ContactForm() {
    const searchParams = useSearchParams();
    const artwork = searchParams.get("artwork");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    useEffect(() => {
        if (artwork && !message) {
        setMessage(`Je suis intéressé(e) par l’œuvre : ${artwork}\n\n`);
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
        <h2>Formulaire de contact</h2>
        <p className={styles.subtitle}>
            Remplissez ce formulaire pour envoyer un message directement à l’artiste.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
            <label htmlFor="name">Nom</label>
            <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Votre nom"
            />
            </div>

            <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vous@example.com"
            />
            </div>

            <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea
                id="message"
                required
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Votre message..."
            />
            </div>

            <button
            type="submit"
            className={styles.button}
            disabled={status === "loading"}
            >
            {status === "loading" ? "Envoi..." : "Envoyer le message"}
            </button>

            {status === "success" && (
            <p className={styles.success}>
                Merci, votre message a bien été envoyé (simulation). Pino vous répondra dès que possible.
            </p>
            )}
            {status === "error" && (
            <p className={styles.error}>
                Une erreur est survenue. Veuillez réessayer plus tard.
            </p>
            )}
        </form>
        </div>
    );
};
