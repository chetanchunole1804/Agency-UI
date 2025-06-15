import React from "react";

const Founder = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "var(--bgColor) ",
          // fontFamily: "inter,sans-serif",
        }}
      >
        <div className="w-[90%] mx-auto py-20 flex gap-5 items-center" id="founder">
          <div className="w-[50%]" id="founderImg">
            <img src="founder.svg" alt="" />
          </div>
          <div className="flex flex-col gap-8 w-[50%] relative z-20" id="founderData">
            <img src="says.svg" alt="" className="absolute w-[100px] h-[80px] -z-10 sm:right-32 right-1" />
            <p className="tracking-widest text-[16px] text-[#EF6D58] uppercase">
              Founder Words
            </p>
            <h3 className="sm:text-5xl text-[24px] sm:w-[100%] w-[80%] twxt-white font-bold text-white">
              Digital agency is a business you hire to outsource your digital
              marketing efforts
            </h3>
            <div className="flex flex-col gap-2">
              <p className="text-2xl text-white">Ren Delan</p>
              <p className="text-gray-500">Founder</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Founder;
