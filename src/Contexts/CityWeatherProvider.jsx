import React, { createContext, useState } from "react";

export const citiesWeatherContext = createContext();

export const CitiesWeatherProvider = ({ children }) => {
  const [cityWeather, setCityWeather] = useState("");

  return (
    <citiesContext.Provider value={{ cityWeather, setCityWeather }}>
      {children}
    </citiesContext.Provider>
  );
};
