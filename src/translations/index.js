import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import enLang from './locales/en.json'
import viLang from './locales/vi.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: enLang,
      },
      vi: {
        translations: viLang,
      },
    },
    fallbackLng: 'en',
    debug: false,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    // keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
