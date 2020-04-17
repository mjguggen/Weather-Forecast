import React from 'react'


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

const stateMap = stateArray.map((i, index) => (<option id="state-option" value={stateArray[index].stateCode} key={"stateName-"+index}> {i.stateCode} </option>))


const Nav = props => {

    const submitFunc = (event) => {
        props.getWeatherNav(event)
        setTimeout(props.navToggle(event), 3000)
    }

    const focusFunc = (event) => {
        props.inputFocused()
        props.zoom()
    }

    const blurFunc = (event) => {
        props.inputUnfocused()
        props.zoom()
    }

    return(
        <div>
            <div className="title">
                <h1 className="head"> WEATHER </h1>
                <input 
                    type="checkbox" 
                    id="nav-burger" 
                    onClick={props.navToggle} 
                />

                <div className="transparent-bg" />
                <div className="full-bar" />


                <label for="nav-burger" className="nav-icon">
                    <div className="burger-bar" style={props.burgerTop} id="burger-bar-1"/>
                    <div className="burger-bar" style={props.burgerMid} id="burger-bar-2"/ >
                    <div className="burger-bar" style={props.burgerBottom} id="burger-bar-3"/>
                </label>

                <div className="nav-dropdown" style={props.navDropDown}>
                    <form
                        className="nav-form"
                        onSubmit={submitFunc}
                        id="nav-form"
                    >
                        <div className="nav-labels" style={props.navSearch}>
                            <input 
                                type="text" 
                                id="navInput"
                                name="navInput"
                                className="nav-search-input"
                                placeholder="Add New City" 
                                onFocus={props.inputFocused} 
                                onBlur={props.inputUnfocused}
                                style={props.inputStateNav}
                                onInput={props.checkInputStateNav}
                            ></input>


                            <select name="navStateSelect" id="navStateSelect" placeholder="Enter" style={props.formStateNav} onFocus={props.inputFocused} onBlur={props.inputUnfocused}>
                                {stateMap}
                            </select>

                            <button name="nav-search-button"  id="nav-search-button" className="nav-search-button"> <img  className="plus-icon" src='https://www.freepnglogos.com/uploads/plus-icon/plus-icon-plus-sign-icon-icons-download-22.png'/> </button>

                            <label></label>
                        </div>
                    </form>

                    <input 
                        type="checkbox" 
                        id="nav-bg-toggle"
                        onClick={props.navToggle} 
                    />

                    <label for="nav-bg-toggle" className="nav-bg-toggle-btn" style={props.navDropDown} />

                    <div className="nav-dropdown-bg" style={props.navDropDown}/>
                    
                    <div className="nav-text">Recent Searches</div>
                    <div className="nav-recent"> {props.previousCityMap} </div>
                </div>


            </div>
        </div>
    )
}

export default Nav