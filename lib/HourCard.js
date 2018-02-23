import React, { Component } from 'react';
import './styles/HourCard.scss';
import moment from 'moment';

const HourCard = (props) => {
  return (
    <div className = "hour-card-container">
      <div className ="hour-card">
        <h2>{props.time}</h2>
        <img src={props.image}/>
        <p className="hour-card-condition"> {props.temp}&deg;</p>
      </div>
    </div>
  )
}
export default HourCard;
