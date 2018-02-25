import React from 'react';
import './styles/TenDay.scss';
import Card from './Card.js';
import PropTypes from 'prop-types';

const TenDay = (props) => {

  return (
    <div className="ten-day">
      {
        props.weather &&
        props.weather.tenDayArray.map( (day, index) => {
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
  );
};

export default TenDay;

TenDay.propTypes = {
  weather: PropTypes.object,
  tenDayArray: PropTypes.object
};