import React from "react"


const Hourly = props => {


    const hourData = [props.hourlyTemp]
    const timeData = [props.time]
    const iconData = [props.hourlyIcon]

    return(
        <div className="hourly">
            {props.hourlyTemp &&
                <div>
                    <div className="section-title"> Hourly Forecast </div>
                    <div className="bar"/>
                        <div className="hourly-wrapper">
                            <div className="hourly-container">
                                <div className="hourly-grid">
                                    {timeData}
                                    {iconData}
                                    {hourData} 
                                </div>
                                
                            </div>
                        </div>
                    <div className="bar"/>
                </div>
            }
        </div>
    )
}


export default Hourly