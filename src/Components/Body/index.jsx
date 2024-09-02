import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { TiWeatherDownpour } from "react-icons/ti";
import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { FaWind, FaTemperatureLow, FaTemperatureHigh } from "react-icons/fa";
import { FiSunrise, FiSunset } from "react-icons/fi";

const Body = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full p-4 gap-4 bg-green-300">
      <div className="flex items-center gap-2">
        <MdOutlineLocationOn className="text-xl sm:text-2xl" />
        <p className="text-base sm:text-lg">Cairo, Egypt</p>
      </div>

      <h3 className="text-xl sm:text-2xl md:text-3xl m-4">Clouds</h3>

      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center w-full sm:w-2/3 bg-yellow-600 p-4 rounded-lg">
        <TiWeatherDownpour className="text-5xl sm:text-7xl" />
        <h1 className="text-4xl sm:text-7xl font-medium">21°C</h1>

        <div className="flex flex-col gap-2 sm:gap-4 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <CiTempHigh className="text-lg sm:text-xl" />
            <p>Feels like: 39°C</p>
          </div>
          <div className="flex items-center gap-2">
            <WiHumidity className="text-lg sm:text-xl" />
            <p>Humidity: 42%</p>
          </div>
          <div className="flex items-center gap-2">
            <FaWind className="text-lg sm:text-xl" />
            <p>Wind: 9 km/h</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center p-4 gap-3 bg-gray-300 rounded-lg text-sm sm:text-base">
        <div className="flex items-center gap-2">
          <FiSunrise className="text-lg sm:text-xl" />
          <p>Rise: 5:35 AM</p>
        </div>
        <div className="flex items-center gap-2">
          <FiSunset className="text-lg sm:text-xl" />
          <p>Set: 6:30 PM</p>
        </div>
        <div className="flex items-center gap-2">
          <FaTemperatureHigh className="text-lg sm:text-xl" />
          <p>High: 40°C</p>
        </div>
        <div className="flex items-center gap-2">
          <FaTemperatureLow className="text-lg sm:text-xl" />
          <p>Low: 21°C</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
