// import React, { useContext } from "react";
// import { BsFillCalendarDateFill } from "react-icons/bs";
import { IoMdClock } from "react-icons/io";
// import { weatherContext } from "../../Contexts/WeatherProvider";
import { getCurrentDayAndTime } from "../../Helpers/Date";

const Header = () => {
  // const { weather } = useContext(weatherContext);

  const locale = "en-US";
  const { dayOfTheWeek, time } = getCurrentDayAndTime(locale);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full text-white">
      <div className="text-center font-bold">
        <h1 className="text-2xl sm:text-3xl text-white">Weatheroo</h1>
      </div>

      <div className="flex items-center gap-2">
        <IoMdClock className="text-gray-200" />
        <p>
          {dayOfTheWeek} {time}
        </p>
      </div>

      {/* <div className="flex items-center gap-2">
        <p>{weather.data.weather[0].date}</p>
        <BsFillCalendarDateFill className="text-gray-200"/>
      </div> */}
    </div>
  );
};

export default Header;
