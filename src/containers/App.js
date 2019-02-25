import React, { Component } from 'react';
import Profile from './Profile';
import Header from '../components/App/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Profile />
      </div>
    );
  }
}

export default App;
