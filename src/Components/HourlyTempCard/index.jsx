import React from "react";
import { TiWeatherDownpour } from "react-icons/ti";

const HourlyTempCard = () => {
  const hours = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];

  return (
    <div className="rounded-xl p-2 bg-white/20 backdrop-blur-lg border border-white/60 cursor-move">
      <h2 className="text-center sm:text-start text-lg font-semibold p-2">
        Today's Forecast
      </h2>

      <hr className="h-1 rounded-full" />

      <div className="overflow-x-auto no-scrollbar mt-2">
        <div className="flex gap-2 px-1">
          {hours.map((hour) => (
            <div
              key={hour}
              className="flex flex-col justify-center items-center py-3 px-4 gap-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl">
              <p className="min-w-11">
                {hour} <span className="text-sm">PM</span>
              </p>
              <TiWeatherDownpour className="text-3xl" />
              <p>42°</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HourlyTempCard;
