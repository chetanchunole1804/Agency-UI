"use client";
import React, { useState } from "react";
import Image from "next/image";
import up from "../../../public/up.svg";
import down from "../../../public/down.svg";

type DropdownItem = {
  title: string;
  content: string;
};

const DropdownList: React.FC = () => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items: DropdownItem[] = [
    {
      title: "A digital agency is a business",
      content:
        "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.",
    },
    {
      title: "Hire to outsource your digital",
      content:
        "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.",
    },
    {
      title: "Marketing efforts",
      content:
        "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.",
    },
    {
      title: "Can provide your business",
      content:
        "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.",
    },
  ];

  return (
    <div className="w-[570px] mx-auto items-center" id="dropdown">
      {items.map((item, index) => (
        <div
          className="border border-[#F3D1BF] p-4 rounded overflow-hidden cursor-pointer"
          key={index}
          onClick={() => handleToggle(index)}
        >
          <div className="flex justify-between text-[var(--textclr1)] p-4 text-2xl font-bold">
            {item.title}
            <img src="down.svg" alt="" />
            {/* <button >
              <img src={activeIndex === index ? down : up} alt="" />
            </button> */}
          </div>
          {activeIndex === index && (
            <div className="w-full pt-2 h-36 text-[#3914008e] tracking-wide leading-loose">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropdownList;
