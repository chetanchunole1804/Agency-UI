// components/ReusableComponent.jsx

import React from "react";

interface HeadWithTitleProps {
    title: string; // The title must be a string
    mainHead: string; // The description must be a string
    customStyles?: React.CSSProperties; // Optional custom styles object
  }

const HeadWithTitle: React.FC<HeadWithTitleProps> = ({ title, mainHead, customStyles }) => {
  return (
    <div className="text-center pt-14">
      <p className="tracking-widest text-[16px] text-[#EF6D58] uppercase" >
      {title}
      </p>
      <h2 className="font-bold text-[56px] text-white py-2 capitalize" id="porthead" style={{...customStyles}}>
      {mainHead}
      </h2>
    </div>
  );
};


export default HeadWithTitle;
