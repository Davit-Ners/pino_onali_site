import { EmailContent } from "@/app/api/contact/route";

export function EmailTemplate(props: EmailContent) {
    const { name, email, message, artwork } = props;

    return (
        <div
            style={{
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                padding: "32px",
                backgroundColor: "#f5f5f5",
                color: "#1a1a1a",
            }}
        >
            {/* Wrapper */}
            <div
                style={{
                    maxWidth: "620px",
                    margin: "0 auto",
                    backgroundColor: "#ffffff",
                    padding: "28px 32px",
                    borderRadius: "14px",
                    border: "1px solid #e6e6e6",
                }}
            >
                {/* Title */}
                <h2
                    style={{
                        fontSize: "22px",
                        fontWeight: 600,
                        marginBottom: "14px",
                        color: "#111",
                        letterSpacing: "0.5px",
                    }}
                >
                    Nouveau message depuis le site de Pino Onali
                </h2>

                <p
                    style={{
                        fontSize: "15px",
                        lineHeight: "1.6",
                        marginBottom: "20px",
                    }}
                >
                    Une nouvelle prise de contact vient d’être envoyée depuis votre site.
                </p>

                {/* Details */}
                <div
                    style={{
                        padding: "18px",
                        background: "#fafafa",
                        borderRadius: "12px",
                        border: "1px solid #e5e5e5",
                        marginBottom: "24px",
                    }}
                >
                    <Detail label="Nom" value={name} />
                    <Detail label="Email" value={email} />
                    {artwork && <Detail label="Oeuvre" value={artwork} />}
                </div>

                {/* Message */}
                <div style={{ marginBottom: "32px" }}>
                    <h3
                        style={{
                            fontSize: "16px",
                            marginBottom: "10px",
                            fontWeight: 600,
                            color: "#111",
                        }}
                    >
                        Message :
                    </h3>

                    <p
                        style={{
                            whiteSpace: "pre-wrap",
                            lineHeight: "1.6",
                            background: "#f8f8f8",
                            padding: "16px",
                            borderRadius: "10px",
                            border: "1px solid #e2e2e2",
                            fontSize: "14px",
                        }}
                    >
                        {message}
                    </p>
                </div>

                {/* Button */}
                <a
                    href={`mailto:${email}`}
                    style={{
                        display: "inline-block",
                        padding: "12px 22px",
                        backgroundColor: "#222",
                        color: "#fff",
                        textDecoration: "none",
                        borderRadius: "8px",
                        fontWeight: 600,
                        letterSpacing: "0.5px",
                    }}
                >
                    Répondre à {name}
                </a>

                {/* Footer */}
                <p
                    style={{
                        marginTop: "36px",
                        fontSize: "12px",
                        color: "#777",
                        textAlign: "center",
                    }}
                >
                    Contact automatique — Pino Onali © {new Date().getFullYear()}
                </p>
            </div>
        </div>
    );
};

function Detail({ label, value }: { label: string; value: string }) {
    return (
        <p
            style={{
                margin: "6px 0",
                fontSize: "14px",
                color: "#333",
            }}
        >
            <strong>{label} :</strong> {value || "-"}
        </p>
    );
};
