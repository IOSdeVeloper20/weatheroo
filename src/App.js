import React, { useState } from "react";
import "./App.css";
import Location from "./Services/Location";
import Weather from "./Services/Weather";

function App() {
  const [locationState, setLocationState] = useState("");
  const [weatherState, setWeatherState] = useState("");

  return (
    <div className="App">
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
        <Location setLocation={setLocationState} />
        {console.log("this is location app.js:", locationState.country_name)}
        {locationState && <Weather location={locationState.country_name} setWeather={setWeatherState} />}
        {console.log("this is Weather app.js:", weatherState)}
      </div>
    </div>
  );
}

export default App;
