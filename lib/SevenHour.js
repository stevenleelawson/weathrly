import React from 'react';
import HourCard from './HourCard.js';
import './styles/SevenHour.scss';
import PropTypes from 'prop-types';

const SevenHour = (props) => {

  return (
    <div className="seven-hour">
      {
        props.weather &&
        props.weather.sevenHourArray.slice(0, 7).map( (hour, index) => {
          return (
            <HourCard
              key={index}
              time={hour.FCTTIME.civil}
              image={hour.icon_url}
              temp={hour.temp.english}
            />
          );
        })
      }
    </div>
  );
};

export default SevenHour;

SevenHour.propTypes = {
  weather: PropTypes.object,
  sevenHourArray: PropTypes.object
};
