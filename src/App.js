import React from "react";
import "./App.css";
// import Location from "./Services/Location";
// import Weather from "./Services/Weather";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";

function App() {
  // const [locationState, setLocationState] = useState("");
  // const [weatherState, setWeatherState] = useState("");

  return (
    // <div className="App">
    //   <div className="flex justify-center items-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
    //     <Location setLocation={setLocationState} />
    //     {console.log("this is location app.js:", locationState.country_name)}
    //     {locationState && <Weather location={locationState.country_name} setWeather={setWeatherState} />}
    //     {console.log("this is Weather app.js:", weatherState)}
    //   </div>
    // </div>

    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
