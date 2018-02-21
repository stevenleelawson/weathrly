import React, { Component } from 'react';
import Card from './Card';
import './styles/App.scss';
import Welcome from './Welcome';
import SevenHour from './SevenHour';
import CurrentWeather from './CurrentWeather';
// import { data } from './MockData';
import  { retrieveWeather } from './api.js';
import CurrentWeatherDataCleaner from './CurrentWeatherDataCleaner';

class App extends Component {
  constructor(){
    super()
    this.state = {
      weatherResults: {}
    }
  }

  componentDidMount() {
    retrieveWeather()
      .then(response => response.json())
      .then(weatherConditions => {
        this.setState({
          weatherResults: CurrentWeatherDataCleaner(weatherConditions)
        })
        console.log('state', this.state.weatherResults)
      })
      .catch(error => console.log({error}));
  }
  render() {
    return (

      <div className="App">
        {/*<Welcome />*/}
        <CurrentWeather weather={this.state.weatherResults}/>
        <div className="mult-card-test">

          {/*<Card weather={data}/>*/}
          {/*<Card weather={data}/>*/}
          {/*<Card weather={data}/>*/}
          {/*<Card weather={data}/>*/}
          {/*<Card weather={data}/>*/}
          {/*<Card weather={data}/>*/}
          {/*<Card weather={data}/>*/}
          {/*<Card weather={data}/>*/}
        </div>
        {/*<SevenHour weather={day}/>*/}


      </div>

    )
  }
}

export default App;
