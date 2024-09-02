import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Body from "../Components/Body";
import HourlyTempCard from "../Components/HourlyTempCard";
import DaysTempCard from "../Components/DaysTempCard";
import CityCard from "../Components/CityCard";

const Landing = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <Header />
      <Body />
      <HourlyTempCard />
      <DaysTempCard />
      <CityCard />
      <h1>Landing page</h1>
      <button className="bg-pink-500 rounded-full p-4">
        <Link to={"/dashboard"}>Go to Dahsboard</Link>
      </button>
    </div>
  );
};

export default Landing;
