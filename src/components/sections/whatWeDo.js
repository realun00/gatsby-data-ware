import * as React from "react"

const WhatWeDo = () => (
  <section id="what-we-do">
    <div className="container-xxl">
      <h1>What We Do</h1>
      <div className="row">
        <div className="col-lg-6 software-as-service">
          <div className="what-we-do dw-secondary-blue-background">
            <h4>Software As Service</h4>
            <p>
              <strong>A cloud platform</strong> created jointly with{" "}
              <strong>Smart Power Management LTD</strong>, for managing
              electricity and other services in shared spaces. The system is
              implemented in the use of electrical appliances for Camping
              (refrigerators, washing machines, cooking stoves and lighting).
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="what-we-do dw-secondary-orange-background">
            <h4>Innovative Mini Hub (Edge)</h4>
            <p>
              <strong>Innovative Mini Hub (Smart unit)</strong> - enabling:
              <br />
              a) the automatic detection and configuration of IoT devices
              <br />
              b) collection, processing, analysis of IoT data <br />
              c) local or remote control
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default WhatWeDo
