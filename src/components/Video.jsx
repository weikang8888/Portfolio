"use client";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import bgimg from "../../public/img/video/1.jpg";
import Image from "next/image";

const VideoData = {
  title: "Let’s Create Something Creative Together",
  title2: "We can’t wait to hear from making something beautiful and new!",
  bgimg: bgimg,
  videoid: "snvzakfcTmY",
};
const Video = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div
        className="proloy-video-wrape text-center video-bg -mb-[250px]"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <div className="videos-content-wrape text-center relative">
                <div className="video-content z-[1] absolute text-center top-[50%] left-[20%] right-[20%] -translate-y-[50%] xl:left-[20%] xl:right-[20%] lg:left-[20%] lg:right-[20%] md:left-[10%] md:right-[10%] sm:left-[10%] sm:right-[10%] ">
                  <h3
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className=" text-white capitalize mb-5 font-bold xl:text-[58px] lg:text-[54px] md:text-[40px] sm:hidden "
                  >
                    {VideoData.title}
                  </h3>
                  <p
                    className=" text-white sm:hidden "
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {VideoData.title2}
                  </p>
                  <div
                    className="popup-video wow pulse infinite inline-block relative rounded-[50%] text-[#ff4a54] bg-white duration-[0.3s] animate-[heartbeat_1s_infinite_alternate] xl:h-[127px] xl:w-[127px] xl:text-[62px] xl:leading-[127px] xl:mt-[100px] lg:h-[100px] lg:w-[100px] lg:text-[30px] lg:leading-[100px] lg:mt-[30px] md:h-[100px] md:w-[100px] md:text-[30px] md:leading-[100px] md:mt-[30px] sm:h-[70px] sm:w-[70px] sm:text-[30px] sm:leading-[70px] sm:mt-[10px] before:content-[''] before:inline-block before:absolute before:-z-[1] before:-top-[23px] before:-left-[23px] before:-bottom-[23px] before:-right-[23px] before:bg-[#ffffff66] before:animate-[btnIconRipple_3s_cubic-bezier(0.23,1,0.32,1)both_infinite] before:rounded-full after:content-[''] after:inline-block after:absolute after:-z-[1] after:-top-[46px] after:-left-[46px] after:-bottom-[46px] after:-right-[46px] after:bg-[#ffffff4d] after:animate-[btnIconRipple_2s_cubic-bezier(0.23,1,0.32,1)both_infinite] after:rounded-full"
                    onClick={() => setOpen(true)}
                  >
                    <i className="fa fa-play"></i>
                  </div>
                </div>
                <div className="video-bg-img relative before:rounded-[15px] before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:bg-[#00000099] ">
                  <Image
                    className=" rounded-[15px] "
                    src={VideoData.bgimg}
                    alt="video-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId={VideoData.videoid}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default Video;
