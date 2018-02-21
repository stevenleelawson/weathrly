import React, { Component } from 'react';
import './styles/Card.scss';
import {data} from './MockData';
// import {day} from './OneDayMockData';

const Card = (props) => {
  const {conditions, low, high, current_observation} = props.weather;

  return (
    <div className = "card-container">
      <div className ="card">
        <p>Tuesday</p>
        <img src={current_observation.icon_url}/>
        <h2>Current Condition:</h2>
        <h2>Current Temperature: High </h2>
        <h2>Low</h2>
      </div>
    </div>
  )
}

export default Card;
