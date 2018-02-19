import React, { Component } from 'react';
import './styles/Card.scss';
import {data} from './MockData';
// import {day} from './OneDayMockData';
console.log('data', data);

const Card = (props) => {
  console.log('props', props);
  const {conditions, low, high} = props.weather;

  return (
    <div className = "card-container">
      <h1>Denver, CO</h1>
      <div className ="card">
        <p>Current Day</p>
        <img/>
        <h2>Current Condition: {conditions}</h2>
        <h2>Current Temperature: High {high.celsius}</h2>
        <h2>Low {low.celsius}</h2>
      </div>
    </div>
  )
}

export default Card;
