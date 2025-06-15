import React from "react";

import { Epilogue } from 'next/font/google';

const epilogue = Epilogue({
  subsets: ['latin'],
  // weights: ['400', '700'], // Add desired weights
});

const Home = () => {
  return (
    <>
      <div
      className={epilogue.className}
        // className="w-screen "
        style={{ backgroundColor: "var(--bgColor)" }}
        id=""
      >
        <div
          className="flex sm:pt-24 sm:pb-10 pt-0 pb-0 sm:px-0 px-[20px] sm:w-[85vw] w-[100vw] sm:gap-24 gap-5 mx-auto sm:flex-row flex-col-reverse"
          id="homepg"
        >
          <div
            className="z-20 relative sm:w-[40vw] w-[100%]"
            // style={{ fontFamily: "inter,sans-serif" }}
          >
            <img
              src="star.svg"
              alt="star"
              className="absolute -z-10"
              style={{ left: "53%", top: "1%", width: "148px" }}
              id="star"
            />
            <p className=" tracking-widest text-[16px] text-[#EF6D58]">
              MODERN STUDIO
            </p>
            <p
              className="text-[70px] text-white font-bold leading-none py-5"
              id="homehead"
            >
              We’re Help <br /> To Build Your Dream Project
            </p>
            <p className="text-[18px]  text-[#FFFFFFA3] leading-10 font-sans">
              Agency provides a full service range including technical <br />
              skills, design, business understanding.
            </p>
            <div className=" flex gap-10 pt-6">
              <button
                className="w-[154px] h-[48px]  font-bold text-white rounded-md"
                style={{ backgroundColor: "var(--buttonClr)" }}
              >
                HOW WE WORK
              </button>
              <button
                className="text-white tracking-widest"
                // style={{ fontFamily: "inter,sans-serif" }}
              >
                Contact Us
              </button>
            </div>
            <div className="flex gap-4 items-start sm:pt-28 pt-14 pb-10">
              <img src="profile.svg" alt="profile" />
              <div className=" sm:w-[100%] w-[50%] sm:leading-normal leading-loose">
                <p className="text-slate-400">
                  "Put themselves in the merchant's shoes"
                </p>
                <p className="text-white">Meta Inc.</p>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src="home.svg"
              alt="home image"
              id="homeImg"
              // className="w-[520px] h-[500px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
