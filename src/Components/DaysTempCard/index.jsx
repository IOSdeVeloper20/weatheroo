import React from "react";
import { TiWeatherDownpour } from "react-icons/ti";
import { FaTemperatureArrowDown, FaTemperatureArrowUp } from "react-icons/fa6";

const DaysTempCard = () => {
  const days = ["Today", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="rounded-xl bg-white/40 backdrop-blur-lg border border-white/60 p-2">
      <h2 className="text-lg font-semibold p-2 rounded-t-xl">
        Weekly Forecast
      </h2>

      <hr className="h-1 rounded-full" />

      <div className="flex flex-col gap-2 mt-2">
        {days.map((day) => (
          <div
            key={day}
            className="flex justify-evenly items-center p-2 bg-white/5 backdrop-blur-lg border border-white/10 shadow-sm rounded-lg">
            <div className="flex flex-wrap justify-between w-full">
              <p>{day}</p>
              <div className="flex items-center w-full justify-evenly sm:w-3/4">
                <TiWeatherDownpour className="text-2xl mr-2" />
                <div className="flex items-center gap-1">
                  <p>H</p>
                  <FaTemperatureArrowUp />
                  <p>43°</p>
                </div>
                <p className="p-1">-</p>
                <div className="flex items-center gap-1">
                  <p>L</p>
                  <FaTemperatureArrowDown />
                  <p>42°</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaysTempCard;