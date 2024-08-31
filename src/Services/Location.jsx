import { useEffect } from "react";
import { fetchData } from "../Helpers/Networking";

const Location = ({setLocation}) => {
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const location = await fetchData("https://ipapi.co/json");
        console.log("location data in location.jsx:", location);
        setLocation(location);
      } catch (error) {
        console.error("Error while getting location:", error);
      }
    };
    fetchLocation();
  }, [setLocation]);
  return null;
};

export default Location;
