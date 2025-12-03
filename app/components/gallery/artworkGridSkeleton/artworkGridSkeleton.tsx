import styles from "./artworkGridSkeleton.module.css";

export default function ArtworkGridSkeleton() {
    return (
        <div className={styles.wrapper}>
        <div className={styles.panel}>
            
            <div className={`${styles.title} ${styles.skeleton}`} />
            <div className={`${styles.subtitle} ${styles.skeleton}`} />

            <div className={styles.grid}>
            {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className={styles.card}>
                <div className={`${styles.image} ${styles.skeleton}`} />

                <div className={styles.info}>
                    <div className={`${styles.line} ${styles.skeleton}`} />
                    <div className={`${styles.lineShort} ${styles.skeleton}`} />
                </div>
                </div>
            ))}
            </div>

        </div>
        </div>
    );
};
