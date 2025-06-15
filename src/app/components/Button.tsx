import React from "react";

interface ButtonProps {
  title:string;
  customStyles?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({title, customStyles}) => {
  return (
    <button
      className=" shadow-gray-100 shadow-md bg-white rounded-md font-bold w-36 py-3 text-[14px] text-[var(--textclr1)] uppercase"
      style={{...customStyles}}
    >
      {title}
    </button>
  );
};

export default Button;
