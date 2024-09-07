import { baseURL } from "./Constants";

export async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetching error:", error);
    throw error;
  }
}

export const fetchCityWeatherData = async (lat, long) => {
  const formattedURL = `${baseURL}${lat},${long}`;
  return fetchData(formattedURL);
};
