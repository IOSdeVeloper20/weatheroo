import React, { useCallback, useContext, useEffect, useState } from "react";
import { citiesContext } from "../../Contexts/CitiesProvider";
import { FaTemperatureArrowDown, FaTemperatureArrowUp } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { fetchCityWeatherData } from "../../Helpers/Networking";
import { Link } from "react-router-dom";

const CityCard = () => {
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);
  const [cityWeatherState, setCityWeatherState] = useState([]);

  const { cities } = useContext(citiesContext);
  const cityData = cities.geonames;

  // useCallback hook: memorize the (fetchAllWeatherData) function to prevent unnecessary re-creation.
  const fetchAllWeatherData = useCallback(async () => {
    const dataFromWeatherAPI = await Promise.all(
      latitude.map(async (lat, index) => {
        const lng = longitude[index];
        if (lat !== undefined && lng !== undefined) {
          try {
            const cityWeatherFetchedData = await fetchCityWeatherData(lat, lng);
            return { ...cityWeatherFetchedData };
          } catch (error) {
            console.error("Error fetching weather data in city Card:", error);
            return null;
          }
        }
        return null;
      })
    );
    setCityWeatherState(dataFromWeatherAPI.filter((data) => data !== null));
  }, [latitude, longitude]);

  useEffect(() => {
    const collectCoords = () => {
      const newLatitudes = cityData.map((city) => city.lat);
      const newLongitudes = cityData.map((city) => city.lng);
      setLatitude(newLatitudes);
      setLongitude(newLongitudes);
    };

    collectCoords();
  }, [cityData]);

  useEffect(() => {
    if (latitude.length > 0 && longitude.length > 0) {
      fetchAllWeatherData();
    }
  }, [latitude, longitude, fetchAllWeatherData]);

  return (
    <div className="bg-white/20 backdrop-blur-lg border border-white/60 rounded-xl p-2">
      <h2 className="text-lg font-semibold p-2 rounded-t-xl">
        Cities Forecast
      </h2>
      <hr className="h-1 rounded-full" />
      <div className="flex flex-col gap-2 mt-2">
        {cityData.map((city, index) => {
          const cityWeather = cityWeatherState[index];
          if (cityWeather) {
            return (
              <Link
                to="/Dashboard"
                state={{cityWeather, cityName: city.name}}
                key={index}
                className="flex justify-evenly items-center p-2 bg-white/5 backdrop-blur-lg border border-white/10 shadow-sm rounded-lg hover:bg-gray-200">
                <div className="flex flex-wrap justify-between w-full">
                  <p>{city.name}</p>
                  <div className="flex items-center pt-2 w-full justify-evenly sm:w-3/4 sm:pt-0">
                    <img
                      src={
                        cityWeather.data.weather[0].hourly[0].weatherIconUrl[0]
                          .value
                      }
                      alt="conditon img"
                      className="rounded-full size-8"
                    />
                    <div className="flex items-center gap-1">
                      <p>H</p>
                      <FaTemperatureArrowUp className="text-orange-500" />
                      <p>{cityWeather.data.weather[0].maxtempC}°</p>
                    </div>
                    <p className="p-1">-</p>
                    <div className="flex items-center gap-1">
                      <p>L</p>
                      <FaTemperatureArrowDown className="text-blue-500" />
                      <p>{cityWeather.data.weather[0].mintempC}°</p>
                    </div>
                    <div>
                      <FaAngleRight />
                    </div>
                  </div>
                </div>
              </Link>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default CityCard;
