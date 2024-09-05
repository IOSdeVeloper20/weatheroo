export const APIKey = process.env.REACT_APP_API_KEY;
export const baseURL = `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=${APIKey}&num_of_days=8&tp=3&format=json&q=`;
export const citiesBaseURL = 'http://api.geonames.org/searchJSON?username=ksuhiyp&maxRows=5&style=SHORT&country=';
///tp: Specifies the weather forecast time interval in hours. Options are: 1 hour, 3 hourly, 6 hourly, 12 hourly (day/night) or 24 hourly (day average).
