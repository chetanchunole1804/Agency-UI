import React from "react";

const About = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "var(--bgColor2) ",
          // fontFamily: "inter,sans-serif",
        }}
      >
        <div className="flex py-10 px-5 gap-5 justify-evenly" id="companyLogo">
          <img src="company1.svg" alt="company1" />
          <img src="company2.svg" alt="company2" />
          <img src="company3.svg" alt="company3" />
          <img src="company4.svg" alt="company4" />
          <img src="company5.svg" alt="company5" />
        </div>
        <div
          className="w-[80%] mx-auto mb-5 h-[1px]"
          style={{ backgroundColor: "#F3D1BF" }}
        ></div>
        <div
          className=" justify-evenly mx-auto py-16 w-[90%] flex gap-20"
          id="aboutPage"
        >
          <div className="">
            <img src="aboutImg.svg" alt="" className="" />
          </div>
          <div
            className=" my-auto flex-col gap-8 flex w-[50%] px-10"
            id="aboutData"
          >
            <p
              className="tracking-widest"
              style={{ color: "var(--buttonClr)" }}
            >
              ABOUT
            </p>
            <p
              className="text-6xl font-bold"
              style={{ color: "var(--textclr1)" }}
              id="abouthead"
            >
              An Experience Design Agency
            </p>
            <p className="text-2xl text-[var(--textclr1)]">Provides a full service range</p>
            <p className="text-[#3914008e] tracking-wider leading-loose">
              Ability to put themselves in the merchant's shoes. It is meant to
              partner on the long run, and work as an extension of the
              merchant's team.
            </p>
            <button
              className=" shadow-gray-300 shadow-md bg-white rounded-md w-[138px] h-[48px] font-extrabold"
              style={{ color: "var(--textclr1)" }}
            >
              ABOUT US
            </button>
          </div>
        </div>
        <div
          className="flex items-center justify-center py-10 border-collapse"
          style={{ color: "var(--textclr1)" }}
          id="aboutBox"
        >
          <div className="border border-[#F3D1BF] w-[390px] h-[176px] flex flex-col justify-center pl-10 rounded-t-md Boxes">
            <p className="text-3xl font-bold mb-3">42%</p>
            <p>Years of experience</p>
          </div>
          <div className="border border-[#F3D1BF] w-[390px] h-[176px] flex flex-col justify-center pl-10 Boxes">
            <p className="text-3xl font-bold mb-3">73+</p>
            <p>Agency members</p>
          </div>
          <div className="border border-[#F3D1BF] w-[390px] h-[176px] flex flex-col justify-center pl-10 rounded-b-md Boxes">
            <p className="text-3xl font-bold mb-3">5.000</p>
            <p>Projects complete</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
