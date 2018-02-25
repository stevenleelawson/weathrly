import React from 'react';
import './styles/Header.scss';
import Search from './Search';
import PropTypes from 'prop-types';

const Header = (props) => {
  console.log('header',props)
  return (
    <div className="header">
      <nav>
        <p className="city-location">{props.stateLocation}</p>
        <Search
          handleSearch={props.handleSearch}
          error={props.error}
        />
      </nav>
    </div>
  );
};

export default Header;

Header.propTypes = {
  stateLocation: PropTypes.string,
  handleSearch: PropTypes.func
};
