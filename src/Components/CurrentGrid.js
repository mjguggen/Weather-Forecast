import React from 'react'

const CurrentGrid = props => {

    const replaceUnderscore = (input) => {
        input.replace(/_/g, ' ').replace(/(\s{1,}|\b)(\w)/g)
    }


    return(
    <div>
        {props.sunset &&
            <div className="current-grid-wrapper">
                <div className="current-grid-container">
                    <div className="current-grid">
                        <div id="grid-label">FEELS LIKE</div>
                        <div id="grid-label"> CLOUD COVER</div>
                        
                        <div id="grid-data">{Math.round(props.feelsLike)}°</div>
                        
                        <div id="grid-data">{Math.round(props.clouds)}%</div>
                    </div>

                    <div className="small-bar"/>


                    <div className="current-grid">
                        <div id="grid-label">HUMIDITY</div>
                        <div id="grid-label"> PRECIPITATION (IN/HR)</div>
                        <div id="grid-data">{Math.round(props.humidity)}%</div>
                        <div id="grid-data">{props.precipitation}</div>
                    </div>

                    <div className="small-bar"/>

                    <div className="current-grid">
                        <div id="grid-label">WIND (MPH)</div>
                        <div id="grid-label"> VISIBILITY </div>
                        <div id="grid-data">{Math.round(props.windSpeed)}{" "}{props.windDirection} </div>
                        <div id="grid-data">{Math.round(props.visibility)}</div>
                    </div>

                    <div className="small-bar"/>

                    <div className="current-grid">
                        <div id="grid-label">AIR QUALITY INDEX</div>
                        <div id="grid-label"> PRESSURE (inHg) </div>
                        <div id="grid-data">{props.aqi}%</div>
                        <div id="grid-data">{Math.round(props.pressure)}</div>
                    </div>


                    <div className="small-bar"/>

                    <div className="current-grid">
                        <div id="grid-label">FIRE INDEX</div>
                        <div id="grid-label"> ROAD RISK </div>
                        <div id="grid-data">{Math.round(props.fireIndex)}</div>
                        <div id="grid-data">{replaceUnderscore(props.roadRisk)}</div>
                    </div>


                </div>
            </div>
        }
        </div>
    )
}




export default CurrentGrid