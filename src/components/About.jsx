"use client";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { Parallax } from "react-scroll-parallax";
import VisibilitySensor from "react-visibility-sensor";
import Image from "next/image";
import commonimg from "../../public/img/common/s1.png";
import signimg from "../../public/img/about/sign.png";
import Link from "next/link";

const AboutData = {
  title: "about me",
  title2: "I Love Turning Ideas Into Scalable Web Applications",
  btntext: "download cv",
  btnurl: "/img/common/NgWeiKang_Resume.pdf",
  brief:
    "I'm a passionate Frontend / Full Stack Developer with a strong focus on building responsive, user-friendly web applications. With experience in modern JavaScript frameworks like React and backend technologies such as Node.js, I enjoy turning complex problems into intuitive digital experiences. I continuously explore new tools and best practices to deliver clean, maintainable code and impactful products.",
  commonimg: commonimg,
  img1: signimg,
  SocialList: [
    {
      title: "fb",
      link: "https://www.facebook.com/ng.weikang.9",
    },
    {
      title: "ig",
      link: "https://www.instagram.com/weikang323/?hl=en#",
    },
  ],
  ResumeList: [
    {
      icon: '<svg class="fill-[#0e121d] w-10 h-10  group-hover:fill-white"   viewBox="0 0 512 512"  xmlns=http://www.w3.org/2000/svg><path d="M144.402 196.3c-5.359-14.43-27.539-14.173-32.564.372L69.982 306.568c-6.901 18.37 20.98 28.974 28.035 10.678l6.745-17.709h46.542l6.667 17.666c7.11 18.389 34.896 7.72 28.068-10.592l-41.475-109.902a10.849 10.849 0 00-.162-.409zm-28.214 73.237l11.952-31.381 11.843 31.381zM428 215.95c8.284 0 15-6.716 15-15s-6.716-15-15-15h-46.539c-8.284 0-15 6.716-15 15v110.449c0 8.284 6.716 15 15 15H428c8.284 0 15-6.716 15-15s-6.716-15-15-15h-31.539v-25.225h28.107c8.284 0 15-6.716 15-15s-6.716-15-15-15h-28.107V215.95zm-153.422-.857c8.164 0 16.036 2.402 22.764 6.948 6.865 4.637 16.189 2.833 20.827-4.032 4.638-6.864 2.832-16.188-4.032-20.826-11.707-7.909-25.386-12.089-39.559-12.089-39.003 0-70.733 31.731-70.733 70.733s31.73 70.733 70.733 70.733c37.159 0 63.111-29.086 63.111-70.733 0-8.284-6.716-15-15-15h-33.345c-8.284 0-15 6.716-15 15s6.716 15 15 15h16.423c-3.72 13.801-13.167 25.733-31.189 25.733-22.461 0-40.733-18.273-40.733-40.733 0-22.461 18.272-40.734 40.733-40.734z"/><path d="M497 241c-8.284 0-15 6.716-15 15 0 60.367-23.508 117.12-66.194 159.806S316.366 482 256 482s-117.12-23.508-159.806-66.194S30 316.367 30 256 53.508 138.88 96.194 96.194 195.634 30 256 30c30.273 0 59.642 5.879 87.292 17.475a225.166 225.166 0 0144.658 25.039l-19.883 2.505c-19.514 2.557-15.636 32.172 3.75 29.765l53.661-6.76c7.985-.661 14.332-8.288 13.494-16.263l-4.781-53.842c-.733-8.252-8.02-14.351-16.269-13.615-8.251.733-14.347 8.017-13.614 16.268l1.589 17.895a255.155 255.155 0 00-51.007-28.659C323.55 6.664 290.278 0 256 0 187.62 0 123.333 26.629 74.981 74.981S0 187.62 0 256s26.629 132.667 74.981 181.019S187.62 512 256 512s132.667-26.629 181.019-74.981S512 324.38 512 256c0-8.284-6.716-15-15-15z"/></svg>',
      title: "Age:",
      info: "25",
    },
    {
      icon: '<svg class="fill-[#0e121d] w-10 h-10  group-hover:fill-white"   viewBox="0 0 64 64"  xmlns=http://www.w3.org/2000/svg><path d="M35 55h2v2h-2zm-8 0h2v2h-2zM17 39H7v8h10zm-8 2h2v4H9zm6 4h-2v-4h2z"/><path d="M63 25v-2H43v-6h1.734A2.27 2.27 0 0047 14.734a2.27 2.27 0 00-1.142-1.967L26.364 1.628a4.848 4.848 0 00-4.729 0L2.142 12.767A2.27 2.27 0 001 14.734 2.27 2.27 0 003.266 17H5v12H3c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2v14c-1.103 0-2 .897-2 2v12h62V51c0-1.103-.897-2-2-2V35c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2v-4zm-10 4v-4h2v4zm-4 28h-2v-2h2zm0-4h-2v-2h2zm-2 6h2v2h-2zm4-8h2v10h-2zm6 6h-2v-2h2zm-2 2h2v2h-2zm2-6h-2v-2h2zm-2-12h-6v-2h6zm-6 2h6v2h-6zm0 4h6v2h-6zm-8 4V37h2v12c-1.103 0-2 .897-2 2zM31 61h-8v-4c0-4.411 3.589-8 8-8zM7 55h2v2H7zm6 6h-2V51h2zm2-6h2v2h-2zm0 4h2v2h-2zm6-22h2v14c0-1.103-.897-2-2-2zm0 14v10h-2V51zm10-4c-.685 0-1.354.07-2 .202V41h6v6.202A9.983 9.983 0 0033 47zm-4-8v8.841a9.991 9.991 0 00-2 1.178V37h14v12.019a9.944 9.944 0 00-2-1.178V39zm17.66-4H19.34a.34.34 0 01-.207-.61l11.685-8.988c.336-.259.756-.402 1.182-.402s.846.143 1.183.402l11.684 8.987a.34.34 0 01-.207.611zM25 27.354l-2 1.538V21h2zm8-4.193a4.151 4.151 0 00-2 0V21h2zm8 5.731V25h2v4h-1.86zM45 25h2v4h-2zm4 0h2v4h-2zM3 14.734c0-.095.051-.183.134-.23l19.494-11.14a2.774 2.774 0 012.744 0l19.495 11.14a.265.265 0 01-.133.496H3.266A.266.266 0 013 14.734zM7 17h34v6h-2v4.354l-4-3.077V19h-6v5.277l-2 1.538V19h-6v10H7zM3 31h17.26l-2.347 1.806c-.074.057-.133.129-.199.194H3zm2 30H3V51h2zm0-26h12.034A2.333 2.333 0 0019 36.966V49c-1.103 0-2 .897-2 2v2h-2v-2c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v2H7v-2c0-1.103-.897-2-2-2zm2 24h2v2H7zm34 2h-8V49c4.411 0 8 3.589 8 8zm2-10h2v10h-2zm18 10h-2V51h2zm-2-12h-2V37H47v12h-2V36.966A2.331 2.331 0 0046.966 35H59zm2-16H46.287c-.066-.065-.125-.138-.2-.195L43.74 31H61zm-2-4h-2v-4h2z"/><path d="M9 19v8h10v-8zm2 2h2v4h-2zm6 4h-2v-4h2z"/></svg>',
      title: "Residence:",
      info: "Malaysia",
    },
    {
      icon: '<svg class="fill-[#0e121d] w-10 h-10  group-hover:fill-white"   viewBox="0 0 511.999 511.999"  xmlns=http://www.w3.org/2000/svg><path d="M256.98 40.005c-5.53-.04-10.04 4.41-10.08 9.93-.04 5.52 4.4 10.03 9.93 10.07 5.52.04 10.03-4.4 10.07-9.92.04-5.52-4.4-10.03-9.92-10.08zm-.455 59.999c-38.611-.274-70.232 30.875-70.524 69.474-.291 38.597 30.875 70.233 69.474 70.524l.536.002c38.353 0 69.698-31.056 69.988-69.476.291-38.595-30.874-70.233-69.474-70.524zm-.516 120.001l-.384-.002c-27.571-.208-49.833-22.806-49.625-50.375.207-27.445 22.595-49.627 49.991-49.627l.384.002c27.571.208 49.833 22.806 49.625 50.375-.208 27.445-22.595 49.627-49.991 49.627zm43.622-172.416c-5.202-1.846-10.921.879-12.767 6.085-1.845 5.206.88 10.921 6.085 12.767 44.047 15.611 73.402 57.562 73.05 104.389-.041 5.522 4.402 10.033 9.925 10.075h.077c5.486 0 9.956-4.428 9.998-9.925.416-55.347-34.293-104.934-86.368-123.391z"/><path d="M317.357 376.442c66.513-85.615 108.08-130.26 108.641-205.164C426.702 77.035 350.22 0 255.984 0 162.848 0 86.71 75.428 86.002 168.728c-.572 76.935 41.767 121.519 108.739 207.7C128.116 386.384 86.002 411.401 86.002 442c0 20.497 18.946 38.89 53.349 51.79 31.313 11.742 72.74 18.209 116.649 18.209s85.336-6.467 116.649-18.209c34.403-12.901 53.349-31.294 53.349-51.791 0-30.582-42.075-55.593-108.641-65.557zM106.001 168.879C106.625 86.55 173.8 20 255.986 20c83.159 0 150.633 67.988 150.013 151.129-.532 71.134-44.614 114.971-114.991 206.714-12.553 16.356-24.081 31.82-34.993 46.947-10.88-15.136-22.178-30.323-34.919-46.953-73.286-95.584-115.637-136.108-115.095-208.958zM256 492c-85.851 0-149.999-26.397-149.999-50 0-17.504 38.348-39.616 102.826-47.273 14.253 18.701 26.749 35.691 39.005 53.043a9.998 9.998 0 008.159 4.23H256a10 10 0 008.158-4.217c12.14-17.126 24.978-34.535 39.109-53.045 64.418 7.665 102.732 29.77 102.732 47.263C405.998 465.603 341.851 492 256 492z"/></svg>',
      title: "Address:",
      info: "Lorong Melor 3 Kayu Ara",
    },
    {
      icon: '<svg class="fill-[#0e121d] w-10 h-10  group-hover:fill-white"   viewBox="0 0 125 125"  xmlns=http://www.w3.org/2000/svg><path d="M105.182 97.82H19.818A10.477 10.477 0 019.353 87.354v-52.72a10.477 10.477 0 0110.465-10.466h85.364a10.477 10.477 0 0110.465 10.466v52.72a10.477 10.477 0 01-10.465 10.466zM19.818 28.168a6.472 6.472 0 00-6.465 6.466v52.72a6.472 6.472 0 006.465 6.466h85.364a6.472 6.472 0 006.465-6.466v-52.72a6.472 6.472 0 00-6.465-6.466z"/><path d="M62.5 72.764a2 2 0 01-1.324-.5l-48.2-42.548 2.647-3L62.5 68.1l46.879-41.379 2.647 3-48.2 42.548a1.994 1.994 0 01-1.326.495z"/><path d="M11.888 91.54l32.38-36.895 3.009 2.64-32.38 36.894zm65.937-34.293l3.008-2.64L113.214 91.5l-3.008 2.64z"/></svg>',
      title: "Email:",
      info: "weikang8805@hotmail.com",
    },
    {
      icon: '<svg class="fill-[#0e121d] w-10 h-10  group-hover:fill-white"   viewBox="0 0 48 48"  xmlns=http://www.w3.org/2000/svg><path d="M38 46c4.18 0 7-2.94 7.83-8.08a5 5 0 00-1-3.77l-.16-.15-6.07-4.8a5 5 0 00-6.29.24l-2.62 2.48C24.23 30.68 16.39 23.6 16 18.38l2.59-2.73a5 5 0 00.19-6.27L14 3.33a.73.73 0 00-.18-.17 5 5 0 00-3.76-1C4.94 3 2 5.82 2 10a36 36 0 0036 36zM10.38 4.15a3.11 3.11 0 01.43 0 3 3 0 011.72.55l4.67 5.9a3 3 0 01-.09 3.72l-2.84 3A1 1 0 0014 18c0 6.44 9.29 14.9 15.84 16a1 1 0 00.85-.26l3-2.81a3 3 0 013.73-.13l5.95 4.68a2.92 2.92 0 01.52 2.15C43.4 40.53 42 44 38 44A34 34 0 014 10c0-4 3.47-5.4 6.38-5.85z"/></svg>',
      title: "Phone:",
      info: "+011 1081 0323",
    },
    {
      icon: '<svg class="fill-[#0e121d] w-10 h-10  group-hover:fill-white"   viewBox="0 0 69 69"  xmlns=http://www.w3.org/2000/svg><path d="M8 61.747l-.004-.018a.519.519 0 00.003.018zm-.011-.05l.007.032a2.033 2.033 0 01-.007-.032zm-.019-.095c0 .008.003.016.004.023l.01.045.005.027a13.18 13.18 0 01-.02-.095zm45.13-3.266c-.01.55.43 1.01.98 1.02.315-.011 1.889.085 4.18-.34.54-.1.9-.62.8-1.16a.988.988 0 00-1.16-.81c-1.923.36-3.624.305-3.78.31-.5-.02-1.01.42-1.02.98zm-7.95.161c.083.598.673.935 1.14.84 1.739-.269 2.016-.4 3.76-.29.54.03 1.03-.39 1.06-.94a.996.996 0 00-.93-1.06c-1.85-.1-2.362.02-4.2.31-.54.09-.92.6-.83 1.14zm18.23-4.411c-.053 1.061-.644 1.434-1.66 1.84l-.17.07a.99.99 0 00-.56 1.3c.206.537.829.758 1.3.56.987-.573 2.98-1.01 3.08-3.68a.99.99 0 00-.95-1.04.996.996 0 00-1.04.95zm-1.56-7.81c-.43-.35-1.06-.29-1.41.14s-.28 1.06.15 1.41c.726.623 1.386 1.267 2.02 2.8.222.544.838.744 1.3.55a.99.99 0 00.55-1.3c-.596-1.45-1.388-2.638-2.61-3.6zm-3.05-1.009a1 1 0 00-.04-1.42c-.91-.87-1.71-1.84-2.37-2.89-.3-.46-.92-.6-1.38-.31-.47.3-.61.91-.31 1.38.74 1.19 1.65 2.29 2.69 3.28.399.377 1.052.354 1.41-.04z"/><path d="M5.9 61.457l.15.7c.17.83.53 1.59 1.04 2.22H4.67c-.56 0-1 .45-1 1s.44 1 1 1h39.36c.56 0 1-.45 1-1s-.44-1-1-1H41.6c.52-.63.88-1.39 1.06-2.22l2.8-13.56c.29-1.4-.06-2.84-.96-3.94a4.695 4.695 0 00-3.66-1.74h-.74c-3.837-6.374-11.006-4.793-11.91-4.97v-1.57c2.82-1.31 4.95-3.87 5.67-6.96l.001-.012a4.491 4.491 0 003.3-4.326 4.48 4.48 0 00-1.562-3.388v-5.335c0-4.63-5.89-6.71-11.7-6.71-5.84 0-11.72 2.08-11.72 6.71v5.341c-1.086.95-1.565 2.138-1.565 3.382 0 2.07 1.4 3.802 3.304 4.328l.001.01c.72 3.09 2.84 5.64 5.66 6.95v1.58c-5.1.118-8.939.277-11.79 4.97-2.93.041-5.149 2.736-4.56 5.68zm9.75-34.38v-6.83l3.05-2.5c2.984 3.64 7.026 3.919 13.43 4.57v4.76c0 3.05-1.65 5.71-4.12 7.14a8.217 8.217 0 01-8.25 0 8.244 8.244 0 01-4.11-7.14zm10.86 13.08l-2.48 2.76h-.11l-2.59-2.76h.88v-2.28h3.34v2.28zm-8.65-.13l2.71 2.89H10.26c2.998-3.563 7.033-2.787 7.6-2.89zm-10 4.89h33.05c1.612 0 2.951 1.565 2.59 3.27-.299 1.44-2.661 12.886-2.802 13.572a3.304 3.304 0 01-3.219 2.617H11.23c-1.56 0-2.92-1.1-3.23-2.63.001.004.001.004 0 0l-.016-.076-.009-.045-.006-.027.001.004-2.78-13.415a2.726 2.726 0 012.67-3.27zm.099 16.636c-.007-.034-.006-.028 0 0z"/><path d="M24.35 57.276c1.454 0 2.768-1.219 2.61-2.96a2.635 2.635 0 00-2.61-2.3c-1.277 0-2.451.962-2.62 2.3-.157 1.719 1.137 2.96 2.62 2.96zm-3.27-32.949c0-.79-.64-1.42-1.42-1.42-.8 0-1.43.63-1.43 1.42 0 .78.63 1.43 1.43 1.43.78 0 1.42-.65 1.42-1.43zm7.05 1.429c.78 0 1.42-.65 1.42-1.43 0-.79-.64-1.42-1.42-1.42-.8 0-1.43.63-1.43 1.42 0 .78.63 1.43 1.43 1.43zm-4.24 2.691c.55 0 1-.44 1-1v-1.28c0-.56-.45-1-1-1s-1 .44-1 1v1.28c0 .56.45 1 1 1zm2.14 3.74c.45-.33.54-.95.21-1.4-.33-.44-.95-.53-1.4-.2-.68.5-1.23.5-1.91 0-.44-.33-1.07-.24-1.4.2-.33.45-.23 1.07.21 1.4 1.303.982 2.868 1.07 4.29 0zm28.473-27.38V3.624a1 1 0 00-2 0v1.183a1 1 0 002 0zm7.897 11.61c0-4.91-3.99-8.9-8.9-8.9-4.9 0-8.89 3.99-8.89 8.9 0 2.29.87 4.47 2.45 6.13.65.68 1.1 1.47 1.32 2.31-.67.25-1.14.9-1.14 1.66 0 .969.773 1.759 1.738 1.776a1.779 1.779 0 00.036 3.558h1.383c-.092.986.719 2.152 1.962 2.357v.01c-.06.36.008 2.09.54 3.92.167.565.77.836 1.24.68.53-.15.83-.71.68-1.24-.554-1.893-.459-3.228-.47-3.389v-.004c1.192-.273 1.91-1.414 1.823-2.334h1.389a1.78 1.78 0 00.033-3.558 1.782 1.782 0 001.745-1.776c0-.6-.3-1.13-.76-1.46.2-.91.67-1.78 1.37-2.51a8.86 8.86 0 002.45-6.13zm-3.9 4.75c-.98 1.03-1.64 2.26-1.9 3.57h-6.19c-.26-1.31-.92-2.54-1.9-3.57a6.837 6.837 0 01-1.9-4.75c0-3.81 3.09-6.9 6.89-6.9a6.9 6.9 0 016.9 6.9 6.9 6.9 0 01-1.9 4.75zM48.035 7.272a1 1 0 00.365-1.366l-.59-1.026a1 1 0 00-1.732 1l.592 1.025a1 1 0 001.366.366zM42.64 9.318a.999.999 0 10-1 1.732l1.025.591a1 1 0 101-1.731zm23.092.366a1 1 0 00-1.366-.366l-1.025.592a1 1 0 101 1.731l1.025-.59a1 1 0 00.366-1.367zm-5.394-2.778l.592-1.025a1 1 0 00-1.733-1l-.591 1.025a1 1 0 001.732 1z"/></svg>',
      title: "Work:",
      info: "Available Now",
    },
  ],
  CounterList: [
    {
      title: "Frontend Development",
      brief:
        "Expert in HTML5, CSS3, JavaScript (ES6+), TypeScript, React, Next.js, Tailwind CSS, and responsive design for modern web applications.",
      count: "92",
      counticon: "%",
      delay: "100",
    },
    {
      title: "Backend Development",
      brief:
        "Experience in Node.js, Express, RESTful APIs, MongoDB, database design, server-side logic, and authentication systems.",
      count: "68",
      counticon: "%",
      delay: "200",
    },
    {
      title: "Development Tools",
      brief:
        "Proficient with Git, Docker, VS Code, npm/yarn, Webpack, CI/CD pipelines, and modern development workflows for efficient coding.",
      count: "85",
      counticon: "%",
      delay: "300",
    },
  ],
};

