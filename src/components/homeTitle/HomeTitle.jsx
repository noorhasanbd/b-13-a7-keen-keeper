import React from "react";
import { FaPlus } from "react-icons/fa";

const HomeTitle = () => {
  return (
    <div className="container mx-auto text-center mt-16 space-y-4">
      <h2 className="text-3xl text-[#244D3F] font-bold">
        Friends to keep close in your life
      </h2>
      <p className="font-semibold text-[#64748B]">
        Your personal shelf of meaningful connections. Browse, tend, and nurture 
        the <br /> relationships that matter most.
      </p>
      <button className="btn bg-[#244D3F] text-white font-semibold"> <FaPlus />Add Friend</button>
    </div>
  );
};

export default HomeTitle;
