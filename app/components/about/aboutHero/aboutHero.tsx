import Image from "next/image";
import styles from "./aboutHero.module.css";

export default function AboutHero() {
    return (
        <section className={styles.hero}>
        <div className={styles.inner}>
            {/* Rail vertical à gauche */}
            <div className={styles.rail}>
            <span className={styles.railLine} />
            <span className={styles.railLabel}>À PROPOS</span>
            </div>

            {/* Bloc texte central */}
            <div className={styles.textBlock}>
            <h1>Pino Onali</h1>
            <p>
                Entre astres, pigments et éclats de lumière, Pino Onali compose
                des toiles qui oscillent entre contemplation et explosion. Sa
                peinture ne cherche pas à raconter une histoire linéaire : elle
                ouvre des portes, crée des atmosphères, laisse le regard voyager.
            </p>
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
                <p className={styles.role}>Artiste peintre</p>
                <p className={styles.meta}>
                Basé à Bruxelles • Inspirations lunaires & cosmiques
                </p>
            </div>
            </div>
        </div>
        </section>
    );
};
