import React from "react";
import Image from "next/image";
import award1 from "../../../public/award1.svg";
import award2 from "../../../public/award2.svg";
import award3 from "../../../public/award3.svg";
import brand1 from "../../../public/brand1.svg";
import brand2 from "../../../public/brand2.svg";
import brand3 from "../../../public/brand3.svg";

const list = [
  {
    image: award1,
    name: "SOFA",
    date: "25 Oct, 2021",
    model: "Awwwards",
    image2: brand1,
  },
  {
    image: award2,
    name: "KeyBoard",
    date: "19 Oct, 2021",
    model: "CSS Design Awards",
    image2: brand2,
  },
  {
    image: award3,
    name: "Work Media",
    date: "7 Oct, 2021",
    model: "The FWA",
    image2: brand3,
  },
];

const AwardList = () => {
  return (
    <div>
      
      {list.map((item, index) => (
        <div key={index}>
          <div
            className="w-[100%] mx-auto  h-[1px] "
            style={{ backgroundColor: "#F3D1BF" }}
            
          ></div>
          <div className="flex items-center justify-between my-3 AwardItem sm:gap-0 gap-3" >
            <div className="flex items-center gap-7 AwardItem sm:w-[80%]">
              <Image src={item.image} alt="image" />
              <p className="text-[var(--textclr1)] text-[20px]">{item.name}</p>
            </div>
            <div className="sm:w-[63%]">
              <p className="text-[#3914008e] ">{item.date}</p>
            </div>
            <div className="flex sm:gap-8 gap-2 items-center sm:justify-end AwardItem sm:w-[33%]">
              <p className="text-[var(--textclr1)] ">{item.model}</p>
              <Image src={item.image2} alt="image2" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AwardList;
