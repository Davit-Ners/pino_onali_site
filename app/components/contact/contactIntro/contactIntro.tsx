'use client';
import { useTranslations } from "../../languageProvider/languageProvider";
import styles from "./contactIntro.module.css";

export default function ContactIntro() {
    const t = useTranslations();

    return (
        <section className={styles.wrap}>
        <div className={styles.inner}>
            <h1>{t.contactPage.hero.title}</h1>
            <p>{t.contactPage.hero.subtitle}</p>
        </div>
        </section>
    );
};
