import React from 'react';
import './App.css';
import Weather from '../src/weather/weather';
import WeatherDetail from '../src/weather/weather-detail/weather-detail';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Weather} />
      <Route path="/weather-detail" component={WeatherDetail} />
    </div>
  </Router>
)

export default App;
