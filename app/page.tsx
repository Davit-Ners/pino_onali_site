'use client';
import HomeVideoSection from "./components/home/videoSection";
import { useTranslations } from "./components/languageProvider/languageProvider";
import styles from "./home.module.css";

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      <div className={styles.overlay} />
      <section className={styles.hero}>

        <div className={styles.content}>
          {/* Bloc gauche */}
          <div className={styles.left}>
            <h1>Pino Onali</h1>
            <h2>{t.home.hero.subtitle}</h2>

            <a href="/galerie" className={styles.btn}>
              {t.home.hero.actions.primary}
            </a>
          </div>

          {/* Bloc droite */}
          <div className={styles.right}>
            <h3>{t.home.hero.title}</h3>
            <p>{t.home.hero.content}</p>
          </div>
        </div>
      </section>

      {/* SECTION VIDÉO */}
      <HomeVideoSection />
    </>
  );
}
