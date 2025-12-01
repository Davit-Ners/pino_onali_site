'use client';
import { useTranslations } from "../../languageProvider/languageProvider";
import styles from "./contactInfo.module.css";

const PHONE = "+32 4X XX XX XXX";
const EMAIL = "contact@pinoonali.com";

export default function ContactInfo() {
    const t = useTranslations();
    
    return (
        <aside className={styles.card}>
        <h2>{t.contactPage.infos.title}</h2>

        <p className={styles.text}>{t.contactPage.infos.subtitle}</p>

        <div className={styles.infoBlock}>
            <div>
            <span className={styles.label}>{t.contactPage.infos.phone}</span>
            <a href={`tel:${PHONE}`} className={styles.value}>
                {PHONE}
            </a>
            </div>

            <div>
            <span className={styles.label}>{t.contactPage.infos.email}</span>
            <a href={`mailto:${EMAIL}`} className={styles.value}>
                {EMAIL}
            </a>
            </div>
        </div>

        <p className={styles.helper}>{t.contactPage.infos.footer}</p>
        </aside>
    );
};
