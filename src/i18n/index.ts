import en from "./locales/en.json";
import zh from "./locales/zh.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const i18nInstance = i18n.use(initReactI18next);
i18nInstance.init({
  resources: {
    en: { translation: en },
    zh: { translation: zh },
  },
  fallbackLng: "en",
  compatibilityJSON: "v3",
  interpolation: {
    escapeValue: false,
  },
});


export default i18n;
