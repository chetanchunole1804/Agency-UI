import React from "react";

const Services = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "var(--bgColor2) ",
          // fontFamily: "inter,sans-serif",
        }}
      >
        <div
          className=" pt-10 pb-24 w-[90%]  mx-auto flex gap-20"
          id="aboutPage"
        >
          <div className="">
            <img src="services.svg" alt="" className="" />
          </div>
          <div
            className=" my-auto flex-col gap-8 flex w-[50%] px-10"
            id="aboutData"
          >
            <p
              className="tracking-widest"
              style={{ color: "var(--buttonClr)" }}
            >
              SERVICES
            </p>
            <p
              className="text-6xl font-bold"
              style={{ color: "var(--textclr1)" }}
              id="abouthead"
            >
              Making Complex Digital Products
            </p>
            <p className="text-[20px] text-[var(--textclr1)]">
              Agency provides a full service range including technical skills,
              design, business.
            </p>
            <div className="flex gap-5 items-start">
              <img src="profile2.svg" alt="profile" />
              <div>
                <p className="text-[#3914008e] text-[14px] sm:leading-normal leading-loose">
                  "Understanding, ability to put themselves in the merchant's
                  shoes. It is meant to partner."
                </p>
                <p className="text-[var(--textclr1)] text-[16px] py-5">
                  Jenny Murtaugh
                </p>
              </div>
            </div>
            <button
              className=" shadow-gray-300 shadow-md font-bold bg-white rounded-md w-[138px] h-[48px]"
              style={{ color: "var(--textclr1)" }}
              id="servicebtn"
            >
              EXPLORE
            </button>
          </div>
        </div>
        <div className=" mx-auto w-[90%] pb-20 ">
          <div className="flex-col gap-6 flex py-5">
            <p
              className="tracking-widest"
              style={{ color: "var(--buttonClr)" }}
            >
              SERVICES
            </p>
            <p
              className="text-5xl font-bold sm:pb-5 pb-0"
              style={{ color: "var(--textclr1)" }}
              id="abouthead"
            >
              How Our Agency <br />
              Can Help
            </p>
          </div>
          <div className="flex pb-14" id="servicesBox">
            <div className="w-[391px] h-[400px] border border-[var(--border1)] p-10 flex flex-col justify-start gap-7 boxSize rounded-t border-b-[0px] sm:border-b sm:rounded-l sm:rounded-r-none sm:border-r-[0px]">
              <img src="services1.svg" alt="" className="w-20" />
              <p className="font-bold text-2xl text-[var(--textclr1)]">
                Design
              </p>
              <p className="text-[#3914008e] tracking-wider">
                Agency provides a full service range including technical skills,
                design.
              </p>
              <p style={{ color: "var(--textclr1)" }}>Learn More</p>
            </div>
            <div className="w-[391px] h-[400px] border border-[var(--border1)] p-10 flex flex-col justify-start gap-7 boxSize border-b-[0px] sm:border-b sm:border-r-[0px] ">
              <img src="services2.svg" alt="" className="w-20" />
              <p className="font-bold text-2xl text-[var(--textclr1)]">
                Development
              </p>
              <p className="text-[#3914008e] tracking-wider">
                Full service range including technical skills, design, business.
              </p>
              <p style={{ color: "var(--textclr1)" }}>Discover More</p>
            </div>
            <div className="w-[391px] h-[400px] border border-[var(--border1)] p-10 flex flex-col justify-start gap-7 boxSize rounded-b sm:rounded-bl-none sm:rounded-r">
              <img src="services3.svg" alt="" className="w-20" />
              <p className="font-bold text-2xl text-[var(--textclr1)]">
                Marketing
              </p>
              <p className="text-[#3914008e] tracking-wider">
                Technical skills, design, business understanding, ability.
              </p>
              <p style={{ color: "var(--textclr1)" }}>Explore Now</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
