import React from "react";
import profilePic from "../../Assets/profile.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      offset: 100, // Offset before animation starts
      easing: 'ease-in-out', // Animation easing
    
    });
     
   
  }, []);

  
  return (
    <div className="container-fluid p-0 bg-body-tertiary">
    <div id="about" className="bg-dark text-light">
      <div
        className=" text-center py-5"
        
      >
        <h1
          className="text-center fw-bold display-4 mb-5 text-light"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          About Me
        </h1>
      </div>
      <div className="container py-5">
        <div className="row align-items-center gy-5">
          {/* Profile Image */}
          <div
            className="col-lg-4 col-md-5 col-12 text-center"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            <img
              src={profilePic}
              className="img-fluid rounded-circle shadow-lg border border-4 border-primary"
              style={{ height: 300, width: 300, objectFit: "cover" }}
              alt="Profile"
            />
          </div>
  
          {/* About Text */}
          <div
            className="col-lg-8 col-md-7 col-12"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <p className="lead text-center text-md-start fs-5">
              I am a <span className="fw-bold text-light">Full Stack Developer</span> with expertise in building modern, scalable web applications using the <span className="fw-bold">MERN stack</span>. My passion lies in learning cutting-edge technologies and delivering seamless user experiences through functional, responsive designs.
              <br />
              <br />
              I specialize in React, Node.js, Express.js, and MongoDB, alongside tools like Redux, Firebase, and RESTful APIs. With advanced skills in <span className="fw-bold">Bootstrap, Material-UI</span>, and <span className="fw-bold">Tailwind CSS</span>, I ensure every project I work on is highly optimized and visually appealing.
            </p>
  
        </div>
      </div>
    </div>
  </div>
  </div>
  
  );
}
