import React, { Component } from 'react';
import Card from './Card';
import './styles/App.scss';

class App extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <div className='app'>
        {/* <h1>taco</h1> */}
        <Card />
      </div>
    )
  }
}
export default App;
