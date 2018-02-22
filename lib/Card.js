import React, { Component } from 'react';
import './styles/Card.scss';


const Card = (props) => {
  console.log('cardprops', props)

  return (
    <div className = "card-container">
      <div className ="card">
        <h2>{props.date}</h2>
        <img src={props.image}/>
        <p className="card-condition">High: {props.hightemp} </p>
        <p className="card-condition">Low:{props.lowtemp} </p>
      </div>
    </div>
  )
}

export default Card;
