import React from "react";
import Button from "../components/Button";

const Testimonials = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "var(--bgColor2) ",
          // fontFamily: "inter,sans-serif",
        }}
      >
        <div >
          <div className="text-center sm:pt-20 pt-14 ">
            <p className="tracking-widest text-[16px] text-[#EF6D58] uppercase">
              testimonials
            </p>
            <h2
              className="font-bold text-[56px] text-[var(--textclr1)] sm:pb-14 pb-7 sm:pt-5  pt-3 capitalize leading-tight"
              id="porthead"
            >
              What Our <br />
              Clients Saying
            </h2>
          </div>
          <div className="w-[90%] mx-auto sm:flex block">
            <div className="w-[50%] bg-white px-10 py-14 flex flex-col users border border-[#F3D1BF] sm:rounded-tl sm:rounded-tr-none rounded-t sm:gap-6 gap-12">
              <div>
                <img src="rating.svg" alt="" />
              </div>
              <p className="text-[#3914008e] leading-loose">
                A digital agency is a business you hire to outsource your
                digital marketing efforts, instead of handling in-house. They
                can provide your business with a variety of digital solutions to
                promote your product or service online and help you.
              </p>
              <div className="flex items-center gap-4">
                <img src="user1.svg" alt="" />
                <div>
                  <h4 className="text-[var(--textclr1)] text-2xl font-bold">
                    Alan Martí
                  </h4>
                  <p>Meta Inc.</p>
                </div>
              </div>
            </div>

            <div className="border w-[50%] sm:h-[336px] h-[417px] border-[#F3D1BF] p-10 flex flex-col sm:gap-6 gap-12 users rounded sm:rounded-tl-none sm:border-l-[0px] sm:border-b-[0px]">
              <div>
                <img src="rating.svg" alt="" />
              </div>
              <p className="text-[#3914008e] leading-loose">
              Provide your business with a variety of digital solutions to promote your product or service online.
              </p>
              <div className="flex items-center gap-4">
                <img src="user2.svg" alt="" />
                <div>
                  <h4 className="text-[var(--textclr1)] text-2xl font-bold">
                  Richardo Kann
                  </h4>
                  <p>Photogram</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[90%] mx-auto sm:flex block">
            <div className="w-[50%] border sm:h-[336px] h-[417px] border-[#F3D1BF] p-10 flex flex-col sm:gap-6 gap-12 users rounded sm:border-b sm:border-t-[0px] sm:rounded-t-none">
              <div>
                <img src="rating.svg" alt="" />
              </div>
              <p className="text-[#3914008e] leading-loose">
              Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety.
              </p>
              <div className="flex items-center gap-4">
                <img src="user3.svg" alt="" />
                <div>
                  <h4 className="text-[var(--textclr1)] text-2xl font-bold">
                  Graham Griffiths
                  </h4>
                  <p>Twitor</p>
                </div>
              </div>
            </div>
            <div className="w-[50%] border sm:h-[336px] h-[417px] border-[#F3D1BF]  p-10 flex flex-col gap-6 relative sm:bottom-16 bottom-0 users rounded-br sm:border-l-[0px]">
              <div>
                <img src="rating.svg" alt="" />
              </div>
              <p className="text-[#3914008e]">
              Promote your product or service online and help you hit your marketing goals and grow your business.
              </p>
              <div className="flex items-center gap-4">
                <img src="user4.svg" alt="" />
                <div>
                  <h4 className="text-[var(--textclr1)] text-2xl font-bold">
                  Maria Trofimova
                  </h4>
                  <p>Whochat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
        <Button
        title="See All"
        customStyles={{margin:"50px 0"}}
        />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
