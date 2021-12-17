import React from "react";
import './player.css'

class Player extends React.Component{

    state = {currentScore: this.props.curScore, totalScore : this.props.totalScore}

    render(){
        return (
            <div className="player">
                <div className="player__header">
                    <h2>{`Player ${this.props.curPlayer}`}</h2>
                    <div className="Player__header-circle"></div>
                </div>
                <div className="player__total-score">0{this.state.totalScore}</div>
                <div className="player__current-score">
                    <div>Current</div>
                    <div>0{this.state.currentScore}</div>
                </div>
            </div> 
        )
    }
}

export default Player;