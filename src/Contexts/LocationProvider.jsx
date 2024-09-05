import React, { createContext, useState } from "react";

export const locationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState("");

  return (
    <locationContext.Provider value={{ location, setLocation }}>
      {children}
    </locationContext.Provider>
  );
};
