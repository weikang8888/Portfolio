"use client";
import Link from "next/link";
import React, { useState } from "react";
import bgimg from "../../public/img/services/bg.jpg";
import bgstyleimg from "../../public/img/common/s2.png";
import slidimg1 from "../../public/img/services/s1.png";
import slidimg2 from "../../public/img/services/s2.png";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const ServicesData = {
  title: "My Services",
  title2: "PortFolio Work",
  bgimage: bgimg,
  bgstyleimg: bgstyleimg,
  ServicesList: [
    {
      icon: '<svg class=" w-[70px] h-[70px] z-[1] transition-all duration-[0.3s] fill-[#505050] inline-block " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',
      title: "React.js Development",
      brief:
        "Building modern, responsive web applications using React.js with hooks, context API, Redux for state management, and React Query for server state. Creating reusable components and optimizing performance.",
      slidimg1: slidimg1,
      slidimg2: slidimg2,
      btnicon:
        '<svg data-name="Layer 1"viewBox="0 0 128 95.91"xmlns=http://www.w3.org/2000/svg><path d=M259.88,468.09l-52,45.93-5.1-5.52,43.33-38.41H131.88v-8H246.09l-43.25-38.36,5-5.62,52.06,46Z transform="translate(-131.88 -418.11)"></path></svg>',
      btnurl: "#",
    },
    {
      icon: '<svg class=" w-[70px] h-[70px] z-[1] transition-all duration-[0.3s] fill-[#505050] inline-block " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
      title: "React TypeScript Development",
      brief:
        "Developing type-safe React applications with TypeScript, providing better code quality, enhanced IDE support, and improved maintainability for large-scale projects with Redux and React Query integration.",
      slidimg1: slidimg1,
      slidimg2: slidimg2,
      btnicon:
        '<svg data-name="Layer 1"viewBox="0 0 128 95.91"xmlns=http://www.w3.org/2000/svg><path d=M259.88,468.09l-52,45.93-5.1-5.52,43.33-38.41H131.88v-8H246.09l-43.25-38.36,5-5.62,52.06,46Z transform="translate(-131.88 -418.11)"></path></svg>',
      btnurl: "#",
    },
    {
      icon: '<svg class=" w-[70px] h-[70px] z-[1] transition-all duration-[0.3s] fill-[#505050] inline-block " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>',
      title: "Node.js Backend",
      brief:
        "Building scalable server-side applications using Node.js, Express.js, and modern backend technologies. Creating RESTful APIs and database integrations.",
      slidimg1: slidimg1,
      slidimg2: slidimg2,
      btnicon:
        '<svg data-name="Layer 1"viewBox="0 0 128 95.91"xmlns=http://www.w3.org/2000/svg><path d=M259.88,468.09l-52,45.93-5.1-5.52,43.33-38.41H131.88v-8H246.09l-43.25-38.36,5-5.62,52.06,46Z transform="translate(-131.88 -418.11)"></path></svg>',
      btnurl: "#",
    },
    {
      icon: '<svg class=" w-[70px] h-[70px] z-[1] transition-all duration-[0.3s] fill-[#505050] inline-block " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',
      title: "Full Stack Development",
      brief:
        "End-to-end web application development using React.js with TypeScript for frontend and Node.js for backend. Complete solution from database to deployment.",
      slidimg1: slidimg1,
      slidimg2: slidimg2,
      btnicon:
        '<svg data-name="Layer 1"viewBox="0 0 128 95.91"xmlns=http://www.w3.org/2000/svg><path d=M259.88,468.09l-52,45.93-5.1-5.52,43.33-38.41H131.88v-8H246.09l-43.25-38.36,5-5.62,52.06,46Z transform="translate(-131.88 -418.11)"></path></svg>',
      btnurl: "#",
    },
    {
      icon: '<svg class=" w-[70px] h-[70px] z-[1] transition-all duration-[0.3s] fill-[#505050] inline-block " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>',
      title: "Responsive Website Development",
      brief:
        "Creating mobile-first, responsive websites using Tailwind CSS and modern CSS techniques. Building beautiful, responsive layouts that work seamlessly across all devices and screen sizes with utility-first approach.",
      slidimg1: slidimg1,
      slidimg2: slidimg2,
      btnicon:
        '<svg data-name="Layer 1"viewBox="0 0 128 95.91"xmlns=http://www.w3.org/2000/svg><path d=M259.88,468.09l-52,45.93-5.1-5.52,43.33-38.41H131.88v-8H246.09l-43.25-38.36,5-5.62,52.06,46Z transform="translate(-131.88 -418.11)"></path></svg>',
      btnurl: "#",
    },
  ],
};

