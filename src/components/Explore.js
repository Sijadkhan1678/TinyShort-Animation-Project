import React from 'react';


const Explore = () => {
  
   return (
  <section className="explorSec">
        <span
          className="explorreShape shape"
          style={{ transform: "translateY(-181.178px)" }}
        >
          <svg>
            <use xlinkHref="#explore_shape" />
          </svg>
        </span>
        <div className="container">
          <div className="row">
            <div className="col-md-7 multyBox">
              <div className="expBox boxOne">
                <span
                  className="box white aos-init aos-animate"
                  style={{
                    transform: "translate3d(0px, 0px, 0px)",
                    opacity: 1
                  }}
                >
                  <i className="letr">R</i>
                  <p className="text">
                    Revenue Cycle
                    <br />
                    Management
                  </p>
                </span>
                <span
                  className="box white"
                  style={{
                    transform: "translate3d(0px, 0px, 0px)",
                    opacity: 1
                  }}
                >
                  <i className="letr">S</i>
                  <p className="text">
                    Staff
                    <br />
                    Augmentation
                  </p>
                </span>
                <span
                  className="box blueL"
                  style={{
                    transform: "translate3d(0px, 0px, 0px)",
                    opacity: 1
                  }}
                >
                  <i className="letr">P</i>
                  <p className="text">
                    Payment
                    <br />
                    Posting
                  </p>
                </span>
              </div>
              <div className="expBox boxTwo">
                <span
                  className="box blueD"
                  style={{
                    transform: "translate3d(0px, 0px, 0px)",
                    opacity: 1
                  }}
                >
                  <i className="letr">R</i>
                  <p className="text">
                    Reason Code
                    <br />
                    Mapping
                  </p>
                </span>
                <span
                  className="box borderB"
                  style={{
                    transform: "translate3d(0px, 0px, 0px)",
                    opacity: 1
                  }}
                >
                  <i className="letr">P</i>
                  <p className="text">
                    Product
                    <br />
                    Management
                  </p>
                </span>
                <span
                  className="box yellow"
                  style={{
                    transform: "translate3d(0px, 0px, 0px)",
                    opacity: 1
                  }}
                >
                  <i className="letr">V</i>
                  <p className="text">
                    Virtual
                    <br />
                    Assistant
                  </p>
                </span>
              </div>
              <div className="expBox boxThree">
                <span
                  className="box white"
                  style={{
                    transform: "translate3d(0px, 0px, 0px)",
                    opacity: 1
                  }}
                >
                  <i className="letr">C</i>
                  <p className="text">
                    Correspondence
                    <br />
                    Management
                  </p>
                </span>
              </div>
              <i className="designBoxes">
                <span
                  className="shape"
                  style={{ transform: "translateY(-181.178px)" }}
                />{" "}
                <span
                  className="shape rotate"
                  style={{ transform: "translateY(-181.178px)" }}
                />{" "}
                <span
                  className="shape rotate3d"
                  style={{ transform: "translateY(-181.178px)" }}
                />
              </i>
            </div>
            <div className="col-md-5 hdAndText">
              <h2
                className="h1text"
                style={{ transform: "translate3d(0px, 0px, 0px)", opacity: 1 }}
              >
                Services.
              </h2>
              <p
                style={{ transform: "translate3d(0px, 0px, 0px)", opacity: 1 }}
              >
                We offer customized digital services and scalable operational
                strategies to prepare your Organization ride through the waves
                of uncertainty in the form of disruptive technology and
                government regulations so you can deliver accelerated and
                cost-effective services for your consumers
              </p>
              <div
                className="a"
                style={{ transform: "translate3d(0px, 0px, 0px)", opacity: 1 }}
              >
                <a href="https://zaparetech.com/services" className="pg_btn">
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
     )
}
export default Explore;