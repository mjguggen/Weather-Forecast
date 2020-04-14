import React from 'react';




const CurrentWeather = (props) => (
    <div className='current-wrapper-container' style={props.oppStyle}>

        <div className="current-wrapper">
                <div id="current-temp" > {Math.round(props.currentTemp)}° </div>
            <div id="current-city" > {props.city}, {props.state} </div>
                <div className="current-description">
                    <div> {props.currentDescription}                 {props.currentWeatherIcon && <img id="current-img" src={props.currentWeatherIcon} />  }
                    </div>
                </div>
        </div>
    </div>
        
)



export default CurrentWeather