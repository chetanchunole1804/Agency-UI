import React from "react";

interface ContainerProps {
    title: string;
    heading: string; 
    description: string;
    other:string;
    customStyles?: React.CSSProperties;
  }

const Container: React.FC<ContainerProps> = ({title, heading, description, other, customStyles}) => {
  return (
    <div className="sm:w-[46%] w-[100%] flex-col gap-8 pt-20 flex pb-44" id="workData" style={{...customStyles}}>
      <p className="tracking-widest" style={{ color: "var(--buttonClr)" }}>
        {title}
      </p>
      <p
        className="text-5xl font-bold"
        style={{ color: "var(--textclr1)" }}
        id="workhead"
      >
        {heading}
      </p>
      <p className="text-[#3914008e] tracking-wide leading-loose">
        {description}
      </p>
      <p style={{ color: "var(--textclr1)" }}>{other}</p>
    </div>
  );
};

export default Container;
