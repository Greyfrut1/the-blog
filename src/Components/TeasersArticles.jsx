import React from "react";
import striptags from "striptags";

function TeasersArticles({ firstTeaserArticle, teasersArticles }) {
  const rootAdress = "http://91.107.217.207";

  return (
    <div className="flex flex-wrap">
      <a
        href={rootAdress + firstTeaserArticle?.[0]?.view_node}
        className="lg:w-1/2 md:w-full px-0 md:px-[20px] mb-[40px]"
      >
        <div className="flex flex-wrap">
          <div className="lg:w-full md:w-1/2 w-ful pr-0 lg:pr-0 md:pr-[12px]">
            <img
              src={rootAdress + firstTeaserArticle?.[0]?.field_image_1}
              alt="alt"
            ></img>
          </div>
          <div className="lg:w-full md:w-1/2 w-full px-0 lg:px-0 md:px-3">
            <div className="text-white/30 pb-2.5 pt-5 md:pt-0 lg:pt-5 text-sm">
              {firstTeaserArticle?.[0]?.field_date}
            </div>
            <h3 className="text-white/80 text-[32px] font-semibold leading-[42px] mb-4">
              {firstTeaserArticle?.[0]?.title_1}
            </h3>
            <p className="text-white/50 text-lg leading-[28px] font-light tracking-[0.6px]">
              {striptags(firstTeaserArticle?.[0]?.body)}
            </p>
          </div>
        </div>
      </a>
      <div className="lg:w-1/2 md:w-full">
        {teasersArticles.map((item, index) => (
          <a
            href={rootAdress + item.view_node}
            className="block first:mt-0 mt-0 px-0 md:px-8 lg:mt-8 [&:last-child>div]:border-b-0"
          >
            <div
              className="pb-8 flex lg:border-b lg:border-t-0 border-white/10 border-b-0 border-t pt-8 lg:pt-0"
              key={index}
            >
              <div className="lg:w-5/12 md:w-3/12 md:order-1 order-3 w-5/12 pr-3">
                <img src={rootAdress + item.field_image_1} alt="alt"></img>
              </div>
              <div className="lg:w-7/12 md:w-9/12 w-7/12 order-2 pl-0 pr-3 md:px-3">
                <div className="text-white/30 pt-1 pb-2.5 text-[11px] leading-[14px]">
                  {item.field_date}
                </div>
                <h3 className="text-white/80 text-[18px] md:text-[20px] lg:text-[25px] leading-[28px] font-semibold">
                  {item.title_1}
                </h3>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default TeasersArticles;
