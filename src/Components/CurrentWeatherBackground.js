import React from 'react';
import ReactPlayer from 'react-player'


const weatherLinks = [
    {code: "Start", yt: "U6hRTzZ9Sjk",  start:"10", end: "180"},
    {code: 'freezing_rain_heavy', yt:"piGVnq4Z62c", start: "56", end: "90"},
    {code: 'freezing_rain', yt:"piGVnq4Z62c", start: "56", end:"90"},
    {code: 'freezing_rain_light', yt:"piGVnq4Z62c", start: "56", end:"90"},
    {code: 'freezing_drizzle', yt:"piGVnq4Z62c", start: "56", end:"90"},
    {code: 'ice_pellets_heavy', yt:"piGVnq4Z62c", start: "56", end:"90"},
    {code: 'ice_pellets', yt:"piGVnq4Z62c", start: "56", end:"90"},
    {code: 'ice_pellets_light', yt:"piGVnq4Z62c", start: "56", end:"90"},
    {code: 'snow_heavy', yt: "CUaybv1jdHw", start: "3600", end: "7200"},
    {code: 'snow', yt: "v_JyzOVZVM0", start: "3600", end: "7200"},
    {code: 'snow_light', yt: "Wver_dJ-X5c", start: "3780", end: "4000"},
    {code: 'flurries', yt: "Wver_dJ-X5c", start: "3780", end: "4000"},
    {code: 'tstorm', yt: "NkvBZJk000k", start: "80", end: "120"},
    {code: 'rain_heavy', yt:"dmDwaSTya1M", start: "1800", end: "3000"},
    {code: 'rain', yt: "mCQUKdAHVdA", start: "3600", end: "3800"},
    {code: 'rain_light', yt: "yLyJtsux6r8", start: "3", end: "17"},
    {code: 'drizzle', yt: "NKhrWWmTxRk", start: "30", end: "50"},
    {code: 'fog_light', yt: "20FMk66S9No", start: "10", end: "70"},
    {code: 'fog', yt: "20FMk66S9No", start: "10", end: "70"},
    {code: 'cloudy', yt: "IJmdAfWkgUw", start: "0", end: "10"},
    {code: 'mostly_cloudy', yt: "wB_pv5WUlZU", start: "0", end: "30"},
    {code: 'partly_cloudy', yt: "YuSZ-vDAKRg", start: "5", end: "40"},
    {code: 'mostly_clear', yt: "ejg2WvD6Y1c", start: "0", end: "30"},
    {code: 'clear', yt: "0_jNjpVxUt0", start: "0", end: "30"},
  ]


function weatherLookup(condition) {
    for(var i = 0; i < weatherLinks.length; i++) {
        if (weatherLinks[i].code === condition) {
            return weatherLinks[i].yt
        } 
    }
}

function weatherStart(condition) {
    for(var i = 0; i < weatherLinks.length; i++) {
        if (weatherLinks[i].code === condition) {
            return weatherLinks[i].start
        } 
    }
}

function weatherEnd(condition) {
    for(var i = 0; i < weatherLinks.length; i++) {
        if (weatherLinks[i].code === condition) {
            return weatherLinks[i].end
        } 
    }
}


const CurrentWeatherBackground = props => {

    const backgroundLink = weatherLookup(props.code)
    const start = weatherStart(props.code)
    const end = weatherEnd(props.code)
    const link2 = `https://www.youtube.com/watch?v=${backgroundLink}&start=${start}&end=${end}`

    return (

        <div>
            <div className="bg-cover"/>
            <div  className="bg-container" id={"bg-"+props.currentWeather}>
                <ReactPlayer
                    url={link2}
                    config={{
                        youtube : {
                            playerVars: {
                                start: start,
                                end: end,
                            }
                        }
                    }}
                    id={"bg-video-"+props.inputFocus}
                    width='100%'
                    height='100%'
                    loop={true}
                    volume={0}
                    muted
                    muted={true}
                    autoplay={true}
                    controls={false}
                    playing={true}
                />
            </div>
        </div>
    );
}


export default CurrentWeatherBackground;