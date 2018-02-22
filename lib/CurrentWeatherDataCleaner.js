

export const CurrentWeatherDataCleaner = (data) => {
  console.log(data)
  return {
    location: data.current_observation.display_location.full,
    icon: data.current_observation.icon_url,
    temperature: data.current_observation.temp_f,
    weather: data.current_observation.weather,
  
  }
}
