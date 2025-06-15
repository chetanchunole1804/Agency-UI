import React from "react";
import Button from "../components/Button";

const Pricing = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "var(--bgColor2) ",
          // fontFamily: "inter,sans-serif",
        }}
      >
        <div className="w-[90%] mx-auto">
          <div className="text-left pt-14">
            <p className="tracking-widest text-[16px] text-[#EF6D58] uppercase">
              Pricing
            </p>
            <h2
              className="font-bold text-[56px] text-[var(--textclr1)] py-2 capitalize leading-tight"
              id="porthead"
            >
              Check Our <br />
              Pricing Plans
            </h2>
          </div>
        </div>
        <div className="flex w-[90%] mx-auto py-8 items-end" id="pricing">
          <div className="border border-[#F3D1BF] px-10 py-16 flex flex-col gap-7 h-[512px] border-b-[0px] sm:border-b rounded-t  sm:rounded-tl sm:rounded-tr-none sm:border-r-[0px]">
            <p className="tracking-widest text-[var(--buttonClr)] uppercase">
              Consultation
            </p>
            <p className="text-5xl font-bold text-[var(--textclr1)] capitalize">
              Free
            </p>
            <p className="text-[#3914008e] leading-loose">
              Your digital marketing efforts, instead of handling in-house.
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex gap-2 items-center">
                <img src="plus.svg" alt="" />
                <p className="text-[var(--textclr1)]">Brand Design</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src="minus.svg" alt="" />
                <p className="text-[#3914008e]">Market Analysis</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src="minus.svg" alt="" />
                <p className="text-[#3914008e]">Production</p>
              </div>
            </div>
            <Button
            title="Contact Us"
            />
          </div>
          <div className="border bg-white border-[#F3D1BF] p-10 h-[560px] py-14 flex flex-col gap-7 rounded-t">
            <button className="w-[92px] h-[38px] rounded-full bg-[var(--buttonClr)] text-white">Popular</button>
            <p className="tracking-widest text-[var(--buttonClr)] uppercase">
            Design
            </p>
            <p className="text-5xl font-bold text-[var(--textclr1)] capitalize">
            $1500
            </p>
            <p className="text-[#3914008e] leading-loose">
            Provide your business with a variety of digital solutions to promote.</p>
            <div className="flex flex-col gap-5">
              <div className="flex gap-2 items-center">
                <img src="plus.svg" alt="" />
                <p className="text-[var(--textclr1)]">Brand Design</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src="plus.svg" alt="" />
                <p className="text-[var(--textclr1)]">Market Analysis</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src="minus.svg" alt="" />
                <p className="text-[#3914008e]">Production</p>
              </div>
            </div>
            <Button
            title="Contact Us"
            customStyles={{backgroundColor:"var(--buttonClr)", color:"#fff"}}
            />
          </div>
          <div className="border border-[#F3D1BF] px-10 py-16 flex flex-col gap-7 h-[512px] rounded-b border-t-[0px] sm:border-t sm:border-l-[0px] sm:rounded-b-none rounded-tr sm:border-b">
            <p className="tracking-widest text-[var(--buttonClr)] uppercase">
            Design+Code
            </p>
            <p className="text-5xl font-bold text-[var(--textclr1)] capitalize">
            $2900
            </p>
            <p className="text-[#3914008e] leading-loose">
            Help you hit your marketing goals and grow your business.            
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex gap-2 items-center">
                <img src="plus.svg" alt="" />
                <p className="text-[var(--textclr1)]">Brand Design</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src="plus.svg" alt="" />
                <p className="text-[var(--textclr1)]">Market Analysis</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src="plus.svg" alt="" />
                <p className="text-[var(--textclr1)]">Production</p>
              </div>
            </div>
          <Button
            title="Contact Us"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
