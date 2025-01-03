import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import "./Hero.css";

export default function Hero({handleGetInTouch}) {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      offset: 100, // Offset before animation starts
      easing: 'ease-in-out', // Animation easing
    });
  }, []);
  return (
    <div id="hero">
      
      <div className="container h-100 d-flex flex-column align-items-start justify-content-center m-auto" data-aos="zoom-in"  > 
         <div></div>
      <h1 className="text-dark display-5 fw-bold" data-aos="fade-up">Hi There,<br/> my name  is <span className="d-inline display-5 fw-bold" data-aos="zoom-out">Faiq wajahat</span > </h1>
      <h1 className="text-dark fw-bold display-5">Welcome to my Portfolio<span>...</span></h1>
      
      
     <h3 className="text-dark" >
     <Typewriter 
          words={['Hello World!', 'I am a Web Designer',"I am Frontend Developer","I am a Backend Developer " ,'I am a Mern Stack Developer.']}
          loop={true}
          cursor
          cursorStyle='_'
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1500}
          
          />
     </h3>
      
     
     <button onClick={handleGetInTouch}
     className="button mt-5 btn-lg" data-aos="zoom-in"
            data-aos-delay="500">
  <span class="text">Get In Touch</span>
</button>




      </div>

     
    </div>
  );
}
