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
import MoonPhase from './Components/MoonPhase'
import Footer from './Components/Footer'

//Assets
import cloudy from './Assets/Dark/cloudy_darkbg.svg'
import fog from './Assets/Dark/fog_darkbg.svg'
import freezing_rain from './Assets/Dark/freezing_rain_darkbg.svg'
import heavy_rain from './Assets/Dark/heavy_rain_darkbg.svg'
import ice_pellets from './Assets/Dark/ice_pellets_darkbg.svg'
import partly_clear from './Assets/Dark/partly_clear_day_darkbg.svg'
import partly_cloudy from './Assets/Dark/partly_cloudy_day_darkbg.svg'
import rain from './Assets/Dark/rain_darkbg.svg'
import tstorm from './Assets/Dark/tstorm_darkbg.svg'
import clear from './Assets/Either/clear_day.svg'
import snow from './Assets/Either/snow.svg'
import { ThemeProvider } from 'styled-components';


//API Keys
//const WEATHERBIT_KEY = "afb2377ad5e14308a0f298103d88b7b3"
const Climacell_KEY = "TWUGRFAsriuVHdQPXT9LAPWl3wqJidaV"
const OPENCAGE_KEY = "fc51f5602fcc464283778e9f4c72e7c4"


const weatherCodes = [
  {code: 'freezing_rain_heavy', description: 'Heavy Freezing Rain',  icon: freezing_rain},
  {code: 'freezing_rain', description: 'Freezing Rain',  icon: freezing_rain},
  {code: 'freezing_rain_light', description: 'Light Freezing Rain',  icon: freezing_rain},
  {code: 'freezing_drizzle', description: 'Freezing Drizzle',  icon: freezing_rain},
  {code: 'ice_pellets_heavy', description: 'Heavy Hail',  icon: ice_pellets},
  {code: 'ice_pellets', description: 'Hail',  icon: ice_pellets},
  {code: 'ice_pellets_light', description: 'Light Hail',  icon: ice_pellets},
  {code: 'snow_heavy', description: 'Heavy Snow',  icon: snow},
  {code: 'snow', description: 'Snow',  icon: snow},
  {code: 'snow_light', description: 'Light snow',  icon: snow},
  {code: 'flurries', description: 'Flurries',  icon: snow},
  {code: 'tstorm', description: 'Thunderstorm',  icon: tstorm},
  {code: 'rain_heavy', description: 'Heavy Rain',  icon: heavy_rain},
  {code: 'rain', description: 'Rain',  icon: rain},
  {code: 'rain_light', description: 'Light rain',  icon: rain},
  {code: 'drizzle', description: 'Drizzle',  icon: rain},
  {code: 'fog_light', description: 'Light fog',  icon: fog},
  {code: 'fog', description: 'Fog',  icon: fog},
  {code: 'cloudy', description: 'Cloudy',  icon: cloudy},
  {code: 'mostly_cloudy', description: 'Mostly Cloudy',  icon: cloudy},
  {code: 'partly_cloudy', description: 'Partly Cloudy',  icon: partly_cloudy},
  {code: 'mostly_clear', description: 'Mostly Clear',  icon: partly_clear},
  {code: 'clear', description: 'Clear, Sunny',  icon: clear},
]


