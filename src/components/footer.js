import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faFacebook,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

import { useTranslation } from "react-i18next"
import useLanguage from "../hooks/useLanguage"

const Footer = ({ siteTitle }) => {
  const { t } = useTranslation()

  const { setLanguage, changeLanguage } = useLanguage()

  return (
    <footer>
      <div className="container-xxl container-xxl d-flex flex-wrap justify-content-between">
        <div className="d-flex flex-column justify-content-between">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Link
              to="/"
              style={{
                fontSize: `var(--font-sm)`,
                textDecoration: `none`,
              }}
            >
              <StaticImage
                src="../images/logo.png"
                alt="DataWare Logo"
                height={50}
              />
            </Link>
            <div>
              <button
                onClick={() => {
                  changeLanguage("Bulgarian")
                  setLanguage("Bulgarian")
                }}
                className="change-language-button"
              >
                <StaticImage src="../images/bg.png" alt="bg img" />
              </button>

              <button
                onClick={() => {
                  changeLanguage("English")
                  setLanguage("English")
                }}
                className="change-language-button"
              >
                <StaticImage
                  src="../images/us.png"
                  alt="en img"
                  style={{ marginLeft: "5px" }}
                />
              </button>
            </div>
          </div>
          <span className="company-info">{t("description")}</span>
        </div>
        <div className="d-flex flex-column justify-content-between">
          <div>
            <h4>{t("site-info")}</h4>
            <div>
              <Link
                to="/"
                style={{
                  fontSize: `var(--font-sm)`,
                  textDecoration: `none`,
                }}
              >
                {t("terms-and-cond")}
              </Link>
              <br />
              <Link
                to="/"
                style={{
                  fontSize: `var(--font-sm)`,
                  textDecoration: `none`,
                }}
              >
                {t("privacy-policy")}
              </Link>
              <br />
              <Link
                to="/"
                style={{
                  fontSize: `var(--font-sm)`,
                  textDecoration: `none`,
                }}
              >
                {t("security")}
              </Link>
            </div>
          </div>
          <div>
            <div className="footer-socials">
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
            <span className="copyright">
              {siteTitle} © {new Date().getFullYear()} &middot;{" "}
              {t("copyrights")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
