import React from 'react'

const CurrentGrid = props => {

    return(
    <div>
        {props.sunSet &&
            <div className="current-grid-wrapper">
                <div className="current-grid-container">


                    <div className="current-grid">
                        <div id="grid-label">UV INDEX</div>
                        <div id="grid-label"> CLOUD COVER</div>
                        <div id="grid-data">{Math.round(props.uvIndex)}</div>
                        <div id="grid-data">{props.clouds}%</div>
                    </div>

                    <div className="small-bar"/>


                    <div className="current-grid">
                        <div id="grid-label">HUMIDITY</div>
                        <div id="grid-label"> PRECIPITATION (IN/HR)</div>
                        <div id="grid-data">{props.humidity}%</div>
                        <div id="grid-data">{props.precipitation}</div>
                    </div>

                    <div className="small-bar"/>

                    <div className="current-grid">
                        <div id="grid-label">WIND</div>
                        <div id="grid-label"> VISIBILITY </div>
                        <div id="grid-data">{Math.round(props.windSpeed)}{"mph "}{props.windDirection} </div>
                        <div id="grid-data">{props.vis}</div>
                    </div>

                    <div className="small-bar"/>

                    <div className="current-grid">
                        <div id="grid-label">AIR QUALITY INDEX</div>
                        <div id="grid-label"> PRESSURE </div>
                        <div id="grid-data">{props.aqi}%</div>
                        <div id="grid-data">{props.pressure}</div>
                    </div>
                </div>
            </div>
        }
        </div>
    )
}




export default CurrentGrid