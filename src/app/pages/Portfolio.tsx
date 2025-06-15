"use client";
import React from "react";
import portImg1 from "/public/portImg1.svg";
import HeadWithTitle from "../components/HeadWithTitle";

const Portfolio = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "var(--bgColor) ",
          // fontFamily: "inter,sans-serif",
        }}
      >
        <div className="w-[90%] mx-auto items-center flex flex-col gap-7">
          <HeadWithTitle title="Portfolio" mainHead="Latest Work" />
          <div className="relative text-gray-400 pb-8">
            <div className="">
              <ul
                className="flex text-center gap-9 justify-center"
                id="portlist"
              >
                <li className="text-white">
                  Show All <sup>14</sup>
                </li>
                <li>
                  Design <sup>6</sup>
                </li>
                <li>
                  Branding <sup>4</sup>
                </li>
                <li>
                  Illustration <sup>3</sup>
                </li>
                <li>
                  Motion <sup>1</sup>
                </li>
              </ul>
            </div>
            <div className="flex justify-center  ">
              <select
                name=""
                className="w-[329px] h-[48px] rounded-md px-3 hidden"
                id="portlist2"
              >
                <option value="">Show All</option>
                <option value="">Design </option>
                <option value="">Branding</option>
                <option value="">Illustration</option>
                <option value="">Motion</option>
              </select>
            </div>
          </div>
          <div
            className="flex gap-6 mx-auto justify-center flex-wrap"
            id="portImgBox"
          >
            <div
              style={{ background: 'url("portImg1.svg")' }}
              className=" portImg w-[470px] h-[416px] relative rounded"
            >
              <div className="absolute left-10 bottom-11">
                <button className="w-[84px] h-[36px] bg-white rounded-full text-[var(--textclr1)]">
                  Design
                </button>
                <h1 className="font-bold text-[40px] text-white">SOFA</h1>
              </div>
            </div>
            <div
              style={{ background: 'url("portImg2.svg")' }}
              className=" portImg w-[670px] h-[416px] relative rounded"
            >
              <div className="absolute left-10 bottom-11">
                <button className="w-[102px] h-[36px] bg-white rounded-full text-[var(--textclr1)]">
                  Branding
                </button>
                <h1 className="font-bold text-[40px] text-white">KeyBoard</h1>
              </div>
            </div>
            <div
              style={{ background: 'url("portImg3.svg")' }}
              className=" portImg w-[670px] h-[416px] relative rounded"
            >
              <div className="absolute left-10 bottom-11">
                <button className="w-[116px] h-[36px] bg-white rounded-full text-[var(--textclr1)]">
                  Illustration
                </button>
                <h1 className="font-bold text-[40px] text-white">Work Media</h1>
              </div>
            </div>
            <div
              style={{ background: 'url("portImg4.svg")' }}
              className=" portImg w-[470px] h-[416px] relative rounded"
            >
              <div className="absolute left-10 bottom-11">
                <button className="w-[86px] h-[36px] bg-white rounded-full text-[var(--textclr1)]">
                  Motion
                </button>
                <h1 className="font-bold text-[40px] text-white">DDDone</h1>
              </div>
            </div>
          </div>
          
        </div>
        <div className="flex">
      <button className="w-[170px] h-[48px] mx-auto mt-16 sm:mb-10 mb-4 border border-gray-500 text-white rounded-md">
        Explore More
      </button>
      </div>
      </div>
    </>
  );
};

export default Portfolio;
