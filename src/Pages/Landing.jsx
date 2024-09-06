import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Body from "../Components/Body";
import HourlyTempCard from "../Components/HourlyTempCard";
import DaysTempCard from "../Components/DaysTempCard";
import CityCard from "../Components/CityCard";
import ShortData from "../Components/ShortData";
import { weatherContext } from "../Contexts/WeatherProvider";
import { citiesContext } from "../Contexts/CitiesProvider";

const Landing = () => {
  const { weather } = useContext(weatherContext);
  const { cities } = useContext(citiesContext);

  return (
    <div className="flex flex-col items-center gap-6 p-4 ">
      {weather && <Header />}

      {weather && (
        <div className="w-full">
          <Body />
        </div>
      )}

      {weather && (
        <div className="w-full">
          <HourlyTempCard />
        </div>
      )}

      <div className="w-full flex flex-col gap-4 sm:flex-row sm:gap-6 justify-between">
        {weather && (
          <div className="w-full sm:w-1/2">
            <DaysTempCard />
          </div>
        )}

        <div className="w-full sm:w-1/2">
          {weather && (
            <div className="mb-3">
              <ShortData />
            </div>
          )}

          {cities && (
            <div>
              <CityCard />
            </div>
          )}
        </div>
      </div>

      <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-center mt-4">
        Landing Page
      </h1>

      <button className="bg-pink-500 text-white rounded-full p-4 hover:bg-pink-600 transition-colors duration-300 mt-4">
        <Link to="/dashboard">Go to Dashboard</Link>
      </button>
    </div>
  );
};

export default Landing;
