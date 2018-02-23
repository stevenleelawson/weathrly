import React from 'react';
import HourCard from './HourCard.js';
import './styles/SevenHour.scss';

const SevenHour = (props) => {
  console.log('sevenhour',props)
  // const {conditions, low, high} = props.weather
  return (
    <div className="seven-hour">
      {
        props.weather &&
        props.weather.sevenHourArray.slice(0,7).map( (hour, index) => {
          return (
            <HourCard
              key={index}
              time={hour.FCTTIME.civil}
              image={hour.icon_url}
              temp={hour.temp.english}
            />
          )
        })
      }
    </div>
  )
}

export default SevenHour;
