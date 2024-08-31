import { useEffect } from "react";
import { fetchData } from "../Helpers/Networking";
import { APIKey, baseURL } from "../Helpers/Constants";

const Weather = ({ location, setWeather }) => {
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const weatherURL = `${baseURL}${location}`;
        const weatherData = await fetchData(weatherURL);
        console.log("weather data in weather.jsx:", weatherData);
        console.log("api key :", APIKey);
        setWeather(weatherData);
      } catch (error) {
        console.error("Error while fetching weather:", error);
      }
    };
    if (location) {
      fetchWeather();
    }
  }, [location, setWeather]);
};

export default Weather;
