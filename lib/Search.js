import React, { Component } from 'react';
import './styles/Search.scss';

class Search extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      location: ''
    }
    this.changeSearchState = this.changeSearchState.bind(this)
  }

  changeSearchState(event) {
    this.setState({ input: event.target.value});
    this.setState({ location: event.target.value});
    console.log('Search input', this.state);
  }

  render () {

    return (
      <form className="input-form">
        <input className="search-bar" 
          type="search" 
          placeholder="Enter City/Zip here" 
          value={this.state.input} 
          onChange={ this.changeSearchState}
        />
        <button className='submit-button' 
          onClick={(event => {

          })}>
          submit
        </button>
      </form>
    )
  }
}


export default Search;
