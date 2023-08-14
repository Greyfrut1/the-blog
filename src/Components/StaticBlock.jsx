import { useEffect, useState } from "react";
import axios from "axios";
import striptags from "striptags";

function FirstFullBlock({ object }) {
  const rootAdress = "http://91.107.217.207";

  return (
    <div className="flex flex-wrap px-[12px] md:px-[60px] font-poppins bg-[#121212]">
      <div className="w-full md:w-6/12 pt-[30px] md:pt-[80px] pr-[10px] md:pr-[30px] pl-[10px]">
        <h2 className="font-semibold text-[30px] lg:text-[50px] xl:text-[60px] text-white leading-[40px] lg:leading-[60px] xl:leading-[80px] mb-[25px] md:mb-[50px]">
          {object?.data?.field_title}
        </h2>
        <p className="text-white/50 text-[18px] lg:text-[25px]">
          {striptags(object?.data?.body?.processed)}
        </p>
        <a
          href={object?.data?.field_link?.uri}
          className="text-white block mx-auto md:mx-0 mb-[50px] mb:mb-0 text-center py-[20px] w-full max-w-[340px] border border-white text-[25px] font-medium mt-[50px] hover:bg-white hover:text-black transition-all"
        >
          {object?.data?.field_link?.title}
        </a>
      </div>
      <div className="w-full md:w-6/12">
        <img
          className="h-[400px] w-full md:w-[600px] md:h-auto ml-auto object-cover object-center"
          src={rootAdress + object?.data?.field_image?.uri?.url}
          alt="alt"
        ></img>
      </div>
    </div>
  );
}

export default FirstFullBlock;
