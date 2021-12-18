import React from "react";
import './cube.css';

class Cube extends React.Component{

    render(){
        return (
            <div>
                <div className={`dice ${this.props.result}`}></div>
            </div>
        );
    }

}

export default Cube;