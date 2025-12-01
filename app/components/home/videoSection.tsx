'use client';
import styles from '../../home.module.css';
import { useTranslations } from '../languageProvider/languageProvider';

export default function HomeVideoSection() {
  const t = useTranslations();

    return (
        <section className={styles.showcase}>
        <div className={styles.showcaseInner}>
          <div className={styles.showcaseText}>
            <p className={styles.kicker}>{t.home.video.overTitle}</p>
            <h2>{t.home.video.title}</h2>
            <p>{t.home.video.content}</p>
            <p className={styles.note}>{t.home.video.muteMessage}</p>
          </div>

          <div className={styles.videoFrame}>
            <div className={styles.videoGlow} />
            <video
              className={styles.video}
              src="/videos/video1.mp4"
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
