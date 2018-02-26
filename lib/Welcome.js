import React from 'react';
import './styles/Welcome.scss';
import Search from './Search';
import PropTypes from 'prop-types';


const Welcome = (props) => {
  return (
    <div className="welcome-screen">
      <h1 className="weathrly">Weathrly</h1>
      <Search
        handleSearch = {props.handleSearch}
        error= {props.error}
      />
      <h2 className="welcome-ui">Please Enter City/State/Zip Above</h2>
    </div>
  );
};

export default Welcome;

Welcome.propTypes = {
  handleSearch: PropTypes.func
};
