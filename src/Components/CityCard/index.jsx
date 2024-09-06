import React, { useContext } from "react";
import { TiWeatherDownpour } from "react-icons/ti";
import { weatherContext } from "../../Contexts/WeatherProvider";
import { citiesContext } from "../../Contexts/CitiesProvider";
import {
  FaTemperatureArrowDown,
  FaTemperatureArrowUp,
  FaAngleRight,
} from "react-icons/fa6";
import { fetchData } from "../../Helpers/Networking";
import { baseURL } from "../../Helpers/Constants";

const CityCard = () => {
  const { cities } = useContext(citiesContext);
  const { weather, setWeather } = useContext(weatherContext);
  const cityData = cities.geonames;

  const getCityWeather = async (cityLat, cityLong) => {
    try {
      if (cityLat && cityLong) {
        const cityCoordinates = `${baseURL}${cityLat}${cityLong}`;
        const cityWeather = await fetchData(cityCoordinates);
        setWeather(cityWeather);
        console.log("weather from city card", cityWeather);
      } else {
        console.log("Error, coordinates not available!");
      }
    } catch (error) {
      console.error("Error while fetching city weather", error);
    }
  };

  return (
    <div className="bg-white/20 backdrop-blur-lg border border-white/60 rounded-xl p-2">
      <h2 className="text-lg font-semibold p-2 rounded-t-xl">
        Cities Forecast
      </h2>

      <hr className="h-1 rounded-full" />

      <div className="flex flex-col gap-2 mt-2">
        {cityData.map((city) => (
          <div
            key={city}
            className="flex justify-evenly items-center p-2 bg-white/5 backdrop-blur-lg border border-white/10 shadow-sm rounded-lg">
            <div className="flex flex-wrap justify-between w-full">
              {/* {fetchData(`${baseURL}${city.lat},${city.lng}`)} */}
              <p>{city.name}</p>
              {/*get the weather data for each city */}
              <div className="flex items-center w-full justify-evenly sm:w-3/4">
                {/* <TiWeatherDownpour className="text-2xl mr-2" /> */}
                <img
                  src={getCityWeather(city.lat, city.lng)}
                  alt="city condition"
                />
                <div className="flex items-center gap-1">
                  <p>H</p>
                  <FaTemperatureArrowUp className="text-orange-500" />
                  <p>43°</p>
                </div>
                <p className="p-1">-</p>
                <div className="flex items-center gap-1">
                  <p>L</p>
                  <FaTemperatureArrowDown className="text-blue-500" />
                  <p>42°</p>
                </div>
                <div>
                  <FaAngleRight />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityCard;
