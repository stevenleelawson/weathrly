import React, { Component } from 'react';
import './styles/Card.scss';


const Card = (props) => {
  console.log('cardprops', props)

  return (
    <div className = "card-container">
      <div className ="card">
        <h2>{props.weather.day}</h2>
        <img src={props.weather.icon}/>
        <p className="card-condition">{props.weather.weather}</p>
        <p className="card-condition">Current Temperature: {props.weather.temperature} </p>
        <p className="card-condition">Low</p>
      </div>
    </div>
  )
}

export default Card;
