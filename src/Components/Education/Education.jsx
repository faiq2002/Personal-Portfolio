import React from "react";
import "../Hero/Hero.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import school from "../../Assets/school.jpg";
export default function Education() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      offset: 100, // Offset before animation starts
      easing: "ease-in-out", // Animation easing
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
  
  };

  const handleMouseLeave = (card) => {
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    card.style.boxShadow = "none";
  };

  return (
    <div className="bg-body-tertiary container-fluid p-0" id="educate">
      <div className="education">
        <div className="container py-5 px-lg-5 ">
          <h1
            className="text-center fw-bold display-4 mb-5"
            data-aos="fade-down"
          >
            Education
          </h1>
          <div className="row  gap-5">
            <div
              className="col-12"
              data-aos="zoom-in"
              onMouseMove={(e) => mouseMovement(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            >
              <div className="card shadow border-0">
                <div className="row cursor">
                  <div className="col-lg-4 col-md-6 col-12">
                    <img
                      src="https://i.ytimg.com/vi/oZt7VQHcq5g/maxresdefault.jpg"
                      className="img-fluid w-100 h-100 rounded-start"
                      alt="University"
                    />
                  </div>
                  <div className="col-lg-8 col-md-6 col">
                    <div className="card-body">
                      <h2 className="text-dark mb-4">
                        Bachelors in Computer Science
                      </h2>
                      <p className="lead fs-5">
                        I am currently pursuing my Bachelors in Computer Science
                        from the Superior University. I have completed courses
                        in Data Structures, Algorithms, Object-Oriented
                        Programming, and Web Development. I have a passion for
                        learning and exploring new technologies.
                      </p>
                      <h5 className="text-dark fw-semi-bold">2023-Present</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-12"
              data-aos="zoom-in"
              onMouseMove={(e) => mouseMovement(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            >
              <div className="card shadow border-0 cursor">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12">
                    <img
                      src="https://newdoor.pk/wp-content/uploads/2023/09/aspire-college-jhelum-1-convert.io_-1024x683.webp"
                      className="img-fluid w-100 h-100 rounded-start"
                      alt="College"
                    />
                  </div>
                  <div className="col-lg-8 col-md-6 col">
                    <div className="card-body">
                      <h2 className="text-dark mb-4">
                        Intermediate in Science
                      </h2>
                      <p className="lead fs-5">
                        I have completed my Intermediate in Science from the
                        Aspire College. I studied Physics, Chemistry, and
                        Mathematics. I have a strong foundation in mathematics
                        and problem-solving skills.
                      </p>
                      <h5 className="text-dark fw-semi-bold">2020-2021</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-12"
              data-aos="zoom-in"
              onMouseMove={(e) => mouseMovement(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            >
              <div className="card shadow border-0 cursor">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12">
                    <img
                      src={school}
                      className="img-fluid w-100 h-100 rounded-start"
                      alt="University"
                    />
                  </div>
                  <div className="col-lg-8 col-md-6 col">
                    <div className="card-body">
                      <h2 className="text-dark mb-4">
                        Matriculation in Science
                      </h2>
                      <p className="lead fs-5">
                        I have done my Matriculation in Science from Al-Umer
                        High School. During my time there, i actively
                        participated in various science fairs and competitions,
                        which helped me enhance my analytical and
                        problem-solving skills.
                      </p>
                      <h5 className="text-dark fw-semi-bold">2018-2020</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