const About = () => {
  return (
    <>
      <div id="about" className="proloy-about-area-wrape py-[100px]">
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div className="xl:col-span-6 lg:col-span-6 md:col-span-12 sm:col-span-12">
              <div className="section-title-wrape relative mb-[45px]">
                <Parallax
                  className="section-image absolute right-[30%] -top-[60%] sm:hidden "
                  translateX={["20px", "0px"]}
                >
                  <Image src={AboutData.commonimg} alt="section-img" />
                </Parallax>
                <h3
                  className=" font-semibold capitalize text-[60px] "
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay="200"
                >
                  {AboutData.title}
                </h3>
                <h4
                  className=" font-normal text-[#838694] text-2xl capitalize "
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="300"
                >
                  {AboutData.title2}
                </h4>
              </div>
              <div className="proloy-about-btn btn-social flex items-center">
                <a 
                  href={AboutData.btnurl} 
                  download="NgWeiKang_Resume.pdf"
                  className="btn-1"
                >
                  {AboutData.btntext} <i className="fa fa-download"></i>
                </a>
                <ul className="social-wrape">
                  {AboutData.SocialList.map((item, i) => (
                    <li
                      key={i}
                      className=" my-0 mr-0 ml-[15px] inline-block transition-all duration-[0.3s]"
                      data-aos="fade-right"
                      data-aos-duration="500"
                      data-aos-delay="500"
                    >
                      <Link
                        className=" text-base w-[50px] h-[50px] text-center !leading-[50px] rounded-[50%] block font-semibold transition-all duration-[0.3s] text-[#212123] uppercase border-[1px] border-solid border-[#e1e1e1] hover:bg-[#ff4a54] hover:text-white hover:border-[#ff4a54] "
                        href={item.link}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="xl:col-span-6 lg:col-span-6 md:col-span-12 sm:col-span-12">
              <div
                className="proloy-about-para-sign-wrape"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p>{AboutData.brief}</p>
                <div className="about-sign mt-[10px]">
                  <Image
                    src={AboutData.img1}
                    alt="about-sign"
                    className="h-24"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 mt-[70px]">
            <div className="xl:col-span-6 lg:col-span-12 md:col-span-12 sm:col-span-12">
              <ul
                className="proloy-about-resume-wrape"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                {AboutData.ResumeList.map((item, i) => (
                  <li
                    className="magic-hover magic-hover__square flex items-center m-0 border-[1px] border-solid border-[#e1e1e1] transition-all duration-[0.3s] p-[15px] hover:ml-[10px] group gap-3"
                    key={i}
                  >
                    <div className="about-resume-icon">
                      <span
                        className=" w-[70px] transition-all duration-[0.3s] h-[70px] inline-flex items-center bg-[#f7faff] justify-center group-hover:!bg-[#ff4a54] group-hover:!rounded-[10px]"
                        dangerouslySetInnerHTML={{ __html: item.icon }}
                      ></span>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="about-resume-title text-xl capitalize sm:w-[50%] w-[30%] flex-shrink-0">
                        {item.title}
                      </div>
                      <div className="about-resume-info text-xl flex-1 min-w-0 break-all">
                        {item.info}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="xl:col-start-8 xl:col-span-5 lg:col-span-10 md:col-span-12 sm:col-span-12">
              <div className="proloy-about-progress-wrape">
                {AboutData.CounterList.map((item, i) => (
                  <div
                    className="single-progress-wrape flex items-center justify-content-center mt-0 mr-0 mb-[30px] ml-[30px]"
                    data-aos="fade-up"
                    data-aos-delay={item.delay}
                    key={i}
                  >
                    <VisibilitySensor>
                      {({ isVisible }) => {
                        const percentage = isVisible ? `${item.count}` : 0;
                        return (
                          <CircularProgressbar
                            className="proloy-progress-bar !w-[170px] !h-[170px]"
                            value={percentage}
                            text={`${percentage}%`}
                            strokeWidth={3}
                            data-duration="1000"
                          />
                        );
                      }}
                    </VisibilitySensor>
                    <div className="single-progress-content w-[60%] ml-[30px] ">
                      <h3 className=" text-3xl capitalize font-medium ">
                        {item.title}
                      </h3>
                      <p>{item.brief}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
