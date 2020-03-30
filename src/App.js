import React from 'react';
import './App.scss';

import Form from './Components/Form';
import CurrentWeather from './Components/CurrentWeather';
import CurrentWeatherBackground from './Components/CurrentWeatherBackground';
import Forecast from './Components/Forecast';
import Hourly from './Components/Hourly';
import CurrentGrid from './Components/CurrentGrid';
import SunStatus from './Components/SunStatus'
import Nav from './Components/Nav'

const WEATHERBIT_KEY = "afb2377ad5e14308a0f298103d88b7b3"

const hourConvert = [
  "12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"
]

const on = {
  display: "block",
}

const off = {
  display: "none",
}

const highlightOn = {
  boxShadow: "0 0 8px white",
  border: "1px solid white"
}

const highlightOff = {
  boxShadow: "0 0 2px white",
  border: "none"
}




//hide state dropdown
const numInput = {
  opacity: 0,
  width: "0px",
  transition: "width 1s"
}

//if text inputted - show state dropdown
const textInput = {
  textInput: {
    opacity: 1,
    display: "block",
    width: "60px",
    transition: "width 1s",
  }
}


//move button left on open;
const buttonLeft = {
  marginLeft: "-4px"
}

// move button right if text entered
const buttonRight = {
  marginLeft: "5px"
}

//text input if nubmer inputted
const numInput2 = {
  num2: {
    width: "200px",
  }
}

//text input if text inputted
const textInput2 = {
  textInput2: {
    width: "200px",
  }
}



//Nav Form Inputs
const numInputNav = {
  display: "none",
  width: "0px",
  transition: "width 2s",
}

const textInputNav = {
  display: "block",
  width: "60px",
  transition: "width 2s",
}

const numInputNav2 = {
  width: "182px"
}

const textInputNav2 = {
  width: "120px"
}

const focusOff = {
  filter: "blur(0px) brightness(70%)",
  transition: "filter 1s"
}

const focusOn = {
  filter: "blur(10px) brightness(50%)",
  transition: 'filter 1s',
}



class App extends React.Component {

  state = {
    //API Calls
    currentCall: undefined,
    currentData: undefined,
    forecastCall: undefined,
    forecastData: undefined,
    hourlyCall: undefined,
    hourlyData: undefined,

    //Current
    currentTemp: undefined,
    currentDescription: undefined,
    currentWeatherIcon: undefined,
    city: undefined,
    state: undefined,
    lat: undefined,
    long: undefined,
    code: undefined,
    sunRise: undefined,
    sunSet: undefined,
    feelsLike: undefined,
    humidity: undefined,
    clouds: undefined,
    uvIndex: undefined,
    precipitation: undefined,
    pressure: undefined,
    windSpeed: undefined,
    windDirection: undefined,
    vis: undefined,
    aqi: undefined,
    pressure: undefined,
    timezone: undefined,

    //Forecast Data
    dayLength: undefined,
    sunriseTS: undefined,
    sunsetTS: undefined,
    forecastDescription: undefined,
    timeFromSunrise: undefined,
    dayCompleted: undefined,
    forecastHighs: undefined,
    forecastLows: undefined,
    forecastLowHighs: undefined,
    forecastIcons: undefined,

    //Hourly Data
    time: undefined,
    hourlyTemp: undefined,
    hourlyIcon: undefined,

    //CurrentBackground
    code: "Start",
    inputFocus: "off",

    //Forecast - Day States
    dayState: [off, off, off, off, off, off, off],
    highlight: [highlightOff, highlightOff, highlightOff, highlightOff, highlightOff, highlightOff, highlightOff],

    //Map Latitude and Longitude
    previousCity: [],
    previousCityMap: undefined,
    zipInput: undefined,
    previousZip: [],
    previousZipMap: undefined,
    currentLat: undefined,
    currentLong: undefined,
    previousLat: [],
    previousLon: [],

    //Show/Hide
    style: on,
    oppStyle: off,

    //Form State
    formStyle: on,
    formState: numInput,
    inputState: numInput2,
    buttonState: buttonLeft,

    //Nav Form State
    formStyleNav: on,
    formStateNav: numInputNav,
    inputStateNav: numInputNav2,
    hideNav: "off",

    //Form gets
    getCity: undefined,
    getState: undefined,

    //error
    error: undefined,
  }

  inputFocused = () => {
    this.setState({
      inputFocus: "on"
    })
  }

  inputUnfocused = () => {
    this.setState({
      inputFocus: "off"
    })
  }

  checkboxMode = ({target}) => {
    const mode = target.checked ? 'on' : 'off'
    this.setState({
      checkbox: mode
    });
  }

