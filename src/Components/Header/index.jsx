import React from "react";
import { IoMoonOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { AiOutlineClockCircle } from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex flex-col items-center gap-5 bg-red-300 w-full px-4 py-2 sm:px-8 sm:py-4">
      <div className="flex justify-between items-center w-full h-16 px-4 sm:px-10 font-bold bg-orange-400">
        <h1 className="text-xl sm:text-2xl">Weatheroo</h1>
        <button className="text-lg sm:text-xl">
          <IoMoonOutline />
        </button>
      </div>
      <div className="flex flex-wrap gap-2 items-center text-sm sm:text-base">
        <SlCalender className="text-lg sm:text-xl" />
        <p className="flex-1 text-center sm:text-left">
          Tuesday 31 May 2024 &#124; Local Time: 3:08 AM
        </p>
        <AiOutlineClockCircle className="text-lg sm:text-xl" />
      </div>
    </div>
  );
};

export default Header;
