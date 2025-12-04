import { EmailTemplate } from "@/app/components/contact/emailTemplate/emailTemplate";
import { ConfirmationEmailTemplate } from "@/app/components/contact/emailTemplate/confirmationEmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type EmailContent = {
    name: string;
    email: string;
    message: string;
    artwork?: string;
};

export async function POST(req: Request) {
    try {
        const body: EmailContent = await req.json();
        const { name, email, message, artwork } = body;

        if (!email || !message) {
            return Response.json(
                { error: "Missing email or message" },
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
