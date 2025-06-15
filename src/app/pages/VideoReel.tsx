const VideoReel = () => {
  return (
    <>
      <div
        className=""
        style={{
          backgroundColor: "var(--bgColor2) ",
          // fontFamily: "inter,sans-serif",
        }}
      >
        <div className=" mx-auto justify-center py-24 w-[88%] flex gap-20" id="videoReel">
          <div className="">
            <img src="video.svg" alt="" />
          </div>
          <div className="flex-col gap-8 flex w-[50%] justify-center" id="videoReelp1">
            <p
              className="tracking-widest"
              style={{ color: "var(--buttonClr)" }}
            >
              VIDEO REEL
            </p>
            <p
              className="text-5xl font-bold"
              style={{ color: "var(--textclr1)" }}
              id="videoReelhead"
            >
              Unlock The Greatest Value Possible
            </p>
            <p className="text-[#3914008e] leading-loose">
              Design, business understanding, ability to put themselves in the
              merchant's shoes meant to partner.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoReel;
