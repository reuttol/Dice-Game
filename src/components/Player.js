import React from "react";
import './player.css'

class Player extends React.Component{

    state = {}

    render(){
        return (
            <div className="player">
                {/* {console.log(this.props.player)} */}
                <div className="player__header">
                    <h2>{`Player ${this.props.player.name}`}</h2>
                    <div className="Player__header-circle"></div>
                </div>
                <div className="player__total-score">{this.props.player.totalScore}</div>
                <div className="player__current-score">
                    <div>Current</div>
                    <div>{this.props.player.currentScore}</div>
                </div>
            </div> 
        )
    }
}

export default Player;