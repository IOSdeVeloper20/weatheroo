import { useContext, useEffect } from "react";
import { fetchData } from "../Helpers/Networking";
import { baseURL } from "../Helpers/Constants";
import { weatherContext } from "../Contexts/WeatherProvider";
import { locationContext } from "../Contexts/LocationProvider";

// return weather by country name
const Weather = () => {
  const { setWeather } = useContext(weatherContext);
  const { location } = useContext(locationContext);
  //i need the location from location context
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        //check for location first
        if (location) {
          const weatherURL = `${baseURL}${location.country_name}`;
          const weatherData = await fetchData(weatherURL);
          setWeather(weatherData);
          console.log("weather data from weather file:", weatherData);
        } else {
          console.log("Error, location not available!");
        }
      } catch (error) {
        console.error("Error while fetching weather:", error);
      }
    };
    fetchWeather();
  }, [location, setWeather]);
};

export default Weather;

// useEffect(() => {
//   const fetchWeather = async () => {
//     try {
//       const weatherURL = `${baseURL}${location}`;
//       const weatherData = await fetchData(weatherURL);
//       console.log("weather data in weather.jsx:", weatherData);
//       console.log("api key :", APIKey);
//       setWeather(weatherData);
//     } catch (error) {
//       console.error("Error while fetching weather:", error);
//     }
//   };
//   if (location) {
//     fetchWeather();
//   }
// }, [location, setWeather]);
