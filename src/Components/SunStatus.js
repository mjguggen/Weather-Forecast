import React from 'react'



const SunStatus = props => {



    const timeZonePlusMinus = () => {
        if (props.timeZoneOffset < 0) {
            return props.timeZoneOffset
        }

        if (props.timeZoneOffset > 0) {
            return props.timeZoneOffset
        }
    }


    const getTime = (inputProp, dayTime, plusMinus) => {
        if (inputProp !== undefined){
            const start = (parseInt(inputProp.slice(0,2)) + props.timezoneOffset + plusMinus)
            const startStr = start.toString()
            const end = inputProp.slice(2,5)
            const final = startStr.concat(end, dayTime)
            return final
        }    
    }

    const dayLength = props.sunriseTS - props.sunsetTS
    const currentTime = Math.floor(new Date().getTime()/1000)
    const dayOver = currentTime - props.sunriseTS
    const percentOver = ((dayOver/dayLength)*100*.8).toString();
    const percentOverStr = percentOver.concat("%")

    const sunMargin = {
        left: percentOverStr
    }

        //Day/Night Styles
        const dayStyle = {
            display: dayOver <= 0 ? "none" : "block"
        }

    return (
            <div> {props.sunset !== undefined ? 
                <div className="sunstatus-wrapper" style={dayStyle}>
                    <div className="bar" id="sunrise-bar"/>
                    <div className="sunstatus-container" >
                        <div className="sunstatus-times">
                            <div className ="sun-text">SUNRISE</div>
                            
                            <div className="line-container">
                                <img className="sun-image" src="https://image.flaticon.com/icons/png/512/169/169367.png" style={sunMargin}/>
                                <div id="semiCircle" />
                            </div>

                            <div className ="sun-text">SUNSET</div>
                            
                        </div>
                        <div className="sunstatus-textcontainer">
                            <div className="time"> {getTime(props.sunrise, " AM", 0)}  </div>
                            <div className="time"> {getTime(props.sunset, " PM", 12)}  </div>
                        </div>
                    </div>
                </div> : <div/>}
        </div>
    )
}



export default SunStatus


