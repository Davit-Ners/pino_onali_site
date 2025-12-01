"use client";

import { useCallback } from "react";
import { Language } from "@/app/lib/translations";
import { useLanguage, useTranslations } from "../languageProvider/languageProvider";
import styles from "./languageToggle.module.css";

const LANGUAGE_ORDER: Language[] = ["fr", "en", "nl"];

export default function LanguageToggle() {
    const { language, setLanguage } = useLanguage();
    const t = useTranslations();

    const handleToggle = useCallback(() => {
        const currentIndex = LANGUAGE_ORDER.indexOf(language);
        const nextLanguage = LANGUAGE_ORDER[(currentIndex + 1) % LANGUAGE_ORDER.length];
        setLanguage(nextLanguage);
    }, [language, setLanguage]);

    const nextLanguage = LANGUAGE_ORDER[(LANGUAGE_ORDER.indexOf(language) + 1) % LANGUAGE_ORDER.length];
    const ariaLabel =
        nextLanguage === "fr"
            ? t.languageToggle.switchToFrench
            : nextLanguage === "en"
                ? t.languageToggle.switchToEnglish
                : t.languageToggle.switchToDutch;
    const className = [styles.toggle, styles[language]].filter(Boolean).join(" ");

    return (
        <button
          type="button"
          className={className}
          onClick={handleToggle}
          aria-label={ariaLabel}
          title={ariaLabel}
        >
          <span className={styles.flag} aria-hidden="true">
            {t.languageToggle.label}
          </span>
        </button>
    );
};
