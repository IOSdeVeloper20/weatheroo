import { useContext, useEffect } from "react";
import { fetchData } from "../Helpers/Networking";
import { citiesBaseURL } from "../Helpers/Constants";
import { locationContext } from "../Contexts/LocationProvider";
import { citiesContext } from "../Contexts/CitiesProvider";

// return the cities by country code
const Cities = () => {
  const { location } = useContext(locationContext);
  const { setCities } = useContext(citiesContext);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        //check for location first
        if (location) {
          const citiesURL = `${citiesBaseURL}${location.country}`;
          const citiesData = await fetchData(citiesURL);
          setCities(citiesData);

          console.log("Cities:", citiesData);
        } else {
          return "Error, location not available!";
        }
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, [location, setCities]);
};

export default Cities;
