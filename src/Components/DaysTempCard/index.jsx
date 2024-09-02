import React from "react";
import { TiWeatherDownpour } from "react-icons/ti";
import { FaTemperatureArrowDown, FaTemperatureArrowUp } from "react-icons/fa6";

const DaysTempCard = () => {
  const days = ["Today", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="p-4 sm:p-6 lg:p-8 w-full sm:w-3/4 lg:w-1/2 xl:w-1/3 rounded-xl bg-blue-300">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold bg-yellow-200 p-2 rounded-t-xl">
        Weekly Forecast
      </h2>

      <hr className="h-1 bg-black rounded-full" />

      <div className="flex flex-col gap-2 mt-2">
        {days.map((day) => (
          <div
            key={day}
            className="flex flex-col justify-evenly items-center p-3 bg-purple-400 rounded-lg">
            <div className="flex flex-col sm:flex-row justify-between w-full">
              <p className="text-sm sm:text-base lg:text-lg">{day}</p>
              <div className="flex items-center w-full sm:w-3/4 justify-evenly mt-2 sm:mt-0">
                <TiWeatherDownpour className="text-lg sm:text-xl lg:text-2xl" />
                &nbsp;
                <p className="text-sm sm:text-base lg:text-lg">H</p>
                <div className="flex items-center">
                  <FaTemperatureArrowUp className="text-xs sm:text-sm lg:text-base" />
                  <p className="px-1 text-xs sm:text-sm lg:text-base">42°</p>
                </div>
                &nbsp; &#45; &nbsp;
                <p className="text-sm sm:text-base lg:text-lg">L</p>
                <div className="flex items-center">
                  <FaTemperatureArrowDown className="text-xs sm:text-sm lg:text-base" />
                  <p className="px-1 text-xs sm:text-sm lg:text-base">42°</p>
                </div>
              </div>
            </div>
            <hr className="h-1 bg-black w-full rounded-full mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaysTempCard;
