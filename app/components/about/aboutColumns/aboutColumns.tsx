'use client';
import { useTranslations } from "../../languageProvider/languageProvider";
import styles from "./aboutColumns.module.css";

export default function AboutColumns() {
    const t = useTranslations();
    
    return (
        <section className={styles.wrap}>
        <div className={styles.inner}>
            <div className={styles.left}>
            <h2>{t.aboutPage.columns.left.title}</h2>
            <p>{t.aboutPage.columns.left.content1}</p>
            <p>{t.aboutPage.columns.left.content2}</p>
            </div>

            <aside className={styles.right}>
            <h3>{t.aboutPage.columns.right.title}</h3>
            <ul>
                <li>
                <span className={styles.label}>{t.aboutPage.columns.right.locationTitle}</span>
                <span className={styles.value}>{t.aboutPage.columns.right.locationContent}</span>
                </li>
                <li>
                <span className={styles.label}>{t.aboutPage.columns.right.themeTitle}</span>
                <span className={styles.value}>{t.aboutPage.columns.right.themeContent}</span>
                </li>
                <li>
                <span className={styles.label}>{t.aboutPage.columns.right.technicTitle}</span>
                <span className={styles.value}>{t.aboutPage.columns.right.technicContent}</span>
                </li>
                <li>
                <span className={styles.label}>{t.aboutPage.columns.right.formatTitle}</span>
                <span className={styles.value}>{t.aboutPage.columns.right.formatContent}</span>
                </li>
            </ul>
            </aside>
        </div>
        </section>
    );
};
