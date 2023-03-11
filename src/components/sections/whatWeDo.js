import * as React from "react"
import { useTranslation } from "react-i18next"

const WhatWeDo = () => {
  const { t } = useTranslation()

  return (
    <section id="what-we-do">
      <div className="container-xxl">
        <h1>{t("what-we-do")}</h1>
        <div className="row">
          <div className="col-lg-6 software-as-service">
            <div className="what-we-do dw-secondary-blue-background">
              <h4>{t("software-as-service")}</h4>
              <p>
                <strong>{t("cloud-platform")}</strong> {t("created-with")}{" "}
                <strong>{t("smart-power-management-ltd")}</strong>,{" "}
                {t("software-as-service-description")}
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="what-we-do dw-secondary-orange-background">
              <h4>{t("inovative-mini-hub-edge")}</h4>
              <p>
                <strong>{t("inovative-mini-hub-smart")}</strong> -{" "}
                {t("enabling")}
                <br />
                {t("inovative-mini-hub-description-a")}
                <br />
                {t("inovative-mini-hub-description-b")} <br />
                {t("inovative-mini-hub-description-c")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
