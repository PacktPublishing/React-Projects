import React, { Component } from 'react';
import Header from '../components/App/Header';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header logo={logo} />
      </div>
    );
  }
}

export default App;
