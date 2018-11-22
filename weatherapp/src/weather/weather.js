import React, { Component } from 'react';
import './weather.css';
import input from '../flux/Action';
import CONSTANTS from '../Constants';
import WeatherDetail from './weather-detail/weather-detail';

export default class Weather extends Component {

  state = {
    openWeatherData: null,
    timeNow: () => {
      let d = new Date(Date.now());
      return [d.getDate(), d.getMonth() + 1, d.getFullYear()].join('/');
    },
    celcius: true,
    redirect: false,

  }

  _initializeWeather = async () => {
    const openWeatherData = await input('metric');
    this.setState({ openWeatherData })
  }

  componentWillMount() {
    this._initializeWeather();
  }

  _handleUnitChange = async () => {
    const openWeatherData = await input(this.state.celcius ? "imperial" : "metric");
    this.setState((prevState) => ({ openWeatherData , celcius: !prevState.celcius }));
  }

  _showDetail = () => {
    console.log("detail")
    this.props.history.push({ pathname : '/weather-detail', state : { openWeatherdata: this.state.openWeatherData}});
  }

  render() {
    if (this.state.openWeatherData == null) return <div>Loading data...</div>
    return (
      <div className="app">
        <div className="content">

          <div className="temp">
            <p>
              <input className="option" type="checkbox" value={!this.state.celcius} onChange={this._handleUnitChange} />
              {this.state.celcius ? "Celcius" : "Fahrenheit"}
            </p>
            <p className="temp-text">{this.state.openWeatherData.main.temp}&#176;{this.state.celcius ? "C" : "F"}</p>

            <img src={CONSTANTS.ICON_URL(this.state.openWeatherData.weather[0].icon)} alt="weather icon" className="image" />
          </div>

          <div className="location">
            <p className="loc-detail">Location: {this.state.openWeatherData.name}</p>
            <p className="loc-detail">Date: {this.state.timeNow()}</p>
            <p className="loc-detail">Temperature: {this.state.openWeatherData.main.temp} deg</p>
            <p className="loc-detail">Description: {this.state.openWeatherData.weather[0].description}</p>
            <p className="loc-detail">Wind Speed: {this.state.openWeatherData.wind.speed}</p>
          </div>

          <div className="details">
            <button onClick={this._showDetail}>View Detail</button>
          </div>




        </div>

      </div>
    );
  }
}
