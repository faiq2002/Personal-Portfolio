import React from 'react'
import "../Hero/Hero.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Education() {
    useEffect(() => {
        AOS.init({
          duration: 1200, // Animation duration
          offset: 100, // Offset before animation starts
          easing: 'ease-in-out', // Animation easing
        });
      }, []);
return (
    <div className='bg-body-tertiary container-fluid p-0' id='educate'>
            <div className="education">
            <div className="container p-5">
            <h1 className="text-center fw-bold display-4 mb-5" data-aos="fade-down">Education</h1>
            <div className="row  gap-5">
                    <div className="col-12" data-aos="zoom-in">
                            <div className="card shadow border-0">
                                    <div className="row">
                                            <div className="col-md-4">
                                                    <img src="https://i.ytimg.com/vi/oZt7VQHcq5g/maxresdefault.jpg" className="img-fluid w-100 h-100 rounded-start" alt="University" />
                                            </div>
                                            <div className="col-md-8">
                                                    <div className="card-body">
                                                            <h2 className="text-dark mb-4">Bachelors in Computer Science</h2>
                                                            <p className="lead fs-5">I am currently pursuing my Bachelors in Computer Science from the Superior University. I have completed courses in Data Structures, Algorithms, Object-Oriented Programming, and Web Development. I have a passion for learning and exploring new technologies.</p>
                                                            <h5 className='text-dark fw-semi-bold'>2023-Present</h5>
                                                    </div>
                                            </div>
                                    </div>
                            </div>
                    </div>

                    <div className="col-12" data-aos="zoom-in">
                            <div className="card shadow border-0">
                                    <div className="row">
                                            <div className="col-md-4">
                                                    <img src="https://lcci.pk/wp-content/uploads/2023/08/ASPIRE-COLLEGE-Header-Image.jpg" className="img-fluid w-100 h-100 rounded-start" alt="University" />
                                            </div>
                                            <div className="col-md-8">
                                                    <div className="card-body">
                                                            <h2 className="text-dark mb-4">Intermediate in Science</h2>
                                                            <p className="lead fs-5">I have completed my Intermediate in Science from the Aspire College. I studied Physics, Chemistry, and Mathematics. I have a strong foundation in mathematics and problem-solving skills.</p>
                                                            <h5 className='text-dark fw-semi-bold'>2020-2021</h5>
                                                    </div>
                                            </div>
                                    </div>
                            </div>
                    </div>

                    <div className="col-12" data-aos="zoom-in">
                            <div className="card shadow border-0">
                                    <div className="row">
                                            <div className="col-md-4">
                                                    <img src="https://scontent.flhe5-1.fna.fbcdn.net/v/t39.30808-6/462060518_3987048461575249_7684859220983117634_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGosonTX808OhJNaAsIVcSnSJxXLlTr-hBInFcuVOv6EBj8PErS_t9WjGJRjt6jCuxwzAcEi1Ma1xstHWXCAcen&_nc_ohc=_kyoE2KyfsEQ7kNvgEuyTIj&_nc_oc=AdjcY24Mteb1yfZz4ETdvA7POtCQcp7mNKCwybboozTGfPDI4cZCreceiDvIEROoBFuuFlmWsFA_teJulB5nyZeI&_nc_zt=23&_nc_ht=scontent.flhe5-1.fna&_nc_gid=A31qbXock-6UZblV_RmR87m&oh=00_AYDLRSYVjWTkfudZh1LM5-H_73J27ptoDJtC3OmIDZLtfQ&oe=677B7DA1" className="img-fluid w-100 h-100 rounded-start" alt="University" />
                                            </div>
                                            <div className="col-md-8">
                                                    <div className="card-body">
                                                            <h2 className="text-dark mb-4">Matriculation in Science</h2>
                                                            <p className="lead fs-5">I have done my Matriculation in Science from Al-Umer High School. During my time there, i actively participated in various science fairs and competitions, which helped me enhance my analytical and problem-solving skills.</p>
                                                            <h5 className='text-dark fw-semi-bold'>2018-2020</h5>
                                                    </div>
                                            </div>
                                    </div>
                            </div>
                    </div>
            </div>
            </div>
     </div>
    </div>
)
}
