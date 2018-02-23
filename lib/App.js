import React, { Component } from 'react';
import Card from './Card';
import './styles/App.scss';
import Welcome from './Welcome';
import SevenHour from './SevenHour';
import TenDay from './TenDay'
import CurrentWeather from './CurrentWeather';
import Header from './Header';
import  { retrieveWeather } from './api.js';
import { DataCleaner } from './DataCleaner';

class App extends Component {
  constructor(){
    super()
    this.state = {
      weatherResults: null,
      location: ''
    }
  }

  componentDidMount() {
    retrieveWeather()
      .then(response => response.json())
      .then(weatherConditions => {
        console.log('weathercond', weatherConditions)
        this.setState({
          weatherResults: DataCleaner(weatherConditions)
        })
        // console.log('state', this.state.weatherResults)
      })
      .catch(error => console.log({error}));
  }

  render() {
    return (

      <div className="App">
        <Header />
        {console.log('state', this.state.weatherResults)}
        {
          this.state.weatherResults &&
          <CurrentWeather weather={this.state.weatherResults}/>
        }
        {
          this.state.weatherResults &&
          <SevenHour
            weather={this.state.weatherResults}/>
          }
        {
          this.state.weatherResults &&
          <TenDay
            weather={this.state.weatherResults}/>
        }

      </div>

    )
  }
}

export default App;
