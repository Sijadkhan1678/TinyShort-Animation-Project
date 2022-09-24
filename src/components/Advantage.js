import React,{useEffect,useRef} from 'react';
import overlay from './images/overlay.png'

const Advantage = () => {
  
const adventageText = useRef('');

  useEffect(()=>{
document.addEventListener('scroll',textAnimation)
})
const textFrame = [
    { transform: 'translateY(20px)' },
    { transform: 'translateY(15px)' },
    {transform:'translateY(10px)'},
    { transform: 'translateY(0)' }
    ]
const textAnimation=  () =>{ 
   
    if(window.scrollY >= 2130){

     adventageText.current.animate(textFrame,{
       duration :1150
   
     })
    document.removeEventListener('scroll',textAnimation)
     
    }
   }
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
            alt="adventage"
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
              <ul ref={adventageText} className="advgPoint">
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
export default Advantage