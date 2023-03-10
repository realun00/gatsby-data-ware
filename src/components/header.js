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
  }, [show])

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
          <div
            tabIndex={0}
            onBlur={e => {
              const currentTarget = e.currentTarget

              // Give browser time to focus the next element
              requestAnimationFrame(() => {
                // Check if the new focused element is a child of the original container
                if (!currentTarget.contains(document.activeElement)) {
                  setShow(false)
                }
              })
            }}
            role="button"
          >
            <button
              onClick={e => {
                if (show) {
                  setShow(false)
                  e.currentTarget.blur()
                } else {
                  setShow(true)
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
              style={
                show
                  ? { display: "block", width: "100vw" }
                  : { display: "none" }
              }
            >
              <ul className="navbar-nav me-auto mb-lg-0">
                <li
                  className="nav-item"
                  onClick={() => {
                    const timer = setTimeout(() => setShow(false), 100)
                    return () => clearTimeout(timer)
                  }}
                  role="presentation"
                >
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
                <li
                  className="nav-item"
                  onClick={() => {
                    const timer = setTimeout(() => setShow(false), 100)
                    return () => clearTimeout(timer)
                  }}
                  role="presentation"
                >
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
                <li
                  className="nav-item"
                  onClick={() => {
                    const timer = setTimeout(() => setShow(false), 100)
                    return () => clearTimeout(timer)
                  }}
                  role="presentation"
                >
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
