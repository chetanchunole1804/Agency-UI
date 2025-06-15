import React from "react";
import HeadWithTitle from "../components/HeadWithTitle";

const Events = () => {
  return (
    <div
      style={{
        backgroundColor: "var(--bgColor) ",
        // fontFamily: "inter,sans-serif",
      }}
    >
      <div className="text-center pt-14">
        <p className="tracking-widest text-[16px] text-[#EF6D58] uppercase">
          Events
        </p>
        <h2
          className="font-bold text-[56px] text-white py-2 sm:mb-10 capitalize leading-tight"
          id="porthead"
        >
          Explore Future
          <br /> Conferences
        </h2>
      </div>
      {/* <HeadWithTitle title='Events' mainHead='Explore Future Conferences' customStyles={{width:"50%", margin:"auto", lineHeight:"1.3"}}/> */}

      <div className="flex justify-between mx-16 gap-5" id="EventCardGrp">
        <div
          className="p-10 border border-[#3A3C56] rounded-md text-white flex flex-col gap-4 w-[40%]"
          id="EventCard"
        >
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-7xl font-bold ">3</h1>
            </div>
            <div className="text-2xl font-bold">
              <h4>November</h4>
              <h4>2021</h4>
            </div>
          </div>
          <div className="flex gap-2">
            <img src="clock.svg" alt="" />
            <p>9:00 am – 3:00 pm</p>
          </div>
          <div
            className="w-[100%] mx-auto my-4  h-[1px] "
            style={{ backgroundColor: "#3A3C56" }}
          ></div>
          <div className="flex flex-col gap-7">
            <h4 className="text-2xl font-bold">Design Weeks</h4>
            <p className="text-gray-500">
              Digital agency is a business you hire to outsource your digital.
            </p>
            <p>Explore Now</p>
          </div>
        </div>

        <div
          className="p-10 border border-[#3A3C56] rounded-md text-white flex flex-col gap-4 w-[40%]"
          id="EventCard"
        >
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-7xl font-bold ">15</h1>
            </div>
            <div className="text-2xl font-bold">
              <h4>November</h4>
              <h4>2021</h4>
            </div>
          </div>
          <div className="flex gap-2">
            <img src="clock.svg" alt="" />
            <p>1:00 pm – 8:00 pm</p>
          </div>
          <div
            className="w-[100%] mx-auto my-4  h-[1px] "
            style={{ backgroundColor: "#3A3C56" }}
          ></div>
          <div className="flex flex-col gap-7">
            <h4 className="text-2xl font-bold">Interior Design</h4>
            <p className="text-gray-500">
              Marketing efforts, instead of handling in-house.
            </p>
            <p>Explore Now</p>
          </div>
        </div>

        <div
          className="p-10 border border-[#3A3C56] rounded-md text-white flex flex-col gap-4 w-[40%]"
          id="EventCard"
        >
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-7xl font-bold ">2</h1>
            </div>
            <div className="text-2xl font-bold">
              <h4>December</h4>
              <h4>2021</h4>
            </div>
          </div>
          <div className="flex gap-2">
            <img src="clock.svg" alt="" />
            <p>10:00 am – 2:00 pm</p>
          </div>
          <div
            className="w-[100%] mx-auto my-4  h-[1px] "
            style={{ backgroundColor: "#3A3C56" }}
          ></div>
          <div className="flex flex-col gap-7">
            <h4 className="text-2xl font-bold">The F design events</h4>
            <p className="text-gray-500">
              Provide your business with a variety of digital solutions to
              promote.
            </p>
            <p>Explore Now</p>
          </div>
        </div>
      </div>
      <div className="flex">
      <button className="w-[170px] h-[48px] mx-auto sm:my-16 my-8 border border-gray-500 text-white rounded-md">
        Explore More
      </button>
      </div>
    </div>
  );
};

export default Events;
