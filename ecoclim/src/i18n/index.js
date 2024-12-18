import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEn from "./locales/en/translation.json";
import translationRu from "./locales/ru/translation.json";
import translationHy from "./locales/hy/translation.json";

const resources = {
    en: {
        translation: translationEn
    },
    ru: {
        translation: translationRu
    },
    hy: {
        translation: translationHy
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: "hy", 
    fallbackLng: "hy", 
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
