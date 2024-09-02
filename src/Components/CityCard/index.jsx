import React from "react";
import { TiWeatherDownpour } from "react-icons/ti";
import {
  FaTemperatureArrowDown,
  FaTemperatureArrowUp,
  FaAngleRight,
} from "react-icons/fa6";

const CityCard = () => {
  const cities = ["Cairo", "Alex", "Suez", "Mansoura", "Monofia"];

  const handleCityClick = () => {
    console.log("City Card Clicked");
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 w-full max-w-3xl mx-auto rounded-xl bg-blue-300">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold bg-yellow-200 p-2 rounded-t-xl">
        Cities Forecast
      </h2>

      <hr className="h-1 bg-black rounded-full my-2" />

      <div className="flex flex-col gap-4">
        {cities.map((city, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row p-3 bg-purple-400 rounded-lg shadow-md cursor-pointer"
            onClick={handleCityClick}>
            <div className="bg-orange-300 p-2 w-full sm:w-1/4 text-start">
              <p className="font-bold text-sm sm:text-base lg:text-lg">
                {city}
              </p>
            </div>

            <div className="flex-1 bg-gray-300 p-2 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
              <div className="flex items-center gap-2">
                <TiWeatherDownpour className="text-lg sm:text-xl lg:text-2xl" />
                &nbsp;&nbsp;&nbsp;
                <p className="text-xs sm:text-sm lg:text-base">H</p>
                <div className="flex items-center text-xs sm:text-sm lg:text-base">
                  <FaTemperatureArrowUp />
                  <p className="px-1">42°</p>
                </div>
                &nbsp;&nbsp;&nbsp;
                <p className="text-xs sm:text-sm lg:text-base">L</p>
                <div className="flex items-center text-xs sm:text-sm lg:text-base">
                  <FaTemperatureArrowDown />
                  <p className="px-1">42°</p>
                </div>
              </div>

              <div className="flex items-center ml-auto mt-2 sm:mt-0">
                <button className="text-white text-xs sm:text-sm lg:text-base">
                  <FaAngleRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityCard;