const hourConvert = [
  "12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM",   "12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM", "12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM",   "12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"
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

const loadStyle = {
  off: {
    display: "none"
  },
  on: {
    display: "block"
  }
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
    locationData: undefined,

    //Location Data
    city: undefined,
    county: undefined,
    state: undefined,
    lat: undefined,
    long: undefined,
    sunriseTS: undefined,
    sunsetTS: undefined,
    timezone: undefined,
    timezoneOffset: undefined,
    timezoneOffsetSec: undefined,

    //Current
    currentTemp: undefined,
    currentDescription: undefined,
    currentWeatherIcon: undefined,
    code: undefined,
    sunrise: undefined,
    sunset: undefined,
    feelsLike: undefined,
    humidity: undefined,
    clouds: undefined,
    precipitation: undefined,
    pressure: undefined,
    windSpeed: undefined,
    windDirection: undefined,
    visibility: undefined,
    pressure: undefined,
    aqi: undefined,
    roadRisk: undefined,
    moonPhase: undefined,
    dewpoint: undefined,
    fireIndex: undefined,

    //Forecast Data
    forecastDescription: undefined,
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
    previousStateName: [],

    //Save Data
    currentDataSave: [],
    forecastDataSave: [],
    hourlyDataSave: [],
    locationDataSave: [],

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

    //Loading
    loading: false,
    loadingStyle: loadStyle.off,
    API_loading: undefined,

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

  //Get weather base on zip code
  getZipWeather = async (event) => {
    event.preventDefault();
    const zip = event.target.input_1.value;

    await this.setState({
      loading: true,
      loadingStyle: loadStyle.on
    })
    
    const call = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${zip}&limit=1&key=${OPENCAGE_KEY}`);
    const data = await call.json()

    if (await data.total_results === 0 || data.results[0].confidence < 2) {
      this.setState({
        error: "Please enter a valid city",
        loading: false,
        loadingStyle: loadStyle.off,
        inputFocus: "off"
      })
    } else {
      await this.setState({
        zipInput: zip,
        locationData: data,
        currentLat: data.results[0].geometry.lat,
        currentLon: data.results[0].geometry.lng,
      });
  
      await this.apiCalls();
      await this.stateSetter();
      await this.addToRecent();

      
      await this.setState({
        loading: false,
        loadingStyle: loadStyle.off, 
        inputFocus: "off"
      })
    }
  }

  //Get weather base on zip code
  getCityWeather = async (event) => {
    event.preventDefault();

    const city = event.target.input_1.value.split(' ').join('+');
    const state = event.target.input_2.value;

    await this.setState({
      loading: true,
      loadingStyle: loadStyle.on
    })

    const call = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city},${state}&limit=1&key=${OPENCAGE_KEY}`)
    const data = await call.json()

    if (await data.total_results === 0 || data.results[0].confidence < 2) {
      this.setState({
        error: "Please enter a valid city",
        loading: false,
        loadingStyle: loadStyle.off,
        inputFocus: "off"
      })
    } else {
      await this.setState({
        locationData: data,
        currentLat: data.results[0].geometry.lat,
        currentLon: data.results[0].geometry.lng,
      });
  
      await this.apiCalls();
      await this.stateSetter();
      await this.addToRecent();

      
      await this.setState({
        loading: false,
        loadingStyle: loadStyle.off, 
        inputFocus: "off"
      })
    }
  }
  
  apiCalls = async (event) => {
    const lat = this.state.currentLat;
    const lon = this.state.currentLon
    const currentCall = await fetch(`https://api.climacell.co/v3/weather/realtime?lat=${lat}&lon=${lon}&unit_system=us&fields=precipitation,precipitation%3Ain%2Fhr,temp%3AF,feels_like%3AF,dewpoint%3AF,wind_gust%3Amph,wind_speed%3Amph,baro_pressure%3AinHg,visibility%3Ami,humidity,road_risk,epa_aqi,humidity%3A%25,wind_direction,wind_direction%3Adegrees,sunrise,sunset,cloud_cover,cloud_cover%3A%25,moon_phase,dewpoint%3AF,fire_index,weather_code,epa_health_concern&apikey=${Climacell_KEY}`)


    const today = new Date()

    Date.prototype.addDays = function(days) {
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    }

    const dateEnd = today.addDays(8)
    const dateEndStr = dateEnd.toISOString()
    const endHour = today.addDays(2)
    const hourEndStr = endHour.toISOString()

//    const currentCall = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&units=I&key=${WEATHERBIT_KEY}`);
    const currentData = await currentCall.json();
//    const forecastCall = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&units=I&key=${WEATHERBIT_KEY}&days=8`)
    const forecastCall = await fetch(`https://api.climacell.co/v3/weather/forecast/daily?lat=${lat}&lon=${lon}&start_time=now&end_time=${dateEndStr}&unit_system=us&fields=temp,temp%3AF,feels_like%3AF,wind_speed,wind_speed%3Amph,wind_direction,baro_pressure,precipitation%3Ain%2Fhr,precipitation_accumulation,precipitation_probability%3A%25,visibility%3Am,humidity,humidity%3A%25,sunrise,sunset,weather_code,moon_phase&apikey=${Climacell_KEY}`)
    const forecastData = await forecastCall.json();
//    const hourlyCall = await fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?lat=${lat}&lon=${lon}&units=I&hours=48&key=${WEATHERBIT_KEY}`);

    const hourlyCall = await fetch(`https://api.climacell.co/v3/weather/forecast/hourly?lat=${lat}&lon=${lon}&unit_system=us&fields=precipitation%3Ain%2Fhr,precipitation_type,precipitation_probability,precipitation_probability%3A%25,temp%3AF,feels_like%3AF,dewpoint%3AF,wind_speed%3Amph,baro_pressure,baro_pressure%3AinHg,visibility%3Ami,humidity,humidity%3A%25,wind_direction,wind_direction%3Adegrees,sunrise,sunset,cloud_cover,cloud_cover%3A%25,weather_code,moon_phase,road_risk,epa_aqi,epa_health_concern&start_time=now&end_time=${hourEndStr}&apikey=TWUGRFAsriuVHdQPXT9LAPWl3wqJidaV`)
    const hourlyData = await hourlyCall.json();

    await this.setState({
      currentData: currentData,
      forecastData: forecastData,
      hourlyData: hourlyData,
    })
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

    //Get weather base on zip code -- Nav input
  getZipWeatherNav = async (event) => {
      event.preventDefault();
  
      const zip = document.getElementById("navInput").value
      await this.setState({
        loading: true,
        loadingStyle: loadStyle.on
      })
      
      const call = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${zip}&limit=1&key=${OPENCAGE_KEY}`);
      const data = await call.json()
  
      if (await data.total_results === 0 || data.results[0].confidence < 2) {
        this.setState({
          error: "Please enter a valid city",
          loading: false,
          loadingStyle: loadStyle.off,
          inputFocus: "off"
        })
      } else {
        await this.setState({
          zipInput: zip,
          locationData: data,
          currentLat: data.results[0].geometry.lat,
          currentLon: data.results[0].geometry.lng,
        });
    
        await this.apiCalls();
        await this.stateSetter();
        await this.addToRecent();
  
        
        await this.setState({
          loading: false,
          loadingStyle: loadStyle.off, 
          inputFocus: "off"
        })
      }

  }

  getCityWeatherNav = async (event) => {
    event.preventDefault();

    const city = document.getElementById("navInput").value
    const state = document.getElementById("navStateSelect").value
    
    await this.setState({
      loading: true,
      loadingStyle: loadStyle.on
    })

    const call = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city},${state}&limit=1&key=${OPENCAGE_KEY}`)
    const data = await call.json()

    if (await data.total_results === 0 || data.results[0].confidence < 2) {
      this.setState({
        error: "Please enter a valid city",
        loading: false,
        loadingStyle: loadStyle.off,
        inputFocus: "off"
      })
    } else {
      await this.setState({
        locationData: data,
        currentLat: data.results[0].geometry.lat,
        currentLon: data.results[0].geometry.lng,
      });
  
      await this.apiCalls();
      await this.stateSetter();
      await this.addToRecent();

      
      await this.setState({
        loading: false,
        loadingStyle: loadStyle.off, 
        inputFocus: "off"
      })
    }
  }

  getRecentWeather = async (event) => {
    event.preventDefault();

    const index = event.target.value

   const locationData = this.state.locationDataSave[index]
   const currentData = this.state.currentDataSave[index]
   const forecastData = this.state.forecastDataSave[index]
   const hourlyData = this.state.hourlyDataSave[index]

    // set location data states
    await this.setState({
      //Location Data
      city: locationData.results[0].components.city,
      state: locationData.results[0].components.state_code,
      lat: locationData.results[0].geometry.lat,
      long: locationData.results[0].geometry.lng,
      timezone: locationData.results[0].annotations.timezone.name,
      timezoneOffset: parseInt(locationData.results[0].annotations.timezone.offset_string.slice(0, 3)),
      timezoneOffsetSec: locationData.results[0].annotations.timezone.offset_sec,
      sunriseTS: locationData.results[0].annotations.sun.rise.apparent,
      sunsetTS: locationData.results[0].annotations.sun.set.apparent,
    })
    //set current data states
    await this.setState({
      //Current Data
      code: currentData.weather_code.value,
      currentDescription: this.getDescription(currentData.weather_code.value),
      currentWeatherIcon: this.getIcon(currentData.weather_code.value),
      currentTemp: currentData.temp.value,
      sunrise: currentData.sunrise.value.slice(11,16),
      sunset: currentData.sunset.value.slice(11,16),
      feelsLike: currentData.feels_like.value,
      humidity: currentData.humidity.value,
      clouds: currentData.cloud_cover.value,
      precipitation: currentData.precipitation.value,
      pressure: currentData.baro_pressure.value,
      windSpeed: currentData.wind_speed.value,
      windDirection: this.getWindDirection(currentData.wind_direction.value),
      visibility: currentData.visibility.value,
      pressure: currentData.baro_pressure.value,
      aqi: currentData.epa_aqi.value,
      roadRisk: currentData.road_risk.value,
      moonPhase: currentData.moon_phase.value,
      dewpoint: currentData.dewpoint.value,
      fireIndex: currentData.fire_index.value,
    })
    //set forecast data states
    await this.setState({
      //Forecast Data
      forecastDescription: forecastData.slice(1).map(i => this.getDescription(i.weather_code.value)),

      forecastHighs: forecastData.slice(1).map(i=> Math.round(i.temp[1].max.value)),
      forecastLows: forecastData.slice(1).map(i=> Math.round(i.temp[0].min.value)),

      forecastLowHighs: forecastData.slice(1).map((i, index) => (
        <div id="low-high" key={"low-high-"+index}> 
          {Math.round(i.temp[0].min.value)}° | {Math.round(i.temp[1].max.value)}° 
        </div>
      )),

      forecastIcons: forecastData.slice(1).map(i => this.getIcon(i.weather_code.value)),
    })
    //set hourly data states
    await this.setState({
      //Hourly Data
      time: hourlyData.map((i, index) => (
        <div id="time" key={i}>
          {hourConvert[parseInt(hourlyData[index].observation_time.value.slice(11,13)) + this.state.timezoneOffset + 24]}
        </div>
      )),
  
      hourlyTemp: hourlyData.map((i, index) => (<div key={"hourlytemp-"+index}> {Math.round((i.temp.value))}° </div> )),

      hourlyIcon: hourlyData.map((i, index) => (<img id="hourly-icon" src={this.getIcon(i.weather_code.value)} key={"hourly-icon-"+index} /> )),
    })
    //set styles and error
    await this.setState({
      //Styles
      style: off,
      oppStyle: on,

      //Error
      error: undefined,
    })
  }

  getDescription = (input) => {
    for(let i=0; i < weatherCodes.length; i++) {
      if (input === weatherCodes[i].code) {
        return weatherCodes[i].description
      }
    }
  }

  getWindDirection = (input) => {
    if (input <= 22.5 || input > 337.5) {
      return "N"
    } else if (input > 22.5 && input <= 67.5) {
      return "NE"
    } else if (input > 67.5  && input <= 112.5) {
      return "E"
    } else if (input > 112.5 && input <= 157.5) {
      return "SE"
    } else if (input > 157.5  && input <= 202.5) {
      return "S"
    } else if (input > 202.5  && input <= 247.5) {
      return "SE"
    } else if (input > 247.5  && input <= 292.5) {
      return "W"
    } else if (input > 292.5  && input <= 337.5) {
      return "NW"
    }
  }

  getIcon = (input) => {
    for(let i=0; i < weatherCodes.length; i++) {
      if (input === weatherCodes[i].code) {
        return weatherCodes[i].icon
      }
    }
  }

  //set states
  stateSetter = async () => {
    const currentData = this.state.currentData
    const forecastData = this.state.forecastData
    const hourlyData = this.state.hourlyData
    const locationData = this.state.locationData

    const currentDataSave = this.state.currentDataSave
    const forecastDataSave = this.state.forecastDataSave
    const hourlyDataSave = this.state.hourlyDataSave
    const locationDataSave = this.state.locationDataSave

    if (currentData.statusCode === 400 || forecastData.statusCode === 400 || hourlyData.statusCode === 400 ) {
      this.setState({
        error: "Enter a valid location"
      })
    } else {
      // set location data states
      await this.setState({
        //Location Data
        city: locationData.results[0].components.city,
        state: locationData.results[0].components.state_code,
        county: locationData.results[0].components.county,
        lat: locationData.results[0].geometry.lat,
        long: locationData.results[0].geometry.lng,
        timezone: locationData.results[0].annotations.timezone.name,
        timezoneOffset: parseInt(locationData.results[0].annotations.timezone.offset_string.slice(0, 3)),
        timezoneOffsetSec: locationData.results[0].annotations.timezone.offset_sec,
        sunriseTS: locationData.results[0].annotations.sun.rise.apparent,
        sunsetTS: locationData.results[0].annotations.sun.set.apparent,
      })
      //set current data states
      await this.setState({
        //Current Data
        code: currentData.weather_code.value,
        currentDescription: this.getDescription(currentData.weather_code.value),
        currentWeatherIcon: this.getIcon(currentData.weather_code.value),
        currentTemp: currentData.temp.value,
        sunrise: currentData.sunrise.value.slice(11,16),
        sunset: currentData.sunset.value.slice(11,16),
        feelsLike: currentData.feels_like.value,
        humidity: currentData.humidity.value,
        clouds: currentData.cloud_cover.value,
        precipitation: currentData.precipitation.value,
        pressure: currentData.baro_pressure.value,
        windSpeed: currentData.wind_speed.value,
        windDirection: this.getWindDirection(currentData.wind_direction.value),
        visibility: currentData.visibility.value,
        pressure: currentData.baro_pressure.value,
        aqi: currentData.epa_aqi.value,
        roadRisk: currentData.road_risk.value,
        moonPhase: currentData.moon_phase.value,
        dewpoint: currentData.dewpoint.value,
        fireIndex: currentData.fire_index.value,
      })
      //set forecast data states
      await this.setState({
        //Forecast Data
        forecastDescription: forecastData.slice(1).map(i => this.getDescription(i.weather_code.value)),
  
        forecastHighs: forecastData.slice(1).map(i=> Math.round(i.temp[1].max.value)),
        forecastLows: forecastData.slice(1).map(i=> Math.round(i.temp[0].min.value)),
  
        forecastLowHighs: forecastData.slice(1).map((i, index) => (
          <div id="low-high" key={"low-high-"+index}> 
            {Math.round(i.temp[0].min.value)}° | {Math.round(i.temp[1].max.value)}° 
          </div>
        )),
  
        forecastIcons: forecastData.slice(1).map(i => this.getIcon(i.weather_code.value)),
      })
      //set hourly data states
      await this.setState({
        //Hourly Data
        time: hourlyData.map((i, index) => (
          <div id="time" key={i}>
            {hourConvert[parseInt(hourlyData[index].observation_time.value.slice(11,13)) + this.state.timezoneOffset + 24]}
          </div>
        )),
    
        hourlyTemp: hourlyData.map((i, index) => (<div key={"hourlytemp-"+index}> {Math.round((i.temp.value))}° </div> )),
  
        hourlyIcon: hourlyData.map((i, index) => (<img id="hourly-icon" src={this.getIcon(i.weather_code.value)} key={"hourly-icon-"+index} /> )),
      })
      //set styles and error
      await this.setState({
        //Styles
        style: off,
        oppStyle: on,
  
        //Error
        error: undefined,
      })

      //push data to save arrays
      await currentDataSave.push(currentData)
      await forecastDataSave.push(forecastData)
      await hourlyDataSave.push(hourlyData)
      await locationDataSave.push(locationData)
    }
  }


  //add city to recent cities
  addToRecent = async () => {
    const lat = await this.state.currentLat
    const lon = await this.state.currentLon
    const currentCity = this.state.city === undefined ? this.state.county : this.state.city
    const saveCity = this.state.previousCity
    const currentState = this.state.state
    const saveState = this.state.previousStateName
    const saveLat = this.state.previousLat
    const saveLon = this.state.previousLon
  
    saveCity.push(currentCity)
    saveLat.push(lat)
    saveLon.push(lon)
    saveState.push(currentState)
    
    await this.setState({
      previousCityMap: saveCity.map((element, index) => <div>
          <input type="checkbox" className="recent-city-checkbox" id={saveLat[index]} key={saveCity[index]} value={index} onClick={this.getRecentWeather}/> 

          <label className="recent-city" for={saveLat[index]} key={'recent-city-label-'+element}> {element} </label>

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
              loading={this.state.loading}
              loadingStyle={this.state.loadingStyle}
            />


            <div className='top'>
              <CurrentWeather
                currentTemp={this.state.currentTemp} 
                currentWeather={this.state.currentWeather}
                currentDescription={this.state.currentDescription}
                currentWeatherIcon={this.state.currentWeatherIcon}
                city={this.state.city}
                county={this.state.county}
                state={this.state.state}
                style={this.state.style}
                oppStyle={this.state.oppStyle}
              />
              <div className="current-grid-desktop">
                
                <CurrentGrid
                  sunrise= {this.state.sunrise}
                  sunset= {this.state.sunset}
                  feelsLike= {this.state.feelsLike}
                  humidity= {this.state.humidity}
                  clouds= {this.state.clouds}
                  precipitation= {this.state.precipitation}
                  pressure= {this.state.pressure}
                  windSpeed= {this.state.windSpeed}
                  windDirection= {this.state.windDirection}
                  visibility= {this.state.visibility}
                  aqi = {this.state.aqi}
                  pressure = {this.state.pressure}
                  roadRisk={this.state.roadRisk}
                  moonPhase={this.state.moonPhase}
                  dewpoint={this.state.dewPoint}
                  fireIndex={this.state.fireIndex}
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
            
            <div className="sun-moon-container">
              <SunStatus
                sunrise= {this.state.sunrise}
                sunset= {this.state.sunset}
                sunriseTS= {this.state.sunriseTS}
                sunsetTS= {this.state.sunsetTS}
                sunStyle= {this.state.sunStyle}
                timezone= {this.state.timezone}
                timezoneOffsetSec={this.state.timezoneOffsetSec}
                timezoneOffset={this.state.timezoneOffset}
              />

              <MoonPhase
                moonPhase={this.state.moonPhase}
              />            
            </div>

            <div className="current-grid-mobile">
              <CurrentGrid
                sunrise= {this.state.sunrise}
                sunset= {this.state.sunset}
                feelsLike= {this.state.feelsLike}
                humidity= {this.state.humidity}
                clouds= {this.state.clouds}
                precipitation= {this.state.precipitation}
                pressure= {this.state.pressure}
                windSpeed= {this.state.windSpeed}
                windDirection= {this.state.windDirection}
                visibility= {this.state.visibility}
                aqi = {this.state.aqi}
                pressure = {this.state.pressure}
                roadRisk={this.state.roadRisk}
                moonPhase={this.state.moonPhase}
                dewpoint={this.state.dewPoint}
                fireIndex={this.state.fireIndex}
              />
            </div>
            <div className='footer mobile'> Created by Mike Guggenbuehl</div>

          </div>

        </div>
        <div className='desktop footer'> Created by Mike Guggenbuehl</div>
      </div>
    );
  }
}

export default App;


