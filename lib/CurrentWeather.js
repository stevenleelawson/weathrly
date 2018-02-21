import React from 'react';
import './styles/CurrentWeather.scss';
// import {data} from './MockData';


const CurrentWeather = (props) => {
  console.log('currentweateer',props);
  const {current_observation} = props.weather

  return (
    <div className="current-weather">
      <div className="weather">
        <p className="days">{current_observation.display_location.full}</p>
        <p className="current-forcast">{current_observation.icon}</p>
        <img src={current_observation.icon_url}/>
        <h3>Hour</h3>
        <h3 className="current-temp">Current Temperature: {current_observation.temp_f}</h3>
      </div>
    </div>
  )
}

export default CurrentWeather;
