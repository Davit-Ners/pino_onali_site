'use client';
import { useTranslations } from "../../languageProvider/languageProvider";
import styles from "./aboutQuote.module.css";

export default function AboutQuote() {
    const t = useTranslations();
    
    return (
        <section className={styles.wrap}>
        <div className={styles.inner}>
            <p>{t.aboutPage.quote}</p>
        </div>
        </section>
    );
};
