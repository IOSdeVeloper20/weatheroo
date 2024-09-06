import React, { useContext } from "react";
import { SlCalender } from "react-icons/sl";
import { AiOutlineClockCircle } from "react-icons/ai";
import { weatherContext } from "../../Contexts/WeatherProvider";

const Header = () => {
  const { weather } = useContext(weatherContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full text-white">
      <div className="text-center font-bold">
        <h1 className="text-2xl sm:text-3xl text-white">Weatheroo</h1>
      </div>

      <div className="flex items-center gap-2">
        <AiOutlineClockCircle />
        <p>Local Time: 3:08 AM</p>
      </div>

      <div className="flex items-center gap-1">
        <p>{weather.data.weather[0].date}</p>
        <SlCalender />
      </div>

    </div>
  );
};

export default Header;
