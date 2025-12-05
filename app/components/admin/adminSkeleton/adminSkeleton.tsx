import styles from "./adminSkeleton.module.css";

export default function AdminSkeleton() {
  return (
    <div className={styles.page}>
      <div className={styles.panel} role="status" aria-live="polite" aria-busy="true">
        <div className={styles.header}>
          <div className={styles.titleBlock}>
            <div className={`${styles.shimmer} ${styles.title}`} />
            <div className={`${styles.shimmer} ${styles.subtitle}`} />
          </div>

          <div className={styles.actions}>
            <div className={`${styles.shimmer} ${styles.stat}`} />
            <div className={`${styles.shimmer} ${styles.button}`} />
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={`${styles.shimmer} ${styles.cardTitle}`} />
            <div className={styles.stack}>
              {Array.from({ length: 4 }).map((_, idx) => (
                <div
                  key={`field-${idx}`}
                  className={`${styles.shimmer} ${styles.input}`}
                />
              ))}
              <div className={`${styles.shimmer} ${styles.checkbox}`} />
              <div className={`${styles.shimmer} ${styles.primary}`} />
            </div>
          </div>

          <div className={styles.card}>
            <div className={`${styles.shimmer} ${styles.cardTitle}`} />
            <div className={styles.table}>
              {Array.from({ length: 3 }).map((_, idx) => (
                <div key={`row-${idx}`} className={styles.row}>
                  <div className={`${styles.shimmer} ${styles.thumb}`} />
                  <div className={styles.textBlock}>
                    <div className={`${styles.shimmer} ${styles.line}`} />
                    <div className={`${styles.shimmer} ${styles.lineShort}`} />
                  </div>
                  <div className={styles.chips}>
                    <div className={`${styles.shimmer} ${styles.chip}`} />
                    <div className={`${styles.shimmer} ${styles.chip}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
