import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = ({ siteTitle }) => (
  <footer>
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
        height={100}
      />
    </Link>
    {siteTitle} © {new Date().getFullYear()} &middot; All rights reserved.
  </footer>
)

export default Footer
