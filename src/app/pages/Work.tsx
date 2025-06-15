import React from "react";

const Work = () => {
  return (
    <>
      <div
        className="w-screen"
        style={{
          backgroundColor: "var(--bgColor2) ",
          // fontFamily: "inter,sans-serif",
        }}
      >
        <div className="justify-evenly mx-auto  w-[90%] flex gap-20 " id="workpg">
          <div className="w-[46%] flex-col gap-8 pt-20 flex pb-44" id="workData">
            <p className="tracking-widest"
              style={{ color: "var(--buttonClr)" }}>HOW WE WORK</p>
            <p className="text-5xl font-bold"
              style={{ color: "var(--textclr1)" }} id="workhead">Making Your Projects Look Awesome</p>
            <p className="text-[#3914008e] tracking-wide leading-loose">
              Technical skills, design, business understanding, ability to put
              themselves in the merchant's shoes.
            </p>
            <p style={{color:"var(--textclr1)"}}>Read More</p>
          </div>
          <div className=" w-[40%] flex justify-center flex-col gap-8" id="workData2" style={{ color: "var(--textclr1)" }}>
            <div className="flex gap-7 items-center">
              <p className="text-7xl font-bold">1</p>
              <p className="text-2xl font-bold fontwidth">Full service range including</p>
            </div>
            <div className="flex gap-7 items-center">
              <p className="text-7xl font-bold">2</p>
              <p className="text-2xl font-bold fontwidth">Technical skills, design, business</p>
            </div>
            <div className="flex gap-7 items-center">
              <p className="text-7xl font-bold">3</p>
              <p className="text-2xl font-bold fontwidth">Themselves in the merchant's</p>
            </div>
          </div>
        </div>
        <div
          className="w-[90%] mx-auto  h-[1px] "
          style={{ backgroundColor: "#F3D1BF" }}
        ></div>
      </div>
    </>
  );
};

export default Work;
