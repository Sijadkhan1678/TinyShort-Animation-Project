import React from 'react'

const Footer = () => {
    return(
   <footer>
        <div className="subfooter container">
          <span className="ftlogo">
            <svg data-aos="flip-left" data-aos-duration={2500}>
              <use xlinkHref="#f_logo" />
            </svg>
          </span>
          <h2 className="fterh2">Care To Join Us?</h2>
          <p className="fotrtext">
            Embark on an exciting career with us to learn and grow alongside the
            best in the industry
          </p>
          <a
            href="https://zaparetech.com/career#current-open"
            className="pg_btn"
          >
            View current openings
          </a>
        </div>
        <div className="mainFooter container">
          <ul className="footnav">
            <li>
              <a href="https://www.zaparetech.com/">Home</a>
            </li>
            <li>
              <a href="https://zaparetech.com/about-us">About us</a>
            </li>
            <li>
              <a href="https://zaparetech.com/services">Services</a>
            </li>
            <li>
              <a href="https://zaparetech.com/career">Career</a>
            </li>
            <li>
              <a href="https://zaparetech.com/contact">Contact</a>
            </li>
          </ul>
          <div className="followDiv">
            <p>Follow us :</p>
            <p>
              <a
                aria-label="facebook"
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/ZapareTechnologies"
              >
                <span className="icon-fb" />
              </a>
              <a
                aria-label="linkedin"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/zapare/"
              >
                <span className="icon-linkedin" />
              </a>
              {/* <a href="#"><span class="icon-y-tub"></span></a> */}
            </p>
          </div>
        </div>
        <div className="container btmFootr">
          <p>All right reserved ©2021 zaparetechnologies.com</p>
          <p>
            Designed by:{" "}
            <a
              href="https://webandcrafts.com/"
              aria-label="webandcrafts"
              target="_blank"
              rel="noreferrer"
            >
              &nbsp; Webandcrafts.com
            </a>{" "}
          </p>
        </div>
      </footer>

      )
}
export default Footer