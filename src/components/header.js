import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { AnchorLink } from "gatsby-plugin-anchor-links";

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-2) 0`,
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
          height={50}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="DataWare Logo"
        />
      </Link>
      <div>
        <AnchorLink
          to="/"
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
      </div>
    </div>
  </header>
)

export default Header
