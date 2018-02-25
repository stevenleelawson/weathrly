import React from 'react';
import './styles/HourCard.scss';
import PropTypes from 'prop-types';

const HourCard = (props) => {

  return (
    <div className = "hour-card-container">
      <div className ="hour-card">
        <h4>{props.time}</h4>
        <img src={props.image} className="hour-image"/>
        <p className="hour-card-condition"> {props.temp}&deg;</p>
      </div>
    </div>
  );
};

export default HourCard;

HourCard.propTypes = {
  time: PropTypes.string,
  image: PropTypes.string,
  temp: PropTypes.string
};
