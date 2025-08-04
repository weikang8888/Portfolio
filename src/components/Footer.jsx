import React from "react";
import Image from "next/image";
import logo from "../../public/img/common/logo-2.png";
import bgimg from "../../public/img/common/footer-bg.jpg";
import Link from "next/link";

const FooterData = {
  logo: logo,
  bgimg: bgimg,
  brief:
    "But I must explain to you how all this mistaken idea of denouncing asure and praising pain was and born I will give you a",
  title: '<span class="text-[#ff4a54]">latest</span> news',
  title2: '<span class="text-[#ff4a54]">quick</span> link',
  title3: '<span class="text-[#ff4a54]">about</span> me',
  copyright: "© All Right Reserved by",
  author: "Weikang",
  authorlink: "#",
  NewsList: [
    {
      title: "Building solid backend foundations with Node.js",
      link: "#",
      date: "01 Aug, 2025",
    },
    {
      title: "Expanding full-stack capabilities with React & Node.js",
      link: "#",
      date: "27 Jul, 2025",
    },
    {
      title: "Working on personal projects to strengthen backend skills",
      link: "#",
      date: "20 Jul, 2025",
    },
  ],

  QuicklinkList: [
    {
      title: "CRM System",
      link: "https://crm-2cjw.onrender.com/",
    },
    {
      title: "E-commerce",
      link: "https://ecommerce-t7mj.onrender.com/",
    },
  ],
  SocialList: [
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
    {
      icon: "fa fa-vk",
      link: "#",
    },
  ],
};

const Footer = () => {
  return (
    <>
      <footer
        id="proloy-footer-area"
        className="proloy-footer-area relative pt-[100px] pb-20 mt-[120px]"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <div className="footer-bg bg-no-repeat bg-center bg-cover -z-[1] absolute right-0 top-0 bottom-0 xl:w-[95%] lg:w-[95%] md:w-full sm:w-full before:content-[''] before:left-0 before:top-0 before:absolute before:w-full before:h-full before:bg-[#0e121d] before:opacity-[0.95]">
          <Image
            className="w-full h-full"
            src={FooterData.bgimg}
            alt="footer-bg"
          />
        </div>
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div
              className="xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="footer-widget custom-html-widget">
                <div className="footer-logo m-[115px_0_30px]">
                  <Link href="/">
                    <Image
                      src={FooterData.logo}
                      alt="footer-logo"
                      className="img-fluid"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <div className="footer-single-wedget mb-[30px]">
                <div className="widget_recent_entries">
                  <h3
                    className=" font-medium text-white capitalize text-[28px] relative mb-10 before:absolute before:content-[''] before:w-[17px] before:h-[17px] before:border before:left-[-27px] before:border-solid before:border-[#ff4a54] before:bottom-2 after:content-[''] after:absolute after:w-3 after:h-3 after:left-[-23px] after:bottom-2 after:bg-white"
                    dangerouslySetInnerHTML={{ __html: FooterData.title }}
                  ></h3>
                  <ul className="m-0 p-0">
                    {FooterData.NewsList.map((item, i) => (
                      <li className="mb-[30px]" key={i}>
                        <Link
                          className="text-white text-base block font-medium hover:text-[#ff5959]"
                          href={item.link}
                        >
                          {item.title}
                        </Link>
                        <span className="text-sm text-white font-normal block">
                          {item.date}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="xl:col-span-2 lg:col-span-3 md:col-span-6 sm:col-span-12"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              <div className="footer-single-wedget mb-[30px]">
                <div className="widget_nav_menu">
                  <h3
                    className=" font-medium text-white capitalize text-[28px] relative mb-10 before:absolute before:content-[''] before:w-[17px] before:h-[17px] before:border before:left-[-27px] before:border-solid before:border-[#ff4a54] before:bottom-2 after:content-[''] after:absolute after:w-3 after:h-3 after:left-[-23px] after:bottom-2 after:bg-white"
                    dangerouslySetInnerHTML={{ __html: FooterData.title2 }}
                  ></h3>
                  <ul className="menu m-0 p-0">
                    {FooterData.QuicklinkList.map((item, i) => (
                      <li className="mb-2 pb-[7px]" key={i}>
                        <Link
                          className="text-white capitalize font-semibold text-base hover:text-[#ff5959] hover:ml-1"
                          href={item.link}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="xl:col-span-4 lg:col-span-3 md:col-span-6 sm:col-span-12"
              data-aos="fade-right"
              data-aos-delay="800"
            >
              <div className="footer-single-wedget mb-[30px]">
                <div className="custom-html-widget">
                  <h3
                    className=" font-medium text-white capitalize text-[28px] relative mb-10 before:absolute before:content-[''] before:w-[17px] before:h-[17px] before:border before:left-[-27px] before:border-solid before:border-[#ff4a54] before:bottom-2 after:content-[''] after:absolute after:w-3 after:h-3 after:left-[-23px] after:bottom-2 after:bg-white"
                    dangerouslySetInnerHTML={{ __html: FooterData.title3 }}
                  ></h3>
                  <p className="text-[15px] text-white">{FooterData.brief}</p>
                  <ul className="footer-social  mt-[25px] mb-0 mx-0 pt-[30px] pb-0 px-0 border-t-white border-t border-solid">
                    {FooterData.SocialList.map((item, i) => (
                      <li className="inline-block ml-0 mr-[25px] my-0" key={i}>
                        <Link
                          className="text-white text-base hover:text-[#ff5959]"
                          href={item.link}
                        >
                          <i className={item.icon}></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-copyright-area">
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <div className="footer-copyright text-center py-5">
                <p className=" text-[#090909] text-base mb-0">
                  {FooterData.copyright}{" "}
                  <Link
                    className="text-[#090909] font-bold hover:text-[#ff5959]"
                    href={FooterData.authorlink}
                  >
                    {FooterData.author}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
