import React, { Component } from 'react';
import Card from './Card';
import './styles/App.scss';
import Welcome from './Welcome';
import SevenHour from './SevenHour';
import CurrentWeather from './CurrentWeather';
import {data} from './MockData';

class App extends Component {
  constructor(){
    super()
  }
  render() {
    return (

      <div className="App">
        {/*<Welcome />*/}
        <CurrentWeather weather={data}/>
        <Card weather={data}/>
        {/*<SevenHour weather={day}/>*/}


      </div>
    )
  }
}

export default App;
