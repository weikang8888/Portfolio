"use client";
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import Lightbox from "react-18-image-lightbox";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import team1 from "../../public/img/team/1.jpg";
import team2 from "../../public/img/team/2.jpg";
import team3 from "../../public/img/team/3.jpg";
import team4 from "../../public/img/team/4.jpg";
import Link from "next/link";
import Image from "next/image";

const TeamData = {
  TeamList: [
    {
      img: team1,
      name: "hossain shamrat",
      position: "ui/ux designer",
      sociallist: [
        {
          icon: "fa fa-facebook",
          link: "#",
        },
        {
          icon: "fa fa-twitter",
          link: "#",
        },
        {
          icon: "fa fa-instagram",
          link: "#",
        },
      ],
    },
    {
      img: team2,
      name: "rahat hasan jhon",
      position: "artical writer",
      sociallist: [
        {
          icon: "fa fa-facebook",
          link: "#",
        },
        {
          icon: "fa fa-twitter",
          link: "#",
        },
        {
          icon: "fa fa-instagram",
          link: "#",
        },
      ],
    },
    {
      img: team3,
      name: "oliver henry zimma",
      position: "product manager",
      sociallist: [
        {
          icon: "fa fa-facebook",
          link: "#",
        },
        {
          icon: "fa fa-twitter",
          link: "#",
        },
        {
          icon: "fa fa-instagram",
          link: "#",
        },
      ],
    },
    {
      img: team4,
      name: "hossain shamrat",
      position: "ui/ux designer",
      sociallist: [
        {
          icon: "fa fa-facebook",
          link: "#",
        },
        {
          icon: "fa fa-twitter",
          link: "#",
        },
        {
          icon: "fa fa-instagram",
          link: "#",
        },
      ],
    },
    {
      img: team1,
      name: "hossain shamrat",
      position: "ui/ux designer",
      sociallist: [
        {
          icon: "fa fa-facebook",
          link: "#",
        },
        {
          icon: "fa fa-twitter",
          link: "#",
        },
        {
          icon: "fa fa-instagram",
          link: "#",
        },
      ],
    },
  ],
};

const Team = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(null);

  const handleOpenLightbox = (i) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  const handleCloseLightbox = () => setIsOpen(false);

  const handleMovePrev = () => {
    const newIndex = (photoIndex + images.length - 1) % images.length;
    setPhotoIndex(newIndex);
  };

  const handleMoveNext = () => {
    const newIndex = (photoIndex + 1) % images.length;
    setPhotoIndex(newIndex);
  };
  const images = TeamData.TeamList.map((item) => item.img.src);
  return (
    <>
      <div id="team" className="proloy-team-wrape pb-[100px]">
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
              slidesPerView: 4,
            },
          }}
          loop={true}
          speed={1000}
          autoplay={true}
          className="proloy-all-team-member-wrape"
        >
          {TeamData.TeamList.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className="proloy-single-team-wrape text-center relative inline-flex group"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="team-img-wrape relative before:absolute before:content-[''] before:left-0 before:right-0 before:top-0 before:bottom-0 before:transition-all before:duration-[0.3s] before:bg-gradient-to-b before:from-[rgba(0,0,0,0)0%] before:to-[rgba(2,2,0,0)1%,#000_100%] ">
                  <Image src={item.img} alt="team" />
                  <div className="team-title-desig-social-wrape absolute right-[10%] transition-all duration-[0.3s] left-[10%] bottom-[50px] ">
                    <div className="team-popup-wrape transition-all duration-[0.3s] opacity-0 invisible mb-5 group-hover:opacity-[1] group-hover:visible group-hover:mb-[30px] ">
                      <div
                        className="btn-2 popup-team btn-tilt"
                        onClick={() => handleOpenLightbox(i)}
                      >
                        <span>
                          <svg
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 128 95.91"
                          >
                            <path
                              d="M259.88,468.09l-52,45.93-5.1-5.52,43.33-38.41H131.88v-8H246.09l-43.25-38.36,5-5.62,52.06,46Z"
                              transform="translate(-131.88 -418.11)"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <h3 className="team-title text-[28px] font-medium capitalize text-white mt-0 mx-0 mb-[15px] ">
                      {item.name}
                    </h3>
                    <h4 className="team-desig text-lg font-normal text-white capitalize ">
                      {item.position}
                    </h4>
                    <ul className="team-social-wrape transition-all duration-[0.3s] invisible opacity-0 -mt-[30px] border-t-[1px] border-solid border-t-white group-hover:visible group-hover:opacity-[1] group-hover:mt-5 group-hover:pt-5">
                      {item.sociallist.map((items, i) => (
                        <li
                          className="inline-block my-0 mr-0 ml-[15px] transition-all duration-[0.3s] group/second"
                          key={i}
                        >
                          <Link
                            className="text-lg w-[50px] h-[50px] text-center !leading-[50px] rounded-[50%] text-white block transition-all duration-[0.3s] border-[1px] border-solid border-[#595959] group-hover/second:bg-[#ff4a54] group-hover/second:border-[#ff4a54]"
                            href={items.link}
                          >
                            <i className={items.icon}></i>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={handleCloseLightbox}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </>
  );
};

export default Team;
