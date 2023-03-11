import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import detector from "i18next-browser-languagedetector"

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translations: require("./english.json"),
      },
      bg: {
        translations: require("./bulgarian.json"),
      },
    },
    ns: ["translations"],
    defaultNS: "translations",
  })

i18n.languages = ["en", "bg"]

export default i18n
