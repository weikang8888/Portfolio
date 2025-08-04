"use client";
import React, { useState } from "react";
import Lightbox from "react-18-image-lightbox";
import Tilt from "react-parallax-tilt";
import Link from "next/link";
import Image from "next/image";
import CRM from "../../public/img/work/crm.png";
import Ecommerce from "../../public/img/work/ecommerce.png";

const PortfolioData = {
  title: "Work Showcase",
  title2: "Portfolio Work",
  btntext: "all projects",
  btnurl: "#",
  PortfolioList: [
    {
      title: "CRM",
      link: "https://crm-2cjw.onrender.com/",
      folioimg: CRM,
      category: "crm",
    },
    {
      title: "E-commerce",
      link: "https://ecommerce-t7mj.onrender.com/",
      folioimg: Ecommerce,
      category: "e-commerce",
    },
  ],
};

const Portfolio = () => {
  // data
  const categories = [
    "All",
    ...new Set(PortfolioData.PortfolioList.map((item) => item.category)),
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [singlefolio, setItems] = useState(PortfolioData.PortfolioList);

  const filterItems = (cateItem) => {
    setActiveCategory(cateItem);

    if (cateItem === "All") {
      return setItems(PortfolioData.PortfolioList);
    } else {
      const findItems = PortfolioData.PortfolioList.filter((findItem) => {
        return findItem.category == cateItem;
      });
      setItems(findItems);
    }
  };

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
  const images = PortfolioData.PortfolioList.map((item) => item.folioimg.src);
  return (
    <>
      <div
        id="portfolio"
        className="proloy-portfolio-wraper pt-[30px] pb-[100px]"
      >
        <div className="container">
          <div className="grid grid-cols-12 gap-6 text-center">
            <div className="col-span-12">
              <div className="section-title-wrape uppercase relative mb-[60px]">
                <h3 className="font-semibold capitalize text-[60px]">
                  {PortfolioData.title}
                </h3>
                <h4 className="font-normal text-[#838694] text-2xl capitalize">
                  {PortfolioData.title2}
                </h4>
              </div>
              <ul className="portfolio-menu-wrape p-0 mt-0 mx-0 mb-[70px]">
                {categories.map((cate, i) => (
                  <li
                    onClick={() => filterItems(cate)}
                    key={i}
                    className={`m-0 inline-block capitalize text-[22px] font-medium cursor-pointer text-[#555555] font-Kanit list-none py-0 px-[10px] transition-all duration-[0.2s]  hover:text-[#ff4a54] ${
                      cate === activeCategory ? "active" : ""
                    }`}
                  >
                    {cate}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap mx-[-12px] portfolio-all-items">
            {singlefolio.map((item, i) => (
              <div
                className="xl:w-4/12 lg:w-4/12 md:w-6/12 sm:w-full single-portfolio-item items-center justify-center flex h-[430px] sm:h-[350px] group"
                data-aos="zoom-in"
                key={i}
              >
                <Tilt>
                  <div className="single-folio-wraper relative mb-6">
                    <div className="folio-img-hvr-wrape">
                      <Image
                        className="rounded-[15px] h-[200px] object-cover"
                        src={item.folioimg}
                        alt="folioimg"
                      />
                      <div className="portfolio-pop absolute left-[50%] transition-all duration-[0.3s] top-[50%] -translate-x-[50%] -translate-y-[50%] ">
                        <div
                          className=" w-[50px] h-[50px] inline-block text-center rounded-[50%] text-[#ff4a54] transition-all duration-[0.3s] scale-0 invisible opacity-0 !leading-[55px] bg-[#111111] text-xl group-hover:scale-[1] group-hover:visible group-hover:opacity-[1]"
                          onClick={() => handleOpenLightbox(i)}
                        >
                          <i className="fa fa-plus"></i>
                        </div>
                      </div>
                    </div>
                    <div className="folio-hvr-title absolute left-[30px] top-[30px] ">
                      <Link href={item.link}>
                        <h3 className=" text-lg p-[10px] capitalize font-semibold bg-[#ff4a54] text-white rounded-[5px] inline-block duration-[0.3s] opacity-0 invisible -ml-[10px] group-hover:opacity-[1] group-hover:visible group-hover:ml-0 ">
                          {item.title}
                        </h3>
                      </Link>
                    </div>
                  </div>
                </Tilt>
              </div>
            ))}
          </div>
          <div
            className="proloy-more-portfolio text-center mt-[70px] sm:mt-[20px]"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            <Link href={PortfolioData.btnurl} className="btn-1 uppercase">
              {PortfolioData.btntext} <i className="fa fa-long-arrow-right"></i>
            </Link>
          </div>
        </div>
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

export default Portfolio;