const Services = () => {
  return (
    <>
      <div
        id="services"
        className="proloy-special-bg services-bg bg-center bg-cover relative bg-no-repeat -z-[1] h-[400px] bg-[#1a2b3c]"
        style={{ backgroundImage: `url(${ServicesData.bgimage.src})` }}
      >
        <div className="services-style absolute right-0 top-0 ">
          <Image src={ServicesData.bgstyleimg} alt="services-img" />
        </div>
      </div>
      <div
        className="proloy-services-wrape text-center -mt-[300px] "
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="200"
      >
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <div className="section-title-wrape mb-[60px]">
                <h3 className=" font-semibold capitalize text-[60px] ">
                  {ServicesData.title}
                </h3>
                <h4 className=" font-normal text-[#838694] text-2xl capitalize ">
                  {ServicesData.title2}
                </h4>
              </div>
            </div>
            <div className="col-span-12">
              <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView="auto"
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  600: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                }}
                loop={true}
                speed={1000}
                autoplay={true}
                centeredSlides={true}
                className="proloy-all-servicess-wrape"
              >
                {ServicesData.ServicesList.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="single-services-wrape relative z-[1] mt-[70px] mx-3 mb-[136px]  after:content-[''] after:rounded-[20px] after:absolute after:opacity-0 after:invisible after:transition-all after:duration-[0.3s] after:-z-[1] after:left-5 after:right-5 after:-top-5 after:-bottom-5 after:bg-[rgb(255,74,84,/15%)] after:scale-0">
                      <div className="single-services-content relative bg-white z-[1] pt-[35px] px-[15px] pb-[30px] rounded-[20px] shadow-[0px_0px_15px_0px_rgba(199,199,199,0.4)] ">
                        <div className="services-icon flex items-center justify-center">
                          <span
                            className=" block rounded-[20px] relative bg-white h-[100px] transition-all duration-[0.3s] !leading-[100px] w-[120px] border-[1px] border-solid border-[#505050] after:content-[''] after:border-[1px] after:border-solid after:border-[#505050] after:rounded-[20px] after:absolute after:-z-[1] after:bg-white after:transition-all after:duration-[0.3s] after:left-[10px] after:right-[10px] after:-top-[10px] after:-bottom-[10px]"
                            dangerouslySetInnerHTML={{ __html: item.icon }}
                          ></span>
                        </div>
                        <h3 className=" text-[28px] capitalize my-[25px] mx-0 ">
                          {item.title}
                        </h3>
                        <p>{item.brief}</p>
                        <div className="services-hvr absolute w-full top-0 right-0 bottom-0 left-0 -z-[1] h-full ">
                          <Image
                            src={item.slidimg1}
                            alt="styleimg"
                            className="shi1 absolute opacity-0 invisible transition-all duration-[0.3s] -left-[5px] -top-[5px] "
                          />
                          <Image
                            src={item.slidimg2}
                            alt="styleimg"
                            className="shi2 absolute opacity-0 invisible transition-all duration-[0.3s] -right-[5px] -bottom-[5px] "
                          />
                        </div>
                        <div className="services-btn absolute left-0 right-0 transition-all duration-[0.3s] opacity-0 invisible -bottom-20 ">
                          <Link 
                            href={item.btnurl} 
                            className="btn-2 btn-tilt"
                            onClick={(e) => e.preventDefault()}
                          >
                            <span
                              dangerouslySetInnerHTML={{ __html: item.btnicon }}
                            ></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
