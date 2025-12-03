import styles from "./artworkGridSkeleton.module.css";

export default function ArtworkGridSkeleton() {
    return (
        <div className={styles.wrapper}>
        <div className={styles.panel}>
            <div className={styles.titleSkeleton} />
            <div className={styles.subtitleSkeleton} />

            <div className={styles.grid}>
            {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className={styles.card}>
                <div className={styles.image} />
                <div className={styles.info}>
                    <div className={styles.textLine} />
                    <div className={styles.textLineShort} />
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
};
