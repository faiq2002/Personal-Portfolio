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
    <div id="about" className="bg-dark text-light ">
    <h1
      className="text-center fw-bold display-4 mb-5"
      data-aos="fade-down"
      data-aos-delay="200"
    >
      About Me
    </h1>
    <div className="container py-5">
      <div className="row align-items-center">
        <div
          className="col-auto text-center"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <img
            src={profilePic}
            className="img-fluid rounded-circle shadow border "
            style={{ height: 300, width: 300, objectFit: 'cover' }}
            alt="Profile"
          />
        </div>
        <div className="col" data-aos="fade-up" data-aos-delay="400">
          <p className="lead fs-5">
            I am a Full Stack Developer with experience in building web
            applications using the MERN stack. I have a passion for learning
            and sharing my knowledge with others. I am a self-taught developer
            who loves exploring new technologies and frameworks. Always eager
            to work on innovative projects, I excel at creating responsive
            and functional designs.
            <br />
            <br />
            My expertise includes React, Node.js, Express.js, and MongoDB.
            I’ve also worked with Redux, Firebase, and RESTful APIs. With
            advanced skills in responsive design using Bootstrap, Material-UI,
            and Tailwind CSS, I craft seamless user experiences.
          </p>
          <button
            className="btn btn-primary mt-4"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <svg
              aria-hidden="true"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="me-2"
            >
              <path
                stroke="#ffffff"
                d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="#ffffff"
                d="M17 15V18M17 21V18M17 18H14M17 18H20"
              />
            </svg>
         <a href="https://drive.google.com/file/d/1gvDaFlANvGHj53hVzEUa_l0W7Qujc5Hx/view?usp=drive_link" className="decoration text-light" target="blank" >View Resume</a>
          </button>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}
