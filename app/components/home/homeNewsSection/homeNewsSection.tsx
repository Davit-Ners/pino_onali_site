"use client";

import Image from "next/image";
import styles from "./homeNewsSection.module.css";
import { useTranslations } from "../../languageProvider/languageProvider";

export default function HomeNewsSection() {
    const t = useTranslations();

    const highlight = {
        image: "/events/invitation.jpg",
        title: t.home.news.title,
        subtitle: t.home.news.subtitle,
        meta: t.home.news.meta,
        description: t.home.news.description,
        ctaLabel: t.home.news.ctaLabel,
    };

    return (
        <section className={styles.section}>
        <div className={styles.inner}>
            <div className={styles.topRow}>
            <div>
                <p className={styles.kicker}>{t.home.news.kicker}</p>
                <h2 className={styles.heading}>{highlight.title}</h2>
            </div>
            <p className={styles.meta}>{highlight.meta}</p>
            </div>

            <div className={styles.contentRow}>
            <div className={styles.imageWrapper}>
                <div className={styles.imageFrame}>
                <Image
                    src={highlight.image}
                    alt={highlight.title}
                    fill
                    className={styles.image}
                    priority
                />
                <div className={styles.imageOverlay} />
                </div>
            </div>

            <div className={styles.text}>
                <h3 className={styles.subtitle}>{highlight.subtitle}</h3>
                <p className={styles.description}>{highlight.description}</p>

                <button type="button" className={styles.cta}>
                {highlight.ctaLabel}
                </button>
            </div>
            </div>
        </div>
        </section>
    );
};
