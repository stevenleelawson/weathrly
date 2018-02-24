import React, { Component } from 'react';
import moment from 'moment';
import './styles/HourCard.scss';

const HourCard = (props) => {

  return (
    <div className = "hour-card-container">
      <div className ="hour-card">
        <h2>{props.time}</h2>
        <img src={props.image}/>
        <p className="hour-card-condition"> {props.temp}&deg;</p>
      </div>
    </div>
  );
};
export default HourCard;
