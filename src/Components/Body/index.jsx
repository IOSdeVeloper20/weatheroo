import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { TiWeatherDownpour } from "react-icons/ti";
import { FaTemperatureLow, FaTemperatureHigh } from "react-icons/fa";
import { FiSunrise, FiSunset } from "react-icons/fi";

const Body = () => {
  return (
    <div className="flex flex-col justify-center items-center p-2 gap-4 bg-white/20 backdrop-blur-lg border border-white/60 rounded-xl">
      <div className="flex items-center gap-2">
        <MdOutlineLocationOn />
        <p>Cairo, Egypt</p>
      </div>

      <TiWeatherDownpour className="text-7xl bg-white/10 backdrop-blur-lg border border-white/10 p-1 rounded-full" />
      <h3 className="text-3xl m-4">Clouds</h3>

        <h1 className="text-5xl sm:text-7xl">21°C</h1>

      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-9 rounded-lg">
        <div className="flex items-center gap-2">
          <FiSunrise />
          <p>Rise: 5:35 AM</p>
        </div>

        <div className="flex items-center gap-2">
          <FiSunset />
          <p>Set: 6:30 PM</p>
        </div>

        <div className="flex items-center gap-2">
          <FaTemperatureHigh />
          <p>High: 40°C</p>
        </div>

        <div className="flex items-center gap-2">
          <FaTemperatureLow />
          <p>Low: 21°C</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
