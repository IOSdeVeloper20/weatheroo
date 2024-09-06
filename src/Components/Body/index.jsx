import React, { useContext } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
// import { TiWeatherDownpour } from "react-icons/ti";
import { FaTemperatureLow, FaTemperatureHigh } from "react-icons/fa";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { locationContext } from "../../Contexts/LocationProvider";
import { weatherContext } from "../../Contexts/WeatherProvider";

const Body = () => {
  const { location } = useContext(locationContext);
  const { weather } = useContext(weatherContext);

  return (
    <div className="flex flex-col justify-center items-center p-2 gap-4 bg-white/20 backdrop-blur-lg border border-white/60 rounded-xl">
      <div className="flex items-center gap-2">
        <MdOutlineLocationOn />
        <p>
          {location.city}, {location.country_name}
        </p>
      </div>
      {/* <TiWeatherDownpour className="text-7xl bg-white/10 backdrop-blur-lg border border-white/10 p-1 rounded-full" /> */}
      <img src={weather.data.current_condition[0].weatherIconUrl[0].value} alt="condition" className="rounded-full text-xl" />

      <h3 className="text-3xl m-4">
        {weather.data.current_condition[0].weatherDesc[0].value}
      </h3>
      <h1 className="text-5xl sm:text-7xl">
        {weather.data.current_condition[0].temp_C}C°
      </h1>
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-9 rounded-lg">
        <div className="flex items-center gap-2">
          <FiSunrise />
          <p>Rise: {weather.data.weather[0].astronomy[0].sunrise}</p>
        </div>

        <div className="flex items-center gap-2">
          <FiSunset />
          <p>Set: {weather.data.weather[0].astronomy[0].sunset}</p>
        </div>

        <div className="flex items-center gap-2">
          <FaTemperatureHigh />
          <p>High: {weather.data.weather[0].maxtempC}°C</p>
        </div>

        <div className="flex items-center gap-2">
          <FaTemperatureLow />
          <p>Low: {weather.data.weather[0].mintempC}°C</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
