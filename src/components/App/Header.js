import React from 'react';
import logo from '../../GitHub-Mark-Light-64px.png';
import './Header.css';

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      My Github Portfolio
    </p>
  </header>
);

export default Header;
