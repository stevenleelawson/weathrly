import React, { Component } from 'react';
import './styles/Card.scss';
import moment from 'moment';
import PropTypes from 'prop-types';


const Card = (props) => {
  return (
    <div className = "card-container">
      <div className ="card">
        <h2>{moment.unix(props.date).format('dddd')}</h2>
        <img src={props.image}/>
        <p className="card-condition">High: {props.hightemp} </p>
        <p className="card-condition">Low:{props.lowtemp} </p>
      </div>
    </div>
  );
};

export default Card;
