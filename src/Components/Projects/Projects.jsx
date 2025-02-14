import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import project1 from "../../Assets/project-1.png";
import project2 from "../../Assets/project-2.png";
import project3 from "../../Assets/project-3.png";

export default function Projects() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  let mouseMovement = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // X-axis position within the card
    const y = e.clientY - rect.top; // Y-axis position within the card
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 15; // Tilt intensity
    const rotateY = ((x - centerX) / centerX) * -15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05) `;
    card.style.transition = "all 0.1s ease";
    card.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
    card.style.cursor = "pointer";
  };

  const handleMouseLeave = (card) => {
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };
  return (
    <div className="container-fluid bg-body-tertiary p-0" id="projects">
  <div className="container p-5">
    <h1
      className="text-center text-dark mb-5 fw-bold display-4 py-5"
      data-aos="fade-down"
    >
      Projects
    </h1>
    <div className="row gap-5 pb-5">
      {/* Project 1 */}
      <div className="col-12">
        <div className="row gy-3">
          {/* Project Image */}
          <div
            className="col-lg-8 col-md-6 col-12 p-1 rounded project-backgound shadow order-1 order-md-2"
            data-aos="zoom-out"
            onMouseMove={(e) => mouseMovement(e, e.currentTarget)}
            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
          >
            <img
              src={project1}
              className="img-fluid rounded h-100"
              style={{ maxHeight: 400 }}
              alt="project1"
            />
          </div>
          {/* Project Details */}
          <div
            className="col-lg-4 col-md-6 col-12 order-2 order-md-1"
            data-aos="zoom-in"
          >
            <h3 className="text-dark fw-bold">Project-1</h3>
            <p className="small py-3">
              This is a fully dynamic and responsive apparel website. Developed
              using HTML, CSS, JavaScript, Bootstrap, and React. It has an
              inquiry form with all the authentications.
            </p>
            <div className="d-flex gap-3">
               <a className="none"
               href="https://arainapparel.vercel.app/" target="blank">
              <button className="btn btn-primary small shadow fw-normal rounded-75">
             
               
                View Live
               
              </button>
              </a>

              <a href="https://github.com/faiq2002/arainapparel-E-comerce-Website-" target="blank">
              <button className="cssbuttons-io small">
                <span>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Code
                </span>
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="col-12">
        <div className="row gy-3">
          {/* Project Image */}
          <div
            className="col-lg-8 col-md-6 col-12 p-1 rounded project-backgound shadow order-1 order-md-2"
            data-aos="zoom-out"
            onMouseMove={(e) => mouseMovement(e, e.currentTarget)}
            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
          >
            <img
              src={project2}
              className="img-fluid rounded h-100"
              style={{ maxHeight: 400 }}
              alt="project2"
            />
          </div>
          {/* Project Details */}
          <div
            className="col-lg-4 col-md-6 col-12 order-2 order-md-1"
            data-aos="zoom-in"
          >
            <h3 className="text-dark fw-bold">Project-2</h3>
            <p className="py-3 small">
              This is a fully responsive website using MERN STACK technology. It
              has a complete sign-up and login form with all the
              authentication. This website is connected with MongoDB to store
              user data.
            </p>
            <div className="d-flex gap-3">
              <a className="none" target="blank" href="https://github.com/faiq2002?tab=repositories">
              <button className="btn btn-primary small shadow fw-normal rounded-75">
                View Live
              </button>
              </a>

              <a className="none" target="blank" href="https://github.com/faiq2002?tab=repositories">
              <button className="cssbuttons-io small">
                <span>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Code
                </span>
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="col-12">
        <div className="row gy-3">
          {/* Project Image */}
          <div
            className="col-lg-8 col-md-6 col-12 p-1 rounded project-backgound shadow order-1 order-md-2"
            data-aos="zoom-out"
            onMouseMove={(e) => mouseMovement(e, e.currentTarget)}
            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
          >
            <img
              src={project3}
              className="img-fluid rounded h-100"
              style={{ maxHeight: 400 }}
              alt="project3"
            />
          </div>
          {/* Project Details */}
          <div
            className="col-lg-4 col-md-6 col-12 order-2 order-md-1"
            data-aos="zoom-in"
          >
            <h3 className="text-dark fw-bold">Project-3</h3>
            <p className="small py-3">
              This is a portfolio website with highly customized 3D animations.
              In this project, I used different NPM packages for animation like
              Particles, Typewriter, and Browser Scroll Animations.
            </p>
            <div className="d-flex gap-3">
              <a className='none' href="https://rococo-mochi-14897b.netlify.app/" target="blank">
              <button className="btn btn-primary small shadow fw-normal rounded-75">
                View Live
              </button>
              </a>

              <a href="https://github.com/faiq2002/Personal-Portfolio" target="blank">
              <button className="cssbuttons-io small">
                <span>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Code
                </span>
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* View All Projects Button */}
    <div className="col-12 m-auto text-center my-5">
          <a
            href="https://github.com/faiq2002"
            target="blank"
            className="decoration text-light "
          >
            <button
              href="#"
              class="button-pro  "
              data-aos="zoom-in "
              data-aos-delay="500"
            >
              <span class="button__icon-wrapper">
                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="button__icon-svg"
                  width="10"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  ></path>
                </svg>

                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  width="10"
                  xmlns="http://www.w3.org/2000/svg"
                  class="button__icon-svg button__icon-svg--copy"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              View All Projects
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
