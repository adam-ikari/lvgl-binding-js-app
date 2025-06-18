import en from "./locales/en.json";
import zh from "./locales/zh.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const DEFAULT_LANG = "en";

const i18nInstance = i18n.use(initReactI18next);

const languages = {
  en: { translation: en },
  zh: { translation: zh },
};

i18nInstance.init({
  resources: languages,
  fallbackLng: DEFAULT_LANG,
  compatibilityJSON: "v3",
  interpolation: {
    escapeValue: false,
  },
});

const changeLanguage = (language: string): void => {
  try {
    console.debug(`[i18n] Attempting to change language to: ${language}`);
    
    const targetLang = (() => {
      if (language === "system") {
        const sysLang = tjs.env.SYS_LANG;
        if (sysLang && languages[sysLang]) {
          console.debug(`[i18n] Using system language: ${sysLang}`);
          return sysLang;
        }
        console.warn(`[i18n] System language ${sysLang} not supported, falling back to default`);
      } else if (languages[language]) {
        return language;
      } else {
        console.warn(`[i18n] Language ${language} not supported, falling back to default`);
      }
      return DEFAULT_LANG;
    })();

    i18n.changeLanguage(targetLang);
    console.debug(`[i18n] Language changed to: ${targetLang}`);
  } catch (error) {
    console.error(`[i18n] Failed to change language:`, error);
  }
};

export { changeLanguage };
