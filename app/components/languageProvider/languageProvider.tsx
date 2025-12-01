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

export default function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguage] = useState<Language>(defaultLanguage);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") {
        return;
        }

        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored && SUPPORTED_LANGUAGES.includes(stored as Language)) {
            setLanguage(stored as Language);
        } else if (typeof navigator !== "undefined") {
            if (navigator.language.startsWith("nl")) {
                setLanguage("nl");
            } else if (navigator.language.startsWith("en")) {
                setLanguage("en");
            }
        }
        setMounted(true);
    }, []);

    useEffect(() => {
            if (!mounted) {
                return;
            };

            document.documentElement.lang = language;
            document.documentElement.setAttribute("data-language", language);
            window.localStorage.setItem(STORAGE_KEY, language);
        }, [language, mounted]);

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
