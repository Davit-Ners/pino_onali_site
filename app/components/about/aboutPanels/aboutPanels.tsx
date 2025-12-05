'use client';
import { useTranslations } from "../../languageProvider/languageProvider";
import styles from "./aboutPanels.module.css";

export default function AboutPanels() {
    const t = useTranslations();
    
    return (
        <section className={styles.wrap}>
        <div className={styles.inner}>
            <div className={`${styles.card} ${styles.cardOne}`}>
            <h3>{t.aboutPage.panel.panel1.title}</h3>
            <p>{t.aboutPage.panel.panel1.content}</p>
            </div>

            <div className={`${styles.card} ${styles.cardTwo}`}>
            <h3>{t.aboutPage.panel.panel2.title}</h3>
            <p>{t.aboutPage.panel.panel2.content}</p>
            </div>

            <div className={`${styles.card} ${styles.cardThree}`}>
            <h3>{t.aboutPage.panel.panel3.title}</h3>
            <p>{t.aboutPage.panel.panel3.content}</p>
            </div>
        </div>
        </section>
    );
};
