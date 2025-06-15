"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import team1 from "../../../public/team1.svg";
import team2 from "../../../public/team2.svg";
import team3 from "../../../public/team3.svg";
import team4 from "../../../public/team4.svg";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

const teams = [
  {
    id: 1,
    name: "Azah Anyeni",
    profile: "Designer",
    image: team1,
  },
  {
    id: 2,
    name: "Roelof Bekkenenks",
    profile: "React Developer",
    image: team2,
  },
  {
    id: 3,
    name: "Leonardo Oliveira",
    profile: "Illustrator",
    image: team3,
  },
  {
    id: 4,
    name: "Izabella Tabakova",
    profile: "Izabella Tabakova",
    image: team4,
  },
];

// console.log(teams);

const OurTeams = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "var(--bgColor) ",
          // fontFamily: "inter,sans-serif",
        }}
      >
        <div className="w-[90%] mx-auto flex sm:flex-row flex-col justify-between">
          <div className="text-left pt-14">
            <p className="tracking-widest text-[16px] text-[#EF6D58] uppercase">
              Our Team
            </p>
            <h2
              className="font-bold text-[56px] text-white py-2 capitalize leading-tight"
              id="porthead"
            >
              Team of Designers <br />
              and Developers
            </h2>
          </div>
          <div className="flex gap-4 text-white text-2xl items-end cursor-pointer ">
            <div className="border border-gray-500 rounded-full px-5 py-4 custom-prev sm:block hidden">
              ←
            </div>
            <div className="border border-gray-500 rounded-full px-5 py-4 custom-next sm:block hidden">
              →
            </div>
          </div>
        </div>
        <div className="flex pt-14 sm:pb-12 pb-6 w-[90%] mx-auto justify-center">
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) =>
                `<span class="${className} custom-bullet">${index}</span>`,
            }}
            modules={[Pagination, Navigation]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            
          >
            <div>
              {teams.map((team, index) => (
                <SwiperSlide key={team.id}>
                  <div className=" text-center sm:pb-10 pb-5">
                    <div className="w-[270px] h-[272px] rounded border border-[#3A3C56] mx-auto">
                      <Image
                        src={team.image}
                        alt={team.name}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="py-5">
                      <h4 className="text-2xl font-bold text-white">
                        {team.name}
                      </h4>
                      <p className="text-gray-500">{team.profile}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {teams.map((team, index) => (
                <SwiperSlide key={index}>
                  <div className=" text-center">
                    <div className="w-[270px] h-[272px] rounded border border-[#3A3C56] mx-auto">
                      <Image
                        src={team.image}
                        alt={team.name}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="py-5">
                      <h4 className="text-2xl font-bold text-white">
                        {team.name}
                      </h4>
                      <p className="text-gray-500">{team.profile}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
        <div className="custom-pagination gap-3 flex justify-center text-0"></div>
      </div>
    </div>
  );
};

export default OurTeams;
