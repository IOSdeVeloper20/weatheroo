import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CitiesProvider } from "./Contexts/CitiesProvider";
import { WeatherProvider } from "./Contexts/WeatherProvider";
import { LocationProvider } from "./Contexts/LocationProvider";
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";
import Location from "./Services/Location";
import Weather from "./Services/Weather";
import Cities from "./Services/Cities";

function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <CitiesProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
            <Location />
            <Weather />
            <Cities />
          </Router>
        </CitiesProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default App;

// import Location from "./Services/Location";
// import Weather from "./Services/Weather";

// const [locationState, setLocationState] = useState("");
// const [weatherState, setWeatherState] = useState("");

// <div className="App">
//   <div className="flex justify-center items-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
//     <Location setLocation={setLocationState} />
//     {console.log("this is location app.js:", locationState.country_name)}
//     {locationState && <Weather location={locationState.country_name} setWeather={setWeatherState} />}
//     {console.log("this is Weather app.js:", weatherState)}
//   </div>
// </div>
