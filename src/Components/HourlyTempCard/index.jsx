import React from "react";
import { TiWeatherDownpour } from "react-icons/ti";

const HourlyTempCard = () => {
  const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl bg-blue-300 max-w-full mx-auto cursor-move">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold bg-yellow-200 p-2 rounded-t-xl">
        Today's Forecast
      </h2>

      <hr className="h-1 bg-black rounded-full mb-2"/>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-2 py-2">
          {hours.map((hour) => (
            <div key={hour} className="flex flex-col justify-center items-center py-3 px-4 sm:p-3 gap-2 bg-purple-400 rounded-lg w-16 sm:w-20 lg:w-24">
              <p className="text-xs sm:text-sm lg:text-base">{hour} PM</p>
              <TiWeatherDownpour className="text-xl sm:text-2xl lg:text-3xl" />
              <p className="text-xs sm:text-sm lg:text-base">42°</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HourlyTempCard;
