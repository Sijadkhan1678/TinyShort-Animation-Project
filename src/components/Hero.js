import React,{useRef,useEffect} from 'react'

const Hero = () => {
  
  const banner = useRef('')
  const text1  = useRef('')
  const text2  = useRef('')
  const text3  = useRef('')
  const button = useRef('')
  useEffect(()=>{
    banner.current.animate([{
        visibility:'hidden',
        transform: 'translateX(500px)'},
   {
     transform: 'translateY(-50px)'
    },
    {
      transform:'translate(0,0)'
      
      
    }
    ],
    {
    duration:2500
    })
    const textFrames = [{
        
        transform: 'translateX(-300px)'
      },{
        transform: 'translateX(0)'
      }
      ]
     text1.current.animate(textFrames,{
      duration: 1500,
    })
    text2.current.animate(textFrames,{
      duration:1900,
    })
    text3.current.animate(textFrames, {
      duration:2200
    } )
    button.current.animate(textFrames,{
      duration:2500
    })
  })
  
   return (
    <div className="headDiv">
      {" "}
      <section className="bannerSec">
        <div className="container">
          <div className="row homebanner">
            <div className="col-md-7 bannerImage">
              <div
                className="bnrImagediv"
                style={{ transform: "translate3d(0px, 0px, 0px)", opacity: 1 }}
              >
                <div
                  id="zaparevideo"
                  className=""
                  style={{ width: "100%", height: "100%" }}
                >
                  <svg
                  ref={banner}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 890 740"
                    width={890}
                    height={740}
                    preserveAspectRatio="xMidYMid meet"
                    style={{
                      width: "100%",
                      height: "100%",
                      transform: "translate3d(0px, 0px, 0px)"
                    }}
                  >
                    <defs>
                      <clipPath id="__lottie_element_542">
                        <rect width={890} height={740} x={0} y={0} />
                      </clipPath>
                      <linearGradient
                        id="__lottie_element_788"
                        spreadMethod="pad"
                        gradientUnits="userSpaceOnUse"
                        x1="-91.125"
                        y1="-138.375"
                        x2="-102.75"
                        y2="-138.375"
                      >
                        <stop offset="0%" stopColor="rgb(224,152,90)" />
                        <stop offset="27%" stopColor="rgb(235,169,113)" />
                        <stop offset="70%" stopColor="rgb(245,186,137)" />
                      </linearGradient>
                      <linearGradient
                        id="__lottie_element_789"
                        spreadMethod="pad"
                        gradientUnits="userSpaceOnUse"
                        x1={0}
                        y1={0}
                        x2={100}
                        y2={0}
                      >
                        <stop offset="0%" stopColor="rgb(224,152,90)" />
                        <stop offset="27%" stopColor="rgb(235,169,113)" />
                        <stop offset="70%" stopColor="rgb(245,186,137)" />
                      </linearGradient>
                      <linearGradient
                        id="__lottie_element_917"
                        spreadMethod="pad"
                        gradientUnits="userSpaceOnUse"
                        x1="-108.5"
                        y1={136}
                        x2="-124.5"
                        y2="-26.5"
                      >
                        <stop offset="0%" stopColor="rgb(0,42,87)" />
                        <stop offset="27%" stopColor="rgb(18,66,116)" />
                        <stop offset="70%" stopColor="rgb(36,89,145)" />
                      </linearGradient>
                      <linearGradient
                        id="__lottie_element_1262"
                        spreadMethod="pad"
                        gradientUnits="userSpaceOnUse"
                        x1={0}
                        y1={0}
                        x2={100}
                        y2={0}
                      >
                        <stop offset="0%" stopColor="rgb(0,42,87)" />
                        <stop offset="27%" stopColor="rgb(18,66,116)" />
                        <stop offset="70%" stopColor="rgb(36,89,145)" />
                      </linearGradient>
                      <linearGradient
                        id="__lottie_element_1330"
                        spreadMethod="pad"
                        gradientUnits="userSpaceOnUse"
                        x1="46.25"
                        y1={2}
                        x2="70.25"
                        y2={0}
                      >
                        <stop offset="46%" stopColor="rgb(242,168,125)" />
                        <stop offset="76%" stopColor="rgb(229,151,105)" />
                        <stop offset="99%" stopColor="rgb(217,134,84)" />
                      </linearGradient>
                      <linearGradient
                        id="__lottie_element_1334"
                        spreadMethod="pad"
                        gradientUnits="userSpaceOnUse"
                        x1={0}
                        y1={0}
                        x2={100}
                        y2={0}
                      >
                        <stop offset="46%" stopColor="rgb(36,89,145)" />
                        <stop offset="76%" stopColor="rgb(19,74,133)" />
                        <stop offset="99%" stopColor="rgb(1,59,121)" />
                      </linearGradient>
                      <radialGradient
                        id="__lottie_element_1344"
                        spreadMethod="pad"
                        gradientUnits="userSpaceOnUse"
                        cx={0}
                        cy={0}
                        r={100}
                        fx={0}
                        fy={0}
                      >
                        <stop offset="64%" stopColor="rgb(36,89,145)" />
                        <stop offset="82%" stopColor="rgb(19,74,133)" />
                        <stop offset="100%" stopColor="rgb(1,59,121)" />
                      </radialGradient>
                      <linearGradient
                        id="__lottie_element_1354"
                        spreadMethod="pad"
                        gradientUnits="userSpaceOnUse"
                        x1={0}
                        y1={0}
                        x2={100}
                        y2={0}
                      >
                        <stop offset="31%" stopColor="rgb(2,60,122)" />
                        <stop offset="62%" stopColor="rgb(19,74,134)" />
                        <stop offset="100%" stopColor="rgb(36,89,145)" />
                      </linearGradient>
                      <linearGradient
                        id="__lottie_element_1358"
                        spreadMethod="pad"
                        gradientUnits="userSpaceOnUse"
                        x1={0}
                        y1={0}
                        x2={100}
                        y2={0}
                      >
                        <stop offset="20%" stopColor="rgb(1,59,121)" />
                        <stop offset="41%" stopColor="rgb(19,74,133)" />
                        <stop offset="66%" stopColor="rgb(36,89,145)" />
                      </linearGradient>
                      <linearGradient
                        id="__lottie_element_1377"
                        spreadMethod="pad"
                        gradientUnits="userSpaceOnUse"
                        x1={0}
                        y1={0}
                        x2={100}
                        y2={0}
                      >
                        <stop offset="0%" stopColor="rgb(0,42,87)" />
                        <stop offset="27%" stopColor="rgb(18,66,116)" />
                        <stop offset="70%" stopColor="rgb(36,89,145)" />
                      </linearGradient>
                    </defs>
                    <g clipPath="url(#__lottie_element_542)">
                      <g
                        transform="matrix(1,0,0,1,654,359)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,-208,10.5)">
                          <path
                            fill="rgb(225,238,252)"
                            fillOpacity={1}
                            d=" M56.25,-246.5 C34.775001525878906,-266.2340087890625 12.75,-252 7,-242.75 C2.9679999351501465,-236.26400756835938 0.367000013589859,-219.01100158691406 1.0789999961853027,-203.50399780273438 C1.4550000429153442,-195.32000732421875 2.753000020980835,-187.6219940185547 5.25,-182.25 C13.5,-164.5 26.5,-154.75 36.75,-152.5 C43.59199905395508,-150.9980010986328 64.5,-146.75 85.25,-154 C104.36499786376953,-160.6790008544922 97,-180.25 90.25,-197 C83.95600128173828,-212.61900329589844 74.75,-229.5 56.25,-246.5z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(158,158,158)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M56.25,-246.5 C34.775001525878906,-266.2340087890625 12.75,-252 7,-242.75 C2.9679999351501465,-236.26400756835938 0.367000013589859,-219.01100158691406 1.0789999961853027,-203.50399780273438 C1.4550000429153442,-195.32000732421875 2.753000020980835,-187.6219940185547 5.25,-182.25 C13.5,-164.5 26.5,-154.75 36.75,-152.5 C43.59199905395508,-150.9980010986328 64.5,-146.75 85.25,-154 C104.36499786376953,-160.6790008544922 97,-180.25 90.25,-197 C83.95600128173828,-212.61900329589844 74.75,-229.5 56.25,-246.5z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(225,238,252)"
                            fillOpacity={1}
                            d=" M-79,-259.75 C-163,-321 -220.5,-261 -236.5,-213 C-245.9510040283203,-184.64599609375 -281,-125.5 -304,-103.5 C-327,-81.5 -371,-63 -361,24.5 C-351,112.0009994506836 -303.5,196.5 -229,265 C-154.5,333.5 -84.5,322.5 -36,320 C12.5,317.5 94.5,318 148,321 C201.5,324 322.5,322 378.5,300.5 C434.5,279 428.33099365234375,225.40699768066406 419.5,194.5 C412.5,170 390,126 322.5,76 C255,26 157.51600646972656,8.701000213623047 87,-10 C-3.5,-34 -22.718000411987305,-116.55400085449219 -38,-174.5 C-50,-220 -62,-246 -79,-259.75z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(158,158,158)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-79,-259.75 C-163,-321 -220.5,-261 -236.5,-213 C-245.9510040283203,-184.64599609375 -281,-125.5 -304,-103.5 C-327,-81.5 -371,-63 -361,24.5 C-351,112.0009994506836 -303.5,196.5 -229,265 C-154.5,333.5 -84.5,322.5 -36,320 C12.5,317.5 94.5,318 148,321 C201.5,324 322.5,322 378.5,300.5 C434.5,279 428.33099365234375,225.40699768066406 419.5,194.5 C412.5,170 390,126 322.5,76 C255,26 157.51600646972656,8.701000213623047 87,-10 C-3.5,-34 -22.718000411987305,-116.55400085449219 -38,-174.5 C-50,-220 -62,-246 -79,-259.75z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9222004413604736,0.11334634572267532,-0.11334634572267532,0.9222004413604736,440.5075378417969,365.85870361328125)"
                        opacity="0.4"
                        style={{ display: "block" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1.0533900260925293,0,0,1.0533900260925293,0,0)"
                        >
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(169,210,255)"
                            strokeOpacity={1}
                            strokeWidth={1}
                            d=" M-79,-259.75 C-148.197998046875,-318.12701416015625 -220.5,-261 -236.5,-213 C-245.9510040283203,-184.64599609375 -281,-125.5 -304,-103.5 C-327,-81.5 -371,-63 -361,24.5 C-351,112.0009994506836 -303.5,196.5 -229,265 C-154.5,333.5 -84.5,322.5 -36,320 C12.5,317.5 94.5,318 148,321 C201.5,324 322.5,322 378.5,300.5 C434.5,279 428.33099365234375,225.40699768066406 419.5,194.5 C412.5,170 390,126 322.5,76 C255,26 157.51600646972656,8.699999809265137 87,-10 C-3.5,-34 -23.597000122070312,-116.33000183105469 -38,-174.5 C-46.09700012207031,-207.2010040283203 -62,-246 -79,-259.75z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(-0.43794870376586914,0.8989999890327454,-0.8989999890327454,-0.43794870376586914,561.7440795898438,175.4500274658203)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(225,238,252)"
                            fillOpacity={1}
                            d=" M118,-72.68800354003906 C118,-72.68800354003906 113.43800354003906,-71.625 113.43800354003906,-71.625 C113.43800354003906,-71.625 114.125,-68.31199645996094 114.125,-68.31199645996094 C114.125,-68.31199645996094 112.31199645996094,-67 111.5,-65.18800354003906 C111.43800354003906,-65.18800354003906 107.31199645996094,-65 107.31199645996094,-65 C107.31199645996094,-65 107.25,-60.875 107.25,-60.875 C107.25,-60.875 110.5,-60.5620002746582 110.5,-60.5620002746582 C110.5,-60.5620002746582 110.68800354003906,-57.625 111.75,-55.875 C111.75,-55.875 109.5,-53.375 109.5,-53.375 C109.5,-53.375 112.75,-50.375 112.75,-50.375 C112.75,-50.375 114.75,-52.875 114.75,-52.875 C116.875,-51.625 120.375,-52 120.375,-52 C120.375,-52 121.25,-49 121.25,-49 C121.25,-49 125.5,-50.3120002746582 125.5,-50.3120002746582 C125.5,-50.3120002746582 124.5,-53.25 124.5,-53.25 C124.5,-53.25 126.06199645996094,-54.6870002746582 126.75,-55.875 C126.43800354003906,-56 130,-55.375 130,-55.375 C130,-55.375 131.125,-59.375 131.125,-59.375 C131.125,-59.375 128.25,-60.625 128.25,-60.625 C128.25,-60.625 127.8759994506836,-63.5 126.93800354003906,-65.68800354003906 C126.93800354003906,-65.68800354003906 128.81199645996094,-68.375 128.81199645996094,-68.375 C128.81199645996094,-68.375 125.875,-70.875 125.875,-70.875 C125.875,-70.875 123.375,-68.75 123.375,-68.75 C123.375,-68.75 120.56199645996094,-69.56199645996094 118.75,-69.56199645996094 C118.68800354003906,-69.68699645996094 118,-72.68800354003906 118,-72.68800354003906z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(158,158,158)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M118,-72.68800354003906 C118,-72.68800354003906 113.43800354003906,-71.625 113.43800354003906,-71.625 C113.43800354003906,-71.625 114.125,-68.31199645996094 114.125,-68.31199645996094 C114.125,-68.31199645996094 112.31199645996094,-67 111.5,-65.18800354003906 C111.43800354003906,-65.18800354003906 107.31199645996094,-65 107.31199645996094,-65 C107.31199645996094,-65 107.25,-60.875 107.25,-60.875 C107.25,-60.875 110.5,-60.5620002746582 110.5,-60.5620002746582 C110.5,-60.5620002746582 110.68800354003906,-57.625 111.75,-55.875 C111.75,-55.875 109.5,-53.375 109.5,-53.375 C109.5,-53.375 112.75,-50.375 112.75,-50.375 C112.75,-50.375 114.75,-52.875 114.75,-52.875 C116.875,-51.625 120.375,-52 120.375,-52 C120.375,-52 121.25,-49 121.25,-49 C121.25,-49 125.5,-50.3120002746582 125.5,-50.3120002746582 C125.5,-50.3120002746582 124.5,-53.25 124.5,-53.25 C124.5,-53.25 126.06199645996094,-54.6870002746582 126.75,-55.875 C126.43800354003906,-56 130,-55.375 130,-55.375 C130,-55.375 131.125,-59.375 131.125,-59.375 C131.125,-59.375 128.25,-60.625 128.25,-60.625 C128.25,-60.625 127.8759994506836,-63.5 126.93800354003906,-65.68800354003906 C126.93800354003906,-65.68800354003906 128.81199645996094,-68.375 128.81199645996094,-68.375 C128.81199645996094,-68.375 125.875,-70.875 125.875,-70.875 C125.875,-70.875 123.375,-68.75 123.375,-68.75 C123.375,-68.75 120.56199645996094,-69.56199645996094 118.75,-69.56199645996094 C118.68800354003906,-69.68699645996094 118,-72.68800354003906 118,-72.68800354003906z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1.1791000366210938,0,0,1.1791000366210938,423.3364562988281,380.5966491699219)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,119.56300354003906,-60.5620002746582)"
                        >
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M0,-4.1875 C2.3110811710357666,-4.1875 4.1875,-2.3110811710357666 4.1875,0 C4.1875,2.3110811710357666 2.3110811710357666,4.1875 0,4.1875 C-2.3110811710357666,4.1875 -4.1875,2.3110811710357666 -4.1875,0 C-4.1875,-2.3110811710357666 -2.3110811710357666,-4.1875 0,-4.1875z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(158,158,158)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M0,-4.1875 C2.3110811710357666,-4.1875 4.1875,-2.3110811710357666 4.1875,0 C4.1875,2.3110811710357666 2.3110811710357666,4.1875 0,4.1875 C-2.3110811710357666,4.1875 -4.1875,2.3110811710357666 -4.1875,0 C-4.1875,-2.3110811710357666 -2.3110811710357666,-4.1875 0,-4.1875z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445.93798828125,370.8111572265625)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M161.5,-186.75 C161.5,-186.75 156.5,-149.25 156.5,-149.25 C156.5,-149.25 189,-145 189,-145 C189,-145 194.5,-183.75 194.5,-183.75 C194.5,-183.75 161.5,-186.75 161.5,-186.75z"
                          />
                        </g>
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M171,-179.25 C171,-179.25 185.25,-177.5 185.25,-177.5"
                          />
                        </g>
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M170.75,-173.5 C170.75,-173.5 179.75,-172.75 179.75,-172.75"
                          />
                        </g>
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M170,-167.75 C170,-167.75 185.5,-165.5 185.5,-165.5"
                          />
                        </g>
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M169.25,-162 C169.25,-162 181.25,-160.5 181.25,-160.5"
                          />
                        </g>
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M168.375,-156.5 C168.375,-156.5 179.5,-155.375 179.5,-155.375"
                          />
                        </g>
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M165.75,-180.375 C165.75,-180.375 168,-180 168,-180"
                          />
                        </g>
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M165,-174.5 C165,-174.5 167.125,-174 167.125,-174"
                          />
                        </g>
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M164.125,-168.75 C164.125,-168.75 166.75,-168.25 166.75,-168.25"
                          />
                        </g>
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M163.25,-163.125 C163.25,-163.125 165.375,-162.875 165.375,-162.875"
                          />
                        </g>
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M162.625,-157 C162.625,-157 164.625,-156.625 164.625,-156.625"
                          />
                        </g>
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M153.875,-178.25 C153.875,-178.25 153.625,-161.75 153.625,-161.75"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,443.56781005859375,370.7265930175781)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M229.875,-124.625 C229.875,-124.625 269.125,-148 304.875,-127.375 C305.25,-127.25 319.6860046386719,-118.45800018310547 327.75,-103.75"
                          />
                        </g>
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M314.25,-113.625 C314.25,-113.625 325.5,-106.25 328.625,-100.5 C328,-101.5 325.781005859375,-118.03099822998047 326.781005859375,-121.78099822998047"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.999572217464447,0.029247546568512917,-0.029247546568512917,0.999572217464447,777.4676513671875,328.085693359375)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(245,186,137)"
                            fillOpacity={1}
                            d=" M-445.125,-103.625 C-445.125,-103.625 -445.375,-100.375 -445.375,-100.375 C-445.375,-100.375 -434.875,-99.5 -434.875,-99.5 C-434.875,-99.5 -434.125,-102.375 -434.125,-102.375 C-434.125,-102.375 -445.125,-103.625 -445.125,-103.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(158,158,158)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-445.125,-103.625 C-445.125,-103.625 -445.375,-100.375 -445.375,-100.375 C-445.375,-100.375 -434.875,-99.5 -434.875,-99.5 C-434.875,-99.5 -434.125,-102.375 -434.125,-102.375 C-434.125,-102.375 -445.125,-103.625 -445.125,-103.625z"
                          />
                        </g>
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(245,186,137)"
                            fillOpacity={1}
                            d=" M-423.25,-101.5 C-423.25,-101.5 -427.625,-101.5 -427.625,-101.5 C-427.625,-101.5 -428.125,-99.125 -428.125,-99.125 C-428.125,-99.125 -423.875,-98.375 -423.875,-98.375 C-423.875,-98.375 -423.25,-101.5 -423.25,-101.5z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(158,158,158)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-423.25,-101.5 C-423.25,-101.5 -427.625,-101.5 -427.625,-101.5 C-427.625,-101.5 -428.125,-99.125 -428.125,-99.125 C-428.125,-99.125 -423.875,-98.375 -423.875,-98.375 C-423.875,-98.375 -423.25,-101.5 -423.25,-101.5z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,455,416)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(214,218,225)"
                            fillOpacity={1}
                            d=" M-214,214 C-235,215 -334.5,217.5 -363,218.5 C-391.5,219.5 -379,221 -373,221 C-367,221 -319.5,224 -298,224 C-276.5,224 -146.5,225.5 -136,225.5 C-125.5,225.5 301.5,223 321,220.5 C340.5,218 329,218 312.5,216.5 C296,215 194.5,216 153.5,215.5 C125.34200286865234,215.15699768066406 -193,213 -214,214z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(207,207,207)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-214,214 C-235,215 -334.5,217.5 -363,218.5 C-391.5,219.5 -379,221 -373,221 C-367,221 -319.5,224 -298,224 C-276.5,224 -146.5,225.5 -136,225.5 C-125.5,225.5 301.5,223 321,220.5 C340.5,218 329,218 312.5,216.5 C296,215 194.5,216 153.5,215.5 C125.34200286865234,215.15699768066406 -193,213 -214,214z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="url(#__lottie_element_1377)"
                            fillOpacity={1}
                            d=" M42,13.25 C41.75,13.25 30,31 24.25,70 C24.25,70 21,90.5 24,94 C24.5,94.25 28.25,96 33.5,83 C38.75,70 44.625,51.16899871826172 46.5,43 C50,27.75 48.75,12 42,13.25z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(60,41,10)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42,13.25 C41.75,13.25 30,31 24.25,70 C24.25,70 21,90.5 24,94 C24.5,94.25 28.25,96 33.5,83 C38.75,70 44.625,51.16899871826172 46.5,43 C50,27.75 48.75,12 42,13.25z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(167,167,167)"
                            fillOpacity={1}
                            d=" M92.75,164.75 C92.75,164.75 90,167 90,166.75 C99.75,170.5 111.5,200.25 114.25,207.25 C117,214.25 135,264.5 135,264.5 C135,264.5 138.5,263.5 138.25,263.75 C119.5,210 110.25,187.75 105.5,179 C100.75,170.25 92.75,164.75 92.75,164.75z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(201,201,201)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M92.75,164.75 C92.75,164.75 90,167 90,166.75 C99.75,170.5 111.5,200.25 114.25,207.25 C117,214.25 135,264.5 135,264.5 C135,264.5 138.5,263.5 138.25,263.75 C119.5,210 110.25,187.75 105.5,179 C100.75,170.25 92.75,164.75 92.75,164.75z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(167,167,167)"
                            fillOpacity={1}
                            d=" M73.5,167.75 C80.5,174.5 85.25,194.75 88.25,207 C91.25,219.25 98.5,263.75 98.5,263.75 C98.5,263.75 101.75,264 101.5,264 C100.25,251 94,218.25 91.75,207.25 C89.5,196.25 85.5,183.25 85.5,183.25 C83.25,175 78.5,168.5 78.5,168.5 C78.5,168.5 73.5,167.5 73.5,167.75z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(201,201,201)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M73.5,167.75 C80.5,174.5 85.25,194.75 88.25,207 C91.25,219.25 98.5,263.75 98.5,263.75 C98.5,263.75 101.75,264 101.5,264 C100.25,251 94,218.25 91.75,207.25 C89.5,196.25 85.5,183.25 85.5,183.25 C83.25,175 78.5,168.5 78.5,168.5 C78.5,168.5 73.5,167.5 73.5,167.75z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(167,167,167)"
                            fillOpacity={1}
                            d=" M23.5,168 C19.75,174 15.75,207.5 15.75,213 C15.75,218.5 11.5,263.25 11.5,263.25 C11.5,263.25 15.25,263.25 15.25,263.25 C15.25,263.25 18,233.75 18.75,223.75 C22.334999084472656,175.9459991455078 27.5,168.75 27.5,168.75 C27.5,168.75 23.25,168 23.5,168z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(201,201,201)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M23.5,168 C19.75,174 15.75,207.5 15.75,213 C15.75,218.5 11.5,263.25 11.5,263.25 C11.5,263.25 15.25,263.25 15.25,263.25 C15.25,263.25 18,233.75 18.75,223.75 C22.334999084472656,175.9459991455078 27.5,168.75 27.5,168.75 C27.5,168.75 23.25,168 23.5,168z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(167,167,167)"
                            fillOpacity={1}
                            d=" M9.5,167.75 C-6.25,175.25 -23.5,266.5 -23.5,266.5 C-23.5,266.5 -20.25,267.25 -19.75,266.5 C-0.5,170.25 13.75,169 13.75,169 C13.75,169 10,167.5 9.5,167.75z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(201,201,201)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M9.5,167.75 C-6.25,175.25 -23.5,266.5 -23.5,266.5 C-23.5,266.5 -20.25,267.25 -19.75,266.5 C-0.5,170.25 13.75,169 13.75,169 C13.75,169 10,167.5 9.5,167.75z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(125,163,203)"
                            fillOpacity={1}
                            d=" M152.5,11 C152.5,11 65.5,11 65.5,11 C65.5,11 56.5,13.5 49.5,66.5 C43.499000549316406,111.93699645996094 34,128 29.5,134.5 C25.788999557495117,139.86000061035156 5.5,148.5 -5,157.5 C-15.5,166.5 -9.5,168.5 0.5,169 C10.5,169.5 61,171 65.5,170 C106,173 111,149.5 111,149.5 C111,149.5 152.5,11 152.5,11z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(201,201,201)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M152.5,11 C152.5,11 65.5,11 65.5,11 C65.5,11 56.5,13.5 49.5,66.5 C43.499000549316406,111.93699645996094 34,128 29.5,134.5 C25.788999557495117,139.86000061035156 5.5,148.5 -5,157.5 C-15.5,166.5 -9.5,168.5 0.5,169 C10.5,169.5 61,171 65.5,170 C106,173 111,149.5 111,149.5 C111,149.5 152.5,11 152.5,11z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="url(#__lottie_element_1358)"
                            fillOpacity={1}
                            d=" M47.5,126.25 C47.5,126.25 1.5,158.25 1.5,158.25 C1.5,158.25 -2.5,160.25 -1.75,165 C-0.5,173.75 4.25,191.75 21.5,226 C31,244.25 34,250.5 34,250.5 C34,250.5 37.25,249.25 37.25,249.25 C37.25,249.25 27.875,197 27.875,197 C27.875,197 24.375,177.75 17,173.125 C16.875,173.5 16.5,171.25 17,171 C17.5,170.75 30.5,168.125 32.875,165.75 C35.25,163.375 71.5,147 71.5,147 C71.5,147 61.5,132.75 61.5,132.75 C61.5,132.75 47.5,126.25 47.5,126.25z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(201,201,201)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M47.5,126.25 C47.5,126.25 1.5,158.25 1.5,158.25 C1.5,158.25 -2.5,160.25 -1.75,165 C-0.5,173.75 4.25,191.75 21.5,226 C31,244.25 34,250.5 34,250.5 C34,250.5 37.25,249.25 37.25,249.25 C37.25,249.25 27.875,197 27.875,197 C27.875,197 24.375,177.75 17,173.125 C16.875,173.5 16.5,171.25 17,171 C17.5,170.75 30.5,168.125 32.875,165.75 C35.25,163.375 71.5,147 71.5,147 C71.5,147 61.5,132.75 61.5,132.75 C61.5,132.75 47.5,126.25 47.5,126.25z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="url(#__lottie_element_1354)"
                            fillOpacity={1}
                            d=" M96.625,127 C96.625,127 81,131.25 74.125,134.125 C67.85099792480469,136.74899291992188 55,144.25 45.5,151.5 C45,152 37.25,157.5 37.25,157.5 C37.25,157.5 33,161.25 33.75,165.25 C34.5,169.25 34.25,195.5 45,222.75 C45,223.5 56,250.25 56,250.25 C56,250.25 59,250 59,250 C59,250 59.5,191.5 54.25,178.5 C54.25,178.5 51.25,173.75 51.25,173.25 C51.25,172.75 80.25,166 93.25,160 C93.5,160 108.25,155 103.25,143.25 C103.25,143.75 96.625,127 96.625,127z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(201,201,201)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M96.625,127 C96.625,127 81,131.25 74.125,134.125 C67.85099792480469,136.74899291992188 55,144.25 45.5,151.5 C45,152 37.25,157.5 37.25,157.5 C37.25,157.5 33,161.25 33.75,165.25 C34.5,169.25 34.25,195.5 45,222.75 C45,223.5 56,250.25 56,250.25 C56,250.25 59,250 59,250 C59,250 59.5,191.5 54.25,178.5 C54.25,178.5 51.25,173.75 51.25,173.25 C51.25,172.75 80.25,166 93.25,160 C93.5,160 108.25,155 103.25,143.25 C103.25,143.75 96.625,127 96.625,127z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(134,75,3)"
                            fillOpacity={1}
                            d=" M37.75,250.25 C37.75,250.25 34.375,250.875 34.375,250.875 C34.375,250.875 33.75,257 34.125,261.5 C34.5,266 37.5,264.875 38,262.875 C38.5,260.875 37.75,250.25 37.75,250.25z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(201,201,201)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M37.75,250.25 C37.75,250.25 34.375,250.875 34.375,250.875 C34.375,250.875 33.75,257 34.125,261.5 C34.5,266 37.5,264.875 38,262.875 C38.5,260.875 37.75,250.25 37.75,250.25z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(134,75,3)"
                            fillOpacity={1}
                            d=" M59.25,249.875 C59.25,249.875 55.875,251.25 55.875,251.25 C55.875,251.25 55.5,254.625 54.875,255.375 C54.25,256.125 50.375,258.875 49.375,261.375 C48.375,263.875 50.25,264 51.875,263.375 C53.5,262.75 57.25,255.875 58.375,253.75 C59.5,251.625 59.25,249.875 59.25,249.875z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(201,201,201)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M59.25,249.875 C59.25,249.875 55.875,251.25 55.875,251.25 C55.875,251.25 55.5,254.625 54.875,255.375 C54.25,256.125 50.375,258.875 49.375,261.375 C48.375,263.875 50.25,264 51.875,263.375 C53.5,262.75 57.25,255.875 58.375,253.75 C59.5,251.625 59.25,249.875 59.25,249.875z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="url(#__lottie_element_1344)"
                            fillOpacity={1}
                            d=" M84,10.25 C82,10 73.75,11 73.5,11.25 C73.25,11.5 51.25,11.25 49.5,12 C47.75,12.75 42,11.25 42.5,12.25 C43,13.25 40.75,41.5 36.5,56.5 C36,59.25 36.25,63.75 45.75,65.5 C45.75,65.5 53.5,87.75 54.25,97 C55,106.25 55,115 54.25,117.5 C53.5,120 46.25,126.75 46.25,126.75 C46.25,126.75 62.75,131 65.5,138.5 C65.5,139 80.5,131.25 89,131.25 C89,131 98,130.75 98,130.75 C98,130.75 96.25,123.25 94.5,120.5 C92.75,117.75 90.5,91 90.5,88 C90.5,85 86,10.5 84,10.25z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(201,201,201)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M84,10.25 C82,10 73.75,11 73.5,11.25 C73.25,11.5 51.25,11.25 49.5,12 C47.75,12.75 42,11.25 42.5,12.25 C43,13.25 40.75,41.5 36.5,56.5 C36,59.25 36.25,63.75 45.75,65.5 C45.75,65.5 53.5,87.75 54.25,97 C55,106.25 55,115 54.25,117.5 C53.5,120 46.25,126.75 46.25,126.75 C46.25,126.75 62.75,131 65.5,138.5 C65.5,139 80.5,131.25 89,131.25 C89,131 98,130.75 98,130.75 C98,130.75 96.25,123.25 94.5,120.5 C92.75,117.75 90.5,91 90.5,88 C90.5,85 86,10.5 84,10.25z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(242,241,241)"
                            fillOpacity={1}
                            d=" M72.875,12.25 C72.875,12.25 48.25,12.375 48.25,12.375 C48.25,12.375 55,31.75 55,31.75 C55,31.75 55.875,37.5 56.5,40.125 C57.125,42.75 61.5,65.5 62.125,68.125 C62.75,70.75 64.625,80.375 65,81.5 C65.375,82.625 68.125,96 68.25,98.5 C68.375,101 68.33499908447266,109.052001953125 68.125,112.625 C67.875,116.875 67.375,119.125 66,121.25 C64.625,123.375 64.625,126.25 64.625,127.375 C64.625,128.5 65.375,137.25 65.375,137.25 C65.375,137.25 66.5,137.5 66.5,137.5 C66.5,137.5 66,128.875 66,127 C66,125.125 68.125,120 69,118.25 C69.875,116.5 70.375,104.5 69.625,98.375 C68.875,92.25 65.375,76.25 65.125,75.5 C64.875,74.75 59.625,50 59.375,47.25 C59.125,44.5 56.75,33.875 57.125,32.25 C57.5,30.625 62.375,20.75 67.125,17.25 C70.89299774169922,14.473999977111816 72.875,12.25 72.875,12.25z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(201,201,201)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M72.875,12.25 C72.875,12.25 48.25,12.375 48.25,12.375 C48.25,12.375 55,31.75 55,31.75 C55,31.75 55.875,37.5 56.5,40.125 C57.125,42.75 61.5,65.5 62.125,68.125 C62.75,70.75 64.625,80.375 65,81.5 C65.375,82.625 68.125,96 68.25,98.5 C68.375,101 68.33499908447266,109.052001953125 68.125,112.625 C67.875,116.875 67.375,119.125 66,121.25 C64.625,123.375 64.625,126.25 64.625,127.375 C64.625,128.5 65.375,137.25 65.375,137.25 C65.375,137.25 66.5,137.5 66.5,137.5 C66.5,137.5 66,128.875 66,127 C66,125.125 68.125,120 69,118.25 C69.875,116.5 70.375,104.5 69.625,98.375 C68.875,92.25 65.375,76.25 65.125,75.5 C64.875,74.75 59.625,50 59.375,47.25 C59.125,44.5 56.75,33.875 57.125,32.25 C57.5,30.625 62.375,20.75 67.125,17.25 C70.89299774169922,14.473999977111816 72.875,12.25 72.875,12.25z"
                          />
                        </g>
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(242,241,241)"
                            fillOpacity={1}
                            d=" M-9.25,154.25"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(201,201,201)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-9.25,154.25"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      />
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="url(#__lottie_element_1334)"
                            fillOpacity={1}
                            d=" M81.5,11.812000274658203 C79.66000366210938,13.701000213623047 79.5,14.5 79.5,14.5 C79.5,14.5 74,26.75 75,44 C76,61.25 77.5,80.25 77.5,80.25 C77.5,80.25 66,79.25 50.5,86.25 C49,87.25 30,91.25 27.75,91.25 C27.5,91.25 27.5,94 27.5,94 C27.5,94 81.25,94.25 84.75,94 C88.25,93.75 89.07499694824219,94.8759994506836 90.5,87.75 C91.75,81.5 94.5,36.25 85.75,14.25 C85,13.75 83.875,9.37399959564209 81.5,11.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(201,201,201)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M81.5,11.812000274658203 C79.66000366210938,13.701000213623047 79.5,14.5 79.5,14.5 C79.5,14.5 74,26.75 75,44 C76,61.25 77.5,80.25 77.5,80.25 C77.5,80.25 66,79.25 50.5,86.25 C49,87.25 30,91.25 27.75,91.25 C27.5,91.25 27.5,94 27.5,94 C27.5,94 81.25,94.25 84.75,94 C88.25,93.75 89.07499694824219,94.8759994506836 90.5,87.75 C91.75,81.5 94.5,36.25 85.75,14.25 C85,13.75 83.875,9.37399959564209 81.5,11.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445.25,371)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="url(#__lottie_element_1330)"
                            fillOpacity={1}
                            d=" M69.75,-16.25 C69.75,-16.25 51,0 51,0 C51,0 53.5,12 53.5,12 C53.5,12 70.25,9.5 70.25,9.5 C70.25,9.5 69.75,-16.25 69.75,-16.25z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(201,201,201)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M69.75,-16.25 C69.75,-16.25 51,0 51,0 C51,0 53.5,12 53.5,12 C53.5,12 70.25,9.5 70.25,9.5 C70.25,9.5 69.75,-16.25 69.75,-16.25z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(217,217,217)"
                            fillOpacity={1}
                            d=" M54.625,11 C54.625,11 51.25,14.75 51.25,14.75 C51.25,14.75 57.25,18.875 57.25,18.875 C57.25,18.875 63.125,16.375 63.125,16.375 C63.125,16.375 60.5,11 60.5,11 C60.5,11 57.625,12.75 57.625,12.75 C57.625,12.75 54.625,11 54.625,11z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(201,201,201)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M54.625,11 C54.625,11 51.25,14.75 51.25,14.75 C51.25,14.75 57.25,18.875 57.25,18.875 C57.25,18.875 63.125,16.375 63.125,16.375 C63.125,16.375 60.5,11 60.5,11 C60.5,11 57.625,12.75 57.625,12.75 C57.625,12.75 54.625,11 54.625,11z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M70.375,6.25 C70.375,6.25 60.5,11.25 60.5,11.25 C60.5,11.25 65,19.25 65.125,18.75 C69.25,15 73.875,12.625 73.875,12.625 C73.875,12.625 70.375,6.25 70.375,6.25z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(201,201,201)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M70.375,6.25 C70.375,6.25 60.5,11.25 60.5,11.25 C60.5,11.25 65,19.25 65.125,18.75 C69.25,15 73.875,12.625 73.875,12.625 C73.875,12.625 70.375,6.25 70.375,6.25z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M52,7.375 C52,7.375 47.5,11.5 47.5,11.5 C47.5,11.5 49.25,16 49.25,16 C49.25,16 54.625,10.375 54.625,10.375 C54.625,10.375 52,7.375 52,7.375z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(201,201,201)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M52,7.375 C52,7.375 47.5,11.5 47.5,11.5 C47.5,11.5 49.25,16 49.25,16 C49.25,16 54.625,10.375 54.625,10.375 C54.625,10.375 52,7.375 52,7.375z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(36,89,145)"
                            fillOpacity={1}
                            d=" M90.25,114.75 C90.25,114.75 76,117.25 76,117.25 C76,117.25 78.25,125.25 89,121.75 C91.55999755859375,120.91600036621094 90.25,114.75 90.25,114.75z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(201,201,201)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M90.25,114.75 C90.25,114.75 76,117.25 76,117.25 C76,117.25 78.25,125.25 89,121.75 C91.55999755859375,120.91600036621094 90.25,114.75 90.25,114.75z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(36,89,145)"
                            fillOpacity={1}
                            d=" M54.25,114.25 C54.25,114.25 52.375,116.125 50.875,118.25 C49.375,120.375 49.75,122.5 51.5,122.25 C53.25,122 57.375,116.125 57.375,116.125 C57.375,116.125 54.25,114.25 54.25,114.25z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(201,201,201)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M54.25,114.25 C54.25,114.25 52.375,116.125 50.875,118.25 C49.375,120.375 49.75,122.5 51.5,122.25 C53.25,122 57.375,116.125 57.375,116.125 C57.375,116.125 54.25,114.25 54.25,114.25z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9860047698020935,0.16671712696552277,-0.16671712696552277,0.9860047698020935,444.666015625,359.4787292480469)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,185,145)"
                            fillOpacity={1}
                            d=" M20.25,-53.875 C20.25,-53.875 19.125,-47.5 18.75,-43.75 C18.375,-40 18.25,-31 17.875,-28.75 C17.5,-26.5 16.375,-23 16.375,-20.25 C16.375,-17.5 17,-9.625 24.625,0.75 C32.25,11.125 46.875,5.75 50,4.5 C53.125,3.25 64.75,-1.5 70.125,-15.5 C75.5,-29.5 72.75,-36.625 72.75,-36.625 C72.75,-36.625 46.25,-50.625 46.25,-50.625 C46.25,-50.625 20.25,-53.875 20.25,-53.875z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(60,41,10)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M20.25,-53.875 C20.25,-53.875 19.125,-47.5 18.75,-43.75 C18.375,-40 18.25,-31 17.875,-28.75 C17.5,-26.5 16.375,-23 16.375,-20.25 C16.375,-17.5 17,-9.625 24.625,0.75 C32.25,11.125 46.875,5.75 50,4.5 C53.125,3.25 64.75,-1.5 70.125,-15.5 C75.5,-29.5 72.75,-36.625 72.75,-36.625 C72.75,-36.625 46.25,-50.625 46.25,-50.625 C46.25,-50.625 20.25,-53.875 20.25,-53.875z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9728728532791138,0.2313404232263565,-0.2313404232263565,0.9728728532791138,445.33294677734375,355.53509521484375)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(74,51,15)"
                            fillOpacity={1}
                            d=" M72.49700164794922,-85.83200073242188 C62.74700164794922,-83.58200073242188 66.24700164794922,-74.08200073242188 66.49700164794922,-74.08200073242188 C62.49700164794922,-78.08200073242188 47.25,-78.25 46.75,-78.25 C27,-76 19.988000869750977,-69.4000015258789 16.75,-62 C13.25,-54 16.25,-47.25 16.25,-47.25 C16.25,-47.25 17.5,-52 17.25,-52 C24.75,-38.5 47.75,-40 48.25,-40 C23.75,-43 22.75,-50 22.75,-50.5 C30.5,-44.25 65.25,-38.5 65.25,-38.5 C65.25,-38.5 63.59700012207031,-32.65700149536133 64.88099670410156,-24.51099967956543 C66.12000274658203,-16.645999908447266 67.96399688720703,-11.168999671936035 67.96399688720703,-11.168999671936035 C67.96399688720703,-11.168999671936035 75,-16.75 74.75,-16.25 C81.18800354003906,-30.16699981689453 83.98600006103516,-37.11600112915039 84.06500244140625,-46.28499984741211 C84.12100219726562,-52.827999114990234 79,-64 79,-64 C89.5,-65.25 91.25,-72 89.75,-76.25 C88.25,-80.5 82.24700164794922,-88.08200073242188 72.49700164794922,-85.83200073242188z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(201,201,201)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M72.49700164794922,-85.83200073242188 C62.74700164794922,-83.58200073242188 66.24700164794922,-74.08200073242188 66.49700164794922,-74.08200073242188 C62.49700164794922,-78.08200073242188 47.25,-78.25 46.75,-78.25 C27,-76 19.988000869750977,-69.4000015258789 16.75,-62 C13.25,-54 16.25,-47.25 16.25,-47.25 C16.25,-47.25 17.5,-52 17.25,-52 C24.75,-38.5 47.75,-40 48.25,-40 C23.75,-43 22.75,-50 22.75,-50.5 C30.5,-44.25 65.25,-38.5 65.25,-38.5 C65.25,-38.5 63.59700012207031,-32.65700149536133 64.88099670410156,-24.51099967956543 C66.12000274658203,-16.645999908447266 67.96399688720703,-11.168999671936035 67.96399688720703,-11.168999671936035 C67.96399688720703,-11.168999671936035 75,-16.75 74.75,-16.25 C81.18800354003906,-30.16699981689453 83.98600006103516,-37.11600112915039 84.06500244140625,-46.28499984741211 C84.12100219726562,-52.827999114990234 79,-64 79,-64 C89.5,-65.25 91.25,-72 89.75,-76.25 C88.25,-80.5 82.24700164794922,-88.08200073242188 72.49700164794922,-85.83200073242188z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9860047698020935,0.16671712696552277,-0.16671712696552277,0.9860047698020935,444.66595458984375,359.4792175292969)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(60,41,10)"
                            strokeOpacity={1}
                            strokeWidth={1}
                            d=" M26,-71.125 C26,-71.125 29.125,-54.25 45.625,-45.25"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9860047698020935,0.16671712696552277,-0.16671712696552277,0.9860047698020935,444.66571044921875,359.47869873046875)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(60,41,10)"
                            strokeOpacity={1}
                            strokeWidth={1}
                            d=" M29,-73.25 C29,-73.25 39.375,-53 86.375,-48.5"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9860047698020935,0.16671712696552277,-0.16671712696552277,0.9860047698020935,444.665771484375,359.4786376953125)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(60,41,10)"
                            strokeOpacity={1}
                            strokeWidth={1}
                            d=" M71.625,-51 C71.625,-51 76.375,-33.875 81.75,-28.125"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9860047698020935,0.16671712696552277,-0.16671712696552277,0.9860047698020935,444.66546630859375,359.4787902832031)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(60,41,10)"
                            strokeOpacity={1}
                            strokeWidth={1}
                            d=" M53,-78 C53,-78 68.625,-63.5 84.125,-57.625"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9860047698020935,0.16671712696552277,-0.16671712696552277,0.9860047698020935,444.6658935546875,359.4781188964844)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(60,41,10)"
                            strokeOpacity={1}
                            strokeWidth={1}
                            d=" M86.875,-83 C86.875,-83 90.875,-76.125 88.25,-68.625"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9860047698020935,0.16671712696552277,-0.16671712696552277,0.9860047698020935,444.6656188964844,359.478271484375)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(60,41,10)"
                            fillOpacity={1}
                            d=" M72,-73.75 C71.625,-72.5 83,-62.875 83.25,-62.625 C88.375,-62.375 92.5,-65.75 91.75,-65.625 C90.5,-65.25 86.5,-65.875 86.25,-65.875 C80.75,-66.125 72.25,-73.625 72,-73.75z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(60,41,10)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M72,-73.75 C71.625,-72.5 83,-62.875 83.25,-62.625 C88.375,-62.375 92.5,-65.75 91.75,-65.625 C90.5,-65.25 86.5,-65.875 86.25,-65.875 C80.75,-66.125 72.25,-73.625 72,-73.75z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9910765290260315,-0.13329429924488068,0.13329429924488068,0.9910765290260315,447.0968322753906,383.4911804199219)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,185,145)"
                            fillOpacity={1}
                            d=" M78.375,-27.75 C74.125,-28.125 69.5,-19.5 69.5,-19.5 C69.5,-19.5 69.5,-14.375 69.875,-14.5 C76.875,-14 84.25,-15.375 85.125,-19.875 C86.5,-26.25 82.625,-27.375 78.375,-27.75z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(60,41,10)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M78.375,-27.75 C74.125,-28.125 69.5,-19.5 69.5,-19.5 C69.5,-19.5 69.5,-14.375 69.875,-14.5 C76.875,-14 84.25,-15.375 85.125,-19.875 C86.5,-26.25 82.625,-27.375 78.375,-27.75z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9910765290260315,-0.13329429924488068,0.13329429924488068,0.9910765290260315,447.0968322753906,383.4911804199219)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(241,157,108)"
                            fillOpacity={1}
                            d=" M77.625,-23.375 C78.75,-23.75 83.5,-23.875 83.125,-23.375 C80.625,-26.75 74.875,-23.25 75.625,-23.25 C76.375,-23.25 77,-22.125 77.375,-22.25 C78.125,-18.875 74.375,-18.875 74.375,-18.875 C74.375,-18.875 74.375,-17.875 77.375,-19.125 C80.375,-20.375 77.5,-23.25 77.625,-23.375z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(60,41,10)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M77.625,-23.375 C78.75,-23.75 83.5,-23.875 83.125,-23.375 C80.625,-26.75 74.875,-23.25 75.625,-23.25 C76.375,-23.25 77,-22.125 77.375,-22.25 C78.125,-18.875 74.375,-18.875 74.375,-18.875 C74.375,-18.875 74.375,-17.875 77.375,-19.125 C80.375,-20.375 77.5,-23.25 77.625,-23.375z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      />
                      <g
                        transform="matrix(0.9860047698020935,0.16671712696552277,-0.16671712696552277,0.9860047698020935,444.6658935546875,359.47894287109375)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(95,43,7)"
                            fillOpacity={1}
                            d=" M52,-40.125 C47.125,-41.875 37.5,-37.375 37.625,-37.25 C52,-40.75 59.25,-33.875 59.25,-33.875 C59.25,-33.875 56.875,-38.375 52,-40.125z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(60,41,10)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M52,-40.125 C47.125,-41.875 37.5,-37.375 37.625,-37.25 C52,-40.75 59.25,-33.875 59.25,-33.875 C59.25,-33.875 56.875,-38.375 52,-40.125z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9965915083885193,0.08249513059854507,-0.08249513059854507,0.9965915083885193,448.0257568359375,361.5054016113281)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(95,43,7)"
                            fillOpacity={1}
                            d=" M19,-44.125 C19,-44 17.125,-42.75 18.25,-41.125 C18.25,-41.25 20.75,-44.5 29.25,-42.25 C29,-42.25 26.125,-45.625 19,-44.125z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(60,41,10)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M19,-44.125 C19,-44 17.125,-42.75 18.25,-41.125 C18.25,-41.25 20.75,-44.5 29.25,-42.25 C29,-42.25 26.125,-45.625 19,-44.125z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9860076904296875,0.16669993102550507,-0.16669993102550507,0.9860076904296875,445.2627868652344,358.5054016113281)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,42.875,-24.375)"
                        >
                          <path
                            fill="rgb(0,0,0)"
                            fillOpacity={1}
                            d=" M0,-3 C1.3797500133514404,-3 2.5,-1.6556999683380127 2.5,0 C2.5,1.6556999683380127 1.3797500133514404,3 0,3 C-1.3797500133514404,3 -2.5,1.6556999683380127 -2.5,0 C-2.5,-1.6556999683380127 -1.3797500133514404,-3 0,-3z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(60,41,10)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M0,-3 C1.3797500133514404,-3 2.5,-1.6556999683380127 2.5,0 C2.5,1.6556999683380127 1.3797500133514404,3 0,3 C-1.3797500133514404,3 -2.5,1.6556999683380127 -2.5,0 C-2.5,-1.6556999683380127 -1.3797500133514404,-3 0,-3z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9860076904296875,0.16669993102550507,-0.16669993102550507,0.9860076904296875,445.54974365234375,359.06024169921875)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,25.812999725341797,-24.375)"
                        >
                          <path
                            fill="rgb(0,0,0)"
                            fillOpacity={1}
                            d=" M0,-2.125 C1.0003187656402588,-2.125 1.8125,-1.1727875471115112 1.8125,0 C1.8125,1.1727875471115112 1.0003187656402588,2.125 0,2.125 C-1.0003187656402588,2.125 -1.8125,1.1727875471115112 -1.8125,0 C-1.8125,-1.1727875471115112 -1.0003187656402588,-2.125 0,-2.125z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(60,41,10)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M0,-2.125 C1.0003187656402588,-2.125 1.8125,-1.1727875471115112 1.8125,0 C1.8125,1.1727875471115112 1.0003187656402588,2.125 0,2.125 C-1.0003187656402588,2.125 -1.8125,1.1727875471115112 -1.8125,0 C-1.8125,-1.1727875471115112 -1.0003187656402588,-2.125 0,-2.125z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9994023442268372,0.034568097442388535,-0.034568097442388535,0.9994023442268372,804.4440307617188,328.7503967285156)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,185,145)"
                            fillOpacity={1}
                            d=" M-315.125,16.875 C-315.125,16.875 -315.75,20.125 -315.75,20.125 C-315.75,20.125 -307.625,20.5 -307.625,20.5 C-307.625,20.5 -306.5,17.5 -306.5,17.5 C-306.5,17.5 -315.125,16.875 -315.125,16.875z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(158,158,158)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-315.125,16.875 C-315.125,16.875 -315.75,20.125 -315.75,20.125 C-315.75,20.125 -307.625,20.5 -307.625,20.5 C-307.625,20.5 -306.5,17.5 -306.5,17.5 C-306.5,17.5 -315.125,16.875 -315.125,16.875z"
                          />
                        </g>
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,185,145)"
                            fillOpacity={1}
                            d=" M-331.625,16.125 C-331.625,16.125 -331.75,19.875 -331.75,19.875 C-331.75,19.875 -326.5,20.125 -326.5,20.125 C-326.5,20.125 -326.375,16.75 -326.375,16.75 C-326.375,16.75 -331.625,16.125 -331.625,16.125z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(158,158,158)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-331.625,16.125 C-331.625,16.125 -331.75,19.875 -331.75,19.875 C-331.75,19.875 -326.5,20.125 -326.5,20.125 C-326.5,20.125 -326.375,16.75 -326.375,16.75 C-326.375,16.75 -331.625,16.125 -331.625,16.125z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9860076904296875,0.16669993102550507,-0.16669993102550507,0.9860076904296875,445.63092041015625,359.3276672363281)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(208,135,91)"
                            fillOpacity={1}
                            d=" M29.125,-40 C29.125,-40 31.125,-27.625 29,-20.75 C28.75,-20.625 26.625,-15.375 21.125,-16 C21,-16 21.125,-9 28.25,-10.875 C28.25,-10.875 22.625,-11.25 22.625,-15 C22.625,-15 28.625,-14.125 30.5,-21.375 C32.375,-28.625 29.125,-40 29.125,-40z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(60,41,10)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M29.125,-40 C29.125,-40 31.125,-27.625 29,-20.75 C28.75,-20.625 26.625,-15.375 21.125,-16 C21,-16 21.125,-9 28.25,-10.875 C28.25,-10.875 22.625,-11.25 22.625,-15 C22.625,-15 28.625,-14.125 30.5,-21.375 C32.375,-28.625 29.125,-40 29.125,-40z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9999236464500427,0.01235661655664444,-0.01235661655664444,0.9999236464500427,446.0953369140625,369.719482421875)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="url(#__lottie_element_1262)"
                            fillOpacity={1}
                            d=" M-1.5,37 C-1.5,37 -4.5,38.75 -4.5,38.75 C-4.5,38.75 11.875,82 16.5,88 C18.445999145507812,90.52400207519531 20.5,93.25 23.75,93 C27,92.75 34.12300109863281,84.51100158691406 24.75,70.75 C20.88599967956543,65.07599639892578 20.25,64.25 11.5,54.5 C2.75,44.75 -1.5,37 -1.5,37z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(60,41,10)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-1.5,37 C-1.5,37 -4.5,38.75 -4.5,38.75 C-4.5,38.75 11.875,82 16.5,88 C18.445999145507812,90.52400207519531 20.5,93.25 23.75,93 C27,92.75 34.12300109863281,84.51100158691406 24.75,70.75 C20.88599967956543,65.07599639892578 20.25,64.25 11.5,54.5 C2.75,44.75 -1.5,37 -1.5,37z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9999236464500427,0.01235661655664444,-0.01235661655664444,0.9999236464500427,446.0953369140625,369.719482421875)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,185,145)"
                            fillOpacity={1}
                            d=" M-5.25,22 C-5.25,22 -8.375,21.625 -8.25,30 C-8.375,30.25 -20.25,29 -24,27.625 C-27.75,26.25 -31.5,25.875 -31.625,25.875 C-31.75,25.875 -32.25,27.5 -30.25,27.75 C-28.25,28 -21.75,30.875 -21.75,30.875 C-21.75,30.875 -31.687000274658203,31.812999725341797 -32.3120002746582,31.937999725341797 C-32.70199966430664,32.01599884033203 -33.375,32 -33.04100036621094,33.06100082397461 C-32.5,33.4379997253418 -31.690000534057617,33.25 -31.125,33.25 C-29.625,33.25 -21.25,33.375 -21.25,33.375 C-21.25,33.375 -21.875,38.125 -18,38.5 C-14.125,38.875 -7.5,37.75 -6.625,38 C-5.75,38.25 -4.375,38.875 -4.375,38.875 C-4.375,38.875 -1.25,37.375 -1.25,37.375 C-1.25,37.375 -4.625,33 -5,28.625 C-5.375,24.25 -5.25,22 -5.25,22z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(60,41,10)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-5.25,22 C-5.25,22 -8.375,21.625 -8.25,30 C-8.375,30.25 -20.25,29 -24,27.625 C-27.75,26.25 -31.5,25.875 -31.625,25.875 C-31.75,25.875 -32.25,27.5 -30.25,27.75 C-28.25,28 -21.75,30.875 -21.75,30.875 C-21.75,30.875 -31.687000274658203,31.812999725341797 -32.3120002746582,31.937999725341797 C-32.70199966430664,32.01599884033203 -33.375,32 -33.04100036621094,33.06100082397461 C-32.5,33.4379997253418 -31.690000534057617,33.25 -31.125,33.25 C-29.625,33.25 -21.25,33.375 -21.25,33.375 C-21.25,33.375 -21.875,38.125 -18,38.5 C-14.125,38.875 -7.5,37.75 -6.625,38 C-5.75,38.25 -4.375,38.875 -4.375,38.875 C-4.375,38.875 -1.25,37.375 -1.25,37.375 C-1.25,37.375 -4.625,33 -5,28.625 C-5.375,24.25 -5.25,22 -5.25,22z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9999236464500427,0.01235661655664444,-0.01235661655664444,0.9999236464500427,446.0953369140625,369.719482421875)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(140,99,75)"
                            fillOpacity={1}
                            d=" M-8.375,28 C-8.375,28 -33.5,30.125 -33.5,30.125 C-33.5,30.125 -36.3120002746582,31.375 -36.3120002746582,31.375 C-36.3120002746582,31.375 -33.375,31.5 -33.375,31.5 C-33.375,31.5 -8.875,30 -8.25,29.5 C-7.625,29 -8.375,28 -8.375,28z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(60,41,10)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-8.375,28 C-8.375,28 -33.5,30.125 -33.5,30.125 C-33.5,30.125 -36.3120002746582,31.375 -36.3120002746582,31.375 C-36.3120002746582,31.375 -33.375,31.5 -33.375,31.5 C-33.375,31.5 -8.875,30 -8.25,29.5 C-7.625,29 -8.375,28 -8.375,28z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,185,145)"
                            fillOpacity={1}
                            d=" M18.75,79.875 C18.5,78.875 17.375,81.125 18.125,82.875 C18.875,84.625 20.125,86.75 19.625,87 C19.125,87.25 16.125,86.875 15.25,86.125 C14.375,85.375 12.875,85.125 12.375,84.125 C11.875,83.125 10.914999961853027,86.47000122070312 12.25,88.25 C12.125,88.125 12.5,92.75 15,93.5 C17.5,94.25 26.75,94 26.75,94 C26.75,94 26.875,91.125 26.875,91.125 C26.875,91.125 20.625,83.125 20.625,83.125 C20.625,83.125 19,80.875 18.75,79.875z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(60,41,10)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M18.75,79.875 C18.5,78.875 17.375,81.125 18.125,82.875 C18.875,84.625 20.125,86.75 19.625,87 C19.125,87.25 16.125,86.875 15.25,86.125 C14.375,85.375 12.875,85.125 12.375,84.125 C11.875,83.125 10.914999961853027,86.47000122070312 12.25,88.25 C12.125,88.125 12.5,92.75 15,93.5 C17.5,94.25 26.75,94 26.75,94 C26.75,94 26.875,91.125 26.875,91.125 C26.875,91.125 20.625,83.125 20.625,83.125 C20.625,83.125 19,80.875 18.75,79.875z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445.00054931640625,369.9999694824219)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 29.0939998626709,0.03200000151991844 35.40599822998047,-0.656000018119812 C41.65599822998047,-1.718000054359436 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 29.0939998626709,0.03200000151991844 35.40599822998047,-0.656000018119812 C41.65599822998047,-1.718000054359436 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445.0001220703125,369.9998474121094)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.187999725341797,-3.5 28.187999725341797,-3.5 C28.187999725341797,-3.5 28.937999725341797,-1.187000036239624 34.9379997253418,-1.562000036239624 C41.1879997253418,-2.624000072479248 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.187999725341797,-3.5 28.187999725341797,-3.5 C28.187999725341797,-3.5 28.937999725341797,-1.187000036239624 34.9379997253418,-1.562000036239624 C41.1879997253418,-2.624000072479248 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,444.9996032714844,370.00048828125)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.5,-0.25 34.8120002746582,-0.9380000233650208 C41.0620002746582,-2 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.5,-0.25 34.8120002746582,-0.9380000233650208 C41.0620002746582,-2 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445.0002136230469,370.0008239746094)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.312000274658203,-3.437999963760376 28.312000274658203,-3.437999963760376 C28.312000274658203,-3.437999963760376 28.187999725341797,-2.125 34.1879997253418,-2.5 C40.4379997253418,-3.562000036239624 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.312000274658203,-3.437999963760376 28.312000274658203,-3.437999963760376 C28.312000274658203,-3.437999963760376 28.187999725341797,-2.125 34.1879997253418,-2.5 C40.4379997253418,-3.562000036239624 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445.00079345703125,370.00018310546875)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.218000411987305,-2.3429999351501465 32.8120002746582,-3.062000036239624 C39.0620002746582,-4.124000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.218000411987305,-2.3429999351501465 32.8120002746582,-3.062000036239624 C39.0620002746582,-4.124000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445.000732421875,370.0003356933594)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 29.312000274658203,-3.937999963760376 29.312000274658203,-3.937999963760376 C29.312000274658203,-3.937999963760376 30.625999450683594,-3.4690001010894775 32.4379997253418,-3.75 C38.715999603271484,-4.723999977111816 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 29.312000274658203,-3.937999963760376 29.312000274658203,-3.937999963760376 C29.312000274658203,-3.937999963760376 30.625999450683594,-3.4690001010894775 32.4379997253418,-3.75 C38.715999603271484,-4.723999977111816 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445.0002136230469,370.00006103515625)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 26.312999725341797,-2.874000072479248 32.625,-3.562000036239624 C38.875,-4.624000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 26.312999725341797,-2.874000072479248 32.625,-3.562000036239624 C38.875,-4.624000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,444.99957275390625,370)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 27.625,-3.187999963760376 27.625,-3.187999963760376 C27.625,-3.187999963760376 25.437999725341797,-2.25 30.5,-3.625 C36.625,-5.313000202178955 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 27.625,-3.187999963760376 27.625,-3.187999963760376 C27.625,-3.187999963760376 25.437999725341797,-2.25 30.5,-3.625 C36.625,-5.313000202178955 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9999992847442627,-0.0011750260600820184,0.0011750260600820184,0.9999992847442627,445.00787353515625,370.0737609863281)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(95,43,7)"
                            fillOpacity={1}
                            d=" M36.3120002746582,-7.875 C36.3120002746582,-7.875 31.812000274658203,-4.561999797821045 31.812000274658203,-4.561999797821045 C31.812000274658203,-4.561999797821045 36.4379997253418,-3.937999963760376 37.9379997253418,-7.438000202178955 C39.270999908447266,-10.54800033569336 36.3120002746582,-7.875 36.3120002746582,-7.875z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M36.3120002746582,-7.875 C36.3120002746582,-7.875 31.812000274658203,-4.561999797821045 31.812000274658203,-4.561999797821045 C31.812000274658203,-4.561999797821045 36.4379997253418,-3.937999963760376 37.9379997253418,-7.438000202178955 C39.270999908447266,-10.54800033569336 36.3120002746582,-7.875 36.3120002746582,-7.875z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9999992847442627,-0.0011750260600820184,0.0011750260600820184,0.9999992847442627,445.0086669921875,370.07342529296875)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M35.5,-6.625 C35.5,-6.625 32.1879997253418,-4.75 32.1879997253418,-4.75 C32.1879997253418,-4.75 35.9379997253418,-4.436999797821045 37.1879997253418,-6.875 C38.731998443603516,-9.885000228881836 35.5,-6.625 35.5,-6.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M35.5,-6.625 C35.5,-6.625 32.1879997253418,-4.75 32.1879997253418,-4.75 C32.1879997253418,-4.75 35.9379997253418,-4.436999797821045 37.1879997253418,-6.875 C38.731998443603516,-9.885000228881836 35.5,-6.625 35.5,-6.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.8771325945854187,-0.16934265196323395,0.18956336379051208,0.9818684458732605,450.4638671875,376.2186279296875)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,35.34400177001953,-5.811999797821045)"
                        >
                          <path
                            fill="rgb(95,43,7)"
                            fillOpacity={1}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.6730709075927734,-0.12994569540023804,0.12994569540023804,0.6730709075927734,457.3297119140625,373.0314636230469)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,35.34400177001953,-5.811999797821045)"
                        >
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9996257424354553,-0.027356140315532684,0.027356140315532684,0.9996257424354553,445.2222595214844,371.7070007324219)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 29.0939998626709,0.03200000151991844 35.40599822998047,-0.656000018119812 C41.65599822998047,-1.718000054359436 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 29.0939998626709,0.03200000151991844 35.40599822998047,-0.656000018119812 C41.65599822998047,-1.718000054359436 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9996257424354553,-0.027356140315532684,0.027356140315532684,0.9996257424354553,445.2218017578125,371.7068786621094)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.187999725341797,-3.5 28.187999725341797,-3.5 C28.187999725341797,-3.5 28.937999725341797,-1.187000036239624 34.9379997253418,-1.562000036239624 C41.1879997253418,-2.624000072479248 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.187999725341797,-3.5 28.187999725341797,-3.5 C28.187999725341797,-3.5 28.937999725341797,-1.187000036239624 34.9379997253418,-1.562000036239624 C41.1879997253418,-2.624000072479248 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9988081455230713,-0.04880848154425621,0.04880848154425621,0.9988081455230713,445.427978515625,373.0423889160156)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.5,-0.25 34.8120002746582,-0.9380000233650208 C41.0620002746582,-2 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.5,-0.25 34.8120002746582,-0.9380000233650208 C41.0620002746582,-2 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9988081455230713,-0.04880848154425621,0.04880848154425621,0.9988081455230713,445.4286193847656,373.0426940917969)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.312000274658203,-3.437999963760376 28.312000274658203,-3.437999963760376 C28.312000274658203,-3.437999963760376 28.187999725341797,-2.125 34.1879997253418,-2.5 C40.4379997253418,-3.562000036239624 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.312000274658203,-3.437999963760376 28.312000274658203,-3.437999963760376 C28.312000274658203,-3.437999963760376 28.187999725341797,-2.125 34.1879997253418,-2.5 C40.4379997253418,-3.562000036239624 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9976479411125183,-0.06854607164859772,0.06854607164859772,0.9976479411125183,445.6447448730469,374.2672119140625)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.218000411987305,-2.3429999351501465 32.8120002746582,-3.062000036239624 C39.0620002746582,-4.124000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.218000411987305,-2.3429999351501465 32.8120002746582,-3.062000036239624 C39.0620002746582,-4.124000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9976479411125183,-0.06854607164859772,0.06854607164859772,0.9976479411125183,445.64471435546875,374.2673645019531)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 29.312000274658203,-3.937999963760376 29.312000274658203,-3.937999963760376 C29.312000274658203,-3.937999963760376 30.625999450683594,-3.4690001010894775 32.4379997253418,-3.75 C38.715999603271484,-4.723999977111816 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 29.312000274658203,-3.937999963760376 29.312000274658203,-3.937999963760376 C29.312000274658203,-3.937999963760376 30.625999450683594,-3.4690001010894775 32.4379997253418,-3.75 C38.715999603271484,-4.723999977111816 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9966864585876465,-0.08133956789970398,0.08133956789970398,0.9966864585876465,445.7970275878906,375.0597229003906)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 26.312999725341797,-2.874000072479248 32.625,-3.562000036239624 C38.875,-4.624000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 26.312999725341797,-2.874000072479248 32.625,-3.562000036239624 C38.875,-4.624000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9966864585876465,-0.08133956789970398,0.08133956789970398,0.9966864585876465,445.79638671875,375.0597229003906)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 27.625,-3.187999963760376 27.625,-3.187999963760376 C27.625,-3.187999963760376 25.437999725341797,-2.25 30.5,-3.625 C36.625,-5.313000202178955 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 27.625,-3.187999963760376 27.625,-3.187999963760376 C27.625,-3.187999963760376 25.437999725341797,-2.25 30.5,-3.625 C36.625,-5.313000202178955 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9965059757232666,-0.08352131396532059,0.08352131396532059,0.9965059757232666,445.8232727050781,375.1951599121094)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(95,43,7)"
                            fillOpacity={1}
                            d=" M36.3120002746582,-7.875 C36.3120002746582,-7.875 31.812000274658203,-4.561999797821045 31.812000274658203,-4.561999797821045 C31.812000274658203,-4.561999797821045 36.4379997253418,-3.937999963760376 37.9379997253418,-7.438000202178955 C39.270999908447266,-10.54800033569336 36.3120002746582,-7.875 36.3120002746582,-7.875z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M36.3120002746582,-7.875 C36.3120002746582,-7.875 31.812000274658203,-4.561999797821045 31.812000274658203,-4.561999797821045 C31.812000274658203,-4.561999797821045 36.4379997253418,-3.937999963760376 37.9379997253418,-7.438000202178955 C39.270999908447266,-10.54800033569336 36.3120002746582,-7.875 36.3120002746582,-7.875z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9965059757232666,-0.08352131396532059,0.08352131396532059,0.9965059757232666,445.82403564453125,375.1947326660156)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M35.5,-6.625 C35.5,-6.625 32.1879997253418,-4.75 32.1879997253418,-4.75 C32.1879997253418,-4.75 35.9379997253418,-4.436999797821045 37.1879997253418,-6.875 C38.731998443603516,-9.885000228881836 35.5,-6.625 35.5,-6.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M35.5,-6.625 C35.5,-6.625 32.1879997253418,-4.75 32.1879997253418,-4.75 C32.1879997253418,-4.75 35.9379997253418,-4.436999797821045 37.1879997253418,-6.875 C38.731998443603516,-9.885000228881836 35.5,-6.625 35.5,-6.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.8628783822059631,-0.23125599324703217,0.25886961817741394,0.9659122228622437,451.5653991699219,380.2383728027344)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,35.34400177001953,-5.811999797821045)"
                        >
                          <path
                            fill="rgb(95,43,7)"
                            fillOpacity={1}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.6621329188346863,-0.1774551272392273,0.1774551272392273,0.6621329188346863,458.1873779296875,376.5712890625)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,35.34400177001953,-5.811999797821045)"
                        >
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9965059757232666,-0.08352131396532059,0.08352131396532059,0.9965059757232666,445.824462890625,375.1947021484375)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 29.0939998626709,0.03200000151991844 35.40599822998047,-0.656000018119812 C41.65599822998047,-1.718000054359436 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 29.0939998626709,0.03200000151991844 35.40599822998047,-0.656000018119812 C41.65599822998047,-1.718000054359436 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9965059757232666,-0.08352131396532059,0.08352131396532059,0.9965059757232666,445.8240051269531,375.1946105957031)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.187999725341797,-3.5 28.187999725341797,-3.5 C28.187999725341797,-3.5 28.937999725341797,-1.187000036239624 34.9379997253418,-1.562000036239624 C41.1879997253418,-2.624000072479248 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.187999725341797,-3.5 28.187999725341797,-3.5 C28.187999725341797,-3.5 28.937999725341797,-1.187000036239624 34.9379997253418,-1.562000036239624 C41.1879997253418,-2.624000072479248 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9965059757232666,-0.08352131396532059,0.08352131396532059,0.9965059757232666,445.82354736328125,375.1952819824219)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.5,-0.25 34.8120002746582,-0.9380000233650208 C41.0620002746582,-2 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.5,-0.25 34.8120002746582,-0.9380000233650208 C41.0620002746582,-2 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9965059757232666,-0.08352131396532059,0.08352131396532059,0.9965059757232666,445.82421875,375.195556640625)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.312000274658203,-3.437999963760376 28.312000274658203,-3.437999963760376 C28.312000274658203,-3.437999963760376 28.187999725341797,-2.125 34.1879997253418,-2.5 C40.4379997253418,-3.562000036239624 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.312000274658203,-3.437999963760376 28.312000274658203,-3.437999963760376 C28.312000274658203,-3.437999963760376 28.187999725341797,-2.125 34.1879997253418,-2.5 C40.4379997253418,-3.562000036239624 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9965059757232666,-0.08352131396532059,0.08352131396532059,0.9965059757232666,445.82354736328125,375.1952819824219)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 29.027999877929688,-3.753000020980835 33.77899932861328,-5.070000171661377 C39.45199966430664,-7.269000053405762 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 29.027999877929688,-3.753000020980835 33.77899932861328,-5.070000171661377 C39.45199966430664,-7.269000053405762 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9990367293357849,-0.043881434947252274,0.043881434947252274,0.9990367293357849,445.379150390625,372.7357482910156)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.218000411987305,-2.3429999351501465 32.8120002746582,-3.062000036239624 C39.0620002746582,-4.124000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.218000411987305,-2.3429999351501465 32.8120002746582,-3.062000036239624 C39.0620002746582,-4.124000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9990367293357849,-0.043881434947252274,0.043881434947252274,0.9990367293357849,445.3791198730469,372.73590087890625)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 29.312000274658203,-3.937999963760376 29.312000274658203,-3.937999963760376 C29.312000274658203,-3.937999963760376 30.625999450683594,-3.4690001010894775 32.4379997253418,-3.75 C38.715999603271484,-4.723999977111816 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 29.312000274658203,-3.937999963760376 29.312000274658203,-3.937999963760376 C29.312000274658203,-3.937999963760376 30.625999450683594,-3.4690001010894775 32.4379997253418,-3.75 C38.715999603271484,-4.723999977111816 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9997391700744629,0.022839536890387535,-0.022839536890387535,0.9997391700744629,444.8509216308594,368.5707092285156)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 26.312999725341797,-2.874000072479248 32.625,-3.562000036239624 C38.875,-4.624000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 26.312999725341797,-2.874000072479248 32.625,-3.562000036239624 C38.875,-4.624000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9997391700744629,0.022839536890387535,-0.022839536890387535,0.9997391700744629,444.85028076171875,368.5706481933594)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 27.625,-3.187999963760376 27.625,-3.187999963760376 C27.625,-3.187999963760376 25.437999725341797,-2.25 30.5,-3.625 C36.625,-5.313000202178955 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 27.625,-3.187999963760376 27.625,-3.187999963760376 C27.625,-3.187999963760376 25.437999725341797,-2.25 30.5,-3.625 C36.625,-5.313000202178955 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9969237446784973,0.07837790995836258,-0.07837790995836258,0.9969237446784973,444.62335205078125,365.079345703125)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(95,43,7)"
                            fillOpacity={1}
                            d=" M36.3120002746582,-7.875 C36.3120002746582,-7.875 31.812000274658203,-4.561999797821045 31.812000274658203,-4.561999797821045 C31.812000274658203,-4.561999797821045 36.4379997253418,-3.937999963760376 37.9379997253418,-7.438000202178955 C39.270999908447266,-10.54800033569336 36.3120002746582,-7.875 36.3120002746582,-7.875z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M36.3120002746582,-7.875 C36.3120002746582,-7.875 31.812000274658203,-4.561999797821045 31.812000274658203,-4.561999797821045 C31.812000274658203,-4.561999797821045 36.4379997253418,-3.937999963760376 37.9379997253418,-7.438000202178955 C39.270999908447266,-10.54800033569336 36.3120002746582,-7.875 36.3120002746582,-7.875z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9969237446784973,0.07837790995836258,-0.07837790995836258,0.9969237446784973,444.6241455078125,365.0790710449219)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M35.5,-6.625 C35.5,-6.625 32.1879997253418,-4.75 32.1879997253418,-4.75 C32.1879997253418,-4.75 35.9379997253418,-4.436999797821045 37.1879997253418,-6.875 C38.731998443603516,-9.885000228881836 35.5,-6.625 35.5,-6.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M35.5,-6.625 C35.5,-6.625 32.1879997253418,-4.75 32.1879997253418,-4.75 C32.1879997253418,-4.75 35.9379997253418,-4.436999797821045 37.1879997253418,-6.875 C38.731998443603516,-9.885000228881836 35.5,-6.625 35.5,-6.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.8927660584449768,-0.03173680603504181,0.03552640974521637,0.9993686676025391,449.06756591796875,367.2411804199219)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,35.34400177001953,-5.811999797821045)"
                        >
                          <path
                            fill="rgb(95,43,7)"
                            fillOpacity={1}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.685067355632782,-0.02435333840548992,0.02435333840548992,0.685067355632782,456.3435363769531,365.15350341796875)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,35.34400177001953,-5.811999797821045)"
                        >
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9860047698020935,0.16671712696552277,-0.16671712696552277,0.9860047698020935,444.66656494140625,359.4787902832031)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 29.0939998626709,0.03200000151991844 35.40599822998047,-0.656000018119812 C41.65599822998047,-1.718000054359436 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 29.0939998626709,0.03200000151991844 35.40599822998047,-0.656000018119812 C41.65599822998047,-1.718000054359436 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9860047698020935,0.16671712696552277,-0.16671712696552277,0.9860047698020935,444.6661376953125,359.47857666015625)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.187999725341797,-3.5 28.187999725341797,-3.5 C28.187999725341797,-3.5 28.937999725341797,-1.187000036239624 34.9379997253418,-1.562000036239624 C41.1879997253418,-2.624000072479248 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.187999725341797,-3.5 28.187999725341797,-3.5 C28.187999725341797,-3.5 28.937999725341797,-1.187000036239624 34.9379997253418,-1.562000036239624 C41.1879997253418,-2.624000072479248 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9860047698020935,0.16671712696552277,-0.16671712696552277,0.9860047698020935,444.6655578613281,359.4791259765625)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.5,-0.25 34.8120002746582,-0.9380000233650208 C41.0620002746582,-2 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.5,-0.25 34.8120002746582,-0.9380000233650208 C41.0620002746582,-2 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9860047698020935,0.16671712696552277,-0.16671712696552277,0.9860047698020935,444.6661071777344,359.4795837402344)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.312000274658203,-3.437999963760376 28.312000274658203,-3.437999963760376 C28.312000274658203,-3.437999963760376 28.187999725341797,-2.125 34.1879997253418,-2.5 C40.4379997253418,-3.562000036239624 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.312000274658203,-3.437999963760376 28.312000274658203,-3.437999963760376 C28.312000274658203,-3.437999963760376 28.187999725341797,-2.125 34.1879997253418,-2.5 C40.4379997253418,-3.562000036239624 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9860047698020935,0.16671712696552277,-0.16671712696552277,0.9860047698020935,444.6667785644531,359.4790344238281)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.218000411987305,-2.3429999351501465 32.8120002746582,-3.062000036239624 C39.0620002746582,-4.124000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.218000411987305,-2.3429999351501465 32.8120002746582,-3.062000036239624 C39.0620002746582,-4.124000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9860047698020935,0.16671712696552277,-0.16671712696552277,0.9860047698020935,444.66668701171875,359.47918701171875)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 29.312000274658203,-3.937999963760376 29.312000274658203,-3.937999963760376 C29.312000274658203,-3.937999963760376 30.625999450683594,-3.4690001010894775 32.4379997253418,-3.75 C38.715999603271484,-4.723999977111816 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 29.312000274658203,-3.937999963760376 29.312000274658203,-3.937999963760376 C29.312000274658203,-3.937999963760376 30.625999450683594,-3.4690001010894775 32.4379997253418,-3.75 C38.715999603271484,-4.723999977111816 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9860047698020935,0.16671712696552277,-0.16671712696552277,0.9860047698020935,444.6662292480469,359.47882080078125)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 26.312999725341797,-2.874000072479248 32.625,-3.562000036239624 C38.875,-4.624000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 26.312999725341797,-2.874000072479248 32.625,-3.562000036239624 C38.875,-4.624000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9860047698020935,0.16671712696552277,-0.16671712696552277,0.9860047698020935,444.6656188964844,359.4786682128906)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 27.625,-3.187999963760376 27.625,-3.187999963760376 C27.625,-3.187999963760376 25.437999725341797,-2.25 30.5,-3.625 C36.625,-5.313000202178955 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 27.625,-3.187999963760376 27.625,-3.187999963760376 C27.625,-3.187999963760376 25.437999725341797,-2.25 30.5,-3.625 C36.625,-5.313000202178955 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9860047698020935,0.16671712696552277,-0.16671712696552277,0.9860047698020935,444.6653137207031,359.47894287109375)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(95,43,7)"
                            fillOpacity={1}
                            d=" M36.3120002746582,-7.875 C36.3120002746582,-7.875 31.812000274658203,-4.561999797821045 31.812000274658203,-4.561999797821045 C31.812000274658203,-4.561999797821045 36.4379997253418,-3.937999963760376 37.9379997253418,-7.438000202178955 C39.270999908447266,-10.54800033569336 36.3120002746582,-7.875 36.3120002746582,-7.875z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M36.3120002746582,-7.875 C36.3120002746582,-7.875 31.812000274658203,-4.561999797821045 31.812000274658203,-4.561999797821045 C31.812000274658203,-4.561999797821045 36.4379997253418,-3.937999963760376 37.9379997253418,-7.438000202178955 C39.270999908447266,-10.54800033569336 36.3120002746582,-7.875 36.3120002746582,-7.875z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9860047698020935,0.16671712696552277,-0.16671712696552277,0.9860047698020935,444.6661376953125,359.4787292480469)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M35.5,-6.625 C35.5,-6.625 32.1879997253418,-4.75 32.1879997253418,-4.75 C32.1879997253418,-4.75 35.9379997253418,-4.436999797821045 37.1879997253418,-6.875 C38.731998443603516,-9.885000228881836 35.5,-6.625 35.5,-6.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M35.5,-6.625 C35.5,-6.625 32.1879997253418,-4.75 32.1879997253418,-4.75 C32.1879997253418,-4.75 35.9379997253418,-4.436999797821045 37.1879997253418,-6.875 C38.731998443603516,-9.885000228881836 35.5,-6.625 35.5,-6.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.8932785391807556,-0.009588610380887985,0.010733559727668762,0.9999423623085022,448.9741516113281,365.79083251953125)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,35.34400177001953,-5.811999797821045)"
                        >
                          <path
                            fill="rgb(95,43,7)"
                            fillOpacity={1}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.6854605674743652,-0.007357837166637182,0.007357837166637182,0.6854605674743652,456.2996520996094,363.88421630859375)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,35.34400177001953,-5.811999797821045)"
                        >
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9860047698020935,0.16671712696552277,-0.16671712696552277,0.9860047698020935,444.66656494140625,359.4787902832031)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 29.0939998626709,0.03200000151991844 35.40599822998047,-0.656000018119812 C41.65599822998047,-1.718000054359436 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 29.0939998626709,0.03200000151991844 35.40599822998047,-0.656000018119812 C41.65599822998047,-1.718000054359436 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9860047698020935,0.16671712696552277,-0.16671712696552277,0.9860047698020935,444.6661376953125,359.47857666015625)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.187999725341797,-3.5 28.187999725341797,-3.5 C28.187999725341797,-3.5 28.937999725341797,-1.187000036239624 34.9379997253418,-1.562000036239624 C41.1879997253418,-2.624000072479248 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.187999725341797,-3.5 28.187999725341797,-3.5 C28.187999725341797,-3.5 28.937999725341797,-1.187000036239624 34.9379997253418,-1.562000036239624 C41.1879997253418,-2.624000072479248 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9860047698020935,0.16671712696552277,-0.16671712696552277,0.9860047698020935,444.6655578613281,359.4791259765625)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.5,-0.25 34.8120002746582,-0.9380000233650208 C41.0620002746582,-2 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.5,-0.25 34.8120002746582,-0.9380000233650208 C41.0620002746582,-2 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9860047698020935,0.16671712696552277,-0.16671712696552277,0.9860047698020935,444.6661071777344,359.4795837402344)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.312000274658203,-3.437999963760376 28.312000274658203,-3.437999963760376 C28.312000274658203,-3.437999963760376 28.187999725341797,-2.125 34.1879997253418,-2.5 C40.4379997253418,-3.562000036239624 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.312000274658203,-3.437999963760376 28.312000274658203,-3.437999963760376 C28.312000274658203,-3.437999963760376 28.187999725341797,-2.125 34.1879997253418,-2.5 C40.4379997253418,-3.562000036239624 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9860047698020935,0.16671712696552277,-0.16671712696552277,0.9860047698020935,444.6667785644531,359.4790344238281)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.218000411987305,-2.3429999351501465 32.8120002746582,-3.062000036239624 C39.0620002746582,-4.124000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.218000411987305,-2.3429999351501465 32.8120002746582,-3.062000036239624 C39.0620002746582,-4.124000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9860047698020935,0.16671712696552277,-0.16671712696552277,0.9860047698020935,444.66668701171875,359.47918701171875)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 29.312000274658203,-3.937999963760376 29.312000274658203,-3.937999963760376 C29.312000274658203,-3.937999963760376 30.625999450683594,-3.4690001010894775 32.4379997253418,-3.75 C38.715999603271484,-4.723999977111816 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 29.312000274658203,-3.937999963760376 29.312000274658203,-3.937999963760376 C29.312000274658203,-3.937999963760376 30.625999450683594,-3.4690001010894775 32.4379997253418,-3.75 C38.715999603271484,-4.723999977111816 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9968360066413879,-0.07948536425828934,0.07948536425828934,0.9968360066413879,445.7736511230469,374.9454040527344)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 29.027999877929688,-3.753000020980835 33.77899932861328,-5.070000171661377 C39.45199966430664,-7.269000053405762 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 29.027999877929688,-3.753000020980835 33.77899932861328,-5.070000171661377 C39.45199966430664,-7.269000053405762 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9967508316040039,-0.08054686337709427,0.08054686337709427,0.9967508316040039,445.7872619628906,375.0106506347656)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 26.312999725341797,-2.874000072479248 32.625,-3.562000036239624 C38.875,-4.624000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 26.312999725341797,-2.874000072479248 32.625,-3.562000036239624 C38.875,-4.624000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9967508316040039,-0.08054686337709427,0.08054686337709427,0.9967508316040039,445.78662109375,375.0106506347656)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 27.625,-3.187999963760376 27.625,-3.187999963760376 C27.625,-3.187999963760376 25.437999725341797,-2.25 30.5,-3.625 C36.625,-5.313000202178955 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 27.625,-3.187999963760376 27.625,-3.187999963760376 C27.625,-3.187999963760376 25.437999725341797,-2.25 30.5,-3.625 C36.625,-5.313000202178955 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9967508316040039,-0.08054686337709427,0.08054686337709427,0.9967508316040039,445.7864074707031,375.0110168457031)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(95,43,7)"
                            fillOpacity={1}
                            d=" M36.3120002746582,-7.875 C36.3120002746582,-7.875 31.812000274658203,-4.561999797821045 31.812000274658203,-4.561999797821045 C31.812000274658203,-4.561999797821045 36.4379997253418,-3.937999963760376 37.9379997253418,-7.438000202178955 C39.270999908447266,-10.54800033569336 36.3120002746582,-7.875 36.3120002746582,-7.875z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M36.3120002746582,-7.875 C36.3120002746582,-7.875 31.812000274658203,-4.561999797821045 31.812000274658203,-4.561999797821045 C31.812000274658203,-4.561999797821045 36.4379997253418,-3.937999963760376 37.9379997253418,-7.438000202178955 C39.270999908447266,-10.54800033569336 36.3120002746582,-7.875 36.3120002746582,-7.875z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9967508316040039,-0.08054686337709427,0.08054686337709427,0.9967508316040039,445.78717041015625,375.0105895996094)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M35.5,-6.625 C35.5,-6.625 32.1879997253418,-4.75 32.1879997253418,-4.75 C32.1879997253418,-4.75 35.9379997253418,-4.436999797821045 37.1879997253418,-6.875 C38.731998443603516,-9.885000228881836 35.5,-6.625 35.5,-6.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M35.5,-6.625 C35.5,-6.625 32.1879997253418,-4.75 32.1879997253418,-4.75 C32.1879997253418,-4.75 35.9379997253418,-4.436999797821045 37.1879997253418,-6.875 C38.731998443603516,-9.885000228881836 35.5,-6.625 35.5,-6.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.8635647296905518,-0.22867970168590546,0.25598567724227905,0.9666805267333984,451.5134582519531,380.07135009765625)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,35.34400177001953,-5.811999797821045)"
                        >
                          <path
                            fill="rgb(95,43,7)"
                            fillOpacity={1}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.6626595854759216,-0.17547819018363953,0.17547819018363953,0.6626595854759216,458.1463317871094,376.42401123046875)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,35.34400177001953,-5.811999797821045)"
                        >
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9967508316040039,-0.08054686337709427,0.08054686337709427,0.9967508316040039,445.78759765625,375.01055908203125)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 29.0939998626709,0.03200000151991844 35.40599822998047,-0.656000018119812 C41.65599822998047,-1.718000054359436 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 29.0939998626709,0.03200000151991844 35.40599822998047,-0.656000018119812 C41.65599822998047,-1.718000054359436 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9967508316040039,-0.08054686337709427,0.08054686337709427,0.9967508316040039,445.7871398925781,375.0104675292969)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.187999725341797,-3.5 28.187999725341797,-3.5 C28.187999725341797,-3.5 28.937999725341797,-1.187000036239624 34.9379997253418,-1.562000036239624 C41.1879997253418,-2.624000072479248 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.187999725341797,-3.5 28.187999725341797,-3.5 C28.187999725341797,-3.5 28.937999725341797,-1.187000036239624 34.9379997253418,-1.562000036239624 C41.1879997253418,-2.624000072479248 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9967508316040039,-0.08054686337709427,0.08054686337709427,0.9967508316040039,445.78668212890625,375.0111389160156)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.5,-0.25 34.8120002746582,-0.9380000233650208 C41.0620002746582,-2 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.5,-0.25 34.8120002746582,-0.9380000233650208 C41.0620002746582,-2 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9967508316040039,-0.08054686337709427,0.08054686337709427,0.9967508316040039,445.787353515625,375.01141357421875)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.312000274658203,-3.437999963760376 28.312000274658203,-3.437999963760376 C28.312000274658203,-3.437999963760376 28.187999725341797,-2.125 34.1879997253418,-2.5 C40.4379997253418,-3.562000036239624 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.312000274658203,-3.437999963760376 28.312000274658203,-3.437999963760376 C28.312000274658203,-3.437999963760376 28.187999725341797,-2.125 34.1879997253418,-2.5 C40.4379997253418,-3.562000036239624 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9967508316040039,-0.08054686337709427,0.08054686337709427,0.9967508316040039,445.787841796875,375.0107421875)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.218000411987305,-2.3429999351501465 32.8120002746582,-3.062000036239624 C39.0620002746582,-4.124000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.218000411987305,-2.3429999351501465 32.8120002746582,-3.062000036239624 C39.0620002746582,-4.124000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9967508316040039,-0.08054686337709427,0.08054686337709427,0.9967508316040039,445.7878112792969,375.0108947753906)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 29.312000274658203,-3.937999963760376 29.312000274658203,-3.937999963760376 C29.312000274658203,-3.937999963760376 30.625999450683594,-3.4690001010894775 32.4379997253418,-3.75 C38.715999603271484,-4.723999977111816 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 29.312000274658203,-3.937999963760376 29.312000274658203,-3.937999963760376 C29.312000274658203,-3.937999963760376 30.625999450683594,-3.4690001010894775 32.4379997253418,-3.75 C38.715999603271484,-4.723999977111816 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9967508316040039,-0.08054686337709427,0.08054686337709427,0.9967508316040039,445.7872619628906,375.0106506347656)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 26.312999725341797,-2.874000072479248 32.625,-3.562000036239624 C38.875,-4.624000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 26.312999725341797,-2.874000072479248 32.625,-3.562000036239624 C38.875,-4.624000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9967508316040039,-0.08054686337709427,0.08054686337709427,0.9967508316040039,445.78662109375,375.0106506347656)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 27.625,-3.187999963760376 27.625,-3.187999963760376 C27.625,-3.187999963760376 25.437999725341797,-2.25 30.5,-3.625 C36.625,-5.313000202178955 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 27.625,-3.187999963760376 27.625,-3.187999963760376 C27.625,-3.187999963760376 25.437999725341797,-2.25 30.5,-3.625 C36.625,-5.313000202178955 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9967508316040039,-0.08054686337709427,0.08054686337709427,0.9967508316040039,445.7864074707031,375.0110168457031)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(95,43,7)"
                            fillOpacity={1}
                            d=" M36.3120002746582,-7.875 C36.3120002746582,-7.875 31.812000274658203,-4.561999797821045 31.812000274658203,-4.561999797821045 C31.812000274658203,-4.561999797821045 36.4379997253418,-3.937999963760376 37.9379997253418,-7.438000202178955 C39.270999908447266,-10.54800033569336 36.3120002746582,-7.875 36.3120002746582,-7.875z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M36.3120002746582,-7.875 C36.3120002746582,-7.875 31.812000274658203,-4.561999797821045 31.812000274658203,-4.561999797821045 C31.812000274658203,-4.561999797821045 36.4379997253418,-3.937999963760376 37.9379997253418,-7.438000202178955 C39.270999908447266,-10.54800033569336 36.3120002746582,-7.875 36.3120002746582,-7.875z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9967508316040039,-0.08054686337709427,0.08054686337709427,0.9967508316040039,445.78717041015625,375.0105895996094)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M35.5,-6.625 C35.5,-6.625 32.1879997253418,-4.75 32.1879997253418,-4.75 C32.1879997253418,-4.75 35.9379997253418,-4.436999797821045 37.1879997253418,-6.875 C38.731998443603516,-9.885000228881836 35.5,-6.625 35.5,-6.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M35.5,-6.625 C35.5,-6.625 32.1879997253418,-4.75 32.1879997253418,-4.75 C32.1879997253418,-4.75 35.9379997253418,-4.436999797821045 37.1879997253418,-6.875 C38.731998443603516,-9.885000228881836 35.5,-6.625 35.5,-6.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.8635647296905518,-0.22867970168590546,0.25598567724227905,0.9666805267333984,451.5134582519531,380.07135009765625)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,35.34400177001953,-5.811999797821045)"
                        >
                          <path
                            fill="rgb(95,43,7)"
                            fillOpacity={1}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.6626595854759216,-0.17547819018363953,0.17547819018363953,0.6626595854759216,458.1463317871094,376.42401123046875)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,35.34400177001953,-5.811999797821045)"
                        >
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9967508316040039,-0.08054686337709427,0.08054686337709427,0.9967508316040039,445.78759765625,375.01055908203125)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 29.0939998626709,0.03200000151991844 35.40599822998047,-0.656000018119812 C41.65599822998047,-1.718000054359436 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 29.0939998626709,0.03200000151991844 35.40599822998047,-0.656000018119812 C41.65599822998047,-1.718000054359436 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9967508316040039,-0.08054686337709427,0.08054686337709427,0.9967508316040039,445.7871398925781,375.0104675292969)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.187999725341797,-3.5 28.187999725341797,-3.5 C28.187999725341797,-3.5 28.937999725341797,-1.187000036239624 34.9379997253418,-1.562000036239624 C41.1879997253418,-2.624000072479248 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.187999725341797,-3.5 28.187999725341797,-3.5 C28.187999725341797,-3.5 28.937999725341797,-1.187000036239624 34.9379997253418,-1.562000036239624 C41.1879997253418,-2.624000072479248 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9967508316040039,-0.08054686337709427,0.08054686337709427,0.9967508316040039,445.78668212890625,375.0111389160156)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.5,-0.25 34.8120002746582,-0.9380000233650208 C41.0620002746582,-2 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.5,-0.25 34.8120002746582,-0.9380000233650208 C41.0620002746582,-2 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9967508316040039,-0.08054686337709427,0.08054686337709427,0.9967508316040039,445.787353515625,375.01141357421875)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.312000274658203,-3.437999963760376 28.312000274658203,-3.437999963760376 C28.312000274658203,-3.437999963760376 28.187999725341797,-2.125 34.1879997253418,-2.5 C40.4379997253418,-3.562000036239624 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.312000274658203,-3.437999963760376 28.312000274658203,-3.437999963760376 C28.312000274658203,-3.437999963760376 28.187999725341797,-2.125 34.1879997253418,-2.5 C40.4379997253418,-3.562000036239624 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9967508316040039,-0.08054686337709427,0.08054686337709427,0.9967508316040039,445.787841796875,375.0107421875)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.218000411987305,-2.3429999351501465 32.8120002746582,-3.062000036239624 C39.0620002746582,-4.124000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.218000411987305,-2.3429999351501465 32.8120002746582,-3.062000036239624 C39.0620002746582,-4.124000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9967508316040039,-0.08054686337709427,0.08054686337709427,0.9967508316040039,445.7878112792969,375.0108947753906)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 29.312000274658203,-3.937999963760376 29.312000274658203,-3.937999963760376 C29.312000274658203,-3.937999963760376 30.625999450683594,-3.4690001010894775 32.4379997253418,-3.75 C38.715999603271484,-4.723999977111816 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 29.312000274658203,-3.937999963760376 29.312000274658203,-3.937999963760376 C29.312000274658203,-3.937999963760376 30.625999450683594,-3.4690001010894775 32.4379997253418,-3.75 C38.715999603271484,-4.723999977111816 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9967508316040039,-0.08054686337709427,0.08054686337709427,0.9967508316040039,445.7872619628906,375.0106506347656)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 26.312999725341797,-2.874000072479248 32.625,-3.562000036239624 C38.875,-4.624000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 26.312999725341797,-2.874000072479248 32.625,-3.562000036239624 C38.875,-4.624000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9967508316040039,-0.08054686337709427,0.08054686337709427,0.9967508316040039,445.78662109375,375.0106506347656)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 27.625,-3.187999963760376 27.625,-3.187999963760376 C27.625,-3.187999963760376 25.437999725341797,-2.25 30.5,-3.625 C36.625,-5.313000202178955 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 27.625,-3.187999963760376 27.625,-3.187999963760376 C27.625,-3.187999963760376 25.437999725341797,-2.25 30.5,-3.625 C36.625,-5.313000202178955 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9979467988014221,-0.06404788792133331,0.06404788792133331,0.9979467988014221,445.592041015625,373.98846435546875)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(95,43,7)"
                            fillOpacity={1}
                            d=" M36.3120002746582,-7.875 C36.3120002746582,-7.875 31.812000274658203,-4.561999797821045 31.812000274658203,-4.561999797821045 C31.812000274658203,-4.561999797821045 36.4379997253418,-3.937999963760376 37.9379997253418,-7.438000202178955 C39.270999908447266,-10.54800033569336 36.3120002746582,-7.875 36.3120002746582,-7.875z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M36.3120002746582,-7.875 C36.3120002746582,-7.875 31.812000274658203,-4.561999797821045 31.812000274658203,-4.561999797821045 C31.812000274658203,-4.561999797821045 36.4379997253418,-3.937999963760376 37.9379997253418,-7.438000202178955 C39.270999908447266,-10.54800033569336 36.3120002746582,-7.875 36.3120002746582,-7.875z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9979467988014221,-0.06404788792133331,0.06404788792133331,0.9979467988014221,445.5928039550781,373.9880676269531)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M35.5,-6.625 C35.5,-6.625 32.1879997253418,-4.75 32.1879997253418,-4.75 C32.1879997253418,-4.75 35.9379997253418,-4.436999797821045 37.1879997253418,-6.875 C38.731998443603516,-9.885000228881836 35.5,-6.625 35.5,-6.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M35.5,-6.625 C35.5,-6.625 32.1879997253418,-4.75 32.1879997253418,-4.75 C32.1879997253418,-4.75 35.9379997253418,-4.436999797821045 37.1879997253418,-6.875 C38.731998443603516,-9.885000228881836 35.5,-6.625 35.5,-6.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.8732202649116516,-0.18848034739494324,0.21098625659942627,0.9774889945983887,450.7720031738281,377.46246337890625)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,35.34400177001953,-5.811999797821045)"
                        >
                          <path
                            fill="rgb(95,43,7)"
                            fillOpacity={1}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.6700688004493713,-0.14463107287883759,0.14463107287883759,0.6700688004493713,457.5665283203125,374.12591552734375)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,35.34400177001953,-5.811999797821045)"
                        >
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9999946355819702,-0.0032799136824905872,0.0032799136824905872,0.9999946355819702,445.024658203125,370.2049255371094)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 29.0939998626709,0.03200000151991844 35.40599822998047,-0.656000018119812 C41.65599822998047,-1.718000054359436 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 29.0939998626709,0.03200000151991844 35.40599822998047,-0.656000018119812 C41.65599822998047,-1.718000054359436 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9999946355819702,-0.0032799136824905872,0.0032799136824905872,0.9999946355819702,445.02423095703125,370.2048034667969)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.187999725341797,-3.5 28.187999725341797,-3.5 C28.187999725341797,-3.5 28.937999725341797,-1.187000036239624 34.9379997253418,-1.562000036239624 C41.1879997253418,-2.624000072479248 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.187999725341797,-3.5 28.187999725341797,-3.5 C28.187999725341797,-3.5 28.937999725341797,-1.187000036239624 34.9379997253418,-1.562000036239624 C41.1879997253418,-2.624000072479248 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9998075366020203,0.019619368016719818,-0.019619368016719818,0.9998075366020203,444.869384765625,368.77288818359375)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.5,-0.25 34.8120002746582,-0.9380000233650208 C41.0620002746582,-2 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.5,-0.25 34.8120002746582,-0.9380000233650208 C41.0620002746582,-2 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9998075366020203,0.019619368016719818,-0.019619368016719818,0.9998075366020203,444.8699951171875,368.7732238769531)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.312000274658203,-3.437999963760376 28.312000274658203,-3.437999963760376 C28.312000274658203,-3.437999963760376 28.187999725341797,-2.125 34.1879997253418,-2.5 C40.4379997253418,-3.562000036239624 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.312000274658203,-3.437999963760376 28.312000274658203,-3.437999963760376 C28.312000274658203,-3.437999963760376 28.187999725341797,-2.125 34.1879997253418,-2.5 C40.4379997253418,-3.562000036239624 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9994910955429077,0.03189920634031296,-0.03189920634031296,0.9994910955429077,444.80133056640625,368.0028381347656)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.218000411987305,-2.3429999351501465 32.8120002746582,-3.062000036239624 C39.0620002746582,-4.124000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.218000411987305,-2.3429999351501465 32.8120002746582,-3.062000036239624 C39.0620002746582,-4.124000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9994910955429077,0.03189920634031296,-0.03189920634031296,0.9994910955429077,444.80126953125,368.00299072265625)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 29.312000274658203,-3.937999963760376 29.312000274658203,-3.937999963760376 C29.312000274658203,-3.937999963760376 30.625999450683594,-3.4690001010894775 32.4379997253418,-3.75 C38.715999603271484,-4.723999977111816 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 29.312000274658203,-3.937999963760376 29.312000274658203,-3.937999963760376 C29.312000274658203,-3.937999963760376 30.625999450683594,-3.4690001010894775 32.4379997253418,-3.75 C38.715999603271484,-4.723999977111816 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9994910955429077,0.03189920634031296,-0.03189920634031296,0.9994910955429077,444.8007507324219,368.002685546875)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 26.312999725341797,-2.874000072479248 32.625,-3.562000036239624 C38.875,-4.624000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 26.312999725341797,-2.874000072479248 32.625,-3.562000036239624 C38.875,-4.624000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9994910955429077,0.03189920634031296,-0.03189920634031296,0.9994910955429077,444.80010986328125,368.0025939941406)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 27.625,-3.187999963760376 27.625,-3.187999963760376 C27.625,-3.187999963760376 25.437999725341797,-2.25 30.5,-3.625 C36.625,-5.313000202178955 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 27.625,-3.187999963760376 27.625,-3.187999963760376 C27.625,-3.187999963760376 25.437999725341797,-2.25 30.5,-3.625 C36.625,-5.313000202178955 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9994910955429077,0.03189920634031296,-0.03189920634031296,0.9994910955429077,444.79986572265625,368.0029296875)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(95,43,7)"
                            fillOpacity={1}
                            d=" M36.3120002746582,-7.875 C36.3120002746582,-7.875 31.812000274658203,-4.561999797821045 31.812000274658203,-4.561999797821045 C31.812000274658203,-4.561999797821045 36.4379997253418,-3.937999963760376 37.9379997253418,-7.438000202178955 C39.270999908447266,-10.54800033569336 36.3120002746582,-7.875 36.3120002746582,-7.875z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M36.3120002746582,-7.875 C36.3120002746582,-7.875 31.812000274658203,-4.561999797821045 31.812000274658203,-4.561999797821045 C31.812000274658203,-4.561999797821045 36.4379997253418,-3.937999963760376 37.9379997253418,-7.438000202178955 C39.270999908447266,-10.54800033569336 36.3120002746582,-7.875 36.3120002746582,-7.875z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9994910955429077,0.03189920634031296,-0.03189920634031296,0.9994910955429077,444.8006591796875,368.00262451171875)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M35.5,-6.625 C35.5,-6.625 32.1879997253418,-4.75 32.1879997253418,-4.75 C32.1879997253418,-4.75 35.9379997253418,-4.436999797821045 37.1879997253418,-6.875 C38.731998443603516,-9.885000228881836 35.5,-6.625 35.5,-6.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M35.5,-6.625 C35.5,-6.625 32.1879997253418,-4.75 32.1879997253418,-4.75 C32.1879997253418,-4.75 35.9379997253418,-4.436999797821045 37.1879997253418,-6.875 C38.731998443603516,-9.885000228881836 35.5,-6.625 35.5,-6.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.8837830424308777,-0.13025355339050293,0.14580675959587097,0.9893130660057068,449.9223937988281,373.6744384765625)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,35.34400177001953,-5.811999797821045)"
                        >
                          <path
                            fill="rgb(95,43,7)"
                            fillOpacity={1}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.6781741976737976,-0.09995052963495255,0.09995052963495255,0.6781741976737976,456.92291259765625,370.7950439453125)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,35.34400177001953,-5.811999797821045)"
                        >
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9994910955429077,0.03189920634031296,-0.03189920634031296,0.9994910955429077,444.8001403808594,368.0030822753906)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 29.027999877929688,-3.753000020980835 33.77899932861328,-5.070000171661377 C39.45199966430664,-7.269000053405762 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 29.027999877929688,-3.753000020980835 33.77899932861328,-5.070000171661377 C39.45199966430664,-7.269000053405762 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9996733069419861,0.025558263063430786,-0.025558263063430786,0.9996733069419861,444.8353271484375,368.4002990722656)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 26.312999725341797,-2.874000072479248 32.625,-3.562000036239624 C38.875,-4.624000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 26.312999725341797,-2.874000072479248 32.625,-3.562000036239624 C38.875,-4.624000072479248 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9996733069419861,0.025558263063430786,-0.025558263063430786,0.9996733069419861,444.8346862792969,368.4002380371094)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 27.625,-3.187999963760376 27.625,-3.187999963760376 C27.625,-3.187999963760376 25.437999725341797,-2.25 30.5,-3.625 C36.625,-5.313000202178955 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 27.625,-3.187999963760376 27.625,-3.187999963760376 C27.625,-3.187999963760376 25.437999725341797,-2.25 30.5,-3.625 C36.625,-5.313000202178955 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9998446702957153,0.01762407459318638,-0.01762407459318638,0.9998446702957153,444.8812561035156,368.897705078125)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(95,43,7)"
                            fillOpacity={1}
                            d=" M36.3120002746582,-7.875 C36.3120002746582,-7.875 31.812000274658203,-4.561999797821045 31.812000274658203,-4.561999797821045 C31.812000274658203,-4.561999797821045 36.4379997253418,-3.937999963760376 37.9379997253418,-7.438000202178955 C39.270999908447266,-10.54800033569336 36.3120002746582,-7.875 36.3120002746582,-7.875z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M36.3120002746582,-7.875 C36.3120002746582,-7.875 31.812000274658203,-4.561999797821045 31.812000274658203,-4.561999797821045 C31.812000274658203,-4.561999797821045 36.4379997253418,-3.937999963760376 37.9379997253418,-7.438000202178955 C39.270999908447266,-10.54800033569336 36.3120002746582,-7.875 36.3120002746582,-7.875z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9998446702957153,0.01762407459318638,-0.01762407459318638,0.9998446702957153,444.8820495605469,368.8973693847656)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M35.5,-6.625 C35.5,-6.625 32.1879997253418,-4.75 32.1879997253418,-4.75 C32.1879997253418,-4.75 35.9379997253418,-4.436999797821045 37.1879997253418,-6.875 C38.731998443603516,-9.885000228881836 35.5,-6.625 35.5,-6.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M35.5,-6.625 C35.5,-6.625 32.1879997253418,-4.75 32.1879997253418,-4.75 C32.1879997253418,-4.75 35.9379997253418,-4.436999797821045 37.1879997253418,-6.875 C38.731998443603516,-9.885000228881836 35.5,-6.625 35.5,-6.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.880456268787384,-0.15111307799816132,0.16915705800056458,0.9855890870094299,450.19677734375,375.0326843261719)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,35.34400177001953,-5.811999797821045)"
                        >
                          <path
                            fill="rgb(95,43,7)"
                            fillOpacity={1}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.6756213903427124,-0.11595716327428818,0.11595716327428818,0.6756213903427124,457.1272888183594,371.9886169433594)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,35.34400177001953,-5.811999797821045)"
                        >
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M0,-1.625 C1.2936536073684692,-1.625 2.3440001010894775,-0.8968374729156494 2.3440001010894775,0 C2.3440001010894775,0.8968374729156494 1.2936536073684692,1.625 0,1.625 C-1.2936536073684692,1.625 -2.3440001010894775,0.8968374729156494 -2.3440001010894775,0 C-2.3440001010894775,-0.8968374729156494 -1.2936536073684692,-1.625 0,-1.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9999988675117493,0.001497871708124876,-0.001497871708124876,0.9999988675117493,444.98974609375,369.9063415527344)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 29.0939998626709,0.03200000151991844 35.40599822998047,-0.656000018119812 C41.65599822998047,-1.718000054359436 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 29.0939998626709,0.03200000151991844 35.40599822998047,-0.656000018119812 C41.65599822998047,-1.718000054359436 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9999988675117493,0.001497871708124876,-0.001497871708124876,0.9999988675117493,444.98931884765625,369.9062194824219)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.187999725341797,-3.5 28.187999725341797,-3.5 C28.187999725341797,-3.5 28.937999725341797,-1.187000036239624 34.9379997253418,-1.562000036239624 C41.1879997253418,-2.624000072479248 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.187999725341797,-3.5 28.187999725341797,-3.5 C28.187999725341797,-3.5 28.937999725341797,-1.187000036239624 34.9379997253418,-1.562000036239624 C41.1879997253418,-2.624000072479248 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,444.9996032714844,370.00048828125)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.5,-0.25 34.8120002746582,-0.9380000233650208 C41.0620002746582,-2 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M42.1879997253418,-11.625 C38.6879997253418,-7.75 27.75,-3.75 27.75,-3.75 C27.75,-3.75 28.5,-0.25 34.8120002746582,-0.9380000233650208 C41.0620002746582,-2 42.3129997253418,-11.562999725341797 42.1879997253418,-11.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445.0002136230469,370.0008239746094)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.312000274658203,-3.437999963760376 28.312000274658203,-3.437999963760376 C28.312000274658203,-3.437999963760376 28.187999725341797,-2.125 34.1879997253418,-2.5 C40.4379997253418,-3.562000036239624 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M41.8120002746582,-10.812000274658203 C38.3120002746582,-6.936999797821045 28.312000274658203,-3.437999963760376 28.312000274658203,-3.437999963760376 C28.312000274658203,-3.437999963760376 28.187999725341797,-2.125 34.1879997253418,-2.5 C40.4379997253418,-3.562000036239624 41.9370002746582,-10.75 41.8120002746582,-10.812000274658203z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(36,89,145)"
                            fillOpacity={1}
                            d=" M-96.75,-87 C-96.75,-87 -94.25,-55 -94.25,-55 C-94.25,-55 -98,3.5 -98,3.5 C-98,3.5 -73,-1 -72.5,-1.75 C-72,-2.5 -68.5,-11.5 -76.25,-34.5 C-84,-57.5 -96.75,-87 -96.75,-87z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(138,123,103)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-96.75,-87 C-96.75,-87 -94.25,-55 -94.25,-55 C-94.25,-55 -98,3.5 -98,3.5 C-98,3.5 -73,-1 -72.5,-1.75 C-72,-2.5 -68.5,-11.5 -76.25,-34.5 C-84,-57.5 -96.75,-87 -96.75,-87z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,548.5,370.5)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,-103.5,-0.5)">
                          <path
                            fill="url(#__lottie_element_917)"
                            fillOpacity={1}
                            d=" M-146.75,50.75 C-146.75,50.75 -144,75 -139,94.25 C-136.08900451660156,105.45899963378906 -130.22900390625,145.0260009765625 -130.75,149 C-132.75,164.25 -133.25,182.25 -134,183.5 C-134,224 -117.5,256 -117.5,256 C-117.5,256 -113.5,256.25 -113.5,256.25 C-113.5,256.25 -114.5,90.75 -114.25,90.75 C-101.5,106.25 -96.5,147.25 -96,168 C-95.5,188.75 -92.25,206.5 -85,222.25 C-77.75,238 -65.25,255.75 -65.25,255.75 C-65.25,255.75 -60.75,256.25 -60.75,256.25 C-60.75,256.25 -72,192.75 -74.5,178.75 C-77,164.75 -91.5,63 -91.5,63 C-91.5,63 -146.75,50.75 -146.75,50.75z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(60,41,10)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-146.75,50.75 C-146.75,50.75 -144,75 -139,94.25 C-136.08900451660156,105.45899963378906 -130.22900390625,145.0260009765625 -130.75,149 C-132.75,164.25 -133.25,182.25 -134,183.5 C-134,224 -117.5,256 -117.5,256 C-117.5,256 -113.5,256.25 -113.5,256.25 C-113.5,256.25 -114.5,90.75 -114.25,90.75 C-101.5,106.25 -96.5,147.25 -96,168 C-95.5,188.75 -92.25,206.5 -85,222.25 C-77.75,238 -65.25,255.75 -65.25,255.75 C-65.25,255.75 -60.75,256.25 -60.75,256.25 C-60.75,256.25 -72,192.75 -74.5,178.75 C-77,164.75 -91.5,63 -91.5,63 C-91.5,63 -146.75,50.75 -146.75,50.75z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(138,123,103)"
                            strokeOpacity={1}
                            strokeWidth={1}
                            d=" M-111.5,82.25 C-103.5,78.125 -106,61.25 -106,61.25 C-106,61.25 -111.5,61.75 -111.5,61.75 C-111.5,61.75 -110,82.75 -114.25,88.5"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(0,58,120)"
                            fillOpacity={1}
                            d=" M-135.25,-93 C-150,-86 -152.75,-80 -152.75,-80 C-152.75,-80 -148.5,-69.5 -148.5,-69.5 C-148.5,-69.5 -147.5,52.5 -147.5,51 C-123.5,75.5 -89.75,65 -90.5,63.5 C-94.75,43.25 -94.25,14 -92.5,1.25 C-91.03199768066406,-9.442999839782715 -88.5,-34.75 -87.75,-50.25 C-86.94000244140625,-66.98200225830078 -94.75,-81.5 -95.75,-85.5 C-96.75,-89.5 -101.75,-91.25 -101.75,-91.25 C-101.75,-91.25 -134.5,-93 -135.25,-93z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(138,123,103)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-135.25,-93 C-150,-86 -152.75,-80 -152.75,-80 C-152.75,-80 -148.5,-69.5 -148.5,-69.5 C-148.5,-69.5 -147.5,52.5 -147.5,51 C-123.5,75.5 -89.75,65 -90.5,63.5 C-94.75,43.25 -94.25,14 -92.5,1.25 C-91.03199768066406,-9.442999839782715 -88.5,-34.75 -87.75,-50.25 C-86.94000244140625,-66.98200225830078 -94.75,-81.5 -95.75,-85.5 C-96.75,-89.5 -101.75,-91.25 -101.75,-91.25 C-101.75,-91.25 -134.5,-93 -135.25,-93z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(134,159,165)"
                            fillOpacity={1}
                            d=" M-89.5,-53.25 C-89.5,-53.25 -98.75,-52.5 -98.75,-52.5 C-98.75,-52.5 -99.5,-45.25 -99.5,-45.25 C-99.5,-45.25 -89.75,-47.5 -89.75,-47.5 C-89.75,-47.5 -89.5,-53.25 -89.5,-53.25z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(138,123,103)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-89.5,-53.25 C-89.5,-53.25 -98.75,-52.5 -98.75,-52.5 C-98.75,-52.5 -99.5,-45.25 -99.5,-45.25 C-99.5,-45.25 -89.75,-47.5 -89.75,-47.5 C-89.75,-47.5 -89.5,-53.25 -89.5,-53.25z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M-132,-102.75 C-132,-102.75 -136,-93 -136,-93 C-136,-93 -123,-84.75 -123,-84.75 C-123,-84.75 -114.5,-58.75 -114.5,-58.75 C-114.5,-58.75 -101.75,-57.25 -101.75,-57.25 C-101.75,-57.25 -104,-85.25 -104,-85.25 C-104,-85.25 -103.25,-92.75 -103.25,-92.75 C-103.25,-92.75 -132,-102.75 -132,-102.75z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(138,123,103)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-132,-102.75 C-132,-102.75 -136,-93 -136,-93 C-136,-93 -123,-84.75 -123,-84.75 C-123,-84.75 -114.5,-58.75 -114.5,-58.75 C-114.5,-58.75 -101.75,-57.25 -101.75,-57.25 C-101.75,-57.25 -104,-85.25 -104,-85.25 C-104,-85.25 -103.25,-92.75 -103.25,-92.75 C-103.25,-92.75 -132,-102.75 -132,-102.75z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,187,0)"
                            fillOpacity={1}
                            d=" M-113.25,-96.75 C-113.25,-96.75 -118.5,-84.75 -118.5,-84.75 C-118.5,-84.75 -113.75,-80.5 -113.75,-80.5 C-113.75,-80.5 -112.5,-61.5 -112.5,-61.5 C-112.5,-61.5 -108.75,-8.5 -108.75,-8.5 C-108.75,-8.5 -106,-11 -106,-11 C-106,-11 -102.25,-59 -102.25,-59 C-102.25,-59 -108.75,-80.25 -108.75,-80.25 C-108.75,-80.25 -105.5,-87 -105.5,-87 C-105.5,-87 -110.5,-96.25 -110.5,-96.25 C-110.5,-96.25 -113.25,-96.75 -113.25,-96.75z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(138,123,103)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-113.25,-96.75 C-113.25,-96.75 -118.5,-84.75 -118.5,-84.75 C-118.5,-84.75 -113.75,-80.5 -113.75,-80.5 C-113.75,-80.5 -112.5,-61.5 -112.5,-61.5 C-112.5,-61.5 -108.75,-8.5 -108.75,-8.5 C-108.75,-8.5 -106,-11 -106,-11 C-106,-11 -102.25,-59 -102.25,-59 C-102.25,-59 -108.75,-80.25 -108.75,-80.25 C-108.75,-80.25 -105.5,-87 -105.5,-87 C-105.5,-87 -110.5,-96.25 -110.5,-96.25 C-110.5,-96.25 -113.25,-96.75 -113.25,-96.75z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(73,113,155)"
                            fillOpacity={1}
                            d=" M-135,-93 C-135,-93 -125.75,-60 -125.75,-60 C-125.75,-60 -120.25,-60 -120.25,-60 C-120.25,-60 -123.25,-55.5 -123.25,-55.5 C-123.25,-55.5 -108.125,6.5 -108.125,6.5 C-108.125,6.5 -107.375,65.625 -107.375,65.625 C-107.375,65.625 -105.875,65.5 -105.875,65.5 C-105.875,65.5 -107.125,9 -107.125,9 C-107.125,9 -111.125,-58.5 -111.125,-58.5 C-111.125,-58.5 -122.25,-86 -122.25,-86 C-122.25,-86 -135,-93 -135,-93z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(138,123,103)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-135,-93 C-135,-93 -125.75,-60 -125.75,-60 C-125.75,-60 -120.25,-60 -120.25,-60 C-120.25,-60 -123.25,-55.5 -123.25,-55.5 C-123.25,-55.5 -108.125,6.5 -108.125,6.5 C-108.125,6.5 -107.375,65.625 -107.375,65.625 C-107.375,65.625 -105.875,65.5 -105.875,65.5 C-105.875,65.5 -107.125,9 -107.125,9 C-107.125,9 -111.125,-58.5 -111.125,-58.5 C-111.125,-58.5 -122.25,-86 -122.25,-86 C-122.25,-86 -135,-93 -135,-93z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(73,113,155)"
                            fillOpacity={1}
                            d=" M-102.25,-91.75 C-102.25,-91.75 -105.25,-86.5 -105.25,-86.5 C-105.25,-86.5 -103,-62 -103.25,-57.25 C-103.5,-52.5 -106.75,0.75 -106.75,0.75 C-106.75,0.75 -96.25,-60.75 -96.25,-60.75 C-96.25,-60.75 -99.5,-63.75 -99.5,-63.75 C-99.5,-63.75 -96,-64.5 -96,-64.5 C-96,-64.5 -102.25,-91.75 -102.25,-91.75z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(138,123,103)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-102.25,-91.75 C-102.25,-91.75 -105.25,-86.5 -105.25,-86.5 C-105.25,-86.5 -103,-62 -103.25,-57.25 C-103.5,-52.5 -106.75,0.75 -106.75,0.75 C-106.75,0.75 -96.25,-60.75 -96.25,-60.75 C-96.25,-60.75 -99.5,-63.75 -99.5,-63.75 C-99.5,-63.75 -96,-64.5 -96,-64.5 C-96,-64.5 -102.25,-91.75 -102.25,-91.75z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(73,113,155)"
                            fillOpacity={1}
                            d=" M-84.875,-16.625 C-86.9229965209961,-15.395999908447266 -92,-3.25 -92,-3.25 C-92,-3.25 -97.125,7.875 -97.125,7.875 C-97.125,7.875 -92.25,13 -84.125,16 C-76,19 -73.625,10.625 -71.875,7 C-70.125,3.375 -70.5,-9.25 -73,-14.25 C-75.5,-19.25 -81.75,-18.5 -84.875,-16.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(138,123,103)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-84.875,-16.625 C-86.9229965209961,-15.395999908447266 -92,-3.25 -92,-3.25 C-92,-3.25 -97.125,7.875 -97.125,7.875 C-97.125,7.875 -92.25,13 -84.125,16 C-76,19 -73.625,10.625 -71.875,7 C-70.125,3.375 -70.5,-9.25 -73,-14.25 C-75.5,-19.25 -81.75,-18.5 -84.875,-16.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      />
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(247,215,178)"
                            fillOpacity={1}
                            d=" M-93.875,-10 C-93.875,-10 -108.375,-8.125 -108.375,-8.125 C-108.375,-8.125 -103.75,13 -103.75,13 C-103.75,13 -94.75,13.125 -94.75,13.125 C-94.75,13.125 -93.875,-10 -93.875,-10z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(138,123,103)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-93.875,-10 C-93.875,-10 -108.375,-8.125 -108.375,-8.125 C-108.375,-8.125 -103.75,13 -103.75,13 C-103.75,13 -94.75,13.125 -94.75,13.125 C-94.75,13.125 -93.875,-10 -93.875,-10z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(96,115,119)"
                            fillOpacity={1}
                            d=" M-93.875,-13.5 C-93.875,-13.5 -108,-11.125 -108,-11.125 C-108,-11.125 -109.25,-6.375 -109.25,-6.375 C-109.25,-6.375 -92.125,-8.125 -92.125,-8.125 C-92.125,-8.125 -93.875,-13.5 -93.875,-13.5z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(138,123,103)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-93.875,-13.5 C-93.875,-13.5 -108,-11.125 -108,-11.125 C-108,-11.125 -109.25,-6.375 -109.25,-6.375 C-109.25,-6.375 -92.125,-8.125 -92.125,-8.125 C-92.125,-8.125 -93.875,-13.5 -93.875,-13.5z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(254,190,150)"
                            fillOpacity={1}
                            d=" M-95,-6.75 C-95,-6.75 -94.875,-3.375 -95.125,-3.375 C-96.5,-2.875 -104.375,-3.375 -107.625,-3.5 C-110.875,-3.625 -108.75,-0.25 -108.75,-0.25 C-110,1.625 -108.125,2.75 -108,3 C-108.875,5.25 -107,6.25 -106.875,5.625 C-107.5,7.875 -104.25,9.75 -104.25,9.75 C-104.25,9.75 -104.18800354003906,7.438000202178955 -104.18800354003906,7.438000202178955 C-104.18800354003906,7.438000202178955 -97.18800354003906,8.187999725341797 -94,7.25 C-90.81199645996094,6.311999797821045 -90.875,-1.5 -91.5,-3.125 C-92.125,-4.75 -95,-6.75 -95,-6.75z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(138,123,103)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-95,-6.75 C-95,-6.75 -94.875,-3.375 -95.125,-3.375 C-96.5,-2.875 -104.375,-3.375 -107.625,-3.5 C-110.875,-3.625 -108.75,-0.25 -108.75,-0.25 C-110,1.625 -108.125,2.75 -108,3 C-108.875,5.25 -107,6.25 -106.875,5.625 C-107.5,7.875 -104.25,9.75 -104.25,9.75 C-104.25,9.75 -104.18800354003906,7.438000202178955 -104.18800354003906,7.438000202178955 C-104.18800354003906,7.438000202178955 -97.18800354003906,8.187999725341797 -94,7.25 C-90.81199645996094,6.311999797821045 -90.875,-1.5 -91.5,-3.125 C-92.125,-4.75 -95,-6.75 -95,-6.75z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(134,159,165)"
                            fillOpacity={1}
                            d=" M-139.25,35.5 C-139.25,35.5 -137.75,41.25 -137.75,41.25 C-137.75,41.25 -126.5,44 -126.5,44 C-126.5,44 -121.5,38.75 -121.5,38.75 C-121.5,38.75 -139.25,35.5 -139.25,35.5z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(138,123,103)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-139.25,35.5 C-139.25,35.5 -137.75,41.25 -137.75,41.25 C-137.75,41.25 -126.5,44 -126.5,44 C-126.5,44 -121.5,38.75 -121.5,38.75 C-121.5,38.75 -139.25,35.5 -139.25,35.5z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(134,159,165)"
                            fillOpacity={1}
                            d=" M-93.125,38.5 C-93.125,38.5 -97.375,40.625 -97.375,40.625 C-97.375,40.625 -95,44.125 -95,44.125 C-95,44.125 -90.75,43.5 -90.75,43.5 C-90.75,43.5 -93.125,38.5 -93.125,38.5z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(138,123,103)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-93.125,38.5 C-93.125,38.5 -97.375,40.625 -97.375,40.625 C-97.375,40.625 -95,44.125 -95,44.125 C-95,44.125 -90.75,43.5 -90.75,43.5 C-90.75,43.5 -93.125,38.5 -93.125,38.5z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,185,145)"
                            fillOpacity={1}
                            d=" M-136.75,61.5 C-136.875,63.75 -140.75,70.25 -140.75,70.25 C-140.75,70.25 -139,74.75 -139,74.75 C-139,74.75 -134,70.75 -134,65.25 C-133.875,65.25 -128.125,68.5 -126.25,64.875 C-126,65 -126,63.125 -126,63.125 C-126,63.125 -133,63.75 -136.75,61.5z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(138,123,103)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-136.75,61.5 C-136.875,63.75 -140.75,70.25 -140.75,70.25 C-140.75,70.25 -139,74.75 -139,74.75 C-139,74.75 -134,70.75 -134,65.25 C-133.875,65.25 -128.125,68.5 -126.25,64.875 C-126,65 -126,63.125 -126,63.125 C-126,63.125 -133,63.75 -136.75,61.5z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(36,89,145)"
                            fillOpacity={1}
                            d=" M-152.75,-81 C-153.75,-79.75 -155.25,-79.5 -163.5,-67.25 C-171.75,-55 -179.75,-28.5 -180,-28 C-187,11.25 -174.5,41.5 -164.5,52.75 C-154.5,64 -140.25,68.75 -140.25,68.75 C-140.25,68.75 -136.75,61.75 -136.5,61 C-143.75,52.5 -150.25,38.5 -153.25,24.25 C-155.75,12.75 -153.5,-2.75 -152.5,-6.5 C-151.5,-10.25 -144.25,-35 -141.5,-48.25 C-138.75,-61.5 -140.5,-75 -143.25,-79.25 C-146,-83.5 -151.75,-82.25 -152.75,-81z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(138,123,103)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-152.75,-81 C-153.75,-79.75 -155.25,-79.5 -163.5,-67.25 C-171.75,-55 -179.75,-28.5 -180,-28 C-187,11.25 -174.5,41.5 -164.5,52.75 C-154.5,64 -140.25,68.75 -140.25,68.75 C-140.25,68.75 -136.75,61.75 -136.5,61 C-143.75,52.5 -150.25,38.5 -153.25,24.25 C-155.75,12.75 -153.5,-2.75 -152.5,-6.5 C-151.5,-10.25 -144.25,-35 -141.5,-48.25 C-138.75,-61.5 -140.5,-75 -143.25,-79.25 C-146,-83.5 -151.75,-82.25 -152.75,-81z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(46,46,46)"
                            fillOpacity={1}
                            d=" M-117.25,256.25 C-117.25,256.25 -118.25,259.875 -118.25,259.875 C-118.25,259.875 -106.25,259.875 -106.25,259.875 C-106.25,259.875 -106.75,258.125 -106.75,258.125 C-106.75,258.125 -113.5,256.375 -113.5,256.375 C-113.5,256.375 -117.25,256.25 -117.25,256.25z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(138,123,103)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-117.25,256.25 C-117.25,256.25 -118.25,259.875 -118.25,259.875 C-118.25,259.875 -106.25,259.875 -106.25,259.875 C-106.25,259.875 -106.75,258.125 -106.75,258.125 C-106.75,258.125 -113.5,256.375 -113.5,256.375 C-113.5,256.375 -117.25,256.25 -117.25,256.25z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9996532201766968,-0.02633364498615265,0.02633364498615265,0.9996532201766968,438.2032165527344,368.38409423828125)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(46,46,46)"
                            fillOpacity={1}
                            d=" M-64.75,256.125 C-64.75,256.125 -65.875,259.75 -65.875,259.75 C-65.875,259.75 -40.875,259.875 -40.875,259.875 C-40.875,259.875 -42.375,257.75 -42.375,257.75 C-42.375,257.75 -59.875,256.25 -59.875,256.25 C-59.875,256.25 -64.75,256.125 -64.75,256.125z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(138,123,103)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-64.75,256.125 C-64.75,256.125 -65.875,259.75 -65.875,259.75 C-65.875,259.75 -40.875,259.875 -40.875,259.875 C-40.875,259.875 -42.375,257.75 -42.375,257.75 C-42.375,257.75 -59.875,256.25 -59.875,256.25 C-59.875,256.25 -64.75,256.125 -64.75,256.125z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(245,186,137)"
                            fillOpacity={1}
                            d=" M-120,-186.25 C-120,-186.25 -126.75,-170.5 -126.75,-170.5 C-126.75,-170.5 -128.125,-144 -128.125,-144 C-128.125,-144 -109.625,-130.25 -109.625,-130.25 C-109.625,-130.25 -90.625,-129.5 -88.75,-132.75 C-86.875,-136 -87.125,-151.125 -87,-155.25 C-86.875,-159.375 -86.875,-161 -86,-166.125 C-85.125,-171.25 -89.25,-181.25 -89.25,-181.25 C-89.25,-181.25 -120,-186.25 -120,-186.25z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(77,45,23)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-120,-186.25 C-120,-186.25 -126.75,-170.5 -126.75,-170.5 C-126.75,-170.5 -128.125,-144 -128.125,-144 C-128.125,-144 -109.625,-130.25 -109.625,-130.25 C-109.625,-130.25 -90.625,-129.5 -88.75,-132.75 C-86.875,-136 -87.125,-151.125 -87,-155.25 C-86.875,-159.375 -86.875,-161 -86,-166.125 C-85.125,-171.25 -89.25,-181.25 -89.25,-181.25 C-89.25,-181.25 -120,-186.25 -120,-186.25z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,380,374)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,65.5,-3.75)">
                          <path
                            fill="rgb(235,157,93)"
                            fillOpacity={1}
                            d=" M-134.75,-146.75 C-134.75,-146.75 -132,-101.5 -132,-101.5 C-132,-101.5 -117.5,-96.5 -117.5,-96.5 C-117.5,-96.5 -115,-137.25 -115,-137.25 C-115,-137.25 -134.75,-146.75 -134.75,-146.75z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(138,123,103)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-134.75,-146.75 C-134.75,-146.75 -132,-101.5 -132,-101.5 C-132,-101.5 -117.5,-96.5 -117.5,-96.5 C-117.5,-96.5 -115,-137.25 -115,-137.25 C-115,-137.25 -134.75,-146.75 -134.75,-146.75z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(92,54,28)"
                            fillOpacity={1}
                            d=" M-85.75,-208.75 C-85.25,-209.25 -89.5,-202.5 -102.25,-204.5 C-115,-206.5 -117.25,-207.25 -124,-203.25 C-130.75,-199.25 -138.25,-188.5 -141.25,-181.75 C-144.25,-175 -145,-172.25 -144.5,-167.25 C-144.75,-166.25 -141.75,-160 -141.75,-160 C-141.75,-160 -130.5,-160.75 -130.5,-160.75 C-130.5,-160.75 -132,-127.25 -132,-127.25 C-132,-127.25 -125.25,-102.5 -125.25,-102.5 C-125.25,-102.5 -105.5,-93.75 -105.5,-93.75 C-105.5,-93.75 -93.75,-101.75 -93.75,-101.75 C-93.75,-101.75 -87.25,-117.25 -87.25,-117.25 C-87.25,-117.25 -87.75,-129 -87.75,-129 C-87.75,-129 -102.75,-130.25 -102.75,-130.25 C-102.75,-130.25 -125.5,-143.75 -125.5,-143.75 C-125.5,-143.75 -126.25,-157.25 -123.25,-166.5 C-120.25,-175.75 -119.25,-182.75 -119.25,-182.75 C-119.25,-182.75 -99,-184 -89.75,-180.25 C-89,-180 -81.75,-181.5 -79,-187.75 C-78,-190.5 -76.5,-195.25 -85.75,-208.75z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(138,123,103)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-85.75,-208.75 C-85.25,-209.25 -89.5,-202.5 -102.25,-204.5 C-115,-206.5 -117.25,-207.25 -124,-203.25 C-130.75,-199.25 -138.25,-188.5 -141.25,-181.75 C-144.25,-175 -145,-172.25 -144.5,-167.25 C-144.75,-166.25 -141.75,-160 -141.75,-160 C-141.75,-160 -130.5,-160.75 -130.5,-160.75 C-130.5,-160.75 -132,-127.25 -132,-127.25 C-132,-127.25 -125.25,-102.5 -125.25,-102.5 C-125.25,-102.5 -105.5,-93.75 -105.5,-93.75 C-105.5,-93.75 -93.75,-101.75 -93.75,-101.75 C-93.75,-101.75 -87.25,-117.25 -87.25,-117.25 C-87.25,-117.25 -87.75,-129 -87.75,-129 C-87.75,-129 -102.75,-130.25 -102.75,-130.25 C-102.75,-130.25 -125.5,-143.75 -125.5,-143.75 C-125.5,-143.75 -126.25,-157.25 -123.25,-166.5 C-120.25,-175.75 -119.25,-182.75 -119.25,-182.75 C-119.25,-182.75 -99,-184 -89.75,-180.25 C-89,-180 -81.75,-181.5 -79,-187.75 C-78,-190.5 -76.5,-195.25 -85.75,-208.75z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(67,40,21)"
                            fillOpacity={1}
                            d=" M-113.75,-138.75 C-118.75,-139.75 -119.125,-134.5 -119,-134.25 C-116.125,-137 -114.75,-134.125 -111.5,-132 C-108.25,-129.875 -102.625,-128.625 -101.5,-128 C-100.375,-127.375 -97.75,-128.25 -96.625,-128.25 C-95.5,-128.25 -89.5,-127.125 -87.75,-127.375 C-86,-127.625 -84.25,-130.25 -85,-132.75 C-85.75,-135.25 -89,-134 -91.75,-132.75 C-94.5,-131.5 -97.25,-131.75 -98.75,-132.25 C-100.25,-132.75 -103,-133.625 -105,-134.75 C-106.54100036621094,-135.61700439453125 -108.75,-137.75 -113.75,-138.75z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(138,123,103)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-113.75,-138.75 C-118.75,-139.75 -119.125,-134.5 -119,-134.25 C-116.125,-137 -114.75,-134.125 -111.5,-132 C-108.25,-129.875 -102.625,-128.625 -101.5,-128 C-100.375,-127.375 -97.75,-128.25 -96.625,-128.25 C-95.5,-128.25 -89.5,-127.125 -87.75,-127.375 C-86,-127.625 -84.25,-130.25 -85,-132.75 C-85.75,-135.25 -89,-134 -91.75,-132.75 C-94.5,-131.5 -97.25,-131.75 -98.75,-132.25 C-100.25,-132.75 -103,-133.625 -105,-134.75 C-106.54100036621094,-135.61700439453125 -108.75,-137.75 -113.75,-138.75z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(77,45,23)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M-118.625,-135.75 C-118.625,-135.75 -120.5,-129.25 -121.375,-127.375 C-122.25,-125.5 -129.75,-121.375 -129.875,-120.5"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(77,45,23)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M-106.625,-129.625 C-106.625,-129.625 -109.375,-106.125 -118.75,-99.375"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(77,45,23)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M-91.5,-127.375 C-91.5,-127.375 -91.25,-117.125 -92.375,-115.875 C-93.5,-114.625 -95.125,-114.25 -95.375,-113.875 C-95.625,-113.5 -96.125,-112 -96.125,-109.75 C-96.125,-107.5 -99,-98.75 -100.375,-97.25"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      />
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(77,45,23)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M-124,-183.375 C-124,-183.375 -123.64099884033203,-191.71200561523438 -121.25,-195 C-119.25,-197.75 -116.875,-200 -114,-200.875 C-111.125,-201.75 -105.875,-202.875 -104.875,-203.875"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(77,45,23)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M-108,-183.25 C-108,-183.25 -107.625,-190.375 -104.375,-191.625 C-101.125,-192.875 -97.0459976196289,-193.6840057373047 -95.125,-195.125 C-92.125,-197.375 -87.875,-206.125 -87.875,-206.125"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(67,40,21)"
                            fillOpacity={1}
                            d=" M-90.875,-170.375 C-90.875,-170.375 -91,-164.125 -90.25,-163.625 C-89.5,-163.125 -83.375,-164.375 -82.375,-164.125 C-81.375,-163.875 -81.625,-167.375 -82.25,-167.875 C-82.875,-168.375 -90.875,-170.375 -90.875,-170.375z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(77,45,23)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-90.875,-170.375 C-90.875,-170.375 -91,-164.125 -90.25,-163.625 C-89.5,-163.125 -83.375,-164.375 -82.375,-164.125 C-81.375,-163.875 -81.625,-167.375 -82.25,-167.875 C-82.875,-168.375 -90.875,-170.375 -90.875,-170.375z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(67,40,21)"
                            fillOpacity={1}
                            d=" M-95.875,-170.56199645996094 C-100.75,-171.37399291992188 -106.43800354003906,-169.68800354003906 -107.68800354003906,-169.5 C-108.93800354003906,-169.31199645996094 -114.5,-167 -114.5,-167 C-114.5,-167 -105.81199645996094,-166.25 -104.56199645996094,-166 C-103.31199645996094,-165.75 -99.82499694824219,-163.52499389648438 -98.875,-164 C-95,-165.93800354003906 -95.625,-170.56199645996094 -95.875,-170.56199645996094z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(77,45,23)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-95.875,-170.56199645996094 C-100.75,-171.37399291992188 -106.43800354003906,-169.68800354003906 -107.68800354003906,-169.5 C-108.93800354003906,-169.31199645996094 -114.5,-167 -114.5,-167 C-114.5,-167 -105.81199645996094,-166.25 -104.56199645996094,-166 C-103.31199645996094,-165.75 -99.82499694824219,-163.52499389648438 -98.875,-164 C-95,-165.93800354003906 -95.625,-170.56199645996094 -95.875,-170.56199645996094z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.8472558856010437,0.07713614404201508,-0.07713614404201508,0.8472558856010437,417.2847900390625,354.81024169921875)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,-104.56199645996094,-152.25)"
                        >
                          <path
                            fill="rgb(67,40,21)"
                            fillOpacity={1}
                            d=" M0,-3 C1.276268720626831,-3 2.3125,-1.6556999683380127 2.3125,0 C2.3125,1.6556999683380127 1.276268720626831,3 0,3 C-1.276268720626831,3 -2.3125,1.6556999683380127 -2.3125,0 C-2.3125,-1.6556999683380127 -1.276268720626831,-3 0,-3z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(77,45,23)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M0,-3 C1.276268720626831,-3 2.3125,-1.6556999683380127 2.3125,0 C2.3125,1.6556999683380127 1.276268720626831,3 0,3 C-1.276268720626831,3 -2.3125,1.6556999683380127 -2.3125,0 C-2.3125,-1.6556999683380127 -1.276268720626831,-3 0,-3z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.6644521355628967,0.08016045391559601,-0.08016045391559601,0.6644521355628967,412.3340148925781,328.6695556640625)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,-104.56199645996094,-152.25)"
                        >
                          <path
                            fill="rgb(67,40,21)"
                            fillOpacity={1}
                            d=" M0,-3 C1.276268720626831,-3 2.3125,-1.6556999683380127 2.3125,0 C2.3125,1.6556999683380127 1.276268720626831,3 0,3 C-1.276268720626831,3 -2.3125,1.6556999683380127 -2.3125,0 C-2.3125,-1.6556999683380127 -1.276268720626831,-3 0,-3z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(77,45,23)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M0,-3 C1.276268720626831,-3 2.3125,-1.6556999683380127 2.3125,0 C2.3125,1.6556999683380127 1.276268720626831,3 0,3 C-1.276268720626831,3 -2.3125,1.6556999683380127 -2.3125,0 C-2.3125,-1.6556999683380127 -1.276268720626831,-3 0,-3z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,485.25,369.125)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,-39.875,0.875)"
                        >
                          <path
                            fill="url(#__lottie_element_788)"
                            fillOpacity={1}
                            d=" M-95.5,-160.125 C-95.5,-160.125 -102.125,-139.75 -101.875,-137.125 C-101.625,-134.5 -99.29499816894531,-131.77699279785156 -94.75,-132.375 C-90,-133 -88.125,-139.875 -88.125,-139.875 C-88.125,-139.875 -95.125,-141.125 -95.125,-141.125 C-95.125,-141.125 -95.5,-160.125 -95.5,-160.125z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(77,45,23)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-95.5,-160.125 C-95.5,-160.125 -102.125,-139.75 -101.875,-137.125 C-101.625,-134.5 -99.29499816894531,-131.77699279785156 -94.75,-132.375 C-90,-133 -88.125,-139.875 -88.125,-139.875 C-88.125,-139.875 -95.125,-141.125 -95.125,-141.125 C-95.125,-141.125 -95.5,-160.125 -95.5,-160.125z"
                          />
                        </g>
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="url(#__lottie_element_789)"
                            fillOpacity={1}
                            d=" M-135.125,-136.5"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(77,45,23)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-135.125,-136.5"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(67,40,21)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M-94,-122 C-94,-122 -106.375,-122.25 -115.75,-131.625"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1.159999966621399,0,0,1,460.70001220703125,368.75)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1.0344799757003784,-98.125,-121.375)"
                        >
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M0,-3.25 C1.7246874570846558,-3.25 3.125,-1.7936749458312988 3.125,0 C3.125,1.7936749458312988 1.7246874570846558,3.25 0,3.25 C-1.7246874570846558,3.25 -3.125,1.7936749458312988 -3.125,0 C-3.125,-1.7936749458312988 -1.7246874570846558,-3.25 0,-3.25z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(67,40,21)"
                            strokeOpacity={1}
                            strokeWidth={1}
                            d=" M0,-3.25 C1.7246874570846558,-3.25 3.125,-1.7936749458312988 3.125,0 C3.125,1.7936749458312988 1.7246874570846558,3.25 0,3.25 C-1.7246874570846558,3.25 -3.125,1.7936749458312988 -3.125,0 C-3.125,-1.7936749458312988 -1.7246874570846558,-3.25 0,-3.25z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M-113.375,-131.5 C-111.375,-124.625 -104.75,-121.125 -99.375,-120.375 C-95,-120.375 -94.875,-124.125 -94.875,-124.375 C-104.75,-124.5 -112.5,-131 -113.375,-131.5z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(67,40,21)"
                            strokeOpacity={1}
                            strokeWidth={1}
                            d=" M-113.375,-131.5 C-111.375,-124.625 -104.75,-121.125 -99.375,-120.375 C-95,-120.375 -94.875,-124.125 -94.875,-124.375 C-104.75,-124.5 -112.5,-131 -113.375,-131.5z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(67,40,21)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M-94,-122 C-94,-122 -106.375,-122.25 -115.75,-131.625"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1.159999966621399,0,0,1,460.70001220703125,368.75)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1.0344799757003784,-98.125,-121.375)"
                        >
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M0,-3.25 C1.7246874570846558,-3.25 3.125,-1.7936749458312988 3.125,0 C3.125,1.7936749458312988 1.7246874570846558,3.25 0,3.25 C-1.7246874570846558,3.25 -3.125,1.7936749458312988 -3.125,0 C-3.125,-1.7936749458312988 -1.7246874570846558,-3.25 0,-3.25z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(67,40,21)"
                            strokeOpacity={1}
                            strokeWidth={1}
                            d=" M0,-3.25 C1.7246874570846558,-3.25 3.125,-1.7936749458312988 3.125,0 C3.125,1.7936749458312988 1.7246874570846558,3.25 0,3.25 C-1.7246874570846558,3.25 -3.125,1.7936749458312988 -3.125,0 C-3.125,-1.7936749458312988 -1.7246874570846558,-3.25 0,-3.25z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M-113.375,-131.5 C-111.375,-124.625 -104.75,-121.125 -99.375,-120.375 C-95,-120.375 -94.875,-124.125 -94.875,-124.375 C-104.75,-124.5 -112.5,-131 -113.375,-131.5z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(67,40,21)"
                            strokeOpacity={1}
                            strokeWidth={1}
                            d=" M-113.375,-131.5 C-111.375,-124.625 -104.75,-121.125 -99.375,-120.375 C-95,-120.375 -94.875,-124.125 -94.875,-124.375 C-104.75,-124.5 -112.5,-131 -113.375,-131.5z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(67,40,21)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M-94,-122 C-94,-122 -106.375,-122.25 -115.75,-131.625"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(245,186,137)"
                            fillOpacity={1}
                            d=" M-107.25,-158.25 C-107.25,-158.25 -107.65369415283203,-156.42698669433594 -107.65369415283203,-156.42698669433594 C-107.65369415283203,-156.42698669433594 -98.78443908691406,-155.2991180419922 -98.78443908691406,-155.2991180419922 C-98.78443908691406,-155.2991180419922 -98,-157.875 -98,-157.875 C-98,-157.875 -107.25,-158.25 -107.25,-158.25z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(67,40,21)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-107.25,-158.25 C-107.25,-158.25 -107.65369415283203,-156.42698669433594 -107.65369415283203,-156.42698669433594 C-107.65369415283203,-156.42698669433594 -98.78443908691406,-155.2991180419922 -98.78443908691406,-155.2991180419922 C-98.78443908691406,-155.2991180419922 -98,-157.875 -98,-157.875 C-98,-157.875 -107.25,-158.25 -107.25,-158.25z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,458.625,371.625)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(245,186,137)"
                            fillOpacity={1}
                            d=" M-106.375,-158.625 C-106.375,-158.625 -107.00286865234375,-156.0720672607422 -107.00286865234375,-156.0720672607422 C-107.00286865234375,-156.0720672607422 -101.25286865234375,-155.43846130371094 -101.25286865234375,-155.43846130371094 C-101.25286865234375,-155.43846130371094 -100.875,-158.75 -100.875,-158.75 C-100.875,-158.75 -106.375,-158.625 -106.375,-158.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(67,40,21)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-106.375,-158.625 C-106.375,-158.625 -107.00286865234375,-156.0720672607422 -107.00286865234375,-156.0720672607422 C-107.00286865234375,-156.0720672607422 -101.25286865234375,-155.43846130371094 -101.25286865234375,-155.43846130371094 C-101.25286865234375,-155.43846130371094 -100.875,-158.75 -100.875,-158.75 C-100.875,-158.75 -106.375,-158.625 -106.375,-158.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(235,157,93)"
                            fillOpacity={1}
                            d=" M-142.5,-160.75 C-144,-159.375 -143.5,-149 -142.5,-147 C-141.5,-145 -134.75,-145 -134.75,-145 C-134.75,-145 -131.25,-145.375 -131.25,-145.375 C-131.25,-145.375 -130.625,-160.125 -130.625,-160.125 C-130.625,-160.125 -141,-162.125 -142.5,-160.75z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(67,40,21)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-142.5,-160.75 C-144,-159.375 -143.5,-149 -142.5,-147 C-141.5,-145 -134.75,-145 -134.75,-145 C-134.75,-145 -131.25,-145.375 -131.25,-145.375 C-131.25,-145.375 -130.625,-160.125 -130.625,-160.125 C-130.625,-160.125 -141,-162.125 -142.5,-160.75z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={1}
                            d=" M-141.375,-154.875 C-141.375,-154.875 -141.875,-158.75 -138.875,-158.375 C-135.875,-158 -134.25,-157.25 -134.25,-157.25 C-134.25,-157.25 -137.25,-154.875 -137.25,-154.875 C-137.25,-154.875 -138.625,-153.75 -138.625,-152.875 C-138.625,-152 -137.375,-149.625 -135.25,-149.75"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(109,59,32)"
                            fillOpacity={1}
                            d=" M1341,456"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(205,132,73)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M1341,456"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(244,243,243)"
                            fillOpacity={1}
                            d=" M33.5,89.25 C33.5,89.25 -25,89.75 -25,89.75 C-25,89.75 -25,92.5 -25,92.5 C-25,92.5 33,92 33,92 C33,92 33.5,89.25 33.5,89.25z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(224,224,224)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M33.5,89.25 C33.5,89.25 -25,89.75 -25,89.75 C-25,89.75 -25,92.5 -25,92.5 C-25,92.5 33,92 33,92 C33,92 33.5,89.25 33.5,89.25z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M-119.5,23.5 C-125.75,24.75 -123.75,31.5 -123.75,31.5 C-123.75,31.5 -109.75,91.75 -109.75,91.75 C-109.75,91.75 -22.75,92.5 -22.75,92.5 C-22.75,92.5 -35,47.5 -37.75,37 C-40.5,26.5 -47,26.25 -47,26.25 C-47,26.25 -113.25,22.25 -119.5,23.5z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(0,0,0)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-119.5,23.5 C-125.75,24.75 -123.75,31.5 -123.75,31.5 C-123.75,31.5 -109.75,91.75 -109.75,91.75 C-109.75,91.75 -22.75,92.5 -22.75,92.5 C-22.75,92.5 -35,47.5 -37.75,37 C-40.5,26.5 -47,26.25 -47,26.25 C-47,26.25 -113.25,22.25 -119.5,23.5z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9886857867240906,-0.15000127255916595,0.15000127255916595,0.9886857867240906,434.9529113769531,359.0477294921875)"
                        opacity={1}
                        style={{ display: "block" }}
                      />
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(219,190,158)"
                            fillOpacity={1}
                            d=" M30.5,69.25 C30.5,69.25 33.375,91.5 33.375,91.5 C33.375,91.5 42.125,91.5 42.125,91.5 C42.125,91.5 46.75,69.375 46.75,69.375 C46.75,69.375 30.5,69.25 30.5,69.25z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(224,224,224)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M30.5,69.25 C30.5,69.25 33.375,91.5 33.375,91.5 C33.375,91.5 42.125,91.5 42.125,91.5 C42.125,91.5 46.75,69.375 46.75,69.375 C46.75,69.375 30.5,69.25 30.5,69.25z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(133,74,2)"
                            fillOpacity={1}
                            d=" M46.625,66.375 C46.625,66.375 30.125,66.25 30.125,66.25 C30.125,66.25 28.375,69.875 28.375,69.875 C28.375,69.875 48.5620002746582,71 48.5620002746582,71 C48.5620002746582,71 46.625,66.375 46.625,66.375z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(224,224,224)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M46.625,66.375 C46.625,66.375 30.125,66.25 30.125,66.25 C30.125,66.25 28.375,69.875 28.375,69.875 C28.375,69.875 48.5620002746582,71 48.5620002746582,71 C48.5620002746582,71 46.625,66.375 46.625,66.375z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,444.9999694824219,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(54,54,54)"
                            fillOpacity={1}
                            d=" M51.5,23.5 C42.5,24.75 46.25,32.75 46.25,32.75 C46.25,32.75 60.5,92.75 60.5,92.75 C60.5,92.75 145.75,91.25 145.75,91.25 C145.75,91.25 132.5,43.75 129.75,34.25 C127,24.75 121,26.5 121,26.5 C121,26.5 51.5,23.75 51.5,23.5z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(224,224,224)"
                            strokeOpacity={1}
                            strokeWidth={1}
                            d=" M51.5,23.5 C42.5,24.75 46.25,32.75 46.25,32.75 C46.25,32.75 60.5,92.75 60.5,92.75 C60.5,92.75 145.75,91.25 145.75,91.25 C145.75,91.25 132.5,43.75 129.75,34.25 C127,24.75 121,26.5 121,26.5 C121,26.5 51.5,23.75 51.5,23.5z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(232,232,232)"
                            fillOpacity={1}
                            d=" M50,28.25 C50,28.25 64.5,92.25 64.5,92.25 C64.5,92.25 143,92.5 143,92.5 C143,92.5 124.75,30 124.75,30 C124.75,30 50,28.25 50,28.25z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(224,224,224)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M50,28.25 C50,28.25 64.5,92.25 64.5,92.25 C64.5,92.25 143,92.5 143,92.5 C143,92.5 124.75,30 124.75,30 C124.75,30 50,28.25 50,28.25z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M62.125,28.625 C62.125,28.625 75.75,91.75 75.75,91.75 C75.75,91.75 134.25,92 134.25,92 C134.25,92 115.75,29.75 115.75,29.75 C115.75,29.75 62.125,28.625 62.125,28.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(224,224,224)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M62.125,28.625 C62.125,28.625 75.75,91.75 75.75,91.75 C75.75,91.75 134.25,92 134.25,92 C134.25,92 115.75,29.75 115.75,29.75 C115.75,29.75 62.125,28.625 62.125,28.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(201,201,201)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M101.625,63.5 C101.625,63.5 120.75,63.5 120.75,63.5"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(201,201,201)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M103,69 C103,69 121.25,68.875 121.25,68.875"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1.0060700178146362,0,0,1.07260000705719,444.99969482421875,369.99957275390625)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(201,201,201)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M103.49700164794922,69 C103.49700164794922,69 118.0199966430664,68.64199829101562 118.0199966430664,68.64199829101562"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1.0241800546646118,0,0,1.1527199745178223,444.9998779296875,369.9997863769531)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(201,201,201)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M103.49700164794922,69 C103.49700164794922,69 120.58300018310547,68.96700286865234 120.58300018310547,68.96700286865234"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1.0241800546646118,0,0,1.1527199745178223,445.00042724609375,370.00042724609375)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(201,201,201)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M105.08399963378906,73.33799743652344 C105.08399963378906,73.33799743652344 124.24400329589844,73.30500030517578 124.24400329589844,73.30500030517578"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,444,372)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(0.8938800096511841,0,0,0.8299700021743774,94.875,45.5)"
                        >
                          <path
                            fill="rgb(54,156,163)"
                            fillOpacity={1}
                            d=" M0,-8.75 C7.795587539672852,-8.75 14.125,-4.829124927520752 14.125,0 C14.125,4.829124927520752 7.795587539672852,8.75 0,8.75 C-7.795587539672852,8.75 -14.125,4.829124927520752 -14.125,0 C-14.125,-4.829124927520752 -7.795587539672852,-8.75 0,-8.75z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(201,201,201)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M0,-8.75 C7.795587539672852,-8.75 14.125,-4.829124927520752 14.125,0 C14.125,4.829124927520752 7.795587539672852,8.75 0,8.75 C-7.795587539672852,8.75 -14.125,4.829124927520752 -14.125,0 C-14.125,-4.829124927520752 -7.795587539672852,-8.75 0,-8.75z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,444.25,370.125)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(0.8938800096511841,0,0,0.8299700021743774,94.875,45.5)"
                        >
                          <path
                            fill="rgb(57,180,189)"
                            fillOpacity={1}
                            d=" M0,-8.75 C7.795587539672852,-8.75 14.125,-4.829124927520752 14.125,0 C14.125,4.829124927520752 7.795587539672852,8.75 0,8.75 C-7.795587539672852,8.75 -14.125,4.829124927520752 -14.125,0 C-14.125,-4.829124927520752 -7.795587539672852,-8.75 0,-8.75z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(201,201,201)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M0,-8.75 C7.795587539672852,-8.75 14.125,-4.829124927520752 14.125,0 C14.125,4.829124927520752 7.795587539672852,8.75 0,8.75 C-7.795587539672852,8.75 -14.125,4.829124927520752 -14.125,0 C-14.125,-4.829124927520752 -7.795587539672852,-8.75 0,-8.75z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,421.375,372.75)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,24.125,-2.125)"
                        >
                          <path
                            fill="rgb(194,142,0)"
                            fillOpacity={1}
                            d=" M104.125,37.5 C104.125,37.5 95.125,45.25 95.125,45.25 C95.125,45.25 109.125,45.25 109.375,45.125 C109.375,38.5 104.125,37.5 104.125,37.5z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(201,201,201)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M104.125,37.5 C104.125,37.5 95.125,45.25 95.125,45.25 C95.125,45.25 109.125,45.25 109.375,45.125 C109.375,38.5 104.125,37.5 104.125,37.5z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,421.375,372)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,24.125,-2.125)"
                        >
                          <path
                            fill="rgb(255,187,0)"
                            fillOpacity={1}
                            d=" M104.125,37.5 C104.125,37.5 95.125,45.25 95.125,45.25 C95.125,45.25 109.125,45.25 109.375,45.125 C109.375,38.5 104.125,37.5 104.125,37.5z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(201,201,201)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M104.125,37.5 C104.125,37.5 95.125,45.25 95.125,45.25 C95.125,45.25 109.125,45.25 109.375,45.125 C109.375,38.5 104.125,37.5 104.125,37.5z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(196,196,196)"
                            fillOpacity={1}
                            d=" M206.25,88.75 C206.25,88.75 65,90 65,90 C65,90 61.25,92.75 61.25,92.75 C61.25,92.75 206.25,92.25 206.25,92.25 C206.25,92.25 206.25,88.75 206.25,88.75z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(164,164,164)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M206.25,88.75 C206.25,88.75 65,90 65,90 C65,90 61.25,92.75 61.25,92.75 C61.25,92.75 206.25,92.25 206.25,92.25 C206.25,92.25 206.25,88.75 206.25,88.75z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(118,79,52)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M82.375,72.875 C82.375,72.875 83.625,80.25 83.625,80.25"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(54,156,163)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M85.93800354003906,75.84400177001953 C85.93800354003906,75.84400177001953 86.5,80.375 86.5,80.375"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(27,102,126)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M89.43800354003906,72.75 C89.43800354003906,72.75 90.5,80.59400177001953 90.5,80.59400177001953"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(255,187,0)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M91.93800354003906,68.375 C91.93800354003906,68.375 93.68800354003906,80.40599822998047 93.68800354003906,80.40599822998047"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(201,201,201)"
                            strokeOpacity={1}
                            strokeWidth={1}
                            d=" M80.5,80.81199645996094 C80.5,80.81199645996094 96.31199645996094,80 96.31199645996094,80"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1.0319000482559204,-232.5,183.125)"
                        >
                          <path
                            fill="rgb(171,171,171)"
                            fillOpacity={1}
                            d=" M4.75,-78.375 C4.75,-78.375 4.75,78.375 4.75,78.375 C4.75,78.375 -4.75,78.375 -4.75,78.375 C-4.75,78.375 -4.75,-78.375 -4.75,-78.375 C-4.75,-78.375 4.75,-78.375 4.75,-78.375z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M4.75,-78.375 C4.75,-78.375 4.75,78.375 4.75,78.375 C4.75,78.375 -4.75,78.375 -4.75,78.375 C-4.75,78.375 -4.75,-78.375 -4.75,-78.375 C-4.75,-78.375 4.75,-78.375 4.75,-78.375z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1.0094900131225586,444.75,368.7585754394531)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,-240.25,183.5)"
                        >
                          <path
                            fill="rgb(194,194,194)"
                            fillOpacity={1}
                            d=" M5.25,-79 C5.25,-79 5.25,79 5.25,79 C5.25,79 -5.25,79 -5.25,79 C-5.25,79 -5.25,-79 -5.25,-79 C-5.25,-79 5.25,-79 5.25,-79z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M5.25,-79 C5.25,-79 5.25,79 5.25,79 C5.25,79 -5.25,79 -5.25,79 C-5.25,79 -5.25,-79 -5.25,-79 C-5.25,-79 5.25,-79 5.25,-79z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,0.983020007610321,540.5,373.1245422363281)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,-403.5,184.25)"
                        >
                          <path
                            fill="rgb(194,194,194)"
                            fillOpacity={1}
                            d=" M3.5,-80.75 C3.5,-80.75 3.5,80.75 3.5,80.75 C3.5,80.75 -3.5,80.75 -3.5,80.75 C-3.5,80.75 -3.5,-80.75 -3.5,-80.75 C-3.5,-80.75 3.5,-80.75 3.5,-80.75z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M3.5,-80.75 C3.5,-80.75 3.5,80.75 3.5,80.75 C3.5,80.75 -3.5,80.75 -3.5,80.75 C-3.5,80.75 -3.5,-80.75 -3.5,-80.75 C-3.5,-80.75 3.5,-80.75 3.5,-80.75z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,444.25,370.75)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(171,171,171)"
                            fillOpacity={1}
                            d=" M215.5,102.5 C215.5,102.5 202.5,104 202.5,104 C202.5,104 204,262.5 204,262.5 C204,262.5 213.5,263.5 213.5,263.5 C213.5,263.5 215.5,102.5 215.5,102.5z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M215.5,102.5 C215.5,102.5 202.5,104 202.5,104 C202.5,104 204,262.5 204,262.5 C204,262.5 213.5,263.5 213.5,263.5 C213.5,263.5 215.5,102.5 215.5,102.5z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(171,171,171)"
                            fillOpacity={1}
                            d=" M135.5,91 C135.5,91 135.5,264 135.5,264 C135.5,264 142.5,263.5 142.5,263.5 C142.5,263.5 145,105.5 145,105.5 C145,105.5 213,105 213,105 C213,105 211.5,263.5 211.5,263.5 C211.5,263.5 219.5,263.5 219.5,263.5 C219.5,263.5 222,92 222,92 C222,92 135.5,91 135.5,91z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M135.5,91 C135.5,91 135.5,264 135.5,264 C135.5,264 142.5,263.5 142.5,263.5 C142.5,263.5 145,105.5 145,105.5 C145,105.5 213,105 213,105 C213,105 211.5,263.5 211.5,263.5 C211.5,263.5 219.5,263.5 219.5,263.5 C219.5,263.5 222,92 222,92 C222,92 135.5,91 135.5,91z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      />
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,-317,183.25)">
                          <path
                            fill="rgb(230,230,230)"
                            fillOpacity={1}
                            d=" M6,-80.25 C6,-80.25 6,80.25 6,80.25 C6,80.25 -6,80.25 -6,80.25 C-6,80.25 -6,-80.25 -6,-80.25 C-6,-80.25 6,-80.25 6,-80.25z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M6,-80.25 C6,-80.25 6,80.25 6,80.25 C6,80.25 -6,80.25 -6,80.25 C-6,80.25 -6,-80.25 -6,-80.25 C-6,-80.25 6,-80.25 6,-80.25z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,129.75,183.25)"
                        >
                          <path
                            fill="rgb(230,230,230)"
                            fillOpacity={1}
                            d=" M6.25,-79.75 C6.25,-79.75 6.25,79.75 6.25,79.75 C6.25,79.75 -6.25,79.75 -6.25,79.75 C-6.25,79.75 -6.25,-79.75 -6.25,-79.75 C-6.25,-79.75 6.25,-79.75 6.25,-79.75z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M6.25,-79.75 C6.25,-79.75 6.25,79.75 6.25,79.75 C6.25,79.75 -6.25,79.75 -6.25,79.75 C-6.25,79.75 -6.25,-79.75 -6.25,-79.75 C-6.25,-79.75 6.25,-79.75 6.25,-79.75z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(37.65134048461914,0,0,0.08646000176668167,-4539.6904296875,452.55120849609375)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,129.75,183.25)"
                        >
                          <path
                            fill="rgb(230,230,230)"
                            fillOpacity={1}
                            d=" M6.25,-79.75 C6.25,-79.75 6.25,79.75 6.25,79.75 C6.25,79.75 -6.25,79.75 -6.25,79.75 C-6.25,79.75 -6.25,-79.75 -6.25,-79.75 C-6.25,-79.75 6.25,-79.75 6.25,-79.75z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M6.25,-79.75 C6.25,-79.75 6.25,79.75 6.25,79.75 C6.25,79.75 -6.25,79.75 -6.25,79.75 C-6.25,79.75 -6.25,-79.75 -6.25,-79.75 C-6.25,-79.75 6.25,-79.75 6.25,-79.75z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.99996417760849,-0.008464940823614597,0.008464940823614597,0.99996417760849,444.65557861328125,366.1617431640625)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,1.25)">
                          <path
                            fill="rgb(150,168,48)"
                            fillOpacity={1}
                            d=" M-375,-73.5 C-369,-29 -336.5,101 -336.5,101 C-336.5,101 -331,99.5 -331,99.5 C-340,60 -380,-90.5 -375,-73.5z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-375,-73.5 C-369,-29 -336.5,101 -336.5,101 C-336.5,101 -331,99.5 -331,99.5 C-340,60 -380,-90.5 -375,-73.5z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9995802640914917,0.028971094638109207,-0.028971094638109207,0.9995802640914917,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(119,134,39)"
                            fillOpacity={1}
                            d=" M-358.5,-64.5 C-357,-50.5 -336.5,81 -334.5,101.5 C-333.5,102.5 -330.5,98.5 -330.5,98.5 C-330.5,98.5 -339,1 -358.5,-64.5z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-358.5,-64.5 C-357,-50.5 -336.5,81 -334.5,101.5 C-333.5,102.5 -330.5,98.5 -330.5,98.5 C-330.5,98.5 -339,1 -358.5,-64.5z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9994336366653442,-0.03365173563361168,0.03365173563361168,0.9994336366653442,441.52984619140625,359.06781005859375)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(151,169,49)"
                            fillOpacity={1}
                            d=" M-349.5,-126 C-350,-97.5 -333.5,59.5 -330,94.5 C-329.5,95 -324,94.5 -324,94.5 C-324,94.5 -341.5,-84 -349.5,-126z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-349.5,-126 C-350,-97.5 -333.5,59.5 -330,94.5 C-329.5,95 -324,94.5 -324,94.5 C-324,94.5 -341.5,-84 -349.5,-126z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9995375275611877,0.03040863759815693,-0.03040863759815693,0.9995375275611877,449.9513244628906,380.0732727050781)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(119,134,39)"
                            fillOpacity={1}
                            d=" M-325.5,-100.5 C-326.5,-88.5 -334.5,23 -332,102.5 C-331.5,103 -327.5,102 -327.5,102 C-327.5,102 -323.5,-22.5 -325.5,-100.5z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-325.5,-100.5 C-326.5,-88.5 -334.5,23 -332,102.5 C-331.5,103 -327.5,102 -327.5,102 C-327.5,102 -323.5,-22.5 -325.5,-100.5z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9995375275611877,0.03040863759815693,-0.03040863759815693,0.9995375275611877,447.8923034667969,379.81500244140625)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(119,134,39)"
                            fillOpacity={1}
                            d=" M-294,-78 C-298,-63.5 -321.5,88.5 -323,103.5 C-323,104 -318,104 -318,104 C-318,104 -298,-27 -294,-78z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-294,-78 C-298,-63.5 -321.5,88.5 -323,103.5 C-323,104 -318,104 -318,104 C-318,104 -298,-27 -294,-78z"
                          />
                        </g>
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(119,134,39)"
                            fillOpacity={1}
                            d=" M-287.5,-76"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-287.5,-76"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9998671412467957,-0.016299281269311905,0.016299281269311905,0.9998671412467957,447.34283447265625,365.673095703125)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(151,169,49)"
                            fillOpacity={1}
                            d=" M-288.5,-74.5 C-294.75,-55.75 -316.5,-3 -331.75,98.5 C-331.75,99.25 -328,99.5 -328,99.5 C-328,99.5 -308,-6 -288.5,-74.5z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-288.5,-74.5 C-294.75,-55.75 -316.5,-3 -331.75,98.5 C-331.75,99.25 -328,99.5 -328,99.5 C-328,99.5 -308,-6 -288.5,-74.5z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.99934321641922,0.036236442625522614,-0.036236442625522614,0.99934321641922,448.52471923828125,381.6905517578125)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(151,169,49)"
                            fillOpacity={1}
                            d=" M-277.5,-58.5 C-294,-14.5 -313.5,53.5 -321,102 C-320,103.5 -317,102 -317,102 C-317,102 -298.5,25.5 -277.5,-58.5z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-277.5,-58.5 C-294,-14.5 -313.5,53.5 -321,102 C-320,103.5 -317,102 -317,102 C-317,102 -298.5,25.5 -277.5,-58.5z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.99934321641922,0.036236442625522614,-0.036236442625522614,0.99934321641922,448.40130615234375,381.3355712890625)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(119,134,39)"
                            fillOpacity={1}
                            d=" M-265.5,-48.5 C-288,-4 -308,56.5 -312.5,100 C-313,99.5 -308.5,100.5 -308.5,100.5 C-308.5,100.5 -293,28 -265.5,-48.5z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-265.5,-48.5 C-288,-4 -308,56.5 -312.5,100 C-313,99.5 -308.5,100.5 -308.5,100.5 C-308.5,100.5 -293,28 -265.5,-48.5z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9983662962913513,0.05713803693652153,-0.05713803693652153,0.9983662962913513,450.4162292480469,387.89642333984375)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(151,169,49)"
                            fillOpacity={1}
                            d=" M-269.5,-28 C-286,2 -301,43.5 -312,102.5 C-312,104 -307,103 -307,103 C-307,103 -290.5,35.5 -269.5,-28z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-269.5,-28 C-286,2 -301,43.5 -312,102.5 C-312,104 -307,103 -307,103 C-307,103 -290.5,35.5 -269.5,-28z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,558.5,373)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,-113.25,-3)">
                          <path
                            fill="rgb(56,56,56)"
                            fillOpacity={1}
                            d=" M-291.25,90 C-291.25,90 -350.25,90.25 -350.25,90.25 C-350.25,90.25 -339,148 -339,148 C-339,148 -298.5,147.75 -298.5,147.75 C-298.5,147.75 -291.25,90 -291.25,90z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-291.25,90 C-291.25,90 -350.25,90.25 -350.25,90.25 C-350.25,90.25 -339,148 -339,148 C-339,148 -298.5,147.75 -298.5,147.75 C-298.5,147.75 -291.25,90 -291.25,90z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,558.5,373)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,-113.25,-3)">
                          <path
                            fill="rgb(41,41,41)"
                            fillOpacity={1}
                            d=" M-291.25,90 C-291.25,90 -306.5,90.06500244140625 -306.5,90.06500244140625 C-306.5,90.06500244140625 -310.0639953613281,112.13600158691406 -313.1340026855469,121.03800201416016 C-317,132.25 -325.2510070800781,147.9149932861328 -325.2510070800781,147.9149932861328 C-325.2510070800781,147.9149932861328 -298.5,147.75 -298.5,147.75 C-298.5,147.75 -291.25,90 -291.25,90z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-291.25,90 C-291.25,90 -306.5,90.06500244140625 -306.5,90.06500244140625 C-306.5,90.06500244140625 -310.0639953613281,112.13600158691406 -313.1340026855469,121.03800201416016 C-317,132.25 -325.2510070800781,147.9149932861328 -325.2510070800781,147.9149932861328 C-325.2510070800781,147.9149932861328 -298.5,147.75 -298.5,147.75 C-298.5,147.75 -291.25,90 -291.25,90z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,523.5,372)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,-77.5,-3.25)">
                          <path
                            fill="rgb(74,74,74)"
                            fillOpacity={1}
                            d=" M-305.25,152.75 C-305.25,152.75 -309.25,152.75 -309.25,152.75 C-309.25,152.75 -292.25,273.5 -292.25,273.5 C-292.25,273.5 -347.75,275.25 -347.75,275.25 C-347.75,275.25 -326.25,153.75 -326.25,153.75 C-326.25,153.75 -329.75,153.25 -329.75,153.25 C-329.75,153.25 -351.5,277.25 -351.5,277.25 C-351.5,277.25 -287.5,277.5 -287.5,277.5 C-287.5,277.5 -305.25,152.75 -305.25,152.75z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-305.25,152.75 C-305.25,152.75 -309.25,152.75 -309.25,152.75 C-309.25,152.75 -292.25,273.5 -292.25,273.5 C-292.25,273.5 -347.75,275.25 -347.75,275.25 C-347.75,275.25 -326.25,153.75 -326.25,153.75 C-326.25,153.75 -329.75,153.25 -329.75,153.25 C-329.75,153.25 -351.5,277.25 -351.5,277.25 C-351.5,277.25 -287.5,277.5 -287.5,277.5 C-287.5,277.5 -305.25,152.75 -305.25,152.75z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445.25,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(102,102,102)"
                            fillOpacity={1}
                            d=" M-320.5,152.75 C-320.5,152.75 -336.5,275.75 -336.5,275.75 C-336.5,275.75 -332.5,275.5 -332.5,275.5 C-332.5,275.5 -318.25,153.5 -318.25,153.5 C-318.25,153.5 -320.5,152.75 -320.5,152.75z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-320.5,152.75 C-320.5,152.75 -336.5,275.75 -336.5,275.75 C-336.5,275.75 -332.5,275.5 -332.5,275.5 C-332.5,275.5 -318.25,153.5 -318.25,153.5 C-318.25,153.5 -320.5,152.75 -320.5,152.75z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445.25,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,-318.125,150.625)"
                        >
                          <path
                            fill="rgb(222,222,222)"
                            fillOpacity={1}
                            d=" M29.625,-3.625 C29.625,-3.625 29.625,3.625 29.625,3.625 C29.625,3.625 -29.625,3.625 -29.625,3.625 C-29.625,3.625 -29.625,-3.625 -29.625,-3.625 C-29.625,-3.625 29.625,-3.625 29.625,-3.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M29.625,-3.625 C29.625,-3.625 29.625,3.625 29.625,3.625 C29.625,3.625 -29.625,3.625 -29.625,3.625 C-29.625,3.625 -29.625,-3.625 -29.625,-3.625 C-29.625,-3.625 29.625,-3.625 29.625,-3.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(36,89,145)"
                            fillOpacity={1}
                            d=" M193.75,49 C193.75,49 191.5,69.75 191.5,69.75 C191.5,69.75 156.5,83.5 156.5,83.5 C156.5,83.5 156.5,90.75 156.5,90.75 C156.5,90.75 216.75,90.25 216.75,90.25 C216.75,90.25 205.5,60.5 205.5,60.5 C205.5,60.5 193.75,49 193.75,49z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M193.75,49 C193.75,49 191.5,69.75 191.5,69.75 C191.5,69.75 156.5,83.5 156.5,83.5 C156.5,83.5 156.5,90.75 156.5,90.75 C156.5,90.75 216.75,90.25 216.75,90.25 C216.75,90.25 205.5,60.5 205.5,60.5 C205.5,60.5 193.75,49 193.75,49z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(240,240,241)"
                            fillOpacity={1}
                            d=" M152.875,83.5 C152.875,83.5 152.75,90.75 152.75,90.75 C152.75,90.75 156.375,90.625 156.375,90.625 C156.375,90.625 156.625,83.625 156.625,83.625 C156.625,83.625 152.875,83.5 152.875,83.5z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M152.875,83.5 C152.875,83.5 152.75,90.75 152.75,90.75 C152.75,90.75 156.375,90.625 156.375,90.625 C156.375,90.625 156.625,83.625 156.625,83.625 C156.625,83.625 152.875,83.5 152.875,83.5z"
                          />
                        </g>
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(219,190,158)"
                            fillOpacity={1}
                            d=" M135,68.75 C135,68.75 137.25,90.5 137.25,90.5 C137.25,90.5 148.75,90.75 148.75,90.75 C148.75,90.75 152,69.75 152,69.75 C152,69.75 135,68.75 135,68.75z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M135,68.75 C135,68.75 137.25,90.5 137.25,90.5 C137.25,90.5 148.75,90.75 148.75,90.75 C148.75,90.75 152,69.75 152,69.75 C152,69.75 135,68.75 135,68.75z"
                          />
                        </g>
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(117,78,51)"
                            fillOpacity={1}
                            d=" M133.125,74.5 C131.5,75.75 133.375,78.375 133.375,78.75 C132.75,81.125 134.5,82.25 134.375,82.5 C133.625,85 135.75,86.25 134.875,86.625 C134,87 134.375,90.25 135,90.125 C138.5,90.125 138.375,89 138.375,88.375 C138.375,87.75 137.25,86.75 137.25,86.75 C137.25,86.75 138.375,86.125 138.625,86 C140.5,85.625 140.5,84.5 140.25,83.5 C140,82.5 136.375,81.75 136.375,81.75 C136.375,81.75 139.625,82 140.75,81.625 C141.875,81.25 141.125,78.5 140.375,78.25 C139.625,78 134.375,78.25 135.5,78 C136.625,77.75 137.25,76.25 136.75,75.25 C136.25,74.25 134.75,73.25 133.125,74.5z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M133.125,74.5 C131.5,75.75 133.375,78.375 133.375,78.75 C132.75,81.125 134.5,82.25 134.375,82.5 C133.625,85 135.75,86.25 134.875,86.625 C134,87 134.375,90.25 135,90.125 C138.5,90.125 138.375,89 138.375,88.375 C138.375,87.75 137.25,86.75 137.25,86.75 C137.25,86.75 138.375,86.125 138.625,86 C140.5,85.625 140.5,84.5 140.25,83.5 C140,82.5 136.375,81.75 136.375,81.75 C136.375,81.75 139.625,82 140.75,81.625 C141.875,81.25 141.125,78.5 140.375,78.25 C139.625,78 134.375,78.25 135.5,78 C136.625,77.75 137.25,76.25 136.75,75.25 C136.25,74.25 134.75,73.25 133.125,74.5z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(219,190,158)"
                            fillOpacity={1}
                            d=" M135,68.75 C135,68.75 137.25,90.5 137.25,90.5 C137.25,90.5 148.75,90.75 148.75,90.75 C148.75,90.75 152,69.75 152,69.75 C152,69.75 135,68.75 135,68.75z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M135,68.75 C135,68.75 137.25,90.5 137.25,90.5 C137.25,90.5 148.75,90.75 148.75,90.75 C148.75,90.75 152,69.75 152,69.75 C152,69.75 135,68.75 135,68.75z"
                          />
                        </g>
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(117,78,51)"
                            fillOpacity={1}
                            d=" M133.125,74.5 C131.5,75.75 133.375,78.375 133.375,78.75 C132.75,81.125 134.5,82.25 134.375,82.5 C133.625,85 135.75,86.25 134.875,86.625 C134,87 134.375,90.25 135,90.125 C138.5,90.125 138.375,89 138.375,88.375 C138.375,87.75 137.25,86.75 137.25,86.75 C137.25,86.75 138.375,86.125 138.625,86 C140.5,85.625 140.5,84.5 140.25,83.5 C140,82.5 136.375,81.75 136.375,81.75 C136.375,81.75 139.625,82 140.75,81.625 C141.875,81.25 141.125,78.5 140.375,78.25 C139.625,78 134.375,78.25 135.5,78 C136.625,77.75 137.25,76.25 136.75,75.25 C136.25,74.25 134.75,73.25 133.125,74.5z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M133.125,74.5 C131.5,75.75 133.375,78.375 133.375,78.75 C132.75,81.125 134.5,82.25 134.375,82.5 C133.625,85 135.75,86.25 134.875,86.625 C134,87 134.375,90.25 135,90.125 C138.5,90.125 138.375,89 138.375,88.375 C138.375,87.75 137.25,86.75 137.25,86.75 C137.25,86.75 138.375,86.125 138.625,86 C140.5,85.625 140.5,84.5 140.25,83.5 C140,82.5 136.375,81.75 136.375,81.75 C136.375,81.75 139.625,82 140.75,81.625 C141.875,81.25 141.125,78.5 140.375,78.25 C139.625,78 134.375,78.25 135.5,78 C136.625,77.75 137.25,76.25 136.75,75.25 C136.25,74.25 134.75,73.25 133.125,74.5z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(117,78,51)"
                            fillOpacity={1}
                            d=" M133.125,74.5 C131.5,75.75 133.375,78.375 133.375,78.75 C132.75,81.125 134.5,82.25 134.375,82.5 C133.625,85 135.75,86.25 134.875,86.625 C134,87 134.375,90.25 135,90.125 C138.5,90.125 138.375,89 138.375,88.375 C138.375,87.75 137.25,86.75 137.25,86.75 C137.25,86.75 138.375,86.125 138.625,86 C140.5,85.625 140.5,84.5 140.25,83.5 C140,82.5 136.375,81.75 136.375,81.75 C136.375,81.75 139.625,82 140.75,81.625 C141.875,81.25 141.125,78.5 140.375,78.25 C139.625,78 134.375,78.25 135.5,78 C136.625,77.75 137.25,76.25 136.75,75.25 C136.25,74.25 134.75,73.25 133.125,74.5z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M133.125,74.5 C131.5,75.75 133.375,78.375 133.375,78.75 C132.75,81.125 134.5,82.25 134.375,82.5 C133.625,85 135.75,86.25 134.875,86.625 C134,87 134.375,90.25 135,90.125 C138.5,90.125 138.375,89 138.375,88.375 C138.375,87.75 137.25,86.75 137.25,86.75 C137.25,86.75 138.375,86.125 138.625,86 C140.5,85.625 140.5,84.5 140.25,83.5 C140,82.5 136.375,81.75 136.375,81.75 C136.375,81.75 139.625,82 140.75,81.625 C141.875,81.25 141.125,78.5 140.375,78.25 C139.625,78 134.375,78.25 135.5,78 C136.625,77.75 137.25,76.25 136.75,75.25 C136.25,74.25 134.75,73.25 133.125,74.5z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(117,78,51)"
                            fillOpacity={1}
                            d=" M147.375,72.25 C147.375,72.25 145.5,75.125 146.625,76.25 C147.75,77.375 149.375,78.375 149.375,80 C149.375,81.625 149.25,84.375 148.125,86.5 C147,88.625 147.5,89.125 148.125,90.375 C148.75,91.625 152.875,90.75 152.875,90.75 C152.875,90.75 153.125,82.75 153.125,82.75 C153.125,82.75 152.5,75.25 149.25,73.125 C149.5,73.375 147.375,72.25 147.375,72.25z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M147.375,72.25 C147.375,72.25 145.5,75.125 146.625,76.25 C147.75,77.375 149.375,78.375 149.375,80 C149.375,81.625 149.25,84.375 148.125,86.5 C147,88.625 147.5,89.125 148.125,90.375 C148.75,91.625 152.875,90.75 152.875,90.75 C152.875,90.75 153.125,82.75 153.125,82.75 C153.125,82.75 152.5,75.25 149.25,73.125 C149.5,73.375 147.375,72.25 147.375,72.25z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(0,58,120)"
                            fillOpacity={1}
                            d=" M209.5,-17.25 C209.5,-17.25 185.75,-13 185.75,-13 C185.75,-13 192.25,54.5 192.75,55.5 C193.25,56.5 202,64.25 209.5,76 C217,87.75 216.25,113.25 214.5,119.5 C212.75,125.75 211.18800354003906,132.25 211.43800354003906,133.25 C218.93800354003906,139.93800354003906 251.5,139.75 252.5,138.75 C265.5,99 250,48 249.25,45.75 C248.5,43.5 243.5,27.75 235,10.75 C226.5,-6.25 209.5,-17.25 209.5,-17.25z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M209.5,-17.25 C209.5,-17.25 185.75,-13 185.75,-13 C185.75,-13 192.25,54.5 192.75,55.5 C193.25,56.5 202,64.25 209.5,76 C217,87.75 216.25,113.25 214.5,119.5 C212.75,125.75 211.18800354003906,132.25 211.43800354003906,133.25 C218.93800354003906,139.93800354003906 251.5,139.75 252.5,138.75 C265.5,99 250,48 249.25,45.75 C248.5,43.5 243.5,27.75 235,10.75 C226.5,-6.25 209.5,-17.25 209.5,-17.25z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(7,43,82)"
                            fillOpacity={1}
                            d=" M193.25,-8.25 C185.625,-17.125 180.75,-7 180.25,-6.75 C171.75,8.25 167.25,44.25 167.25,47.25 C167.25,50.25 161,80.25 162,88.25 C162.75,92 166.75,90.25 167.5,90.75 C177,85.5 194.5,61 203,38.5 C211.25,11.25 193,-8.25 193.25,-8.25z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M193.25,-8.25 C185.625,-17.125 180.75,-7 180.25,-6.75 C171.75,8.25 167.25,44.25 167.25,47.25 C167.25,50.25 161,80.25 162,88.25 C162.75,92 166.75,90.25 167.5,90.75 C177,85.5 194.5,61 203,38.5 C211.25,11.25 193,-8.25 193.25,-8.25z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(36,89,145)"
                            fillOpacity={1}
                            d=" M199,-22.375 C197.5,-23 183.5,-11.375 185.125,-11.25 C186.75,-11.125 197,-11.75 199.375,-12.875 C203.25,-14.125 209.625,-17.125 209.625,-17.125 C209.625,-17.125 200.75,-21.75 199,-22.375z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M199,-22.375 C197.5,-23 183.5,-11.375 185.125,-11.25 C186.75,-11.125 197,-11.75 199.375,-12.875 C203.25,-14.125 209.625,-17.125 209.625,-17.125 C209.625,-17.125 200.75,-21.75 199,-22.375z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(244,244,244)"
                            fillOpacity={1}
                            d=" M195.875,-27.875 C195.875,-27.875 184.5,-19.75 183.75,-18.375 C183,-17 180.593994140625,-7.525000095367432 181,-8 C187.625,-15.75 199.25,-22.375 199.25,-22.375 C199.25,-22.375 195.875,-27.875 195.875,-27.875z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M195.875,-27.875 C195.875,-27.875 184.5,-19.75 183.75,-18.375 C183,-17 180.593994140625,-7.525000095367432 181,-8 C187.625,-15.75 199.25,-22.375 199.25,-22.375 C199.25,-22.375 195.875,-27.875 195.875,-27.875z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(89,54,31)"
                            fillOpacity={1}
                            d=" M189.625,-43.375 C189.625,-43.375 177.625,-36.125 177.625,-34.25 C177.625,-32.375 183.5,-18 183.5,-18 C183.5,-18 195.5,-27.875 195.5,-27.875 C195.5,-27.875 189.625,-43.375 189.625,-43.375z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M189.625,-43.375 C189.625,-43.375 177.625,-36.125 177.625,-34.25 C177.625,-32.375 183.5,-18 183.5,-18 C183.5,-18 195.5,-27.875 195.5,-27.875 C195.5,-27.875 189.625,-43.375 189.625,-43.375z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(36,89,145)"
                            fillOpacity={1}
                            d=" M214.25,115.5 C213.25,116.75 210.75,118.25 210.75,119.25 C210.75,120.25 213.20399475097656,122.46900177001953 215.25,121.5 C217.625,120.375 220.5,117.625 219.5,117.25 C218.5,116.875 215.25,114.25 214.25,115.5z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M214.25,115.5 C213.25,116.75 210.75,118.25 210.75,119.25 C210.75,120.25 213.20399475097656,122.46900177001953 215.25,121.5 C217.625,120.375 220.5,117.625 219.5,117.25 C218.5,116.875 215.25,114.25 214.25,115.5z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(0,41,85)"
                            fillOpacity={1}
                            d=" M212.06199645996094,132.875 C212.06199645996094,132.875 204.81199645996094,133 204.25,133.25 C203.68800354003906,133.5 169.25,138 147.5,156.5 C146.75,157.75 146.5,158.75 149.5,164.5 C152.5,170.25 172,221.75 183,255.75 C183,256 186.25,255.25 186.25,255.25 C186.25,255.25 186.5,198.5 185,191.25 C183.5,184 183,177.5 176.5,171.75 C170,166 172.75,164.75 172.75,164.75 C172.75,164.75 215.75,160.25 215.75,160.25 C215.75,160.25 234.25,138 234.25,138 C234.25,138 218.75,136.25 214.06199645996094,133.875 C214.18699645996094,133.81300354003906 212.06199645996094,132.875 212.06199645996094,132.875z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M212.06199645996094,132.875 C212.06199645996094,132.875 204.81199645996094,133 204.25,133.25 C203.68800354003906,133.5 169.25,138 147.5,156.5 C146.75,157.75 146.5,158.75 149.5,164.5 C152.5,170.25 172,221.75 183,255.75 C183,256 186.25,255.25 186.25,255.25 C186.25,255.25 186.5,198.5 185,191.25 C183.5,184 183,177.5 176.5,171.75 C170,166 172.75,164.75 172.75,164.75 C172.75,164.75 215.75,160.25 215.75,160.25 C215.75,160.25 234.25,138 234.25,138 C234.25,138 218.75,136.25 214.06199645996094,133.875 C214.18699645996094,133.81300354003906 212.06199645996094,132.875 212.06199645996094,132.875z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(13,59,107)"
                            fillOpacity={1}
                            d=" M205,166 C205,166 182,166.25 182,166.25 C182,166.25 216,252.125 216,252.125 C216,252.125 219.31199645996094,252.06199645996094 219.31199645996094,252.06199645996094 C219.31199645996094,252.06199645996094 214.25,196.5 214,193 C213.75,189.5 212,177 207.5,172 C207.5,171.25 205,166 205,166z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M205,166 C205,166 182,166.25 182,166.25 C182,166.25 216,252.125 216,252.125 C216,252.125 219.31199645996094,252.06199645996094 219.31199645996094,252.06199645996094 C219.31199645996094,252.06199645996094 214.25,196.5 214,193 C213.75,189.5 212,177 207.5,172 C207.5,171.25 205,166 205,166z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(65,65,65)"
                            fillOpacity={1}
                            d=" M187,255.625 C187,255.625 183.5,255.875 183.5,255.875 C183.5,255.875 179.625,259.25 179.625,259.25 C179.625,259.25 172.625,258.75 169.875,259.875 C167.125,261 164.75,262.75 164.75,262.75 C164.75,262.75 184.875,263.125 184.875,263.125 C184.875,263.125 188.125,259.125 188.125,259.125 C188.125,259.125 187,255.625 187,255.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M187,255.625 C187,255.625 183.5,255.875 183.5,255.875 C183.5,255.875 179.625,259.25 179.625,259.25 C179.625,259.25 172.625,258.75 169.875,259.875 C167.125,261 164.75,262.75 164.75,262.75 C164.75,262.75 184.875,263.125 184.875,263.125 C184.875,263.125 188.125,259.125 188.125,259.125 C188.125,259.125 187,255.625 187,255.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(64,64,64)"
                            fillOpacity={1}
                            d=" M219.375,252.125 C219.375,252.125 216.18800354003906,252.125 216.18800354003906,252.125 C216.18800354003906,252.125 213.18800354003906,257.31201171875 213.18800354003906,257.31201171875 C213.18800354003906,257.31201171875 209.625,258.75 209.625,258.75 C209.625,258.75 200.68699645996094,259.18701171875 200.31199645996094,262.56201171875 C200.5,262.56201171875 210.75,262.31201171875 210.93800354003906,262.31201171875 C211.12600708007812,262.31201171875 216.18699645996094,261.18701171875 217.81199645996094,259.625 C219.43699645996094,258.06298828125 220.56199645996094,258.125 220.56199645996094,258.125 C220.56199645996094,258.125 219.375,252.125 219.375,252.125z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M219.375,252.125 C219.375,252.125 216.18800354003906,252.125 216.18800354003906,252.125 C216.18800354003906,252.125 213.18800354003906,257.31201171875 213.18800354003906,257.31201171875 C213.18800354003906,257.31201171875 209.625,258.75 209.625,258.75 C209.625,258.75 200.68699645996094,259.18701171875 200.31199645996094,262.56201171875 C200.5,262.56201171875 210.75,262.31201171875 210.93800354003906,262.31201171875 C211.12600708007812,262.31201171875 216.18699645996094,261.18701171875 217.81199645996094,259.625 C219.43699645996094,258.06298828125 220.56199645996094,258.125 220.56199645996094,258.125 C220.56199645996094,258.125 219.375,252.125 219.375,252.125z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(167,167,167)"
                            fillOpacity={1}
                            d=" M188,168 C188.25,167.75 182.5,168.25 182.5,168.25 C182.5,168.25 165.5,204.75 163,224 C160.25,239.75 156.75,263.75 156.75,263.75 C156.75,263.75 160.25,263.25 160.25,263.25 C160.25,263.25 167,194.5 188,168z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M188,168 C188.25,167.75 182.5,168.25 182.5,168.25 C182.5,168.25 165.5,204.75 163,224 C160.25,239.75 156.75,263.75 156.75,263.75 C156.75,263.75 160.25,263.25 160.25,263.25 C160.25,263.25 167,194.5 188,168z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(167,167,167)"
                            fillOpacity={1}
                            d=" M231,165.75 C231,165.75 228.25,166 228,165.75 C229.25,183.5 217.25,263.25 217.25,263.25 C217.25,263.25 220.25,263.25 219.75,263.25 C230,210.5 231,165.75 231,165.75z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M231,165.75 C231,165.75 228.25,166 228,165.75 C229.25,183.5 217.25,263.25 217.25,263.25 C217.25,263.25 220.25,263.25 219.75,263.25 C230,210.5 231,165.75 231,165.75z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(183,184,184)"
                            fillOpacity={1}
                            d=" M223,166 C223,166 218.25,166.25 219,166 C217.25,172.25 217,185.5 217.25,186 C221.5,224 238.25,263.75 238.25,263.75 C238.25,263.75 241.25,263.75 241.25,263.75 C241.25,263.75 224,217 221,191.5 C219.7220001220703,180.63999938964844 223,166 223,166z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M223,166 C223,166 218.25,166.25 219,166 C217.25,172.25 217,185.5 217.25,186 C221.5,224 238.25,263.75 238.25,263.75 C238.25,263.75 241.25,263.75 241.25,263.75 C241.25,263.75 224,217 221,191.5 C219.7220001220703,180.63999938964844 223,166 223,166z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(182,182,182)"
                            fillOpacity={1}
                            d=" M262.25,161.75 C262.25,161.75 258.25,163 258,163.25 C268.5,172.25 297.75,264 297.75,264 C297.75,264 301,264 300.75,263.5 C299,255.25 276,191 272.75,183.25 C269.5,175.5 262.25,161.75 262.25,161.75z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M262.25,161.75 C262.25,161.75 258.25,163 258,163.25 C268.5,172.25 297.75,264 297.75,264 C297.75,264 301,264 300.75,263.5 C299,255.25 276,191 272.75,183.25 C269.5,175.5 262.25,161.75 262.25,161.75z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(125,163,203)"
                            fillOpacity={1}
                            d=" M250.25,7.75 C250.25,7.75 249.75,15.5 247.25,50.25 C241.5,99.5 226.75,128.75 226.5,128.75 C218.25,149.5 200.25,156 197,156.5 C193.75,157 175.5,158.75 173,159.75 C170.5,160.75 164.75,164.25 169.25,166.25 C173.75,168.25 196.48199462890625,167.51699829101562 204.5,167 C220,166 256,164.5 266,161.5 C271.5539855957031,159.83399963378906 275.25,151.25 276.5,146.75 C277.75,142.25 288.25,84.5 290,72.75 C291.75,61 299,8.75 299,8.75 C299,8.75 250.25,7.75 250.25,7.75z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M250.25,7.75 C250.25,7.75 249.75,15.5 247.25,50.25 C241.5,99.5 226.75,128.75 226.5,128.75 C218.25,149.5 200.25,156 197,156.5 C193.75,157 175.5,158.75 173,159.75 C170.5,160.75 164.75,164.25 169.25,166.25 C173.75,168.25 196.48199462890625,167.51699829101562 204.5,167 C220,166 256,164.5 266,161.5 C271.5539855957031,159.83399963378906 275.25,151.25 276.5,146.75 C277.75,142.25 288.25,84.5 290,72.75 C291.75,61 299,8.75 299,8.75 C299,8.75 250.25,7.75 250.25,7.75z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,445,370)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(133,74,2)"
                            fillOpacity={1}
                            d=" M135.875,65.25 C135.5,65.25 133,69 133,69 C133,69 154.75,69.875 154.75,69.875 C154.75,69.875 152.875,65.5 152.875,65.5 C152.875,65.5 136.25,65.25 135.875,65.25z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M135.875,65.25 C135.5,65.25 133,69 133,69 C133,69 154.75,69.875 154.75,69.875 C154.75,69.875 152.875,65.5 152.875,65.5 C152.875,65.5 136.25,65.25 135.875,65.25z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9759129285812378,-0.21816027164459229,0.21816027164459229,0.9759129285812378,431.5654296875,408.1969909667969)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(7,43,82)"
                            fillOpacity={1}
                            d=" M137.25,21.5 C137.25,21.5 132.5,23.5 129.75,24.5 C137.5,55.25 154.75,82.25 159.75,87 C162.75,91.25 167.5,90.625 168.5,89.375 C180,77.75 174,63.25 173.75,59.75 C173.5,56.25 164.25,44 156.5,38.5 C148.75,33 137.25,21.5 137.25,21.5z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M137.25,21.5 C137.25,21.5 132.5,23.5 129.75,24.5 C137.5,55.25 154.75,82.25 159.75,87 C162.75,91.25 167.5,90.625 168.5,89.375 C180,77.75 174,63.25 173.75,59.75 C173.5,56.25 164.25,44 156.5,38.5 C148.75,33 137.25,21.5 137.25,21.5z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9048121571540833,-0.42581087350845337,0.42581087350845337,0.9048121571540833,436.75653076171875,437.28936767578125)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M137.375,16.5 C137.375,16.5 128.75,20.625 128.75,20.625 C128.75,20.625 130.25,24.625 130.25,24.625 C130.25,24.625 137.375,21.875 137.375,21.875 C137.375,21.875 137.375,16.5 137.375,16.5z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M137.375,16.5 C137.375,16.5 128.75,20.625 128.75,20.625 C128.75,20.625 130.25,24.625 130.25,24.625 C130.25,24.625 137.375,21.875 137.375,21.875 C137.375,21.875 137.375,16.5 137.375,16.5z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.7901228666305542,-0.6129484176635742,0.6129484176635742,0.7901228666305542,448.4042053222656,464.2431945800781)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(136,91,60)"
                            fillOpacity={1}
                            d=" M114.75,7.25 C113.875,7.875 113.625,12.5 113.5,13.375 C113.375,14.25 111.875,14.5 111.875,14.125 C111.875,13.75 111.375,10 112,8.875 C112.625,7.75 109,7.75 108.75,9 C108.5,10.25 107.75,12.25 107.75,13.125 C107.75,14 106.75,16 107.25,17 C107.75,18 109.375,19 109.375,20.25 C109.375,21.5 112.875,21.25 115.375,20.625 C117.875,20 122,21.125 122,21.125 C122,21.125 119.875,24.25 121.125,25 C122.375,25.75 126.375,20.125 129,20.625 C129.75,20.25 136.5,18.125 136.5,18.125 C136.5,18.125 138.125,15.25 136.625,13.875 C135.125,12.5 132.625,13.625 130.625,14.375 C128.625,15.125 126.125,15.125 124.25,15.125 C122.375,15.125 121,13.875 121,13.875 C121,13.875 120.875,13.25 121.625,11.375 C122.375,9.5 120.25,8.875 119.875,9.5 C119.5,10.125 117.375,13.75 117.375,13.75 C117.375,13.75 117.75,15.25 117.75,15.25 C117.75,15.25 116.25,13.5 116.5,9.75 C116.75,6 115.625,6.625 114.75,7.25z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M114.75,7.25 C113.875,7.875 113.625,12.5 113.5,13.375 C113.375,14.25 111.875,14.5 111.875,14.125 C111.875,13.75 111.375,10 112,8.875 C112.625,7.75 109,7.75 108.75,9 C108.5,10.25 107.75,12.25 107.75,13.125 C107.75,14 106.75,16 107.25,17 C107.75,18 109.375,19 109.375,20.25 C109.375,21.5 112.875,21.25 115.375,20.625 C117.875,20 122,21.125 122,21.125 C122,21.125 119.875,24.25 121.125,25 C122.375,25.75 126.375,20.125 129,20.625 C129.75,20.25 136.5,18.125 136.5,18.125 C136.5,18.125 138.125,15.25 136.625,13.875 C135.125,12.5 132.625,13.625 130.625,14.375 C128.625,15.125 126.125,15.125 124.25,15.125 C122.375,15.125 121,13.875 121,13.875 C121,13.875 120.875,13.25 121.625,11.375 C122.375,9.5 120.25,8.875 119.875,9.5 C119.5,10.125 117.375,13.75 117.375,13.75 C117.375,13.75 117.75,15.25 117.75,15.25 C117.75,15.25 116.25,13.5 116.5,9.75 C116.75,6 115.625,6.625 114.75,7.25z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9780822396278381,-0.20821897685527802,0.20821897685527802,0.9780822396278381,455.94366455078125,407.9547424316406)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(135,90,59)"
                            fillOpacity={1}
                            d=" M155.5,-89.75 C155.5,-89.75 151.5,-76.25 151.25,-71.5 C151,-66.75 150.25,-59.75 149.5,-53 C148.75,-46.25 148,-40 144.75,-38 C141.5,-36 136,-35.75 136,-35.75 C136,-35.75 135.25,-26 142.5,-26.75 C149.75,-27.5 169.75,-29.25 169.75,-29.25 C169.75,-29.25 177.5,-79 177.5,-79 C177.5,-79 155.5,-89.75 155.5,-89.75z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M155.5,-89.75 C155.5,-89.75 151.5,-76.25 151.25,-71.5 C151,-66.75 150.25,-59.75 149.5,-53 C148.75,-46.25 148,-40 144.75,-38 C141.5,-36 136,-35.75 136,-35.75 C136,-35.75 135.25,-26 142.5,-26.75 C149.75,-27.5 169.75,-29.25 169.75,-29.25 C169.75,-29.25 177.5,-79 177.5,-79 C177.5,-79 155.5,-89.75 155.5,-89.75z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9780822396278381,-0.20821897685527802,0.20821897685527802,0.9780822396278381,455.94366455078125,407.9547424316406)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(38,26,17)"
                            fillOpacity={1}
                            d=" M175,-128.25 C164.5,-129.75 162.75,-124.25 162.5,-124.25 C155.25,-123.75 154.75,-116.75 154.75,-116.75 C154.75,-116.75 147.75,-109.75 147.5,-105.75 C145.25,-93.75 151.5,-93.75 151.5,-94 C151,-89.75 155.75,-88 155.75,-87.5 C159,-84.75 165.25,-84 165.25,-84 C165.25,-84 172.25,-73.75 172.25,-73.75 C172.25,-73.75 168.25,-33.25 168.25,-33.25 C168.25,-33.25 141.75,-27 141.75,-27 C141.75,-27 141.75,-23 141.75,-23 C141.75,-23 149.5,-24 149.5,-24 C149.5,-24 143.25,-18.25 143.25,-18.25 C143.25,-18.25 144.75,-12.5 145.75,-8.5 C149.5,5.75 161.75,2.5 161.75,2.5 C174.5,1.25 176.75,-11.25 178.5,-17 C180.25,-22.75 180.5,-34 180.5,-34 C180.5,-34 188.5,-38.25 188.5,-38.25 C188.5,-38.25 191.75,-32.75 193,-31.5 C194.25,-30.25 197.25,-30.75 197.25,-30.75 C197.25,-30.75 201.75,-29 205.25,-27.5 C221.5,-23.75 225.5,-34.25 226.25,-34.75 C227,-35.25 233.25,-36.75 234.75,-39.75 C236.25,-42.75 236.75,-47 236.75,-47.25 C241,-50.5 238,-57 238,-57 C238,-57 242,-63 242.5,-67.25 C243,-71.5 238,-77 238,-77 C238,-77 238.5,-80 238.75,-80.5 C240.25,-87 235.5,-93.25 235.5,-93.25 C235.5,-93.25 236.75,-102.5 232.75,-107.75 C228.5,-115 218.5,-117 218.25,-117.75 C214.5,-128 205.5,-125 205.5,-126 C202.75,-130 195,-128 195,-127.75 C185.75,-135 175.25,-127 175,-128.25z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M175,-128.25 C164.5,-129.75 162.75,-124.25 162.5,-124.25 C155.25,-123.75 154.75,-116.75 154.75,-116.75 C154.75,-116.75 147.75,-109.75 147.5,-105.75 C145.25,-93.75 151.5,-93.75 151.5,-94 C151,-89.75 155.75,-88 155.75,-87.5 C159,-84.75 165.25,-84 165.25,-84 C165.25,-84 172.25,-73.75 172.25,-73.75 C172.25,-73.75 168.25,-33.25 168.25,-33.25 C168.25,-33.25 141.75,-27 141.75,-27 C141.75,-27 141.75,-23 141.75,-23 C141.75,-23 149.5,-24 149.5,-24 C149.5,-24 143.25,-18.25 143.25,-18.25 C143.25,-18.25 144.75,-12.5 145.75,-8.5 C149.5,5.75 161.75,2.5 161.75,2.5 C174.5,1.25 176.75,-11.25 178.5,-17 C180.25,-22.75 180.5,-34 180.5,-34 C180.5,-34 188.5,-38.25 188.5,-38.25 C188.5,-38.25 191.75,-32.75 193,-31.5 C194.25,-30.25 197.25,-30.75 197.25,-30.75 C197.25,-30.75 201.75,-29 205.25,-27.5 C221.5,-23.75 225.5,-34.25 226.25,-34.75 C227,-35.25 233.25,-36.75 234.75,-39.75 C236.25,-42.75 236.75,-47 236.75,-47.25 C241,-50.5 238,-57 238,-57 C238,-57 242,-63 242.5,-67.25 C243,-71.5 238,-77 238,-77 C238,-77 238.5,-80 238.75,-80.5 C240.25,-87 235.5,-93.25 235.5,-93.25 C235.5,-93.25 236.75,-102.5 232.75,-107.75 C228.5,-115 218.5,-117 218.25,-117.75 C214.5,-128 205.5,-125 205.5,-126 C202.75,-130 195,-128 195,-127.75 C185.75,-135 175.25,-127 175,-128.25z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9780822396278381,-0.20821897685527802,0.20821897685527802,0.9780822396278381,455.94366455078125,407.9547424316406)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(135,90,59)"
                            fillOpacity={1}
                            d=" M186,-51.125 C181.625,-52.125 178.25,-49 178.25,-49 C178.25,-49 180.375,-36 180.625,-33.25 C181,-32.625 188,-34.75 188.75,-36.25 C190.375,-38.75 193.5,-49.25 186,-51.125z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M186,-51.125 C181.625,-52.125 178.25,-49 178.25,-49 C178.25,-49 180.375,-36 180.625,-33.25 C181,-32.625 188,-34.75 188.75,-36.25 C190.375,-38.75 193.5,-49.25 186,-51.125z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9780822396278381,-0.20821897685527802,0.20821897685527802,0.9780822396278381,455.94366455078125,407.9547424316406)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(89,54,31)"
                            fillOpacity={1}
                            d=" M183.75,-48.75 C180.25,-48.75 180.625,-47.625 180.625,-47.625 C180.625,-47.625 180.875,-45.75 182.25,-45.5 C183.625,-45.25 184.75,-43.625 184.375,-42.5 C184,-41.375 182.5,-39.875 182.5,-39.875 C182.5,-39.875 186.125,-41.5 185.875,-43.5 C185.625,-45.5 183.375,-46.75 183.25,-46.75 C183.125,-46.75 185.25,-48.75 187.5,-46.25 C187.75,-46.25 187.25,-48.75 183.75,-48.75z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M183.75,-48.75 C180.25,-48.75 180.625,-47.625 180.625,-47.625 C180.625,-47.625 180.875,-45.75 182.25,-45.5 C183.625,-45.25 184.75,-43.625 184.375,-42.5 C184,-41.375 182.5,-39.875 182.5,-39.875 C182.5,-39.875 186.125,-41.5 185.875,-43.5 C185.625,-45.5 183.375,-46.75 183.25,-46.75 C183.125,-46.75 185.25,-48.75 187.5,-46.25 C187.75,-46.25 187.25,-48.75 183.75,-48.75z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9780822396278381,-0.20821897685527802,0.20821897685527802,0.9780822396278381,455.94366455078125,407.9547424316406)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(38,26,17)"
                            fillOpacity={1}
                            d=" M150.375,-73.5 C148.875,-72.75 148.5,-70 148.625,-67 C148.625,-65.125 154.41299438476562,-66.28900146484375 156.625,-65.125 C159,-63.875 161.5,-62.375 161.5,-62.375 C161.5,-62.375 161.875,-64.375 160.25,-66.75 C159.2899932861328,-68.15299987792969 157,-72.5 150.375,-73.5z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M150.375,-73.5 C148.875,-72.75 148.5,-70 148.625,-67 C148.625,-65.125 154.41299438476562,-66.28900146484375 156.625,-65.125 C159,-63.875 161.5,-62.375 161.5,-62.375 C161.5,-62.375 161.875,-64.375 160.25,-66.75 C159.2899932861328,-68.15299987792969 157,-72.5 150.375,-73.5z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9780822396278381,-0.20821897685527802,0.20821897685527802,0.9780822396278381,455.94366455078125,407.9547424316406)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M150.25,-53.375 C150.25,-53.375 151.875,-46 151.875,-46 C151.875,-46 159.56199645996094,-51.25 159.56199645996094,-51.25 C159.56199645996094,-51.25 150.25,-53.375 150.25,-53.375z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M150.25,-53.375 C150.25,-53.375 151.875,-46 151.875,-46 C151.875,-46 159.56199645996094,-51.25 159.56199645996094,-51.25 C159.56199645996094,-51.25 150.25,-53.375 150.25,-53.375z"
                          />
                        </g>
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(66,56,48)"
                            fillOpacity={1}
                            d=" M149.56199645996094,-53.125 C149.62399291992188,-52.1870002746582 149.5,-51.0620002746582 149.5,-51.0620002746582 C149.5,-51.0620002746582 150.25,-46.6879997253418 151.25,-46.1879997253418 C152.25,-45.6879997253418 152.68800354003906,-46.875 152.5,-48.75 C152.31199645996094,-50.625 150.843994140625,-54.209999084472656 149.56199645996094,-53.125z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(225,238,252)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M149.56199645996094,-53.125 C149.62399291992188,-52.1870002746582 149.5,-51.0620002746582 149.5,-51.0620002746582 C149.5,-51.0620002746582 150.25,-46.6879997253418 151.25,-46.1879997253418 C152.25,-45.6879997253418 152.68800354003906,-46.875 152.5,-48.75 C152.31199645996094,-50.625 150.843994140625,-54.209999084472656 149.56199645996094,-53.125z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9780822396278381,-0.20821897685527802,0.20821897685527802,0.9780822396278381,786.9929809570312,289.2983093261719)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(135,90,59)"
                            fillOpacity={1}
                            d=" M-198.625,-8.625 C-198.625,-8.625 -199,-7.75 -199,-7.75 C-199,-7.75 -189.5,-6.375 -189.5,-6.375 C-189.5,-6.375 -189,-7.125 -189,-7.125 C-189,-7.125 -198.625,-8.625 -198.625,-8.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(158,158,158)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M-198.625,-8.625 C-198.625,-8.625 -199,-7.75 -199,-7.75 C-199,-7.75 -189.5,-6.375 -189.5,-6.375 C-189.5,-6.375 -189,-7.125 -189,-7.125 C-189,-7.125 -198.625,-8.625 -198.625,-8.625z"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(0.9780822396278381,-0.20821897685527802,0.20821897685527802,0.9780822396278381,455.94366455078125,407.9547424316406)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity="0.08" transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M147.75,-61.875 C147.75,-61.875 146.5,-57.5 146.5,-55 C146.5,-52.5 146.7209930419922,-43.33000183105469 149.25,-41.75 C151.25,-40.5 159,-39.625 159.75,-46.875 C160.5,-54.125 159.875,-59.125 159.875,-59.125 C159.875,-59.125 147.75,-61.875 147.75,-61.875z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(73,68,63)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M147.75,-61.875 C147.75,-61.875 146.5,-57.5 146.5,-55 C146.5,-52.5 146.7209930419922,-43.33000183105469 149.25,-41.75 C151.25,-40.5 159,-39.625 159.75,-46.875 C160.5,-54.125 159.875,-59.125 159.875,-59.125 C159.875,-59.125 147.75,-61.875 147.75,-61.875z"
                          />
                        </g>
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(73,68,63)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M147.25,-61.125 C147.25,-61.125 146.5,-57.5 146.5,-55 C146.5,-52.5 146.7209930419922,-43.33000183105469 149.25,-41.75 C151.25,-40.5 159,-39.625 159.75,-46.875 C160.5,-54.125 159.875,-59.125 159.875,-59.125"
                          />
                        </g>
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,187,0)"
                            fillOpacity={1}
                            d=" M146.375,-63.625 C146.375,-63.625 146.5,-61.125 146.5,-61 C146.5,-60.875 155,-59.625 158,-58.375 C161,-57.125 165.125,-57.75 165.125,-57.75 C165.125,-57.75 179.75,-50.5 179.75,-50.5 C179.75,-50.5 183,-50.75 183,-50.75 C183,-50.75 166.5,-58.75 166.25,-59.375 C166,-60 164.75,-60.625 164.875,-60.875 C162.125,-63 146.375,-63.625 146.375,-63.625z"
                          />
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(73,68,63)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M146.375,-63.625 C146.375,-63.625 146.5,-61.125 146.5,-61 C146.5,-60.875 155,-59.625 158,-58.375 C161,-57.125 165.125,-57.75 165.125,-57.75 C165.125,-57.75 179.75,-50.5 179.75,-50.5 C179.75,-50.5 183,-50.75 183,-50.75 C183,-50.75 166.5,-58.75 166.25,-59.375 C166,-60 164.75,-60.625 164.875,-60.875 C162.125,-63 146.375,-63.625 146.375,-63.625z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-md-5 bnrSlider">
              <div className="bnrheadSlid owl-carousel owl-loaded">
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(-1765px, 0px, 0px)",
                      transition: "all 0s ease 0s",
                      width: 3885
                    }}
                  >
                <div className="owl-item cloned" style={{ width: 555 }}>
                      <div className="item">
                        <div className="sld">
                          <h2>
                            <div className="h2text">
                              <span>Scalable extende</span>
                            </div>
                            <div className="h2text">
                              <span>business office</span>
                            </div>
                            <div className="h2text">
                              <span>services</span>
                            </div>
                          </h2>
                          <div className="a">
                            <a
                              href="https://zaparetech.com/services"
                              className="pg_btn"
                            >
                              Staff Augmentation
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: 555 }}>
                      <div className="item">
                        <div className="sld">
                          <h2>
                            <div className="h2text">
                              <span>Innovative and</span>
                            </div>
                            <div className="h2text">
                              <span>intelligent technology</span>
                            </div>
                            <div className="h2text">
                              <span>solutions and services</span>
                            </div>
                          </h2>
                          <div className="a">
                            <a
                              href="https://zaparetech.com/services"
                              className="pg_btn"
                            >
                              Product Management
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: 555 }}>
                      <div className="item">
                        <div className="sld">
                          <h2>
                            <div className="h2text">
                              <span>Customized solutions</span>
                            </div>
                            <div className="h2text">
                              <span>to meet the needs of</span>
                            </div>
                            <div className="h2text">
                              <span>the changing market</span>
                            </div>
                          </h2>
                          <div className="a">
                            <a
                              href="https://zaparetech.com/services"
                              className="pg_btn"
                            >
                              Revenue Cycle Management
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="owl-item active" style={{ width: 555 }}>
                      <div className="item">
                        <div className="sld">
                          <h2>
                            <div ref={text1}     className="h2text">
                              <span>Scalable extended</span>
                            </div>
                            <div
                      ref={text2}     className="h2text">
                              <span>business office</span>
                            </div>
                            <div
                      ref={text3} 
                      className="h2text">
                              <span>services</span>
                            </div>
                          </h2>
                          <div ref={button}      className="a">
                            <a
                              href="https://zaparetech.com/services"
                              className="pg_btn"
                            >
                              Staff Augmentation
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: 555 }}>
                      <div className="item">
                        <div className="sld">
                          <h2>
                            <div className="h2text">
                              <span>Innovative and</span>
                            </div>
                            <div className="h2text">
                              <span>intelligent technology</span>
                            </div>
                            <div className="h2text">
                              <span>solutions and services</span>
                            </div>
                          </h2>
                          <div className="a">
                            <a
                              href="https://zaparetech.com/services"
                              className="pg_btn"
                            >
                              Product Management
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: 555 }}>
                      <div className="item">
                        <div className="sld">
                          <h2>
                            <div className="h2text">
                              <span>Customized solutions</span>
                            </div>
                            <div className="h2text">
                              <span>to meet the needs of</span>
                            </div>
                            <div className="h2text">
                              <span>the changing market</span>
                            </div>
                          </h2>
                          <div className="a">
                            <a
                              href="https://zaparetech.com/services"
                              className="pg_btn"
                            >
                              Revenue Cycle Management
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: 555 }}>
                      <div className="item">
                        <div className="sld">
                          <h2>
                            <div className="h2text">
                              <span>Scalable extended</span>
                            </div>
                            <div className="h2text">
                              <span>business office</span>
                            </div>
                            <div className="h2text">
                              <span>services</span>
                            </div>
                          </h2>
                          <div className="a">
                            <a
                              href="https://zaparetech.com/services"
                              className="pg_btn"
                            >
                              Staff Augmentation
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-nav">
                  <button
                    type="button"
                    aria-label="nav"
                    role="presentation"
                    className="owl-prev"
                  >
                    <i />
                  </button>
                  
                  <button
                    type="button"
                    aria-label="nav"
                    role="presentation"
                    className="owl-next"
                  >
                    <i />
                  </button>
                </div>
                <div className="owl-dots">
             {/*     <button
                    role="button"
                    aria-label="dots"
                    type="button"
                    className="owl-dot"
                  >
                    <span />
                  </button>
                 <button
                    role="button"
                    aria-label="dots"
                    type="button"
                    className="owl-dot active"
                  >
                    <span />
                  </button>
                  
                  <button
                    role="button"
                    aria-label="dots"
                    type="button"
                    className="owl-dot"
                  >
                    <span />
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       </div>
       )
}


export default Hero;