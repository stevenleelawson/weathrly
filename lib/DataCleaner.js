import moment from 'moment';

export const DataCleaner = (data) => {
  // console.log('dataclaen', data);
  return {
    location: data.current_observation.display_location.full,
    icon: data.current_observation.icon_url,
    temperature: data.current_observation.temp_f,
    weather: data.current_observation.weather,
    date: moment.unix(data.current_observation.local_epoch)
      .format('MMMM Do YYYY'),
    day: moment.unix(data.current_observation.local_epoch).format('dddd'),
    low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    tenDayArray: data.forecast.simpleforecast.forecastday,
    sevenHourArray: data.hourly_forecast,
    summary: data.forecast.txt_forecast.forecastday[0].fcttext
  };
};

