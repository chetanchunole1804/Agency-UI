import React from "react";


interface UserRatingProps {
    description: string;
    name: string; 
    role: string;
    img: string; 
    
  }

const UserRating: React.FC<UserRatingProps> = ({ description, name, role, }) => {
  return (
    <div className="w-[50%] border h-[336px] border-[#F3D1BF] p-10 flex flex-col gap-6 users">
      <div>
        <img src="rating.svg" alt="" />
      </div>
      <p className="text-[#3914008e]">
        {description}
      </p>
      <div className="flex items-center gap-4">
        <img src="{img}" alt="" />
        <div>
          <h4 className="text-[var(--textclr1)] text-2xl font-bold">
            {name}
          </h4>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default UserRating;
