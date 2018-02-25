import React, { Component } from 'react';
import './styles/App.scss';
import Welcome from './Welcome';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import CurrentWeather from './CurrentWeather';
import Header from './Header';
import retrieveWeather from './api.js';
import { DataCleaner } from './DataCleaner';

class App extends Component {
  constructor () {
    super();
    this.state = {
      weatherResults: null,
      location: '',
      error: false
    };
    this.setLocation = this.setLocation.bind(this);
    this.setWeather = this.setWeather.bind(this);
    this.setToLocal = this.setToLocal.bind(this);
  }

  setWeather(input) {
    retrieveWeather(input)
      .then(response => response.json())
      .then(weatherConditions => {
        if(weatherConditions.forecast || localStorage.length === 0) {
          this.setState({
            weatherResults: DataCleaner(weatherConditions),
            error: false
          });

        } else {
          this.setState({
            error: true
          })
        }
        // console.log('weathercond', weatherConditions);
      })
      .catch(error => console.log({error}));
    this.setToLocal();
  }

  setToLocal() {
    setTimeout(() => {
      localStorage.setItem('location', JSON.stringify(this.state.location))
    }, 500);
  }

  setLocation(input) {
    this.setState({ location: input });
    this.setWeather(input)
  }

  componentDidMount() {
    let storedLocation = localStorage.getItem('location');

    let parsedLocation = JSON.parse(storedLocation);

    this.setLocation(parsedLocation);
    if (this.location) {
      this.setWeather(location);
    }
  }

  render() {
    return (

      <div className="App">
        {
          this.state.weatherResults &&
          <Header handleSearch={this.setLocation}
            stateLocation={this.state.location}
            localStorage={this.setToLocal}
            error={this.state.error}
          />
        }
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
        {
          !this.state.weatherResults &&
          <Welcome
            handleSearch={this.setLocation}
            stateLocation={this.state.location}
            localStorage={this.setToLocal}
            error={this.state.error}
          />
      }
      </div>
    );
  }
}

export default App;
