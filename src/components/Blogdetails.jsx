import React from "react";
import Link from "next/link";
import Image from "next/image";
import blog_1 from "../../public/img/blog/d1.jpg";
import cmtimg1 from "../../public/img/blog/c1.png";
import cmtimg2 from "../../public/img/blog/c2.png";

const BlogdetailsData = {
  title:
    "Freelancer Working Process Comfortable And Time Lorem Ipsu Dolor Sit Amet, Consectetur Adipisicing Elit,",
  paragraph1:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod mpor ut labore eto dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe citation ullamco nisi mark aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
  blog_1: blog_1,
  title2: "Work With Worldwide Clients Lorem Ipsum Dolor Sit",
  paragraph2:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod mpor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe citation ullamco nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet",
  paragraph3:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod mpor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe citation ullamco nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
  blockquote:
    "industry.has been the industry's standard dummy tex ever are since the 1500s, when an unk nown printer took a galley of the type and and scrales",
  blockquoteauthor: "Jasim Kalik",
  paragraph4:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod mpor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe citation ullamco nisi ut aliquip ex ea commodo consequat.Lorem ipsum",
  paragraph5:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod mpor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe citation ullamco nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
  tagtitle: "Post Tags:",
  TagsList: [
    {
      title: "awesome",
      link: "#",
    },
    {
      title: "template",
      link: "#",
    },
    {
      title: "ui/ux",
      link: "#",
    },
  ],
  commentitle: "3 Comments",
  CommentList: [
    {
      img: cmtimg1,
      title: "proloy",
      date: "Dec 08 2022",
      brief:
        "industry. Lorem Ipsum has been the industry's standard dummy text ever since t he 1500s, when an unknown",
      replay: "replay",
      replaylink: "#",
    },
    {
      img: cmtimg2,
      title: "Jasim Kalik",
      date: "Dec 08 2022",
      brief:
        "industry. Lorem Ipsum has been the industry's standard dummy text ever since t he",
      replay: "replay",
      replaylink: "#",
    },
    {
      img: cmtimg1,
      title: "proloy",
      date: "Dec 08 2022",
      brief:
        "industry. Lorem Ipsum has been the industry's standard dummy text ever since t he 1500s, when an unknown",
      replay: "replay",
      replaylink: "#",
    },
  ],
  leavtitle: "Leave A Reply",
  btn: "post comment",
};

