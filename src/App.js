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
          </Router>
          <Location />
          <Weather />
          <Cities />
        </CitiesProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default App;