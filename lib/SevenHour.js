import React from 'react';
import './styles/SevenHour.scss';

const SevenHour = (props) => {
  // console.log(props)
  const {conditions, low, high} = props.weather
  return (
    <div>
      <h1>{conditions}</h1>
      <h2>Low Temp: {low.celsius}</h2>
      <h2>High Temp: {high.celsius}</h2>
    </div>
  )
}

export default SevenHour;