export const Blogdetails = () => {
  return (
    <>
      <div className="xl:col-span-8 lg:col-span-12 md:col-span-12 sm:col-span-12 pr-[30px]">
        <div className="proloy-blog-details-wraper border-[1px] border-solid border-[#f1f1f1] p-5">
          <div className="blog-details-content">
            <h4 className="post-title leading-normal text-[26px] block capitalize font-semibold my-5 mx-0 transition-all duration-[0.3s] mb-[15px]">
              {BlogdetailsData.title}
            </h4>
            <p>{BlogdetailsData.paragraph1}</p>
            <figure>
              <Image
                className=" my-[15px] mx-0 w-full"
                src={BlogdetailsData.blog_1}
                alt="img"
              />
            </figure>
            <h3 className="mb-[15px] leading-normal text-[30px] font-semibold capitalize">
              {BlogdetailsData.title2}
            </h3>
            <p>{BlogdetailsData.paragraph2}</p>
            <p>{BlogdetailsData.paragraph3}</p>
            <blockquote className="block-quote z-[1] relative bg-white border-l-[6px] border-solid border-l-[#ff4a54] !p-[35px] shadow-[0px_0px_30px_0px_rgba(26,43,60,0.15)] rounded-md overflow-hidden my-10 mx-0 before:content-['\f10d'] before:absolute before:-top-[20%] before:left-[5%] before:font-Fontawesome before:text-[#ff4a54] before:text-[150px] before:leading-[1] before:opacity-[0.1] before:-z-[1]">
              <p className=" text-[20px] text-[#1a2b3c] italic font-semibold leading-8">
                {BlogdetailsData.blockquote}
              </p>
              <cite className=" relative pl-[15px] text-[16px] font-semibold capitalize mt-[30px] block before:h-[2px] before:bg-[#ff4a54] before:my-0 before:mx-auto before:absolute before:content-[''] before:bottom-0 before:w-[10px] before:top-[50%] before:left-0 before:-translate-y-[50%]">
                {BlogdetailsData.blockquoteauthor}
              </cite>
            </blockquote>
            <p>{BlogdetailsData.paragraph4}</p>
            <p>{BlogdetailsData.paragraph5}</p>
          </div>
          <div className="blog-post-tag pt-[30px] bg-white w-full overflow-hidden">
            <span className=" mb-[17px] text-[20px] font-semibold block text-[#1a2b3c] capitalize">
              {BlogdetailsData.tagtitle}
            </span>
            {BlogdetailsData.TagsList.map((item, i) => (
              <Link
                key={i}
                className=" py-[10px] px-6 duration-[0.3s] mb-[10px] text-[#1a2b3c] inline-block text-[14px] font-medium capitalize border-[1px] border-solid border-[#e5e5e5] mr-[5px] rounded-none hover:text-white hover:border-[#ff4a54] hover:bg-[#ff4a54]"
                href={item.link}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="recent-comments-area mt-[50px]">
            <div className="post-heading mb-[30px]">
              <h3 className="mb-10 inline-block text-[28px] font-semibold capitalize text-[#1a2b3c] leading-[1]">
                {BlogdetailsData.commentitle}
              </h3>
            </div>
            <div className="latest-comments">
              <ul className=" p-0 m-0 list-none">
                {BlogdetailsData.CommentList.map((item, i) => (
                  <li key={i}>
                    <div className="comments-box mb-[30px] pb-[30px] border-b-[1px] border-solid border-b-[#e7eaf0]">
                      <div className="comments-avatar float-left w-[100px]">
                        <Image
                          className=" rounded-[50%]"
                          src={item.img}
                          alt="comments-img"
                        />
                      </div>
                      <div className="comments-text overflow-hidden pl-[30px]">
                        <div className="avatar-name-date overflow-hidden">
                          <h5 className=" text-[18px] font-Montserrat font-medium capitalize text-[#1a2b3c] leading-[1]">
                            {item.title}
                          </h5>
                          <span className=" font-normal mt-[10px] mx-0 mb-[12px] text-[#333333] capitalize text-[14px] block font-Montserrat leading-[1]">
                            {item.date}
                          </span>
                        </div>
                        <p className=" mb-5 text-[#878991] text-[17px]">
                          {item.brief}
                        </p>
                        <Link
                          className=" inline-block font-Montserrat text-[16px] font-semibold capitalize text-[#1a2b3c]"
                          href={item.replaylink}
                        >
                          {item.replay}
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="post-comments-form-area mt-10 mb-0 mx-0">
            <div className="post-heading mb-[30px]">
              <h3 className="mb-10 inline-block text-[28px] font-semibold capitalize text-[#1a2b3c] leading-[1]">
                {BlogdetailsData.leavtitle}
              </h3>
            </div>
            <form className="post-comments-form bg-[#f7faff] xl:p-[50px] lg:p-[50px] md:p-[50px] sm:py-[50px] sm:px-5">
              <div className="container">
                <div className="flex flex-wrap mx-[-12px]">
                  <div className="xl:w-6/12 w-full flex-[0_0_auto] px-[12px] max-w-full">
                    <input
                      type="text"
                      className="form-control shadow-none text-[#777777] h-[50px] mb-[30px] bg-white border-[1px] border-solid border-[#e7eaf0] py-[5px] px-5 transition-all duration-[0.3s] w-full focus:!shadow-[0px_10px_14px_0px_rgba(12,0,46,0.06)] focus:border-[1px] focus:border-solid focus:border-[#ff2f00] focus:!ring-[none] focus:!outline-offset-0 focus:outline-0"
                      placeholder="Name *"
                    />
                  </div>
                  <div className="xl:w-6/12 w-full flex-[0_0_auto] px-[12px] max-w-full">
                    <input
                      type="email"
                      className="form-control shadow-none text-[#777777] h-[50px] mb-[30px] bg-white border-[1px] border-solid border-[#e7eaf0] py-[5px] px-5 transition-all duration-[0.3s] w-full focus:!shadow-[0px_10px_14px_0px_rgba(12,0,46,0.06)] focus:border-[1px] focus:border-solid focus:border-[#ff2f00] focus:!ring-[none] focus:!outline-offset-0 focus:outline-0"
                      placeholder="E-mail *"
                    />
                  </div>
                  <div className="w-full flex-[0_0_auto] px-[12px] max-w-full">
                    <input
                      type="text"
                      className="form-control shadow-none text-[#777777] h-[50px] mb-[30px] bg-white border-[1px] border-solid border-[#e7eaf0] py-[5px] px-5 transition-all duration-[0.3s] w-full focus:!shadow-[0px_10px_14px_0px_rgba(12,0,46,0.06)] focus:border-[1px] focus:border-solid focus:border-[#ff2f00] focus:!ring-[none] focus:!outline-offset-0 focus:outline-0"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="w-full flex-[0_0_auto] px-[12px] max-w-full">
                    <textarea
                      name="comments"
                      className="form-control h-[133px] shadow-none text-[#777777] mb-[30px] bg-white border-[1px] border-solid border-[#e7eaf0] py-[15px] px-5 transition-all duration-[0.3s] w-full focus:!shadow-[0px_10px_14px_0px_rgba(12,0,46,0.06)] focus:border-[1px] focus:border-solid focus:border-[#ff2f00] focus:!ring-[none] focus:!outline-offset-0 focus:outline-0"
                      cols="30"
                      rows="10"
                      placeholder="Your Comment"
                    ></textarea>
                  </div>
                  <div className="w-full flex-[0_0_auto] px-[12px] max-w-full">
                    <button className="btn-1">{BlogdetailsData.btn}</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
