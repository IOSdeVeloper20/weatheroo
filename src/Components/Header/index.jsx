import React from "react";
import { SlCalender } from "react-icons/sl";
import { AiOutlineClockCircle } from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="text-center font-bold">
        <h1 className="text-2xl sm:text-3xl text-white">Weatheroo</h1>
      </div>
      <div className="flex flex-col gap-1 text-white text-start">
        <div className="flex items-center gap-1">
          <SlCalender />
          <p>Tuesday 31 May 2024</p>
        </div>
        <div className="flex items-center gap-2">
          <AiOutlineClockCircle />
          <p>Local Time: 3:08 AM</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
