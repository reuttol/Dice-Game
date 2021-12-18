import React from "react";
import './button.css'

class Button extends React.Component{
    render(){
        return (
            <button onClick={this.props.onClick}>{this.props.display}</button>
        )
    }
}

export default Button;