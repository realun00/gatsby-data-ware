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

  return (
    <div className="app-body">
      <Header siteTitle={data.site.siteMetadata?.title || `DataWare`} />
      <div>
        <main>{children}</main>
        <WhatWeDo />
        <About />
      </div>
      <Footer siteTitle={data.site.siteMetadata?.title || `DataWare`} />
    </div>
  )
}

export default Layout
