import React, { Component } from 'react';
import Card from './Card';
import './styles/App.scss';
import Welcome from './Welcome';

class App extends Component {
  constructor(){
    super()
  }
  render() {
    return (

      <div className="App">
        <Welcome />

      </div>
    )
  }
}

export default App;
