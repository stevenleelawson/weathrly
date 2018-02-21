import React, { Component } from 'react';
import './styles/Card.scss';
import {data} from './MockData';
import {day} from './OneDayMockData';

const Card = (props) => {
  console.log('cardprops', props)
  const {conditions, low, high, current_observation} = props.weather;
  console.log('card',props.weather.current_observation.weather)
  return (
    <div className = "card-container">
      <div className ="card">
        <h2>Tuesday</h2>
        <img src={current_observation.icon_url}/>
        <p className="card-condition">{current_observation.weather}</p>
        <p className="card-condition">Current Temperature: High </p>
        <p className="card-condition">Low</p>
      </div>
    </div>
  )
}

export default Card;
