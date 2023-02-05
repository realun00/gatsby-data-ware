import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <section>
      <div className="container-xxl">
        <h1 className="site-header">From data to solutions for the sharing economy.</h1>
        <p>
          The new devices, which allow remote control over the Internet, become
          part of our daily life. Each device collects data for a specific
          purpose that it can to be useful in many ways to the world around us
        </p>
        <p>
          Precisely on the basis of high-quality IoT devices, we offer solutions
          through which we add higher (next) level of shared use and management
          in the home, the office or in public places.
        </p>
      </div>
    </section>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
