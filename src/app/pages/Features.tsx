import React from "react";

const Features = () => {
  return (
    <>
      <div
        className=""
        style={{
          backgroundColor: "var(--bgColor2) ",
          // fontFamily: "inter,sans-serif",
        }}
      >
        <div
          className=" justify-evenly mx-auto py-10 w-[90%] pb-32 flex gap-20"
          id="features"
        >
          <div
            className=" my-auto flex-col gap-6 flex w-[50%] px-10 pb-20"
            id="featuresData"
          >
            <p
              className="tracking-widest"
              style={{ color: "var(--buttonClr)" }}
            >
              FEATURES
            </p>
            <p
              className="text-6xl font-bold"
              style={{ color: "var(--textclr1)" }}
              id="abouthead"
            >
              Give Your Site A New Look
            </p>
            <p className="text-[20px] text-[var(--textclr1)]">
              Service range including technical skills, design, business
              understanding.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <img src="right.svg" alt="" />
                <p className="text-[#3914008e]">
                  Range including technical skills
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img src="right.svg" alt="" />
                <p className="text-[#3914008e]">Business understanding</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="right.svg" alt="" />
                <p className="text-[#3914008e]">Partner on the long run</p>
              </div>
            </div>
          </div>
          <div className="">
            <img src="features.svg" alt="" className="" />
          </div>
        </div>
        <div
          className="py-10 flex justify-center w-[90%] items-center mx-auto pb-28"
          id="features2"
        >
          <div
            className=" my-auto flex-col gap-8 flex w-[50%] px-10"
            id="features2-1"
          >
            <p
              className="tracking-widest"
              style={{ color: "var(--buttonClr)" }}
            >
              FEATURES
            </p>
            <p className="text-xl text-[var(--textclr1)]">
              Long run, and work as an extension of the merchant's team.
            </p>
            <p style={{ color: "var(--textclr1)" }}>Read More</p>
          </div>
          <div className="flex items-end" id="features2-2">
            <div className="w-[336px] h-[336px] p-10 flex flex-col gap-7 bg-white border border-[var(--border1)] rounded-md">
              <img src="featuresLogo.svg" alt="" className="w-20" />
              <p className="font-bold text-2xl text-[var(--textclr1)]">
                Professional
              </p>
              <p className="text-[#3914008e] tracking-wider">
                Full service range including technical skills, design.
              </p>
            </div>
            <div  className="w-[336px] h-[272px] border border-[var(--border1)] rounded-md p-10 flex flex-col justify-center gap-7">
              <p className="font-bold text-2xl text-[var(--textclr1)]">
                Accessibility
              </p>
              <p className="text-[#3914008e] tracking-wider">
                Business understanding, ability to put themselves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
