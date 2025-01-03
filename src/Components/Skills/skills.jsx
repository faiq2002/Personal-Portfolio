import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function Skills() {
    useEffect(() => {
        AOS.init({
          duration: 1200, // Animation duration
          offset: 100, // Offset before animation starts
          easing: 'ease-in-out', // Animation easing
        });
      }, []);

      let mouseMovement = (e,card) => {
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
    
      }

      const handleMouseLeave = (card) => {
        card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";

      }
  return (
    <div className="bg-body-tertiary container-fluid p-0" id='skills'>
    <div className="container py-5">
        <h1 className="text-center text-dark fw-bold display-4 mb-5" data-aos="fade-up ">Skills & Abilities</h1>
        <div className="container py-5">
        <div className="row g-4 ">
            {/* Frontend Skills */}
            <div className="col-lg-6  " data-aos="fade-down">
                <div className="card cursor skills rounded shadow  border-0"
                onMouseMove={(e)=>mouseMovement(e,e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}>
                    <div className="card-body ">
                        <h2 className="text-dark mb-4 "><i className="bi bi-code-slash text-dark me-2"></i>Frontend</h2>
                        <ul className="list-group list-group-flush black-border  ">
                            <li className="list-group-item text-dark"><i className="bi bi-check-circle-fill text-dark me-2"></i>HTML5</li>
                            <li className="list-group-item text-dark"><i className="bi bi-check-circle-fill text-dark me-2"></i>CSS3</li>
                            <li className="list-group-item text-dark"><i className="bi bi-check-circle-fill text-dark me-2"></i>JavaScript</li>
                            <li className="list-group-item text-dark"><i className="bi bi-check-circle-fill text-dark me-2"></i>React</li>
                            <li className="list-group-item text-dark"><i className="bi bi-check-circle-fill text-dark me-2"></i>Bootstrap</li>
                            <li className="list-group-item text-dark"><i className="bi bi-check-circle-fill text-dark me-2"></i>Tailwind CSS</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Backend Skills */}
            <div className="col-lg-6 card-container " data-aos="fade-up">
                <div onMouseMove={(e)=>mouseMovement(e,e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                 className="card cursor shadow skills border-0">
                    <div className="card-body">
                        <h2 className="text-dark mb-4"><i className="bi bi-server me-2"></i>Backend</h2>
                        <ul className="list-group list-group-flush black-border ">
                            <li className="list-group-item text-dark"><i className="bi bi-check-circle-fill text-dark me-2"></i>Node.js</li>
                            <li className="list-group-item text-dark"><i className="bi bi-check-circle-fill text-dark me-2"></i>Express.js</li>
                            <li className="list-group-item text-dark"><i className="bi bi-check-circle-fill text-dark me-2"></i>MongoDB</li>
                            <li className="list-group-item text-dark"><i className="bi bi-check-circle-fill text-dark me-2"></i>MySQL</li>
                            <li className="list-group-item text-dark"><i className="bi bi-check-circle-fill text-dark me-2"></i>Firebase</li>
                            <li className="list-group-item text-dark"><i className="bi bi-check-circle-fill text-dark me-2"></i>RESTful APIs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</div>

  )
}
