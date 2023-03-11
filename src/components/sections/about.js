import * as React from "react"
import { useTranslation } from "react-i18next"

const About = () => {
  const { t } = useTranslation()

  return (
    <section id="about-us">
      <div className="container-xxl">
        <h1>{t("about-us")}</h1>
        <p>
          <strong>{t("we")}</strong> {t("about-us-description")}
        </p>
      </div>
    </section>
  )
}

export default About
