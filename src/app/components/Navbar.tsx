"use client";
import React, { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const getNavbarStyles = () => {
    return {
      opacity:isOpen?"1":"0",
      // right: isOpen ? "0%" : "-50vh",
      transition: "opacity 0.5s ease-in",

    };
  };
  return (
    <>
      <div
        className="flex justify-around text-white items-center py-4 "
        style={{ backgroundColor: "var(--bgColor)" }}
        id="navbar"
      >
        <div>
          <img src="logo.svg" alt="logo" id="logo" />
        </div>
        <div>
          <ul
            className="flex gap-20 text-lg"
            id="navLinks"
            // style={{ fontFamily: "inter,sans-serif" }}
          >
            <li>About</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Blog</li>
          </ul>
        </div>
        <div id="navLinks">
          <button
            className="border border-gray-500 rounded-md w-[138px] h-[48px] font-bold"
            // style={{ fontFamily: "inter,sans-serif" }}
          >
            CONTACT
          </button>
        </div>
      </div>
      <div >
        <div>
          <img
            src="menu.svg"
            alt="menu"
            className="w-[48px] h-[48px] absolute right-5 top-4"
            id="menu"
            onClick={toggleNavbar}
          />
        </div>
        <div
          className="w-full h-full z-30 backdrop-blur-md absolute"
          style={getNavbarStyles()}
        >
          <ul
            className=" text-white text-center mt-28 text-3xl flex flex-col gap-11"
            id="navLinks"
            // style={{ fontFamily: "inter,sans-serif" }}
          >
            <li>About</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
