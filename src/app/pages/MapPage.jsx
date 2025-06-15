import React from "react";
import Button from "../components/Button";
// import Map from "../components/Map/Map";
import Contact from "../components/Contact";
// import MapData from "../components/MapData";

const MapPage = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "var(--bgColor2) ",
          // fontFamily: "inter,sans-serif",
        }}
      >
        <div className="w-[90%] mx-auto py-16">
          <div className="flex items-center justify-between AwardItem" >
            <h3 className="text-center text-[40px] font-bold py-5 text-[var(--textclr1)]">
              Newsletter
            </h3>
            <div className="flex gap-4 AwardItem mb-5">
              <input
                type="email"
                name=""
                id=""
                className="w-80 py-2 px-4 rounded border border-[#F3D1BF]"
                placeholder="Your email"
              />
              {/* <Button title="Subscribe"/> */}
              <button className="sm:w-36 bg-white rounded sm:py-3 py-2 border border-[var(--border1)] text-[var(--textclr1)] uppercase font-bold">Subscribe</button>
            </div>
          </div>
          <div>{/* <MapData/> */}
            <form action="" className="sm:w-80 px-4 py-8 bg-white rounded-md mb-5">
              <h4 className='text-2xl text-[var(--textclr1)] font-bold mb-3'>Get In Touch</h4>
              <div className="flex flex-col gap-5 mb-5">
              <input type="text" name="" id="" placeholder="Your email" className="py-3 px-3 w-full border border-[var(--border1)] rounded-md"/>
              <input type="text" name="" id="" placeholder="Subject" className="py-3 px-3 w-full border border-[var(--border1)] rounded-md"/>
              <input type="text" name="" id="" placeholder="Message" className="py-3 px-3 w-full border border-[var(--border1)] rounded-md"/>
              </div>
              <Button title="Sumbit Now" customStyles={{backgroundColor:"var(--buttonClr)", color:"#fff"}}/>
            </form>
          </div>
          <div>
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
};

export default MapPage;
