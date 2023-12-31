import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './18next/es.json';
import en from './18next/en.json';


i18n.use(initReactI18next).init({
    resources: {
        es: {

            translation: es
        },
        en: {

            translation: en
        }
    },
    lng: 'es', // Idioma por defecto (español)
    fallbackLng: 'es',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;