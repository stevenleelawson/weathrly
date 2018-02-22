import React from 'react';
import './styles/TenDay.scss'
import Card from './Card.js'

const TenDay = (props) => {
  console.log('tendays',props)
  return (
    <div className="ten-day">
      {
        props.weather &&
        props.weather.tenDayArray.map( (day, index) => {
          console.log('day', day)
          return (
            <Card
              key={index}
              image={day.icon_url}
              hightemp = {day.high.fahrenheit}
              lowtemp = {day.low.fahrenheit}
              date = {day.date.epoch}
            />
          );
        })

      }
    </div>
  )
}

export default TenDay;
