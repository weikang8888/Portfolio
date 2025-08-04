import React from "react";
import Tilt from "react-parallax-tilt";
import { Parallax } from "react-scroll-parallax";
import img1 from "../../public/img/hero/s1.png";
import img2 from "../../public/img/hero/s2.png";
import img3 from "../../public/img/hero/s5.png";
import img4 from "../../public/img/hero/s4.png";
import Image from "next/image";
import Link from "next/link";

const HomeData = {
  title1: "hi i'm,",
  title2: '<span class="my-stroke text-transparent ">Ng</span> WeiKang',
  title3: "I am Front End Developer / Full Stack Developer",
  brief:
    "Passionate developer with 4 years of experience building responsive, user-friendly web applications using React and TypeScript. Currently expanding into full-stack development with Node.js and Python, aiming to build end-to-end scalable solutions.",
  btntext: "about me",
  btnurl: "#",
  btntext2: "Available For Freelancer",
  btnurl2: "#",
  img1: img1,
  img2: img2,
  img3: img3,
  img4: img4,
  InfoList: [
    {
      title: "born in",
      info: "Malaysia",
      delay: "500",
    },
    {
      title: "Experience",
      info: "4+ Years",
      delay: "300",
    },
    {
      title: "Dte Of Birth",
      info: "23 March 2000",
      delay: "200",
    },
  ],
};

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="proloy-hero-wrape hero-bg relative bg-center bg-cover bg-[#f9f7ff] bg-no-repeat z-[1]"
      >
        <div className="proloy-hero-style-img">
          <Image
            src={HomeData.img1}
            alt="hero-style-img-1"
            className="hero-style-img-1 absolute left-0 top-0 -z-[1] "
          />
          <Parallax
            translateX={["-50px", "0px"]}
            className="hero-style-img-2 absolute -z-[1] left-[5%] bottom-[10%]"
          >
            <Image src={HomeData.img2} alt="hero-style-img-2" />
          </Parallax>
          <Parallax
            translateX={["-30px", "30px"]}
            className="hero-style-img-3 absolute -z-[1] bottom-0 right-[10%] sm:hidden"
          >
            <Image src={HomeData.img3} alt="hero-style-img-3" />
          </Parallax>
          <Parallax
            translateY={["-50px", "0px"]}
            className="hero-style-img-4 absolute -z-[1] left-[50%] top-[17%] sm:hidden"
          >
            <Image src={HomeData.img4} alt="hero-style-img-4" />
          </Parallax>
        </div>
        <div className="hero-content">
          <div className="container">
            <div className="grid grid-cols-12 gap-6 items-center">
              <div className="xl:col-span-6 lg:col-span-10 md:col-span-12 sm:col-span-12">
                <div className="proloy-hero-content-wrape py-[240px] px-0 ">
                  <h4
                    className=" capitalize relative inline-block text-[28px] after:content-[''] after:absolute after:w-[70px] after:h-[2px] after:-right-20 after:top-[18px] after:bg-black "
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {HomeData.title1}
                  </h4>
                  <h1
                    className=" capitalize font-medium text-[100px] sm:text-[80px] "
                    data-aos="fade-up"
                    data-aos-delay="300"
                    dangerouslySetInnerHTML={{ __html: HomeData.title2 }}
                  ></h1>
                  <div
                    className="hero-desig-title  text-3xl font-semibold font-Caveat tracking-[8px] mb-[15px] "
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    {HomeData.title3}
                  </div>
                  <p data-aos="fade-up" data-aos-delay="500">
                    {HomeData.brief}
                  </p>
                  <div className="hero-btn btn-wrape">
                    <Link
                      data-aos="fade-right"
                      data-aos-delay="300"
                      href={HomeData.btnurl}
                      className="btn-1"
                    >
                      {HomeData.btntext}{" "}
                      <i className="fa fa-angle-double-right"></i>
                    </Link>
                    <Link
                      data-aos="fade-down"
                      data-aos-delay="500"
                      href={HomeData.btnurl2}
                      className="btn-4 ml-2 magic-hover magic-hover__square"
                    >
                      <i className="fa fa-check"></i> {HomeData.btntext2}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="xl:col-start-7 xl:col-span-5 lg:col-span-10 md:col-span-12 sm:col-span-12">
                <ul className="hero-personal-info-wrape flex items-center absolute bottom-10 ">
                  {HomeData.InfoList.map((item, i) => (
                    <Tilt className="inline-block" key={i}>
                      <li
                        className="btn-tilt bg-white p-5 mr-[15px] rounded-[5px] border-l-[5px] border-solid border-l-[#ff4a54]"
                        data-aos="fade-right"
                        data-aos-duration={item.delay}
                        data-aos-delay={item.delay}
                      >
                        <h4 className=" text-base capitalize text-[#838694] ">
                          {item.title}
                        </h4>
                        <h3 className=" capitalize m-0 text-[22px] ">
                          {item.info}
                        </h3>
                      </li>
                    </Tilt>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
