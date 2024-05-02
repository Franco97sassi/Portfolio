import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa tus archivos de traducción
import translationEN from '../locales/en/translation.json';
import translationES from '../locales/es/translation.json';

// Configura i18next
i18n
  .use(initReactI18next) // Usa react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN, // Traducciones en inglés
      },
      es: {
        translation: translationES, // Traducciones en español
      },
    },
    lng: 'es', // Idioma por defecto: español
    fallbackLng: 'es', // Idioma de respaldo si la traducción no está disponible: español
    interpolation: {
      escapeValue: false, // No necesitas escapar HTML en tus traducciones
    },
    react: {
      useSuspense: false, // Desactiva el uso de Suspense para el manejo de cargas
    },
  });

export default i18n;
