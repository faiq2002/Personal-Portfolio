import React, { useRef, useEffect, useState } from "react";
import "./Getintouch.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export default function Getintouch({ getInTouchRef }) {
  const [state, setState] = useState(true);
  const form = useRef();

  useEffect(() => {
    Aos.init({
      duration: 1200,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    setState(false); // Disable the submit button
    await emailjs
      .sendForm("service_klxzegx", "template_or906tp", form.current, {
        publicKey: "XrobUSlv6IRX33nuP",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message has been successfully sent 👍", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          resetForm(); // Reset the form after success
        },
        (error) => {
          console.log("FAILED...", error);
          toast.error("Message could not be sent 😢", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setState(true); // Enable the submit button if failed
        }
      );
  }

  // Reset the form fields
  function resetForm() {
    if (form.current) {
      const formElements = form.current.elements;
      for (let i = 0; i < formElements.length; i++) {
        formElements[i].value = '';
      }
    } else {
      console.log("Form reference is not available");
    }
    setState(true); // Re-enable the submit button
  }

  return (
    <div>
      <ToastContainer theme="colored" />
      <div className="container-fluid py-5 form-background" ref={getInTouchRef}>
        <div className="container p-5 rounded">
          <section className="get-in-touch" id="contact">
            <h1 className="title" data-aos="fade-down">
              Get in touch
            </h1>
            <form
              className="contact-form row"
              ref={form}
              onSubmit={handleSubmit}
            >
              <div className="form-field col-lg-6" data-aos="fade-up">
                <input
                  id="name"
                  className="input-text js-input bg-transparent"
                  name="name"
                  type="text"
                  required
                  autoComplete="off"
                />
                <label className="label" htmlFor="name">
                  Name
                </label>
              </div>
              <div className="form-field col-lg-6" data-aos="fade-up">
                <input
                  id="email"
                  className="input-text js-input bg-transparent"
                  name="email"
                  type="email"
                  required
                  autoComplete="off"
                />
                <label className="label" htmlFor="email">
                  E-mail
                </label>
              </div>
              <div className="form-field col-lg-6" data-aos="fade-up">
                <input
                  id="company"
                  className="input-text js-input bg-transparent"
                  name="company"
                  type="text"
                  required
                  autoComplete="off"
                />
                <label className="label" htmlFor="company">
                  Company Name
                </label>
              </div>
              <div className="form-field col-lg-6" data-aos="fade-up">
                <input
                  id="phone"
                  className="input-text js-input bg-transparent"
                  name="contact"
                  type="text"
                  required
                  autoComplete="off"
                />
                <label className="label" htmlFor="phone">
                  Contact Number
                </label>
              </div>
              <div className="form-field col-lg-12" data-aos="fade-up">
                <input
                  id="message"
                  className="input-text js-input bg-transparent"
                  name="message"
                  type="text"
                  required
                  autoComplete="off"
                />
                <label className="label" htmlFor="message">
                  Message
                </label>
              </div>
              <div className="form-field col-lg-12" data-aos="fade-up">
                <input
                  className="submit-btn"
                  type="submit"
                  value={state ? "Submit" : "Submitting..."}
                  disabled={!state}
                />
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
