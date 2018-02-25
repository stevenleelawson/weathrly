import React from 'react';
import './styles/Header.scss';
import Search from './Search';
import PropTypes from 'prop-types';


const Header = (props) => {

  return (
    <div className="header">
      <nav>
        <p className="city-location">{props.stateLocation}</p>
        <Search handleSearch={props.handleSearch}/>
      </nav>
    </div>
  );
};

export default Header;
