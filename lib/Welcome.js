import React from 'react';
import './styles/Welcome.scss';
import Search from './Search';

const Welcome = () => {
  return (
    <div className="welcome-screen">
      <h1 className="welcome-title">Welcome</h1>
      <Search />
      <button className="welcome-submit-button">Submit</button>
      <h2 className="welcome-ui">Please Enter City/Zip</h2>
    </div>
  )
}

export default Welcome;