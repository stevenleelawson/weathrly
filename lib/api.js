import apiKey from './apiKey';

const root = "http://api.wunderground.com/api/";

console.log('key', apiKey)

 export const retrieveWeather = () => {
  return fetch(`${root}${apiKey}/conditions/q/CO/Denver.json`)
}

// export default retrieveWeather;
