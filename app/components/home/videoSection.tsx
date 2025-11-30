import styles from '../../home.module.css';

export default function HomeVideoSection() {
    return (
        <section className={styles.showcase}>
        <div className={styles.showcaseInner}>
          <div className={styles.showcaseText}>
            <p className={styles.kicker}>Exposition</p>
            <h2>« Objectif Lune »</h2>
            <p>
              Découvrez un aperçu de la dernière exposition de Pino Onali à
              travers cette courte vidéo immersive. Une plongée dans son univers
              de lunes, d’astres et de pigments en mouvement.
            </p>
            <p className={styles.note}>
              La vidéo démarre en silence. Activez le son si vous le souhaitez.
            </p>
          </div>

          <div className={styles.videoFrame}>
            <div className={styles.videoGlow} />
            <video
              className={styles.video}
              src="/videos/video1.mp4" // adapte le chemin
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </div>
        </div>
      </section>
    );
};
