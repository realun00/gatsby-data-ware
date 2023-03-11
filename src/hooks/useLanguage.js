import { useState, useEffect } from "react"

import { useTranslation } from "react-i18next"

const useLanguage = () => {
  const [language, setLanguage] = useState("English")

  const { i18n } = useTranslation()

  function changeLanguage(val) {
    if (val === "Bulgarian") {
      i18n.changeLanguage("bg")
    } else {
      i18n.changeLanguage("en")
    }
  }

  useEffect(() => {
    if (i18n.language === "bg" || i18n.language === "bg-BG") {
      setLanguage("Bulgarian")
    } else {
      setLanguage("English")
    }
  }, [i18n.language])

  return { language, setLanguage, changeLanguage }
}

export default useLanguage
