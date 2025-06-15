import React from "react";
import Image from "next/image";
import help from "../../../public/helpImg.svg";
import Button from "../components/Button";



const Help = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "var(--bgColor2) ",
          // fontFamily: "inter,sans-serif",
        }}
      >
        <div className="w-[90%] mx-auto rounded-md h-full bg-[var(--buttonClr)] sm:px-24 px-5 sm:py-14 py-10 flex items-center justify-between" id="helpData">
          <div className="sm:w-[50%] w-[100%] flex flex-col">
            <h2 className="font-bold text-[56px] text-white py-2 capitalize leading-tight mb-6"
                id="porthead">We’re Help <br /> To Build Your <br />Dream Project</h2>
            <p className=" text-gray-200 mb-10 leading-loose">
              A digital agency is a business you hire to outsource your digital
              marketing efforts, instead of handling in-house.
            </p>
            <Button title="Contact us"/>
          </div>
          <Image src={help} alt="Image" className="sm:w-[50%] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default Help;
