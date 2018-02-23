import apiKey from './apiKey'
const root = "http://api.wunderground.com/api/";

 export const retrieveWeather = (city, state) => {
  return fetch(`${root}${apiKey}/conditions/forecast10day/hourly/q/CO/Denver.json`)
}

// export default retrieveWeather;
