/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import About from "./sections/about"
import WhatWeDo from "./sections/whatWeDo"

import "../languages/config";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons"

import "bootstrap/dist/css/bootstrap.css"
import "./layout.css"
import "./styles.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        document.querySelector(".back-to-top").classList.add("visible")
      } else {
        document.querySelector(".back-to-top").classList.remove("visible")
      }
    })
  }, [])

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    })
  }

  return (
    <div className="app-body">
      <Header siteTitle={data.site.siteMetadata?.title || `DataWare`} />
      <div>
        <main>{children}</main>
        <WhatWeDo />
        <About />
      </div>
      <Footer siteTitle={data.site.siteMetadata?.title || `DataWare`} />
      <button onClick={scrollToTop} className="back-to-top">
        <FontAwesomeIcon icon={faCircleArrowUp} />
      </button>
    </div>
  )
}

export default Layout
