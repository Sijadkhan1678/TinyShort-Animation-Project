import React,{useEffect,useRef} from 'react';


const Explore = () => {
  
  
const Box1 = useRef('');
const Box2 = useRef('');
const Box3 = useRef('');
const Box4 = useRef('');
const Box5 = useRef('');
const Box6 = useRef('');
const Box7 = useRef('');


  // for Box scrollY 460
  
  useEffect(()=>{
    
document.addEventListener('scroll',boxAnimation)

})

  const boxFrame = [
    { transform: 'scale(0.8)' },
  //  { transform: 'scale(-10px)' },
    { transform: 'scale(1)' }
    ]
     
   const boxAnimation =  () =>{ 
 console.log('scroll',window.scrollY)
    if(window.scrollY >= 1000){

     Box1.current.animate(boxFrame,{
       duration :800,
    
       
     })
    Box2.current.animate(boxFrame,{
       duration :800,
       
       
     })
Box3.current.animate(boxFrame,{
       duration :900,
       
       
     })
Box4.current.animate(boxFrame,{
       duration :1000,
       
       
     })
Box5.current.animate(boxFrame,{
       duration :1100,
      
       
     })
Box6.current.animate(boxFrame,{
       duration :1150,
       
       
     })
Box7.current.animate(boxFrame,{
       duration :1200,
       
       
     })
     document.removeEventListener('scroll',boxAnimation)
     
    }
   }
   
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
                <span ref={Box1}
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
                <span ref={Box2}
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
                <span ref={Box3}
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
                <span ref={Box4}
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
                <span ref={Box5}
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
                <span ref={Box6}
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
                <span ref={Box7}
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