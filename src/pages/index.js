import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <Layout>
    <section>
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-5">
            {" "}
            <h1 className="site-header">
              <span className="dw-orange-color">&rdquo;</span>From data to solutions for the sharing economy.
            </h1>
            <p>
              The new devices, which allow remote control over the Internet,
              become part of our daily life. Each device collects data for a
              specific purpose that it can to be useful in many ways to the
              world around us
            </p>
            <p>
              Precisely on the basis of high-quality IoT devices, we offer
              solutions through which we add higher (next) level of shared use
              and management in the home, the office or in public places.
            </p>
          </div>
          <div className="col-lg-7 cloud-schema">
            <StaticImage src="../images/cloud-schema.png" alt="Cloud Schema" quality={100}/>
          </div>
        </div>
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
