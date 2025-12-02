"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Language } from "@/app/lib/translations";
import {
  useLanguage,
  useTranslations,
} from "../languageProvider/languageProvider";
import styles from "./languageToggle.module.css";

type Option = {
  code: Language;
  flag: string;
  short: string;
  name: string;
};

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const options: Option[] = [
    { code: "fr", flag: "/flags/fr.svg", short: "FR", name: "Francais" },
    { code: "en", flag: "/flags/gb.svg", short: "EN", name: "English" },
    { code: "nl", flag: "/flags/nl.svg", short: "NL", name: "Nederlands" },
  ];

  const current = options.find((o) => o.code === language) ?? options[0];

  const ariaLabel =
    language === "fr"
      ? t.languageToggle.switchToFrench
      : language === "en"
      ? t.languageToggle.switchToEnglish
      : t.languageToggle.switchToDutch;

  const handleToggleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const handleSelect = useCallback(
    (code: Language) => {
      setLanguage(code);
      setOpen(false);
    },
    [setLanguage]
  );

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <button
        type="button"
        className={styles.button}
        onClick={handleToggleOpen}
        aria-label={ariaLabel}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span className={styles.flagCircle} aria-hidden="true">
          <Image
            src={current.flag}
            alt={`${current.name} flag`}
            width={28}
            height={28}
            className={styles.flagImage}
          />
        </span>
        <span className={styles.code}>{current.short}</span>
        <span
          className={`${styles.caret} ${open ? styles.caretOpen : ""}`}
          aria-hidden="true"
        />
      </button>

      <div
        className={`${styles.menu} ${open ? styles.menuOpen : ""}`}
        role="menu"
      >
        {options.map((opt) => (
          <button
            key={opt.code}
            type="button"
            role="menuitem"
            className={`${styles.menuItem} ${
              opt.code === language ? styles.menuItemActive : ""
            }`}
            onClick={() => handleSelect(opt.code)}
          >
            <span className={styles.menuFlag} aria-hidden="true">
              <Image
                src={opt.flag}
                alt={`${opt.name} flag`}
                width={24}
                height={24}
                className={styles.flagImage}
              />
            </span>
            <div className={styles.menuText}>
              <span className={styles.menuName}>{opt.name}</span>
              <span className={styles.menuShort}>{opt.short}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
