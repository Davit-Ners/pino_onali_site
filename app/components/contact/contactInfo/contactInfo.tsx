import styles from "./contactInfo.module.css";

const PHONE = "+32 4X XX XX XXX";
const EMAIL = "contact@pinoonali.com";

export default function ContactInfo() {
    return (
        <aside className={styles.card}>
        <h2>Coordonnées</h2>

        <p className={styles.text}>
            Pino est disponible pour des demandes d’acquisition d’œuvres, 
            des projets d’exposition ou des commandes spécifiques.
        </p>

        <div className={styles.infoBlock}>
            <div>
            <span className={styles.label}>Téléphone</span>
            <a href={`tel:${PHONE}`} className={styles.value}>
                {PHONE}
            </a>
            </div>

            <div>
            <span className={styles.label}>Email</span>
            <a href={`mailto:${EMAIL}`} className={styles.value}>
                {EMAIL}
            </a>
            </div>
        </div>

        <p className={styles.helper}>
            Vous pouvez également utiliser le formulaire de contact pour préciser 
            l’œuvre ou le type de projet qui vous intéresse.
        </p>
        </aside>
    );
};
