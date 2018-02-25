import apiKey from './apiKey';
// import App from './App';

const root = "http://api.wunderground.com/api/";

const retrieveWeather = (location) => {
  // console.log('api', location);
  return fetch(`${root}${apiKey}/conditions/forecast10day/hourly/q/${location}.json`);
};

export default retrieveWeather;
