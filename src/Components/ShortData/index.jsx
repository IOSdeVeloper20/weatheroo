import React from "react";
import { FaWind } from "react-icons/fa";
import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";


const ShortData = () => {
  return (
    <div className="rounded-xl bg-white/20 backdrop-blur-lg border border-white/60 p-2">
      <h2 className="font-semibold p-1">Extras</h2>

      <hr className="h-1 mb-1 rounded-full" />


      <div className="flex justify-evenly items-center p-1 bg-white/5 backdrop-blur-lg border border-white/10 shadow-sm rounded-lg">


      <div className="flex flex-col gap-1 mt-2">
            <div className="flex items-center justify-between gap-1 w-full">
              <CiTempHigh className="text-green-700"/>
              <p>Feels Like:</p>
              <p>39°</p>
            </div>

            <div className="flex items-center justify-between w-full">
              <WiHumidity className="text-blue-600"/>
              <p>Humidity:</p>
              <p>39%</p>
            </div>

            <div className="flex items-center justify-between w-full">
              <FaWind className="text-yellow-500"/>
              <p>Wind:</p>
              <p>9 km/h</p>
            </div>

          </div>
      </div>
    </div>
  );
};

export default ShortData;
