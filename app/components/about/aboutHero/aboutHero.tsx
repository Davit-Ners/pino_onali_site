'use client';
import Image from "next/image";
import styles from "./aboutHero.module.css";
import { useTranslations } from "../../languageProvider/languageProvider";

export default function AboutHero() {
    const t = useTranslations();
    
    return (
        <section className={styles.hero}>
        <div className={styles.inner}>
            {/* Rail vertical à gauche */}
            <div className={styles.rail}>
            <span className={styles.railLine} />
            <span className={styles.railLabel}>{t.aboutPage.hero.rail}</span>
            </div>

            {/* Bloc texte central */}
            <div className={styles.textBlock}>
            <h1>Pino Onali</h1>
            <p>{t.aboutPage.hero.content}</p>
            </div>

            {/* Carte portrait à droite */}
            <div className={styles.portraitCard}>
            <div className={styles.imageWrap}>
                <Image
                src="/pino.jpeg"
                alt="Portrait de Pino Onali"
                fill
                className={styles.image}
                />
            </div>
            <div className={styles.portraitText}>
                <p className={styles.role}>{t.aboutPage.hero.image.title}</p>
                <p className={styles.meta}>{t.aboutPage.hero.image.subtitle}</p>
            </div>
            </div>
        </div>
        </section>
    );
};
