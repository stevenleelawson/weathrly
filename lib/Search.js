import React, { Component } from 'react';
import './styles/Search.scss';
import Trie from '../node_modules/@stevenleelawson/complete-me/lib/Trie.js';
import cityStates from './cityStates.js'
import PropTypes from 'prop-types';

const trie = new Trie();
trie.populate(cityStates.data)


class Search extends Component {
  constructor(props) {
    console.log('search', props);
    super(props);
    this.state = {
      input: '',
      location: '',
      suggestions: []
    };
    this.changeSearchState = this.changeSearchState.bind(this);
  }

  changeSearchState(event) {
    this.setState({ input: event.target.value, location: event.target.value});
    if(event.target.value.length > 2) {
      this.setState({
        suggestions: trie.suggest(event.target.value)
      })
    }
  }

  render () {
    return (
      <form className="input-form">
        <input className="search-bar"
          list="suggestions"
          type="search"
          placeholder="Enter City/Zip here"
          value={this.state.input}
          onChange={(event) => this.changeSearchState(event)}
        />
        <datalist className="complete" id="suggestions">
          {

            this.state.suggestions.map( (suggestion, index) => {
              if(index < 5) {
                return <option value={suggestion}
                              key={index}/>
              }
            })
          }
        </datalist>
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
