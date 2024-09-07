import React from "react";

const DashHourlyTempCard = ({ weather }) => {
  const hours = weather.data.weather[0].hourly;

  return (
    <div className="rounded-xl p-2 bg-white/20 backdrop-blur-lg border border-white/60 cursor-move">
      <h2 className="text-center sm:text-start text-lg font-semibold p-2">
        Today's Forecast
      </h2>

      <hr className="h-1 rounded-full" />
      <div className="overflow-x-auto no-scrollbar mt-2">
        <div className="flex gap-2 px-1">
          {hours.map((hour, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center py-3 px-4 gap-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl">
              <p className="min-w-11">
                {hour.time / 100 === 0 ? "Now" : hour.time / 100}
              </p>

              <img
                src={hour.weatherIconUrl[0].value}
                alt="hourly condition"
                className="rounded-full"
              />
              <p>{hour.tempC}°</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashHourlyTempCard;
