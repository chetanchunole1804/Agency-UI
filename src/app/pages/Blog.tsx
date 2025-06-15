import React from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import BlogData from "../components/BlogData";

const Blog = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "var(--bgColor2) ",
          // fontFamily: "inter,sans-serif",
        }}
      >
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between sm items-end sm:pb-16 pb-10  sm:gap-0 gap-7" id="BlogItem">
            <div className="text-left pt-14">
              <p className="tracking-widest text-[16px] sm:pb-0 pb-3 text-[#EF6D58] uppercase">
                our blog
              </p>
              <h2
                className="font-bold text-[56px] text-[var(--textclr1)] py-2 capitalize leading-tight"
                id="porthead"
              >
                Latest Blog <br />
                Articles
              </h2>
            </div>
            <button className="w-44 py-3 rounded bg-white text-[var(--textclr1)] uppercase font-bold shadow-gray-300 shadow-md">
              Discover All
            </button>
          </div>
          <div className="flex justify-center ">
            <BlogData />
          </div>
          <div
            className="w-[100%]] mx-auto  h-[1px] mt-8"
            style={{ backgroundColor: "#F3D1BF" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Blog;
