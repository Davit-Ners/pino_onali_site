'use client';
import styles from '../../home.module.css';
import { useTranslations } from '../languageProvider/languageProvider';

export default function HomeVideoSection() {
  const t = useTranslations();
  const VIDEO_ID = 'LnDObK0E6tc';

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
            <div className={styles.videoWrapper}>
              <iframe
                className={styles.video}
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&mute=1&playlist=${VIDEO_ID}`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen={false}
              />

              <div className={styles.videoOverlay}></div>
            </div>
          </div>
        </div>
      </section>
    );
};
