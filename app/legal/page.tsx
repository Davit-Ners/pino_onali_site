"use client";

import styles from "./legal.module.css";
import { useTranslations } from "../components/languageProvider/languageProvider";

const PHONE = "+32 495 11 75 05";
const EMAIL = "pinoonali@hotmail.be";

export default function LegalPage() {
  const t = useTranslations();

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.kicker}>{t.legalPage.hero.updated}</p>
        <h1>{t.legalPage.hero.title}</h1>
        <p className={styles.subtitle}>{t.legalPage.hero.subtitle}</p>
      </section>

      <section className={styles.card}>
        <h2>{t.legalPage.editor.title}</h2>
        <div className={styles.listStack}>
          <p>{t.legalPage.editor.identity}</p>
          <p>{t.legalPage.editor.location}</p>
          <p>
            {t.legalPage.editor.contact}
            <br />
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a> • <a href={`tel:${PHONE}`}>{PHONE}</a>
          </p>
          <p className={styles.note}>{t.legalPage.editor.developer}</p>
        </div>
      </section>

      <section className={styles.grid}>
        <div className={styles.card}>
          <h3>{t.legalPage.data.title}</h3>
          <p className={styles.intro}>{t.legalPage.data.intro}</p>
          <ul className={styles.list}>
            {t.legalPage.data.items.map((item) => (
              <li key={item.title}>
                <strong>{item.title}.</strong> {item.content}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.card}>
          <h3>{t.legalPage.legalBases.title}</h3>
          <ul className={styles.list}>
            {t.legalPage.legalBases.items.map((item, index) => (
              <li key={`${index}-${item.slice(0, 12)}`}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.grid}>
        <div className={styles.card}>
          <h3>{t.legalPage.recipients.title}</h3>
          <ul className={styles.list}>
            {t.legalPage.recipients.items.map((item, index) => (
              <li key={`${index}-${item.slice(0, 12)}`}>{item}</li>
            ))}
          </ul>
          <p className={styles.note}>{t.legalPage.recipients.note}</p>
        </div>

        <div className={styles.card}>
          <h3>{t.legalPage.retention.title}</h3>
          <ul className={styles.list}>
            {t.legalPage.retention.items.map((item, index) => (
              <li key={`${index}-${item.slice(0, 12)}`}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.card}>
        <h3>{t.legalPage.rights.title}</h3>
        <p className={styles.intro}>{t.legalPage.rights.intro}</p>
        <ul className={styles.list}>
          {t.legalPage.rights.items.map((item, index) => (
            <li key={`${index}-${item.slice(0, 12)}`}>{item}</li>
          ))}
        </ul>
        <p className={styles.note}>{t.legalPage.rights.outro}</p>
        <p className={styles.note}>{t.legalPage.rights.authority}</p>
      </section>

      <section className={styles.grid}>
        <div className={styles.card}>
          <h3>{t.legalPage.cookies.title}</h3>
          <p className={styles.intro}>{t.legalPage.cookies.intro}</p>
          <ul className={styles.list}>
            {t.legalPage.cookies.items.map((item, index) => (
              <li key={`${index}-${item.slice(0, 12)}`}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.card}>
          <h3>{t.legalPage.social.title}</h3>
          <p className={styles.intro}>{t.legalPage.social.content}</p>
        </div>
      </section>
    </div>
  );
}
