import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { AnchorLink } from "gatsby-plugin-anchor-links"
import { useTranslation } from "react-i18next"

import useWindowsSize from "../hooks/useWindowsSize"
import { useEffect } from "react"

const Header = () => {
  const [show, setShow] = React.useState(false)
  const [offset, setOffset] = React.useState(0)

  const { width } = useWindowsSize()

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

  console.log(width)
  console.log(show)

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
          >
            <button
              onClick={() => setShow(!show)}
              className="navbar-toggler"
              type="button"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {show && (
              <div
                className={`collapse navbar-collapse${
                  show ? " nav-container-responsive" : ""
                }${show && offset !== 0 ? " dw-blue-background" : ""}`}
                style={show ? { width: "100vw" } : {}}
              >
                <ul className="navbar-nav me-auto mb-lg-0">
                  <li
                    className="nav-item"
                    onClick={() => {
                      setShow(false)
                    }}
                  >
                    <AnchorLink
                      to="#what-we-do"
                      style={{
                        fontSize: `var(--font-sm)`,
                        textDecoration: `none`,
                      }}
                      className="nav-link"
                    >
                      {t("what-we-do")}
                    </AnchorLink>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => {
                      setShow(false)
                    }}
                  >
                    <AnchorLink
                      to="#about-us"
                      style={{
                        fontSize: `var(--font-sm)`,
                        textDecoration: `none`,
                      }}
                      className="nav-link"
                      onClick={() => setShow(false)}
                    >
                      {t("about-us")}
                    </AnchorLink>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => {
                      setShow(false)
                    }}
                  >
                    <AnchorLink
                      to="/"
                      style={{
                        fontSize: `var(--font-sm)`,
                        textDecoration: `none`,
                      }}
                      className="nav-link"
                      onClick={() => setShow(false)}
                    >
                      {t("contact")}
                    </AnchorLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
