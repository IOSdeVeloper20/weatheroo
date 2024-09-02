import React from "react";
import {Link} from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex justify-center text-white bg-gradient-to-b from-gray-700 to-black">
      <h1>Dashboard page</h1>
      <button>
        <Link to={"/"}>Go to landing page</Link>
      </button>
    </div>
  );
};

export default Dashboard;
