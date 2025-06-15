// import { Container } from "postcss";
import React from "react";
import Container from "../components/Container";
import DropdownList from "../components/Dropdown";

const Faq = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "var(--bgColor2) ",
          // fontFamily: "inter,sans-serif",
        }}
      >
        <div className="w-[90%] mx-auto flex items-center pb-16 sm:pb-0" id="Faq">
          <Container
            title="Faq"
            heading="Frequently Asked Questions"
            description="A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house."
            other="Contact Us"
          />
          <DropdownList/>
        </div>
      </div>
    </>
  );
};

export default Faq;
