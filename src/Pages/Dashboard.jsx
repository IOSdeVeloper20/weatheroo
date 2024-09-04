import React from "react";
import { Link } from "react-router-dom";
import DaysTempCard from "../Components/DaysTempCard";
import HourlyTempCard from "../Components/HourlyTempCard";
import CityCard from "../Components/CityCard";
import Body from "../Components/Body";

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-center">
      <h1>Dashboard page</h1>
      <button className="p-3 bg-pink-400">
        <Link to={"/"}>Go to landing page</Link>
      </button>

      <DaysTempCard />
      <br />
      <HourlyTempCard />
      <br />
      <CityCard />
      <br />
      <Body />
    </div>
  );
};

export default Dashboard;
