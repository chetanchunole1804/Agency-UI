import React from "react";
import Image from "next/image";
import social1 from "../../../public/social1.svg";
import social2 from "../../../public/social2.svg";
import social3 from "../../../public/social3.svg";

const Footer = () => {
  return (
    <>
      <div
      className="pb-8"
        style={{
          backgroundColor: "var(--bgColor2)",
          // fontFamily: "inter,sans-serif", 
        }}
        id="footer"
      >
        <div className="w-[90%] mx-auto flex sm:justify-between justify-center pt-20 pb-14 sm:items-start sm:gap-0 gap-10 AwardItem items-center">
          <div className="flex justify-between sm:items-start items-center sm:gap-52 gap-[50px] pt-4 AwardItem">
            <h4 className="text-2xl text-[var(--textclr1)] font-bold">
              Agency
            </h4>
            <div>
              <h5 className="tracking-widest text-[16px] text-[#EF6D58] uppercase mb-6">
                Menu
              </h5>
              <div className="flex flex-col gap-2 text-[var(--textclr1)]">
              <p>About</p>
              <p>Services</p>
              <p>Blog</p>
              <p>Contact</p>
              </div>
            </div>
            <div>
              <h5 className="tracking-widest text-[16px] text-[#EF6D58] uppercase mb-6">
                Service
              </h5>
              <div className="flex flex-col gap-2 text-[var(--textclr1)]">
              <p>Design</p>
              <p>Development</p>
              <p>Marketing</p>
              <p>See More</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 mb-2">
            <Image src={social1} alt="social1" />
            <Image src={social2} alt="social2" />
            <Image src={social3} alt="social3" />
          </div>
        </div>
        <div
          className="w-[90%] mx-auto  h-[1px]"
          style={{ backgroundColor: "#F3D1BF" }}
        ></div>
        <div className="py-10 flex justify-between sm:w-[90%] w-[63%] sm:gap-1 gap-5 mx-auto AwardItem">
            <p className='text-[#3914008e]'>Copyright © 2022 Laaqiq. All Rights Reserved.</p>
            <div className="flex gap-10 text-[var(--textclr1)] ">
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
