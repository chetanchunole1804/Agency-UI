"use client"
import { useRef } from "react";

const TeamCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const teamMembers = [
    { name: "Azah Anyeni", role: "Designer", img: "/public/team1.svg" },
    { name: "Roelof Bekkenenks", role: "React Developer", img: "/public/team2.svg" },
    { name: "Leonardo Oliveira", role: "Illustrator", img: "/public/team3.svg" },
    { name: "Izabella Tabakova", role: "Product Designer", img: "/public/team4.svg" },
  ];

  return (
    <div className="relative bg-[#1e1e2f] p-6 rounded-md">
      <h2 className="text-center text-white text-xl mb-6">
        Meet Our Designers and Developers
      </h2>
      <div className="flex items-center">
        <button
          className="absolute left-0 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 z-10"
          onClick={scrollLeft}
        >
          &lt;
        </button>
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-scroll scrollbar-hide snap-x"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#2a2a3e] min-w-[250px] rounded-md p-4 flex flex-col items-center snap-start"
            >
              <img
                src={member.img}
                alt={member.name}
                className="rounded-full w-24 h-24 mb-4"
              />
              <h3 className="text-white text-lg">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 z-10"
          onClick={scrollRight}
        >
          &gt;
        </button>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TeamCarousel;
