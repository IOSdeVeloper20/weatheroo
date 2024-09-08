import React from "react";
import { FaTemperatureArrowDown, FaTemperatureArrowUp } from "react-icons/fa6";
import { getDayName } from "../../Helpers/Date";

const DashDaysTempCard = ({ weather }) => {
  const days = weather.data.weather;

  return (
    <div className="rounded-xl bg-white/20 backdrop-blur-lg border border-white/60 p-2">
      <h2 className="text-lg font-semibold p-2 rounded-t-xl">
        Weekly Forecast
      </h2>

      <hr className="h-1 rounded-full" />

      <div className="flex flex-col gap-2 mt-2">
        {days.map((day, index) => (
          <div
            key={index}
            className="flex justify-evenly items-center p-2 bg-white/5 backdrop-blur-lg border border-white/10 shadow-sm rounded-lg">
            <div className="flex flex-wrap justify-between w-full">
              <p>{getDayName(day.date, "en-US")}</p>
              <div className="flex items-center pt-2 w-full justify-evenly sm:w-3/4 sm:pt-0">
                <img
                  src={day.hourly[0].weatherIconUrl[0].value}
                  alt="Daily Conditions"
                  className="rounded-full size-8"
                />
                <div className="flex items-center gap-1">
                  <p>H</p>
                  <FaTemperatureArrowUp className="text-orange-500" />
                  <p>{day.maxtempC}°</p>
                </div>
                <p className="p-1">-</p>
                <div className="flex items-center gap-1">
                  <p>L</p>
                  <FaTemperatureArrowDown className="text-blue-500" />
                  <p>{day.mintempC}°</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashDaysTempCard;
