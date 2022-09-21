import React,{useEffect,useRef} from 'react';
import about from './images/about-img.png'
const About = () => {
  
  const aboutImg = useRef('');
  const aboutText = useRef('');
  //for img scrollY 328
  // for Text scrollY 460
  useEffect( () => {
  document.addEventListener('scroll',()=>{
    if(window.scrollY === 328)
    {
      
    }
    else if(window.scrollY === 460){
      console.log('scroll 460',window.scrollY)
    }
  })
  },[window.scrollY>460])
   return (
    <section className="abtSection" id="abtSection">
        <span
          className="abtimg"
          style={{ transform: "translate3d(0px, 0px, 0px)", opacity: 1 }}
        >
          <img
            className=""
            src={about}
            alt="about image"
          />
        </span>
        <div className="container">
          <div className="row">
            <div className="col-md-6 hdAndText">
              <h1
                className="h1text"
                style={{ transform: "translate3d(0px, 0px, 0px)", opacity: 1 }}
              >
                We Are
              </h1>
              <p
                style={{ transform: "translate3d(0px, 0px, 0px)", opacity: 1 }}
              >
                A highly specialized Management team with over 20 combined years
                of experience in the Healthcare industry with proven ability to
                optimally combine digital technology, skilled resources and
                efficient business processes to implement creative as well as
                proven market solutions to suit an ever-evolving market. Our
                forte has been to successfully tailor our solutions to support
                your needs whether it is in the space of Consulting, Product
                Management or Service Delivery
              </p>
              <div
                className="a"
                style={{ transform: "translate3d(0px, 0px, 0px)", opacity: 1 }}
              >
                <a href="https://zaparetech.com/about-us" className="pg_btn">
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
     )
}
export default About