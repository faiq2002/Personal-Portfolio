import "./App.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Skills from "./Components/Skills/skills";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
import Getintouch from "./Components/Getintouch/Getintouch";
import Footer from "./Components/Footer/Footer";
import { useRef } from "react";

function App() {
  const particlesInit = async (main) => {
    // This loads the full tsparticles package
    await loadFull(main);
  };
  let getInTouchRef = useRef(null);

  const handleGetInTouch = () => {
    getInTouchRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const particlesOptions = {
    background: {
      color: {
        value: "#ffffff", // White background
      },
    },
    particles: {
      number: {
        value: 100, // Number of particles
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#1f4068", // Dark blue particles
      },
      shape: {
        type: "circle", // Particle shape
        stroke: {
          width: 0,
          color: "#000000",
        },
      },
      opacity: {
        value: 0.8,
        random: false,
      },
      size: {
        value: 5,
        random: true,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outMode: "out",
        bounce: false,
      },
      lineLinked: {
        enable: true, // Connect particles with lines
        distance: 150,
        color: "#1f4068",
        opacity: 0.6,
        width: 1,
      },
    },
    interactivity: {
      detectOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "repulse", // Push particles on hover
        },
        onClick: {
          enable: true,
          mode: "push", // Add particles on click
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          particlesNb: 4,
        },
      },
    },
    retinaDetect: true,
  };
  return (
    <div className="App">
      <div className="hero-particles">
        <Particles
          id="tsparticles"
          init={particlesInit}
          className=""
          options={particlesOptions}
        />
      </div>
      <div className="background"></div>
      <Navbar />
      <Hero handleGetInTouch={handleGetInTouch} />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Getintouch getInTouchRef={getInTouchRef} />
      <Footer />
    </div>
  );
}

export default App;
