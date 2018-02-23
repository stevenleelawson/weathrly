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
    this.setLocation = this.setLocation.bind(this);
    this.setWeather = this.setWeather.bind(this);
  }
  setWeather(input) {
    // this.setLocation(location)
    console.log('retrieve', input)
    retrieveWeather(input)
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

  setLocation(input) {
    this.setState({
      location: input
    })
    this.setWeather(input)
    //new fetch call with current location from search
  }

  componentDidMount() {
    if(this.location) {
      this.setWeather(location);
    }
  }

  render() {
    return (

      <div className="App">
        <Header handleSearch={this.setLocation}
                stateLocation={this.state.location}
        />
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