  dayStateUpdate = (event) => {
    const dayArrNum = parseInt(event.target.name)
    const updatedDayState = this.state.dayState
    const highlight = this.state.highlight

    updatedDayState[dayArrNum] === off ? this.setState(updatedDayState[dayArrNum] = on)  : this.setState(updatedDayState[dayArrNum] = off) 

    highlight[dayArrNum] === highlightOff ? this.setState(highlight[dayArrNum] = highlightOn) : this.setState(highlight[dayArrNum] = highlightOff)
  }

  checkInputState = async () => {
    const currentInput = document.getElementById("main-input").value
    const numCheck = Number(currentInput)

    isNaN(numCheck) === true ? await this.setState({formState: textInput.textInput, inputState: textInput2.textInput2, buttonState: buttonRight}) : await this.setState({formState: numInput.num2, inputState: numInput2.num2, buttonState: buttonLeft})
  }

  checkInputStateNav = async () => {
    const currentInput = document.getElementById("navInput").value
    const numCheck = Number(currentInput)

    isNaN(numCheck) === true ? await this.setState({formStateNav: textInputNav, inputStateNav: textInputNav2}) : await this.setState({formStateNav: numInputNav, inputStateNav: numInputNav2})
  }


  apiCalls = async (event) => {
    const lat = this.state.currentLat;
    const lon = this.state.currentLon
    const currentCall = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&units=I&key=${WEATHERBIT_KEY}`);
    const currentData = await currentCall.json();
    const forecastCall = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&units=I&key=${WEATHERBIT_KEY}&days=8`)
    const forecastData = await forecastCall.json();
    const hourlyCall = await fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?lat=${lat}&lon=${lon}&units=I&hours=48&key=${WEATHERBIT_KEY}`);
    const hourlyData = await hourlyCall.json();

    await this.setState({
      currentData: currentData,
      forecastData: forecastData,
      hourlyData: hourlyData,
    })
  }

  // if Weather is text - getCityWeather else getZipWeather
  getWeather = (event) => {
    const currentInput = document.getElementById("main-input").value
    const numCheck = Number(currentInput)

    if (isNaN(numCheck) === true) {
      this.getCityWeather(event)
    } else {
      this.getZipWeather(event)
    }
  }

  // if Weather is text - getCityWeather else getZipWeather -- Nav Search
  getWeatherNav = (event) => {
    const currentInput = document.getElementById("navInput").value
    const numCheck = Number(currentInput)

    if (isNaN(numCheck) === true) {
      this.getCityWeatherNav(event)
    } else {
      this.getZipWeatherNav(event)
    }

    document.getElementById("navInput").value = null
  }
  
  //Get weather base on zip code
  getZipWeather = async (event) => {
    event.preventDefault();

    const zip = event.target.input_1.value;
    const getLatLon = await fetch(`https://api.weatherbit.io/v2.0/current?postal_code=${zip}&key=afb2377ad5e14308a0f298103d88b7b3`);
    if (getLatLon.status !== 200) {
      this.setState({
        error: "Please enter a valid city"
      })
    } else {
      const latLonData = await getLatLon.json();
      await this.setState({
        zipInput: zip,
        currentLat: latLonData.data[0].lat,
        currentLon: latLonData.data[0].lon,
      });
  
      await this.apiCalls();
      await this.stateSetter();
      await this.addToRecent();
    }


  }

    //Get weather base on zip code -- Nav input
    getZipWeatherNav = async (event) => {
      event.preventDefault();
  
      const zip = document.getElementById("navInput").value
      const getLatLon = await fetch(`https://api.weatherbit.io/v2.0/current?postal_code=${zip}&key=afb2377ad5e14308a0f298103d88b7b3`);
      if (getLatLon.status !== 200) {
        this.setState({
          error: "Enter a valid city"
        })
      } else {
        const latLonData = await getLatLon.json();
  
        await this.setState({
          zipInput: zip,
          currentLat: latLonData.data[0].lat,
          currentLon: latLonData.data[0].lon,
        });
    
        await this.apiCalls();
        await this.stateSetter();
        await this.addToRecent();
        await this.setState({hideNav: "on"})
      }


    }

  //Get weather base on zip code
  getCityWeather = async (event) => {
    event.preventDefault();

    const city = event.target.input_1.value;
    const state = event.target.input_2.value;

    const getLatLon = await fetch(`https://api.weatherbit.io/v2.0/current?city=${city},${state}&key=afb2377ad5e14308a0f298103d88b7b3`)

    console.log(getLatLon)
    console.log(getLatLon.status)

    if (getLatLon.status !== 200) {
      this.setState ({
        error: "Enter a valid city"
      })
    } else {
      const latLonData = await getLatLon.json()

      this.setState({
        currentLat: latLonData.data[0].lat,
        currentLon: latLonData.data[0].lon
      })
  
      await this.apiCalls();
      await this.stateSetter();
      await this.addToRecent();
    }


  }

  getCityWeatherNav = async (event) => {
    event.preventDefault();

    const city = document.getElementById("navInput").value
    const state = document.getElementById("navStateSelect").value
    const getLatLon = await fetch(`https://api.weatherbit.io/v2.0/current?city=${city},${state}&key=afb2377ad5e14308a0f298103d88b7b3`)

    if (getLatLon.status !== 200) {
      this.setState({
        error: "Enter a valid city"
      })
    } else {
      const latLonData = await getLatLon.json()

      this.setState({
        currentLat: latLonData.data[0].lat,
        currentLon: latLonData.data[0].lon
      })
  
      await this.apiCalls();
      await this.stateSetter();
      await this.addToRecent();
    }
    
  }

  getRecentWeather = async (event) => {
    event.preventDefault();

    const lat = event.target.id
    const lon = event.target.value

    await this.setState({
      currentLat: lat,
      currentLon: lon
    })

    await this.apiCalls();
    await this.stateSetter();
  }
  
  //set states
  stateSetter = async () => {
    const currentData = this.state.currentData
    const forecastData = this.state.forecastData
    const hourlyData = this.state.hourlyData

    await this.setState({
      //Current Data
      currentTemp: currentData.data[0].temp,
      currentDescription: currentData.data[0].weather.description,
      currentWeatherIcon: currentData.data[0].weather.icon,
      city: currentData.data[0].city_name,
      state: currentData.data[0].state_code,
      lat: currentData.data[0].lat,
      long: currentData.data[0].lon,
      code: currentData.data[0].weather.code,
      sunRise: currentData.data[0].sunrise,
      sunSet: currentData.data[0].sunset,
      feelsLike: currentData.data[0].app_temp,
      humidity: currentData.data[0].rh,
      clouds: currentData.data[0].clouds,
      uvIndex: currentData.data[0].uv,
      precipitation: currentData.data[0].precip,
      pressure: currentData.data[0].pres,
      windSpeed: currentData.data[0].wind_spd,
      windDirection: currentData.data[0].wind_cdir,
      vis: currentData.data[0].vis,
      aqi: currentData.data[0].aqi,
      pressure: currentData.data[0].aqi,
      timezone: currentData.data[0].timezone,

      //Forecast Data
      dayLength: (forecastData.data[0].sunset_ts - forecastData.data[0].sunrise_ts),
      sunriseTS: forecastData.data[0].sunrise_ts,
      sunsetTS: forecastData.data[0].sunset_ts,
      forecastDescription: forecastData.data.slice(1).map(i => i.weather.description),

      timeFromSunrise: (Math.floor(new Date().getTime() /1000) - forecastData.data[0].sunrise_ts),

      dayCompleted: (((Math.floor(new Date().getTime() /1000)) - forecastData.data[0].sunrise_ts) / (forecastData.data[0].sunset_ts - forecastData.data[0].sunrise_ts)), 

      forecastHighs: forecastData.data.slice(1).map(i=> Math.round(i.max_temp)),
      forecastLows: forecastData.data.slice(1).map(i=> Math.round(i.low_temp)),

      forecastLowHighs: forecastData.data.slice(1).map((i, index) => (
        <div id="low-high" key={"low-high-"+index}> 
          {Math.round(i.low_temp)}° | {Math.round(i.max_temp)}° 
        </div>
      )),

      forecastIcons: forecastData.data.slice(1).map(i => i.weather.icon),

      //Hourly Data
      time: hourlyData["data"].map((i, index)=> ( 
        <div id="time" key={"time-"+index}>
          {hourConvert[parseInt(i.timestamp_local.slice(11,13), 10)]}
        </div>
      )),

      hourlyTemp: hourlyData["data"].map((i, index) => (<div key={"hourlytemp-"+index}> {Math.round((i.temp))}° </div> )),

      hourlyIcon: hourlyData["data"].map((i, index) => (<img id="hourly-icon" src={'https://www.weatherbit.io/static/img/icons/'+(i.weather.icon)+'.png'} key={"hourly-icon-"+index} /> )),

      //Styles
      style: off,
      oppStyle: on,

      //Error
      error: undefined,
    })
  }

  //add city to recent cities
  addToRecent = async () => {
    const lat = await this.state.currentLat
    const lon = await this.state.currentLon
    const currentCity = this.state.city
    const saveCity = this.state.previousCity
    const saveLat = this.state.previousLat
    const saveLon = this.state.previousLon
  
    saveCity.push(currentCity)
    saveLat.push(lat)
    saveLon.push(lon)

    await this.setState({
      previousCityMap: saveCity.map((element, index) => <div>
          <input type="checkbox" className="recent-city-checkbox" id={saveLat[index]} key={"recent-city-btn-"+index} value={saveLon[index]} onClick={this.getRecentWeather}/> 

          <label className="recent-city" for={saveLat[index]} key={'recent-city-label-'+index}> {element} </label>

      </div>
      )
    })
  }




  render() {
    return (
      <div className="App">

        <Nav
          getWeatherNav={this.getWeatherNav}
          getRecentWeather={this.getRecentWeather}
          inputFocused={this.inputFocused}
          inputUnfocused={this.inputUnfocused}
          formStateNav={this.state.formStateNav}
          inputStateNav={this.state.inputStateNav}
          checkInputStateNav={this.checkInputStateNav}
          hideNav={this.state.hideNav}
          previousCity={this.state.previousCity}
          previousCityMap={this.state.previousCityMap}
          error={this.state.error}
        />

        <CurrentWeatherBackground
          currentWeather={this.state.currentWeather}
          inputFocus={this.state.inputFocus}
          code={this.state.code}
        />
        <div className="main-wrapper">
          <div className="main">

            <Form
              style={this.state.style}
              oppStyle={this.state.oppStyle}
              getWeather={this.getWeather}
              inputFocused={this.inputFocused}
              inputUnfocused={this.inputUnfocused}
              formState={this.state.formState}
              inputState={this.state.inputState}
              buttonState={this.state.buttonState}
              checkInputState={this.checkInputState}
              error={this.state.error}
            />


            <div className='top'>
              <CurrentWeather
                currentTemp={this.state.currentTemp} 
                currentWeather={this.state.currentWeather}
                currentDescription={this.state.currentDescription}
                currentWeatherIcon={this.state.currentWeatherIcon}
                city={this.state.city}
                state={this.state.state}
                style={this.state.style}
                oppStyle={this.state.oppStyle}
              />
              <div className="current-grid-desktop">
                <CurrentGrid
                  sunRise= {this.state.sunRise}
                  sunSet= {this.state.sunSet}
                  feelsLike= {this.state.feelsLike}
                  humidity= {this.state.humidity}
                  clouds= {this.state.clouds}
                  uvIndex= {this.state.uvIndex}
                  precipitation= {this.state.precipitation}
                  pressure= {this.state.pressure}
                  windSpeed= {this.state.windSpeed}
                  windDirection= {this.state.windDirection}
                  vis= {this.state.vis}
                  aqi = {this.state.aqi}
                  pressure = {this.state.pressure}
                />
              </div>
            </div>

            <Hourly
              hourlyTemp = {this.state.hourlyTemp}
              time = {this.state.time}
              hourlyIcon={this.state.hourlyIcon}
            />

            <Forecast
              forecastLowHighs={this.state.forecastLowHighs}
              forecastHighs={this.state.forecastHighs}
              forecastLows={this.state.forecastLows}
              forecastIcons={this.state.forecastIcons}
              forecastDescription={this.state.forecastDescription}
              style={this.state.style}
              oppStyle={this.state.oppStyle}
              dayState={this.state.dayState}
              dayStateUpdate={this.dayStateUpdate}
              highlight={this.state.highlight}
            />

            <SunStatus
              sunRise= {this.state.sunRise}
              sunSet= {this.state.sunSet}
              sunriseTS= {this.state.sunriseTS}
              sunsetTS= {this.state.sunsetTS}
              sunStyle= {this.state.sunStyle}
              dayLength= {this.state.dayLength}
              timeFromSunrise= {this.state.timeFromSunrise}
              dayCompleted= {this.state.dayCompleted}
              timezone= {this.state.timezone}
            />
            <div className="current-grid-mobile">
              <CurrentGrid
                
                sunRise= {this.state.sunRise}
                sunSet= {this.state.sunSet}
                feelsLike= {this.state.feelsLike}
                humidity= {this.state.humidity}
                clouds= {this.state.clouds}
                uvIndex= {this.state.uvIndex}
                precipitation= {this.state.precipitation}
                pressure= {this.state.pressure}
                windSpeed= {this.state.windSpeed}
                windDirection= {this.state.windDirection}
                vis= {this.state.vis}
                aqi = {this.state.aqi}
                pressure = {this.state.pressure}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
