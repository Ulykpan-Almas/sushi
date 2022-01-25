import React from 'react';
import logo from './logo.png';
import './Logo.css';

const Logo = () => (
  <div className='header-content_logo'>
    <div>
      <img src={logo} alt='logo' />
      <span>
        <b>SUSHI STORE</b>
      </span>
    </div>
  </div>
);

export default Logo;