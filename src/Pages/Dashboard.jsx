import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import DashHourlyTempCard from "../Components/DashHourlyTempCard";
import DashDaysTempCard from "../Components/DashDaysTempCard";
import DashShortData from "../Components/DashShortData";
import LineChart from "../Components/LineChart";
import DashBody from "../Components/DashBody";

const Dashboard = () => {
  const cityNameLocation = useLocation();
  const { cityName, cityWeather } = cityNameLocation.state || {};

  return (
    <div className="flex flex-col items-center gap-6 p-4">
      {cityWeather && <Header />}

      {cityWeather && (
        <div className="w-full">
          <DashBody weather={cityWeather} name={cityName} />
        </div>
      )}

      {cityWeather && (
        <div className="w-full">
          <DashHourlyTempCard weather={cityWeather} name={cityName} />
        </div>
      )}

      {cityWeather && (
        <div className="w-full flex flex-col gap-4 sm:flex-row sm:gap-6 justify-between">
          <div className="w-full sm:w-1/2">
            <DashDaysTempCard weather={cityWeather} />
          </div>

          <div className="w-full sm:w-1/2">
            <div className="mb-3">
              <DashShortData weather={cityWeather} />
            </div>
            <div>
              <LineChart />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
