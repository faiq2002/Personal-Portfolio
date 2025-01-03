import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      offset: 100, // Offset before animation starts
      easing: "ease-in-out", // Animation easing
      once: true,
    });
  }, []);

  return (
    <nav
      className="navbar navbar-expand-md  d-flex px-5 "
      data-aos="fade-down"
    >
      <div className="container-fluid">
        <a className="navbar-brand text-dark fw-bold" href="/">
          Port<span>folio</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Offcanvas
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end align-items-center flex-grow-1 pe-3 gap-4">
              <li className="nav-item cursor">
                <Link
                  activeClass="active"
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  className=" text-dark decoration"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item cursor">
                <li className="nav-item cursor">
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={100}
                    className=" text-dark decoration"
                  >
                    About
                  </Link>
                </li>
              </li>
              <li className="nav-item cursor">
                <li className="nav-item cursor">
                  <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    className=" text-dark decoration"
                  >
                    Skills
                  </Link>
                </li>
              </li>

              <li className="nav-item cursor">
                <Link
                  activeClass="active"
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={100}
                  className=" text-dark decoration"
                >
                  Education
                </Link>
              </li>
              <li className="nav-item cursor">
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={100}
                  className=" text-dark decoration"
                >
                  projects
                </Link>
              </li>
              <li className="nav-item cursor px-3 py-2  shadow border-0 getintouch ">
                <Link
                  activeClass="text-light"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={100}
                  className=" text-light decoration"
                >
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
