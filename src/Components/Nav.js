import React from 'react'

const navOn = {
    display: "block"
}

const navOff = {
    display: "none"
}

const burgerTopOff = {
    transformOrigin: "left top",
    transition: "all .5s",
    transform: "translateX(0px) rotate(0deg)",
}

const burgerTopOn = {
    transformOrigin: "left top",
    transition: "all .5s",
    transform: "translateX(5px) rotate(45deg)",
    boxShadow: "0 0 4px white",
}

const burgerMidOff = {
    transition: "opacity .2s",
    opacity: "1",
}
const burgerMidOn = {
    transition: "opacity .2s",
    opacity: "0",
}

const burgerBottomOff = {
    transition: "all .5s",
    transform: "translateX(0px) translateY(0px) rotate(0deg)",
}

const burgerBottomOn = {
    transition: "all .5s",
    transform: "translateX(0px) translateY(-10px) rotate(135deg)",
    boxShadow: "0 0 4px white"
}

const navDropDownOff = {
    transition: "left .5s",
    left: "-125vw"
}

const navDropDownOn = {
    transition: "left .5s",
    left: "0px"
}

const navSearchOff = {
    transition: "marginRight 3s",
    transitionDelay: "3s",
}

const navSearchOn = {
    transition: "marginRight 3s",
    transitionDelay: "3s",
}

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


class Nav extends React.Component {

    state = {
        navState: navOff,
        status: "off",
        burgertop: burgerTopOff,
        burgerMid: burgerMidOff,
        burgerBottom: burgerBottomOff,
        navDropDown: navDropDownOff,
        navSearch: navSearchOff,
    }

    navToggle = async () => {
        if (this.state.navState === navOff){
            await this.setState({
            navState : navOn,
            status: "show",
            burgerTop: burgerTopOn,
            burgerMid: burgerMidOn,
            burgerBottom: burgerBottomOn,
            navDropDown: navDropDownOn,
            navSearch: navSearchOn,
        })
        } else {
            await this.setState({
                navState: navOff,
                status: "hide",
                burgerTop: burgerTopOff,
                burgerMid: burgerMidOff,
                burgerBottom: burgerBottomOff,
                navDropDown: navDropDownOff,
                navSearch: navSearchOff,
            })
        }
    }

    submitFunc = (event) => {
        this.props.getWeatherNav(event)
        setTimeout(this.navToggle(event), 3000)
    }


    render() {
        return(
            <div>
                <div className="title">
                    <h1 className="head"> WEATHER </h1>
                    <input 
                        type="checkbox" 
                        id="nav-burger" 
                        onClick={this.navToggle} 
                    />

                    <div className="transparent-bg" />
                    <div className="full-bar" />


                    <label for="nav-burger" className="nav-icon">
                        <div className="burger-bar" style={this.state.burgerTop} id="burger-bar-1"/>
                        <div className="burger-bar" style={this.state.burgerMid} id="burger-bar-2"/ >
                        <div className="burger-bar" style={this.state.burgerBottom} id="burger-bar-3"/>
                    </label>

                    <div className="nav-dropdown" style={this.state.navDropDown}>
                        <form
                            className="nav-form"
                            onSubmit={this.submitFunc.bind(this)}
                            id="nav-form"
                        >
                            <div className="nav-labels" style={this.state.navSearch}>
                                <input 
                                    type="text" 
                                    id="navInput"
                                    name="navInput"
                                    className="nav-search-input"
                                    placeholder="Add New City" 
                                    onFocus={this.props.inputFocused} 
                                    onBlur={this.props.inputUnfocused}
                                    style={this.props.inputStateNav}
                                    onInput={this.props.checkInputStateNav}
                                ></input>


                                <select name="navStateSelect" id="navStateSelect" placeholder="Enter" style={this.props.formStateNav} onFocus={this.props.inputFocused} onBlur={this.props.inputUnfocused}>
                                    {stateMap}
                                </select>

                                <button name="nav-search-button"  id="nav-search-button" className="nav-search-button"> <img  className="plus-icon" src='https://www.freepnglogos.com/uploads/plus-icon/plus-icon-plus-sign-icon-icons-download-22.png'/> </button>

                                <label></label>
                            </div>
                        </form>

                        <input 
                            type="checkbox" 
                            id="nav-bg-toggle"
                            onClick={this.navToggle} 
                        />

                        <label for="nav-bg-toggle" className="nav-bg-toggle-btn" style={this.state.navDropDown} />

                        <div className="nav-dropdown-bg" style={this.state.navDropDown}/>
                        
                        <div className="nav-text">Recent Searches</div>
                        <div className="nav-recent"> {this.props.previousCityMap} </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default Nav