import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { AnchorLink } from "gatsby-plugin-anchor-links"
import { useTranslation } from "react-i18next"
import { useEffect } from "react"

const Header = () => {
  const [show, setShow] = React.useState(false)
  const [offset, setOffset] = React.useState(0)

  const { t } = useTranslation()

  useEffect(() => {
    if (setShow) {
      const onScroll = () => setOffset(window.pageYOffset)
      // clean up code
      window.removeEventListener("scroll", onScroll)
      window.addEventListener("scroll", onScroll, { passive: true })
      return () => window.removeEventListener("scroll", onScroll)
    }
  }, [show]);

  return (
    <header
      style={{
        margin: `0 auto`,
        padding: `var(--space-3) 0`,
      }}
    >
      <div className="container-xxl d-flex justify-content-between align-items-center">
        <Link
          to="/"
          style={{
            fontSize: `var(--font-sm)`,
            textDecoration: `none`,
          }}
        >
          <StaticImage
            src="../images/logo.png"
            height={40}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="DataWare Logo"
            placeholder="none"
          />
        </Link>
        <nav className="navbar navbar-expand-lg">
          <div>
            <button
              onClick={e => {
                if (show) {
                  setShow(false)
                  e.currentTarget.blur()
                } else {
                  setShow(true)
                }
              }}
              onBlur={() => {
                if (show) {
                  const timer = setTimeout(() => setShow(false), 100)
                  return () => clearTimeout(timer)
                }
              }}
              className="navbar-toggler"
              type="button"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse${
                show ? " nav-container-responsive" : ""
              }${show && offset !== 0 ? " dw-blue-background" : ""}`}
              style={show ? { display: "block", width: "100vw" } : { display: "none" }}
            >
              <ul className="navbar-nav me-auto mb-lg-0">
                <li className="nav-item">
                  <AnchorLink
                    to="/#what-we-do"
                    style={{
                      fontSize: `var(--font-sm)`,
                      textDecoration: `none`,
                    }}
                    className="nav-link"
                    stripHash
                  >
                    {t("what-we-do")}
                  </AnchorLink>
                </li>
                <li className="nav-item">
                  <AnchorLink
                    to="/#about-us"
                    style={{
                      fontSize: `var(--font-sm)`,
                      textDecoration: `none`,
                    }}
                    className="nav-link"
                    onClick={() => setShow(false)}
                    stripHash
                  >
                    {t("about-us")}
                  </AnchorLink>
                </li>
                <li className="nav-item">
                  <AnchorLink
                    to="/#contact-us"
                    style={{
                      fontSize: `var(--font-sm)`,
                      textDecoration: `none`,
                    }}
                    className="nav-link"
                    onClick={() => setShow(false)}
                    stripHash
                  >
                    {t("contact")}
                  </AnchorLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
