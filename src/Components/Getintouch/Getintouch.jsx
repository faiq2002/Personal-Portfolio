import React from 'react'
import './Getintouch.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Getintouch({getInTouchRef}) {
    useEffect(() => {
        Aos.init({
            duration: 1200,
            offset: 100,
            easing: 'ease-in-out',
        }, []);
    });
  return (
    <div >
     <div  className="container-fluid py-5 form-background" ref={getInTouchRef}>
          <div className="container  p-5 rounded ">
          <section class="get-in-touch" id='contact' >
   <h1 class="title"data-aos="fade-down">Get in touch</h1>
   <form class="contact-form row" >
      <div class="form-field col-lg-6" data-aos="fade-up">
         <input id="name" class="input-text js-input bg-transparent" type="text" required autocomplete="off" />
         <label class="label" for="name">Name</label>
      </div>
      <div class="form-field col-lg-6 " data-aos="fade-up">
         <input id="email" class="input-text js-input bg-transparent" type="email" required autocomplete="off"/>
         <label class="label" for="email">E-mail</label>
      </div>
      <div class="form-field col-lg-6 " data-aos="fade-up">
         <input id="company"  class="input-text js-input bg-transparent" type="text" required autocomplete="off"/>
         <label class="label" for="company">Company Name</label>
      </div>
       <div class="form-field col-lg-6 " data-aos="fade-up">
         <input id="phone" class="input-text js-input bg-transparent" type="text" required autocomplete="off" />
         <label class="label" for="phone">Contact Number</label>
      </div>
      <div class="form-field col-lg-12" data-aos="fade-up">
         <input id="message" class="input-text js-input bg-transparent" type="text" required autocomplete="off"/>
         <label class="label" for="message">Message</label>
      </div>
      <div class="form-field col-lg-12" data-aos="fade-up">
           
         <input class="submit-btn" type="submit" value="Submit"/>
      </div>
   </form>
</section>
          </div>
     </div>
    </div>
  )
}
