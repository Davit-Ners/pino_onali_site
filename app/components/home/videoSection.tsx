import styles from '../../home.module.css';

export default function HomeVideoSection() {
    return (
        <section className={styles.videoSection}>
            <div className={styles.videoCard}>
                <div className={styles.videoText}>
                <h3>Exposition « Constellations intérieures »</h3>
                <p>
                    Découvrez un aperçu de la dernière exposition de Pino Onali à
                    travers cette courte vidéo immersive.
                </p>
                </div>

                <div className={styles.videoPlayerWrap}>
                <video
                    className={styles.videoPlayer}
                    controls
                    // poster="/artworks/ex1.jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/videos/video1.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas la vidéo.
                </video>
                </div>
            </div>
        </section>
    );
};
