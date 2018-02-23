import React, { Component } from 'react';
import './styles/Search.scss';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      location: ''
    }
    this.changeSearchState = this.changeSearchState.bind(this)
  }

  changeSearchState(event) {
    this.setState({ input: event.target.value, location: event.target.value});
    console.log('Search input', this.state);
  }

  render () {

    return (
      <form className="input-form">
        <input className="search-bar"
          type="search"
          placeholder="Enter City/Zip here"
          value={this.state.input}
          onChange={(event) => this.changeSearchState(event)}
        />
        <button className='submit-button'
          onClick={(event) => {
            props.handleSearch(this.state.input);
            //take location in the input
            //update the state
            //fetches the data according to location passed in
          }}>
          submit
        </button>
      </form>
    )
  }
}


export default Search;
