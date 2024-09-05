import React from "react";
import { TiWeatherDownpour } from "react-icons/ti";
import {
  FaTemperatureArrowDown,
  FaTemperatureArrowUp,
  FaAngleRight,
} from "react-icons/fa6";

const CityCard = () => {
  const cities = ["Cairo", "Giza", "Alexandria", "Suez", "Mansoura"];

  return (
    <div className="bg-white/20 backdrop-blur-lg border border-white/60 rounded-xl p-2">
      <h2 className="text-lg font-semibold p-2 rounded-t-xl">
        Cities Forecast
      </h2>

      <hr className="h-1 rounded-full" />

      <div className="flex flex-col gap-2 mt-2">
        {cities.map((city) => (
          <div
            key={city}
            className="flex justify-evenly items-center p-2 bg-white/5 backdrop-blur-lg border border-white/10 shadow-sm rounded-lg">
            <div className="flex flex-wrap justify-between w-full">
              <p>{city}</p>
              <div className="flex items-center w-full justify-evenly sm:w-3/4">
                <TiWeatherDownpour className="text-2xl mr-2" />
                <div className="flex items-center gap-1">
                  <p>H</p>
                  <FaTemperatureArrowUp className="text-orange-500"/>
                  <p>43°</p>
                </div>
                <p className="p-1">-</p>
                <div className="flex items-center gap-1">
                  <p>L</p>
                  <FaTemperatureArrowDown className="text-blue-500"/>
                  <p>42°</p>
                </div>
                <div>
                  <FaAngleRight />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityCard;
