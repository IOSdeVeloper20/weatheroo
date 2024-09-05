import React, { createContext, useState } from "react";

export const citiesContext = createContext();

export const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState("");

  return (
    <citiesContext.Provider value={{ cities, setCities }}>
      {children}
    </citiesContext.Provider>
  );
};
