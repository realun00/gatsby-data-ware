import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "react-i18next"

const IndexPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <section>
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-5">
              {" "}
              <h1 className="site-header">
                <span className="dw-orange-color">&rdquo;</span>
                {t("from-data-to-solutions")}
              </h1>
              <p>{t("from-data-to-solutions-description-1")}</p>
              <p>{t("from-data-to-solutions-description-2")}</p>
            </div>
            <div className="col-lg-7 cloud-schema">
              <StaticImage
                src="../images/cloud-schema.png"
                alt="Cloud Schema"
                quality={100}
                imgStyle={{objectFit: "contain"}}
                placeholder="none"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
