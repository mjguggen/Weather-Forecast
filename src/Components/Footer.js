import React from 'react';
import Form2 from '../Components/Form2'


class Footer extends React.Component {

    render(){
        return(
            <div className ="footer">
                <div className="full-bar" />
                <Form2
                    getWeather={this.props.getWeather}
                    getZipWeather={this.props.getZipWeather}
                    style={this.props.style}
                    inputFocused={this.props.inputFocused}
                    inputUnfocused={this.props.inputUnfocused}
                    error={this.props.error}
                    cityInput={this.props.cityInput}
                    cityInputted={this.props.cityInputted}
                    checkbox={this.props.checkbox}
                    checkboxMode={this.props.checkboxMode}
                />
                <div className="transparent-bg"/>

               
            </div>
        )
    }
}

export default Footer;