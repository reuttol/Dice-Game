import React from "react";
import './winner.css'

class Winner extends React.Component{


    render(){
       return ( 
       <div className="winner-container">
            <h2>{`Congards player ${this.props.winner}!`}</h2>
            <h2>You Won!</h2>
        </div>
       );
    }
}

export default Winner