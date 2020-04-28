import React from 'react';
import ReactPlayer from 'react-player'



/*
const weatherLinks = [
    {id: "Start", yt: "U6hRTzZ9Sjk",  start:"10", end: "180"},
    {id: "200", yt: "0U1v6XGcURg", start: "0", end: ""},
    {id: "201", yt: "0U1v6XGcURg", start: "0", end: ""},
    {id: "202", yt: "3KrjSbgiIPk", start: "5", end: "20"},
    {id: "230", yt: "yLyJtsux6r8", start: "5", end: "20"},
    {id: "231", yt: "yLyJtsux6r8", start: "130", end: "140"},
    {id: "232", yt: "nBYZpsbu9ds", start: "19", end: "37"},
    {id: "233", yt: "6zcAaRQ6cJQ", start: "15", end: "60"},
    {id: "300", yt: "yWAZXD7aAh0", start: "0", end: "10"},
    {id: "301", yt: "NKhrWWmTxRk", start: "30", end: "50"},
    {id: "302", yt: "NKhrWWmTxRk", start: "30", end: "50"},
    {id: "500", yt: "mCQUKdAHVdA", start: "3600", end: "3800"},
    {id: "501", yt: "yLyJtsux6r8", start: "3", end: "17"},
    {id: "502", yt: "oagszCmJLpU", start: "236", end: "260"},
    {id: "511", yt: "IfFCtzMMGPc", start: "3700", end: "4000"},
    {id: "520", yt: "mCQUKdAHVdA", start: "3600", end: "3800"},
    {id: "521", yt: "dmDwaSTya1M", start: "1800", end: "3000"},
    {id: "522", yt: "dmDwaSTya1M", start: "1800", end: "3000"},
    {id: "600", yt: "Wver_dJ-X5c", start: "600", end: "6000"},
    {id: "601", yt: "v_JyzOVZVM0", start: "3600", end: "7200"},
    {id: "602", yt: "CUaybv1jdHw", start: "3600", end: "7200"},
    {id: "610", yt: "IfFCtzMMGPc", start: "3900", end: "4400"},
    {id: "611", yt: "IfFCtzMMGPc", start: "3900", end: "4400"},
    {id: "612", yt: "IfFCtzMMGPc", start: "3900", end: "4400"},
    {id: "621", yt: "7jQ7wIBLVgg", start: "23", end: "33"},
    {id: "622", yt: "CUaybv1jdHw", start: "3600", end: "7200"},
    {id: "623", yt: "Wver_dJ-X5c", start: "3780", end: "4000"},
    {id: "700", yt: "20FMk66S9No", start: "10", end: "70"},
    {id: "711", yt:"9LrjAefu3jA", start: "5", end:"60"},
    {id: "721", yt:"eYEcmYde2Yo", start: "0", end:"180"},
    {id: "731", yt: "TC75USRhdho", start: "112", end: "118"},
    {id: "741", yt: "20FMk66S9No", start: "10", end: "70"},
    {id: "751", yt: "CRp8nRV28iA", start: "20", end: "35"},
    {id: "800", yt: "0_jNjpVxUt0", start: "0", end: "30"},
    {id: "801", yt: "7Kwllt_hCGI", start: "148", end: "155"},
    {id: "802", yt: "VkzDcQnyUyY", start: "32", end: "40"},
    {id: "803", yt: "VkzDcQnyUyY", start: "238", end: "250"},
    {id: "804", yt: "VkzDcQnyUyY", start: "215", end: "230"},
    {id: "900", yt: "gzSzIjc7wKI", start: "85", end: "90"}
]
*/

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

  /*
const weatherLinks = [
    {id: "Start", yt: "U6hRTzZ9Sjk",  start:"10", end: "180"},
    {id: "200", yt: "0U1v6XGcURg", start: "0", end: ""},
    {id: "201", yt: "0U1v6XGcURg", start: "0", end: ""},
    {id: "202", yt: "3KrjSbgiIPk", start: "5", end: "20"},
    {id: "230", yt: "yLyJtsux6r8", start: "5", end: "20"},
    {id: "231", yt: "yLyJtsux6r8", start: "130", end: "140"},
    {id: "232", yt: "nBYZpsbu9ds", start: "19", end: "37"},
    {id: "233", yt: "6zcAaRQ6cJQ", start: "15", end: "60"},
    {id: "300", yt: "yWAZXD7aAh0", start: "0", end: "10"},
    {id: "301", yt: "NKhrWWmTxRk", start: "30", end: "50"},
    {id: "302", yt: "NKhrWWmTxRk", start: "30", end: "50"},
    {id: "500", yt: "mCQUKdAHVdA", start: "3600", end: "3800"},
    {id: "501", yt: "yLyJtsux6r8", start: "3", end: "17"},
    {id: "502", yt: "oagszCmJLpU", start: "236", end: "260"},
    {id: "511", yt: "IfFCtzMMGPc", start: "3700", end: "4000"},
    {id: "520", yt: "mCQUKdAHVdA", start: "3600", end: "3800"},
    {id: "521", yt: "dmDwaSTya1M", start: "1800", end: "3000"},
    {id: "522", yt: "dmDwaSTya1M", start: "1800", end: "3000"},
    {id: "600", yt: "Wver_dJ-X5c", start: "600", end: "6000"},
    {id: "601", yt: "v_JyzOVZVM0", start: "3600", end: "7200"},
    {id: "602", yt: "CUaybv1jdHw", start: "3600", end: "7200"},
    {id: "610", yt: "IfFCtzMMGPc", start: "3900", end: "4400"},
    {id: "611", yt: "IfFCtzMMGPc", start: "3900", end: "4400"},
    {id: "612", yt: "IfFCtzMMGPc", start: "3900", end: "4400"},
    {id: "621", yt: "7jQ7wIBLVgg", start: "23", end: "33"},
    {id: "622", yt: "CUaybv1jdHw", start: "3600", end: "7200"},
    {id: "623", yt: "Wver_dJ-X5c", start: "3780", end: "4000"},
    {id: "700", yt: "20FMk66S9No", start: "10", end: "70"},
    {id: "711", yt:"9LrjAefu3jA", start: "5", end:"60"},
    {id: "721", yt:"eYEcmYde2Yo", start: "0", end:"180"},
    {id: "731", yt: "TC75USRhdho", start: "112", end: "118"},
    {id: "741", yt: "20FMk66S9No", start: "10", end: "70"},
    {id: "751", yt: "CRp8nRV28iA", start: "20", end: "35"},
    {id: "800", yt: "0_jNjpVxUt0", start: "0", end: "30"},
    {id: "801", yt: "7Kwllt_hCGI", start: "148", end: "155"},
    {id: "802", yt: "VkzDcQnyUyY", start: "32", end: "40"},
    {id: "803", yt: "VkzDcQnyUyY", start: "238", end: "250"},
    {id: "804", yt: "VkzDcQnyUyY", start: "215", end: "230"},
    {id: "900", yt: "gzSzIjc7wKI", start: "85", end: "90"}
]
*/

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
            <div className="bg-cover" />

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