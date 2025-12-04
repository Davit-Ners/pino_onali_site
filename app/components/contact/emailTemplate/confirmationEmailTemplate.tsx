import { EmailContent } from "@/app/api/contact/route";

export function ConfirmationEmailTemplate(props: EmailContent) {
    const { name, message, artwork } = props;

    const safeName = name || "Bonjour";
    const artworkPart = artwork
        ? `à propos de l’œuvre « ${artwork} »`
        : "à propos d’une de mes œuvres";

    return (
        <div
        style={{
            fontFamily: "Arial, sans-serif",
            padding: "24px",
            backgroundColor: "#050711",
            color: "#f5f5f5",
        }}
        >
        <div
            style={{
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#0b0e1c",
            padding: "24px",
            borderRadius: "12px",
            border: "1px solid #2a2f45",
            }}
        >
            <h2
            style={{
                fontSize: "20px",
                fontWeight: 700,
                marginBottom: "12px",
                color: "#ffffff",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
            }}
            >
            Merci pour votre message
            </h2>

            <p
            style={{
                fontSize: "15px",
                lineHeight: 1.6,
                marginBottom: "16px",
                color: "#e2e2e2",
            }}
            >
            {safeName},
            </p>

            <p
            style={{
                fontSize: "15px",
                lineHeight: 1.6,
                marginBottom: "18px",
                color: "#d0d0d0",
            }}
            >
            Merci de m’avoir contacté {artworkPart}.  
            J’ai bien reçu votre message et je le lirai avec attention.
            </p>

            {message && (
            <div
                style={{
                margin: "18px 0 24px",
                padding: "14px 16px",
                backgroundColor: "#101425",
                borderRadius: "10px",
                border: "1px solid #2f3650",
                }}
            >
                <p
                style={{
                    fontSize: "13px",
                    marginBottom: "6px",
                    color: "#a5acc6",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                }}
                >
                Votre message
                </p>
                <p
                style={{
                    whiteSpace: "pre-wrap",
                    fontSize: "14px",
                    lineHeight: 1.5,
                    color: "#f5f5f5",
                }}
                >
                {message}
                </p>
            </div>
            )}

            <p
            style={{
                fontSize: "14px",
                lineHeight: 1.6,
                marginBottom: "18px",
                color: "#c5c9dd",
            }}
            >
            Je reviens vers vous dès que possible.  
            En attendant, vous pouvez continuer à explorer mes œuvres sur le site.
            </p>

            <p
            style={{
                marginTop: "24px",
                fontSize: "13px",
                color: "#9ba0b8",
            }}
            >
            Artistiquement,
            <br />
            <strong>Pino Onali</strong>
            </p>

            <p
            style={{
                marginTop: "28px",
                fontSize: "11px",
                color: "#6d7390",
                textAlign: "center",
            }}
            >
            Cet email vous a été envoyé suite à un message envoyé via le site
            pino-onali.
            </p>
        </div>
        </div>
    );
};
