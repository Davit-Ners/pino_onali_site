import { EmailTemplate } from "@/app/components/contact/emailTemplate/emailTemplate";
import { ConfirmationEmailTemplate } from "@/app/components/contact/emailTemplate/confirmationEmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type EmailContent = {
    name: string;
    email: string;
    message: string;
    artwork?: string;
    honeypot?: string;
    token?: string;
};

export async function POST(req: Request) {
    try {
        const body: EmailContent = await req.json();
        const { name, email, message, artwork, honeypot, token } = body;

        // Honeypot anti-bot : on fait semblant de rÇ¸ussir mais on ignore
        if (honeypot && honeypot.trim().length > 0) {
            console.log('ajhfaeufueafheaofae', honeypot, message, email, artwork);
            return Response.json({ success: true });
        }

        if (!name || !email || !message) {
            return Response.json(
                { error: "Missing name, email or message" },
                { status: 400 }
            );
        }
        
        const secret = process.env.TURNSTILE_SECRET_KEY;
        
        if (!secret) {
            console.error("TURNSTILE_SECRET_KEY manquant dans les variables d'env.");
            return Response.json(
                { error: "Configuration serveur incomplète." },
                { status: 500 }
            );
        }

        if (!token) {
            return Response.json(
                { error: "Captcha non fourni." },
                { status: 400 }
            );
        }

        const verifyRes = await fetch(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            {
                method: "POST",
                headers: { "content-type": "application/x-www-form-urlencoded" },
                body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(
                token
                )}`,
            }
        );

        const verifyJson = (await verifyRes.json()) as {
            success: boolean;
            "error-codes"?: string[];
        };

        if (!verifyJson.success) {
            console.error("Échec vérification Turnstile:", verifyJson["error-codes"]);
            return Response.json(
                { error: "Vérification du captcha échouée." },
                { status: 400 }
            );
        }

        // 1) Mail envoyé à Pino
        const pinoEmail = await resend.emails.send({
            from: "Site Pino Onali <onboarding@resend.dev>", // à changer plus tard par ton domaine
            to: ["davit.ners02@gmail.com"], // TODO: remplacer par le vrai mail de Pino
            subject: artwork
                ? `Nouveau message à propos de « ${artwork} »`
                : `Nouveau message depuis le site`,
            react: EmailTemplate(body),
        });

        if (pinoEmail.error) {
            console.error("EMAIL TO PINO ERROR:", pinoEmail.error);
            return Response.json(
                { error: "Failed to send email to Pino" },
                { status: 500 }
            );
        }

        // 2) Mail de confirmation pour la personne qui a envoyé le formulaire
        const visitorEmail = await resend.emails.send({
            from: "Pino Onali <onboarding@resend.dev>", // pareil, à remplacer plus tard
            to: ['davit.ners02@gmail.com'],
            subject: artwork
                ? `Votre message à propos de « ${artwork} » a bien été envoyé`
                : "Votre message a bien été envoyé",
            react: ConfirmationEmailTemplate(body),
        });

        if (visitorEmail.error) {
        console.error("EMAIL TO VISITOR ERROR:", visitorEmail.error);
        // ici on peut quand même renvoyer success, parce que Pino a reçu le mail,
        // mais tu peux aussi décider de renvoyer une erreur si tu préfères.
        }

        return Response.json({ success: true });
    } catch (err) {
        console.error("SERVER ERROR:", err);
        return Response.json({ error: "Server error" }, { status: 500 });
    }
};
