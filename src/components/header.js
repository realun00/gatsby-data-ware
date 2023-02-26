import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { AnchorLink } from "gatsby-plugin-anchor-links"

//import useWindowsSize from "../hooks/useWindowsSize"

const Header = () => {
  const [show, setShow] = React.useState(false)

  //const { width } = useWindowsSize()

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
          <div>
            <button
              onClick={e => {
                //if (width < 992) {
                  if (show) {
                    setShow(false)
                    e.currentTarget.blur()
                  } else {
                    setShow(true)
                  }
                //}
              }}
              onBlur={() => {
               // if (width < 992 || show) {
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
                // show && width < 992 ? " nav-container-responsive" : ""
                show ? " nav-container-responsive" : ""
              }`}
              style={
                // show && width < 992 ? { display: "block" } : { display: "none" }
                show ? { display: "block" } : { display: "none" }
              }
            >
              <ul className="navbar-nav me-auto mb-lg-0">
                <li className="nav-item">
                  <AnchorLink
                    to="#what-we-do"
                    style={{
                      fontSize: `var(--font-sm)`,
                      textDecoration: `none`,
                    }}
                    className="nav-link"
                  >
                    What we do
                  </AnchorLink>
                </li>
                <li className="nav-item">
                  <AnchorLink
                    to="#about-us"
                    style={{
                      fontSize: `var(--font-sm)`,
                      textDecoration: `none`,
                    }}
                    className="nav-link"
                    onClick={() => setShow(false)}
                  >
                    About us
                  </AnchorLink>
                </li>
                <li className="nav-item">
                  <AnchorLink
                    to="/"
                    style={{
                      fontSize: `var(--font-sm)`,
                      textDecoration: `none`,
                    }}
                    className="nav-link"
                    onClick={() => setShow(false)}
                  >
                    Contact
                  </AnchorLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <nav>
        <AnchorLink
          to="#what-we-do"
          style={{
            fontSize: `var(--font-sm)`,
            textDecoration: `none`,
          }}
        >
          What we do
        </AnchorLink>
        <AnchorLink
          to="#about-us"
          style={{
            fontSize: `var(--font-sm)`,
            textDecoration: `none`,
          }}
        >
          About us
        </AnchorLink>
        <AnchorLink
          to="/"
          style={{
            fontSize: `var(--font-sm)`,
            textDecoration: `none`,
          }}
        >
          Contact
        </AnchorLink>
      </nav> */}
      </div>
    </header>
  )
}

export default Header
