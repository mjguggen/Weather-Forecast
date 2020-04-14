import React from 'react';


const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const todayDay = new Date();

const weekDay2 = weekDay[(todayDay.getDay()+1)]
const weekDay3 = weekDay[(todayDay.getDay()+2)]
const weekDay4 = weekDay[(todayDay.getDay()+3)]
const weekDay5 = weekDay[(todayDay.getDay()+4)]
const weekDay6 = weekDay[(todayDay.getDay()+5)]
const weekDay7 = weekDay[(todayDay.getDay()+6)]
const weekDay8 = weekDay[(todayDay.getDay()+7)]

const Forecast = props => {


    const weekDays =[weekDay2, weekDay3, weekDay4, weekDay5, weekDay6, weekDay7, weekDay8]

    const weekDayMap = weekDays.map(i => i)

    const getData = (input, day) => (
        input !== undefined ? input[day] : ''
    )

    const message = (day) => (
        props.forecastHighs !== undefined ?  `${weekDayMap[day]}'s forecast calls for ${props.forecastDescription[day]} with a high temperature of ${props.forecastHighs[day]}° and low temperature of ${props.forecastLows[day]}°.` : ""
    )

    const dayMapArr = [0, 1, 2, 3, 4, 5, 6]

    const dayMapsMobile = dayMapArr.map(i => 
        <div className="day-box" style={props.highlight[i]} key={"day-box-"+i}>
            <input type="button" id={"forecast-input-"+i} className="forecast-button" name={i} onClick={props.dayStateUpdate}/>
            <label for={"forecast-input-"+i} className="forecast-label" id={"day-checkbox-"+i} > 
                <div className="forecast-day-grid" id={"day-data-"+i}>
                    <div className ="weekday" id={"weekday-"+i}> {weekDayMap[i]} </div>
                    <img className="forecast-icon" id={"forecast-icon-"+i} src={getData(props.forecastIcons, i)}    />
                    <div> {getData(props.forecastLowHighs, i)}  </div>
                </div>

                <div className="day-description" style={props.dayState[i]}> {message(i)} </div>
            </label>
        </div>
    )

    const dayMapsDesktop = dayMapArr.map(i => 
        <div className="day-box" style={props.highlight[i]} key={"day-box-"+i}>
            <input type="button" id={"forecast-input-"+i} className="forecast-button" name={i} onClick={props.dayStateUpdate}/>
            <label for={"forecast-input-"+i} className="forecast-label" id={"day-checkbox-"+i} > 
                <div className="forecast-day-grid" id={"day-data-"+i}>
                    <div className ="weekday" id={"weekday-"+i}> {weekDayMap[i]} </div>
                    <img className="forecast-icon" id={"forecast-icon-"+i} src={getData(props.forecastIcons, i)} />
                    <div className="forecast-description"> {getData(props.forecastDescription, i)} </div>
                    <div > {getData(props.forecastLowHighs, i)}  </div>
                </div>

                <div className="day-description" style={props.dayState[i]}> {message(i)} </div>
            </label>
        </div>
    )   

    return (
        <div> 
            <div style={props.oppStyle}>
                <div className="forecast-wrapper">
                    <div className="forecast-container">
                        {props.forecastHighs && 
                            <div className="forecast-mobile">
                                {dayMapsMobile}
                            </div>
                        }

                        {props.forecastHighs && 
                            <div className="forecast-desktop">
                                {dayMapsDesktop}
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>

    )
}








export default Forecast;