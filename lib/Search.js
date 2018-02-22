import React from 'react';
import './styles/Search.scss';

class Search extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      location: ''
    }
  }

  render () {
    return (
      <form className="input-form">
        <input className="search-bar" type="search" placeholder="Enter City/Zip here"/>
        <button>
          submit
        </button>
      </form>
    )
  }
}


export default Search;
