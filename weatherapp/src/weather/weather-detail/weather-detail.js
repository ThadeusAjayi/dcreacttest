import React from 'react';
import './weather-detail.css';

export default class WeatherDetail extends React.Component {
    state = {
        openWeatherData: this.props.location.state.openWeatherdata
    }

    render() {
        console.log(this.state.openWeatherData)
        return (
            <div className='container'>

                <div className='content'>
                    <div className='sunrise'>
                        <h2>Sunrise</h2>
                </div>
                    <div className='sunset'>
                        <h2>Sunset</h2>
                </div>
                </div>

            </div>
        )
    }

}