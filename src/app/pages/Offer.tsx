import React from "react";

const Offer = () => {
  return (
    <>
      <div
        className="pt-40 pb-16"
        style={{
          backgroundColor: "var(--bgColor) ",
          // fontFamily: "inter,sans-serif",
        }}
      >
        <div
          className=" w-[88%] mx-auto rounded bg-[#FDF0E9] relative "
          id="offer"
        >
          <img src="offer.svg" alt="" className="absolute top-[-22%] left-24" id="offerStar"/>
          <img
            src="offerModel.svg"
            alt=""
            className="absolute bottom-0 right-24"
            id="offerModel"
          />
          <div className="flex  px-24 pt-16 sm:gap-10 gap-5" id="offerData">
            <div className="flex flex-col gap-6 pt-8">
              <h5
                className="tracking-widest"
                style={{ color: "var(--buttonClr)" }}
              >
                GET STARTED
              </h5>
              <h4 className="font-bold text-2xl text-[var(--textclr1)]">
                We Help Companies <br />
                Move Faster
              </h4>
              <button
                className="w-[154px] h-[48px]  font-bold text-white rounded-md"
                style={{ backgroundColor: "var(--buttonClr)" }}
              >
                CONTACT US
              </button>
            </div>
            <div className="sm:flex sm:justify-center ">
              <img src="offer2.svg" alt="" className="p-0"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;

{
  // className="w-full h-full"
  /* <div
            className="sm:flex items-center sm:gap-5 sm:px-24 px-8"
            id="offerData"
          >
            <div className="flex flex-col gap-6">
              <h5
                className="tracking-widest"
                style={{ color: "var(--buttonClr)" }}
              >
                GET STARTED
              </h5>
              <h4 className="font-bold text-2xl text-[var(--textclr1)]">
                We Help Companies <br />
                Move Faster
              </h4>
              <button
                className="w-[154px] h-[48px]  font-bold text-white rounded-md"
                style={{ backgroundColor: "var(--buttonClr)" }}
              >
                CONTACT US
              </button>
            </div>
            <div>
              <img src="offer2.svg" alt="" />
            </div>
            <div className=" sm:-bottom-2 sm:right-20 right-5 " id="offerModel">
              <img src="offerModel.svg" alt="" />
            </div>
          </div> */
}
