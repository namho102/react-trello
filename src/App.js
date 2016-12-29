import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';

import AddCard from './components/AddCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Trello-like app</h2>
        </div>
        <div className="App-body">
          <AddCard />
        </div>
      </div>
    );
  }

}

export default App;
