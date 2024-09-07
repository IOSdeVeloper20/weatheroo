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
        } else {
        }
      } catch (error) {
        console.error("Error while fetching weather:", error);
      }
    };
    fetchWeather();
  }, [location, setWeather]);
};

export default Weather;
