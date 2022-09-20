import React from 'react';
import overlay from './images/overlay.png'
const Advance = () => {
   return (
  <section className="advgSec">
        <span
          className="advgimg"
          style={{ transform: "translate3d(0px, 0px, 0px)", opacity: 1 }}
        >
          <div className="">
            <video
              autoPlay="true"
              loop="true"
              muted="true"
              id="video"
              className="full"
              poster="img/poster.jpg"
            >
              <source src="video/video.mp4" type="video/mp4" />
              <source src="video/video.webm" type="video/webm" />
            </video>
          </div>
          <img
            className="advg-overlay"
            src={overlay}
            alt="adventage image"
          />
        </span>
        <div className="container">
          <div className="row">
            <div className="col-md-10 hdAndText">
              <span
                className="shape rotate icon-dgn-squir"
                style={{ transform: "translateY(-154.978px)" }}
              />
              <h2
                className="h1text"
                style={{ transform: "translate3d(0px, 0px, 0px)", opacity: 1 }}
              >
                Zapare
                <br />
                Advantages.
              </h2>
              <ul className="advgPoint">
                <li
                  style={{
                    transform: "translate3d(0px, 0px, 0px)",
                    opacity: 1
                  }}
                >
                  US experienced management team
                </li>
                <li
                  style={{
                    transform: "translate3d(0px, 0px, 0px)",
                    opacity: 1
                  }}
                >
                  Secure work environment
                </li>
                <li
                  style={{
                    transform: "translate3d(0px, 0px, 0px)",
                    opacity: 1
                  }}
                >
                  Compliance driven process
                </li>
                <li
                  style={{
                    transform: "translate3d(0px, 0px, 0px)",
                    opacity: 1
                  }}
                >
                  Data driven quality review
                </li>
                <li
                  style={{
                    transform: "translate3d(0px, 0px, 0px)",
                    opacity: 1
                  }}
                >
                  Workforce management
                </li>
                <li
                  style={{
                    transform: "translate3d(0px, 0px, 0px)",
                    opacity: 1
                  }}
                >
                  24x7 coverage
                </li>
              </ul>
            </div>
          </div>
        </div>
        <span
          className="shape icon-dgn-squir blue"
          style={{ transform: "translateY(-154.978px)" }}
        />
      </section>
     )
}
export default Advance