import React from 'react';
import loading from '../Assets/loading.svg'
/* eslint-disable */


const stateArray = [
    {stateName: "Alabama", stateCode: "AL"},
    {stateName: "Alaska", stateCode: "AK"},
    {stateName: "Arizona", stateCode: "AZ"},
    {stateName: "Arkansas", stateCode: "AR"},
    {stateName: "California", stateCode: "CA"},
    {stateName: "Colorado", stateCode: "CO"},
    {stateName: "Connecticut", stateCode: "CT"},
    {stateName: "Delaware", stateCode: "DE"},
    {stateName: "District of Columbia", stateCode: "DC"},
    {stateName: "Florida", stateCode: "FL"},
    {stateName: "Georgia", stateCode: "GA"},
    {stateName: "Hawaii", stateCode: "HI"},
    {stateName: "Idaho", stateCode: "ID"},
    {stateName: "Illinois", stateCode: "IL"},
    {stateName: "Indiana", stateCode: "IN"},
    {stateName: "Iowa", stateCode: "IA"},
    {stateName: "Kansas", stateCode: "KS"},
    {stateName: "Kentucky", stateCode: "KY"},
    {stateName: "Louisiana", stateCode: "LA"},
    {stateName: "Maine", stateCode: "ME"},
    {stateName: "Maryland", stateCode: "MD"},
    {stateName: "Massachusetts", stateCode: "MA"},
    {stateName: "Michigan", stateCode: "MI"},
    {stateName: "Minnesota", stateCode: "MN"},
    {stateName: "Mississippi", stateCode: "MS"},
    {stateName: "Missouri", stateCode: "MO"},
    {stateName: "Montana", stateCode: "MT"},
    {stateName: "Nebraska", stateCode: "NE"},
    {stateName: "Nevada", stateCode: "NV"},
    {stateName: "New Hampshire", stateCode: "NH"},
    {stateName: "New Jersey", stateCode: "NJ"},
    {stateName: "New Mexico", stateCode: "NM"},
    {stateName: "New York", stateCode: "NY"},
    {stateName: "North Carolina", stateCode: "NC"},
    {stateName: "North Dakota", stateCode: "ND"},
    {stateName: "Ohio", stateCode: "OH"},
    {stateName: "Oklahoma", stateCode: "OK"},
    {stateName: "Oregon", stateCode: "OR"},
    {stateName: "Pennsylvania", stateCode: "PA"},
    {stateName: "Rhode Island", stateCode: "RI"},
    {stateName: "South Carolina", stateCode: "SC"},
    {stateName: "South Dakota", stateCode: "SD"},
    {stateName: "Tennessee", stateCode: "TN"},
    {stateName: "Texas", stateCode: "TX"},
    {stateName: "Utah", stateCode: "UT"},
    {stateName: "Vermont", stateCode: "VT"},
    {stateName: "Virginia", stateCode: "VA"},
    {stateName: "Washington", stateCode: "WA"},
    {stateName: "West Virginia", stateCode: "WV"},
    {stateName: "Wisconsin", stateCode: "WI"},
    {stateName: "Wyoming", stateCode: "WY"},
]


const Form = props => {

    const stateMap = stateArray.map((i, index) => (<option id="state-option" value={stateArray[index].stateCode} key={index}> {i.stateCode} </option>))

    return(
        <div id="form-box" className="form-box" style={props.style}>

            {props.loading === false ? 
            <form 
                className="form-container" 
                onSubmit={props.getWeather}
            >

                <input type="text" name="input_1" id="main-input" placeholder="Enter City or Zip Code" onFocus={props.inputFocused} onBlur={props.inputUnfocused} onInput={props.checkInputState} style={props.inputState} />

                <select name="input_2" id="second-input" placeholder="Enter" style={props.formState} onFocus={props.inputFocused} onBlur={props.inputUnfocused}>
                    {stateMap}
                </select>

                <button id="main-button" style={props.buttonState}>+</button>

            </form> : <div/>
            }

            
            {props.loading &&
                <div className="loading-container">
                    <img className='loading' src={loading}/>
                </div>
            }




            {props.error !== undefined ? 
                <div className="error"> {props.error}</div> : <div/>
                }
        </div>
    )
}

export default Form;