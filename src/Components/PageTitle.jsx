import React from "react";
import striptags from "striptags";

function TitleBlog({ customStyle, object }) {
  return (
    <div
      style={customStyle}
      className="title border-y border-white/10 mt-5 mb-14 mx-0 md:mx-[20px]"
    >
      <svg viewBox="0 0 70 15">
        <text
          className="fill-white font-poppins tracking-tighter text-center font-bold uppercase"
          x={0}
          y={13}
        >
          {striptags(object?.data?.[0]?.body?.value)}
        </text>
      </svg>
    </div>
  );
}
export default TitleBlog;
