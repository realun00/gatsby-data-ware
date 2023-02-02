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

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="container-xxl container-xxl d-flex flex-wrap justify-content-between">
      <div className="d-flex flex-column justify-content-between">
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
            style={{ marginBottom: "1.2rem" }}
          />
        </Link>
        <span className="company-info">
          A cloud platform, created jointly with Smart Power Management OOD, for
          managing electricity and other services in shared spaces. The system
          is implemented in the use of electrical appliances for Camping
          (refrigerators, washing machines, cooking stoves and lighting)
        </span>
      </div>
      <div className="d-flex flex-column justify-content-between">
        <div>
          <h4>Site Info</h4>
          <div>
            <Link
              to="/"
              style={{
                fontSize: `var(--font-sm)`,
                textDecoration: `none`,
              }}
            >
              Terms of services
            </Link>
            <br />
            <Link
              to="/"
              style={{
                fontSize: `var(--font-sm)`,
                textDecoration: `none`,
              }}
            >
              Privacy policy
            </Link>
            <br />
            <Link
              to="/"
              style={{
                fontSize: `var(--font-sm)`,
                textDecoration: `none`,
              }}
            >
              Cookie policy
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
            {siteTitle} © {new Date().getFullYear()} &middot; All rights
            reserved.
          </span>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
