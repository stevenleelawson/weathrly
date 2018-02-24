import React from 'react';
import './styles/CurrentWeather.scss';
import moment from 'moment';


const CurrentWeather = (props) => {
  console.log('currentweather', props.weather.icon);

  return (
    <div className="current-weather">
      <div className="weather">
        <p className="days">{props.weather.day}</p>
        <p className="date">{props.weather.date}</p>
        <p className="current-forcast">{props.weather.weather}</p>
        <img src={props.weather.icon}/>
        <h3 className="current-temp">Current Temperature: {props.weather.temperature}&deg;</h3>
        <p className="summary">{props.weather.summary}</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
