import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { en } from "@/lib/translations/en";
import { fr } from "@/lib/translations/fr";
import { rw } from "@/lib/translations/rw";

export type Language = "en" | "fr" | "rw";

type Translations = typeof en;

const translationMap: Record<Language, Translations> = { en, fr, rw };

const languageLabels: Record<Language, string> = {
  en: "English",
  fr: "Français",
  rw: "Kinyarwanda",
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  languageLabels: Record<Language, string>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("lang") as Language;
    return saved && translationMap[saved] ? saved : "en";
  });

  const setLanguage = useCallback((lang: Language) => {
    setLang(lang);
    localStorage.setItem("lang", lang);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translationMap[language], languageLabels }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
