"use client";

import { defaultLanguage, getTranslations, Language } from "@/app/lib/translations";
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
}

const STORAGE_KEY = "language";

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

const SUPPORTED_LANGUAGES: Language[] = ["fr", "en", "nl"];

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return defaultLanguage;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED_LANGUAGES.includes(stored as Language)) {
    return stored as Language;
  }

  if (typeof navigator !== "undefined") {
    if (navigator.language.startsWith("nl")) return "nl";
    if (navigator.language.startsWith("en")) return "en";
  }

  return defaultLanguage;
}

export default function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguage] = useState<Language>(getInitialLanguage);

    useEffect(() => {
        if (typeof document !== "undefined") {
            document.documentElement.lang = language;
            document.documentElement.setAttribute("data-language", language);
        }
        if (typeof window !== "undefined") {
            window.localStorage.setItem(STORAGE_KEY, language);
        }
    }, [language]);

    const value = useMemo(
        () => ({
        language,
        setLanguage,
        }),
        [language],
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }

    return context;
};

export function useTranslations() {
    const { language } = useLanguage();
    return getTranslations(language);
};
