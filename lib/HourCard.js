import React from 'react';
import './styles/HourCard.scss';
import PropTypes from 'prop-types';


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

HourCard.propTypes = {
  time: PropTypes.string,
  image: PropTypes.string,
  temp: PropTypes.string
};
