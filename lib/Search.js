import React, { Component } from 'react';
import './styles/Search.scss';
import Trie from '../node_modules/@stevenleelawson/complete-me/lib/Trie.js';

const trie = new Trie();
console.log(trie)

class Search extends Component {
  constructor(props) {
    console.log('search', props);
    super(props);
    this.state = {
      input: '',
      location: ''
    };
    this.changeSearchState = this.changeSearchState.bind(this);
  }

  changeSearchState(event) {
    this.setState({ input: event.target.value, location: event.target.value});
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
            event.preventDefault();
            this.props.handleSearch(this.state.location);
            //take location in the input
            //update the state
            //fetches the data according to location passed in
          }}>
          submit
        </button>
      </form>
    );
  }
}


export default Search;
