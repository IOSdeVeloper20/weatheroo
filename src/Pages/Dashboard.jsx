import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Body from "../Components/Body";
import HourlyTempCard from "../Components/HourlyTempCard";
import DaysTempCard from "../Components/DaysTempCard";
import ShortData from "../Components/ShortData";
import LineChart from "../Components/LineChart";

const Landing = () => {
  return (
    <div className="flex flex-col items-center gap-6 p-4">
      <Header />

      <div className="w-full">
        <Body />
      </div>

      <div className="w-full">
        <HourlyTempCard />
      </div>

      <div className="w-full flex flex-col gap-4 sm:flex-row sm:gap-6 justify-between">
        <div className="w-full sm:w-1/2">
          <DaysTempCard />
        </div>

        <div className="w-full sm:w-1/2">
          <div className="mb-3">
            <ShortData />
          </div>
          <div>
            <LineChart />
          </div>
        </div>
      </div>

      <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-center mt-4">
        Landing Page
      </h1>

      <button className="bg-pink-500 text-white rounded-full p-4 hover:bg-pink-600 transition-colors duration-300 mt-4">
        <Link to="/">Go to Landing</Link>
      </button>
    </div>
  );
};

export default Landing;
