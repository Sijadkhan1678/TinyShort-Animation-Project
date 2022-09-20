import React from 'react'
import ztext from './images/z-text.svg'

const Zapareblue = () => {
  
   return (
   <section className="zBlueSec">
        <div className="container">
          <h2
            className="h2text"
            style={{ transform: "translate3d(0px, 0px, 0px)", opacity: 1 }}
          >
            Economical,
            <br />
            dynamic and managed business solutions
          </h2>
          <div className="row blurow">
            <div
              className="col-md-4 blubox"
              style={{ transform: "translate3d(0px, 0px, 0px)", opacity: 1 }}
            >
              <h4>Improved efficiency</h4>
              <p>
                By reducing the burden of managing support functions, staffing
                and day to day operations, your business can concentrate further
                on core areas.
              </p>
            </div>
            <div
              className="col-md-4 blubox"
              style={{ transform: "translate3d(0px, 0px, 0px)", opacity: 1 }}
            >
              <h4>Reduced Cost</h4>
              <p>
                Our solutions are crafted to bring effective change in your
                business by ensuring cost-effective and reliable operation
                methodologies.
              </p>
            </div>
            <div
              className="col-md-4 blubox"
              style={{ transform: "translate3d(0px, 0px, 0px)", opacity: 1 }}
            >
              <h4>Overarching Impact</h4>
              <p>
                By ensuring quality process management we can ensure a
                comprehensive impact on your business.
              </p>
            </div>
          </div>
        </div>
        <span className="lterZ">
          <img
            src={ztext}
            alt="z text image"
          />
        </span>
      </section>
     )
}
export default Zapareblue