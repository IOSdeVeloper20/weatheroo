import React, { createContext, useState } from "react";

export const weatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState("");

  return (
    <weatherContext.Provider value={{ weather, setWeather }}>
      {children}
    </weatherContext.Provider>
  );
};
