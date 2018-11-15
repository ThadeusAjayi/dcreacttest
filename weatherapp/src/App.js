import React, { Component } from 'react';
import './App.css';
import input from './flux/Action';

class App extends Component {

  state = {

  }

  componentDidMount () {
    input('metric');
  }

  _handleUnitChange = () => {

  }

  render() {
    console.log()
    return (
      <div className="app">
      <div className="content"></div>
        
      </div>
    );
  }
}

export default App;
