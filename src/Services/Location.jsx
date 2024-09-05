import { useContext, useEffect } from "react";
import { fetchData } from "../Helpers/Networking";
import { locationContext } from "../Contexts/LocationProvider";

// return the location (country name, country code)
const Location = () => {
  const { setLocation } = useContext(locationContext);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const locationData = await fetchData("https://ipapi.co/json");
        setLocation(locationData);

        console.log("location data in location file:", locationData);
      } catch (error) {
        console.error("Error while getting location:", error);
      }
    };
    fetchLocation();
  }, [setLocation]);
  return null;
};

export default Location;

// useEffect(() => {
//   const fetchLocation = async () => {
//     try {
//       const location = await fetchData("https://ipapi.co/json");
//       console.log("location data in location.jsx:", location);
//       setLocation(location);
//     } catch (error) {
//       console.error("Error while getting location:", error);
//     }
//   };
//   fetchLocation();
// }, [setLocation]);
// return null;
