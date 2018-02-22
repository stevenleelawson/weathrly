import moment from 'moment';

export const CurrentWeatherDataCleaner = (data) => {
  console.log(data)
  return {
    location: data.current_observation.display_location.full,
    icon: data.current_observation.icon_url,
    temperature: data.current_observation.temp_f,
    weather: data.current_observation.weather,
    date: moment.unix(data.current_observation.local_epoch).format('MMMM Do YYYY'),
    day: moment.unix(data.current_observation.local_epoch).format('dddd')
  }
}
