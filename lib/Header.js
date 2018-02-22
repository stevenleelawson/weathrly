import React from 'react';
import './styles/Header.scss';
import Search from './Search';

const Header = () => {


  return (
    <div className="header">
      <nav>
        <p className="city-location">City Here</p>
        <Search />
      </nav>
    </div>
  )
}

export default Header;