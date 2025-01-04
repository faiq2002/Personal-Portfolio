import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Footer() {
    useEffect(() => {
        Aos.init({
        duration: 1200,
        offset: 100,
        easing: 'ease-in-out',
        });
    } , []);
    
return (
    <footer id='footer'>
        <div className="container-fluid bg-dark footer m-0 p-0">
            <div className="container pt-2 pb-5">
                <h1 className="text-center text-light display-4 py-5 cursor" data-aos="fade-up"
                onClick={()=>(window.scrollTo(0,0))}>
                    <i className="fa fa-angle-up text-light"></i>
                </h1>
                <div className="d-flex mb-3 justify-content-center gap-4" data-aos="zoom-in">
                    <a href="https://github.com/faiq2002" target='blank' className="text-light mx-3" aria-label="GitHub">
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/faiq-wajahat-a460772a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank' className="text-light mx-3" aria-label="LinkedIn">
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a href="https://www.instagram.com/faiqwajahat/profilecard/?igsh=MXVnZno3dmMyenM0ZA==" target='blank' className="text-light mx-3" aria-label="Instagram">
                        <i className="fab fa-instagram fa-2x"></i>
                    </a>
                    <a href="https://www.facebook.com/faiq.wajahat?mibextid=ZbWKwL" target='blank' className="text-light mx-3" aria-label="Facebook">
                        <i className="fab fa-facebook fa-2x"></i>
                    </a>
                </div>
                <hr className="w-100 text-light" />
                <div data-aos="zoom-in">
                    <h5 className="text-white-50 text-center fw-semibold small">Designed & Coded By Faiq Wajahat</h5>
                    <p className="text-white-50 text-center small">© 2025 All Rights Reserved</p>
                </div>
            </div>
        </div>
        <a
            href="https://wa.me/+923146997979
"
            className="whatsapp_float " 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            data-aos="fade-down"
        >
            <i className="fab fa-whatsapp whatsapp-icon fa-2x "></i>
        </a>

       
    </footer>
)
}
