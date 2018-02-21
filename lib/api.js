const root = "http://api.wunderground.com/api/";

 export const retrieveWeather = () => {
  return fetch(`${root}402c02ef4840fe36/conditions/q/CO/Denver.json`)
}

