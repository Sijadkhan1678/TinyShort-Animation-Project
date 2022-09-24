import React from 'react';
import Logo from './Logo'

const Navbar = () => {
  
  return (
     <div>
       <Logo  />
 
    <header
      data-spy="affix"
      data-offset-top={200}
      className="affix-top"
      style={{ width: 1286 }}
    >
      <nav className="navbar nav-top">
        <a className="navbarLogo" href="https://www.zaparetech.com/">
          <span className="headerLogo">
            <svg>
              <use xlinkHref="#z_logo" />
            </svg>
          </span>
          <h3>Zapare Technologies</h3>
        </a>
    <div className="menuDiv">
          <div className="mobDiv">
            <ul className="navbarNav">
              <li className="active"><a href="https://www.zaparetech.com/">Home</a></li>
              <li className="sub_menu"><a href="https://zaparetech.com/about-us">About us</a>
                <div className="sub_menu_div">
                  <ul>
                    <li className="active"><a href="https://zaparetech.com/about-us#overview">Overview</a></li>
                    <li><a href="https://zaparetech.com/about-us#our_value">Our Values</a></li>
                    <li><a href="https://zaparetech.com/about-us#our_mission">Our Mission</a></li>
                    <li><a href="https://zaparetech.com/about-us#our_approch">Our Approach</a></li>
                    <li><a href="https://zaparetech.com/about-us#team_section">Leadership Team</a></li>
                    <li><a href="https://zaparetech.com/about-us#awards_sec">Awards</a></li>
                    <li><a href="https://zaparetech.com/about-us#enquiry">Enquiry</a></li>
                  </ul>
                </div>
              </li>
              <li><a href="https://zaparetech.com/services">Services</a></li>
              <li><a href="https://zaparetech.com/career">Career</a></li>
              <li><a href="https://zaparetech.com/contact">Contact</a></li>
            </ul>
            <div className="follow">
              <p>
                Follow us :
              </p>
              <p>
                <a aria-label="facebook" target="_blank" rel="noreferrer" href="https://www.facebook.com/ZapareTechnologies"><span className="icon-fb"></span></a>
                <a aria-label="linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/zapare/"><span className="icon-linkedin"></span></a>
                {/* <a href="#"><span className="icon-y-tub"></span></a> */}
              </p>
            </div>
          </div>

        </div>
        <span className="humburger">
          <i></i>
          <i></i>
        </span>
      </nav>
      </header>
     </div>
  );
}

export default Navbar;
