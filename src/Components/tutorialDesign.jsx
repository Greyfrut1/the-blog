import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TutorialDesign({ objects }) {
  const rootAdress = "http://91.107.217.207";

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="font-poppins">
      <h3 className="text-base font-semibold text-[#121212]/30 uppercase mb-[40px] px-[12px] md:px-[28px]">
        Tutorial design
      </h3>
      <div className="[& .slick-active:last-child .card]:text-white">
        <Slider {...settings}>
          {objects.map((item, index) => (
            <div
              className="card w-6/12 lg:w-3/12 border-r border-[#e5e5e5]"
              key={index}
            >
              <a
                href={rootAdress + item.view_node}
                className="block px-[12px] md:px-[28px]"
              >
                <img src={rootAdress + item.field_image_1} alt="alt"></img>
                <div className="text-[11px] pt-[16px] pb-[10px] font-normal text-black/50">
                  {item.field_date}
                </div>
                <h3 className="text-[18px] leading-[24px] md:text-[22px] font font-semibold md:leading-[35px]">
                  {item.title_1}
                </h3>
              </a>
            </div>
          ))}
          {objects.map((item, index) => (
            <div
              className="card w-6/12 lg:w-3/12 border-r border-[#e5e5e5]"
              key={index}
            >
              <a
                href={rootAdress + item.view_node}
                className="block px-[12px] md:px-[28px]"
              >
                <img src={rootAdress + item.field_image_1} alt="alt"></img>
                <div className="text-[11px] pt-[16px] pb-[10px] font-normal text-black/50">
                  {item.field_date}
                </div>
                <h3 className="text-[18px] leading-[24px] md:text-[22px] font font-semibold md:leading-[35px]">
                  {item.title_1}
                </h3>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TutorialDesign;
