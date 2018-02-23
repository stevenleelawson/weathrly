import apiKey from './apiKey'
const root = "http://api.wunderground.com/api/";
import App from './App';

 export const retrieveWeather = (location) => {
   console.log('api', location)
  return fetch(`${root}${apiKey}/conditions/forecast10day/hourly/q/${location}.json`)
}

// export default retrieveWeather;
