import React,{useEffect,useRef,useState} from 'react';
import about from './images/about-img.png'
const About = () => {

  
 const  [isVisible,setVisible] = useState(false)

 const aboutImg = useRef('');
 const aboutText = useRef('');

  //for img scrollY 328
  // for Text scrollY 460

  useEffect(()=>{
    
document.addEventListener('scroll',imgAnimation)
document.addEventListener('scroll',textAnimation)

})

const imgFrame = [{
      visibility: 'visible',
      transform: 'translateX(-350px)'
    },
    {
      transform: 'translateX(0)'
    }
      ]
  const textFrame = [
    { transform: 'translateY(20px)' },
    { transform: 'translateY(10px)' },
    { transform: 'translateY(0)' }
    ]
     
   const imgAnimation =  () =>{ 

    if(window.scrollY >= 335){

     aboutImg.current.animate(imgFrame,{
       duration :900
   
     })
     document.removeEventListener('scroll',imgAnimation)
     setVisible(true)
    }
   }
   
const textAnimation=  () =>{ 

    if(window.scrollY >= 450){

     aboutText.current.animate(textFrame,{
       duration :1250
   
     })
     document.removeEventListener('scroll',textAnimation)
     
    }
   }
   
   return (
    <section className="abtSection" id="abtSection">
        <span
          className="abtimg"
          style={{ transform: "translate3d(0px, 0px, 0px)", opacity: 1 }}
        >
          <img
            style={{visibility: isVisible == true ? 'visible' :'hidden'}}
            ref={aboutImg}
            className=""
            src={about}
            alt="about image"
          />
        </span>
        <div className="container">
          <div className="row">
            <div  className="col-md-6 hdAndText">
              <h1
                className="h1text"
                style={{ transform: "translate3d(0px, 0px, 0px)", opacity: 1 }}
              >
                We Are
              </h1>
              <p
                ref={aboutText}
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