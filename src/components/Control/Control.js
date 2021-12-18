import React from "react";
import './control.css';
import Cube from "../Cube/Cube";
import Button from "../Button/Button";

class Control extends React.Component{
    state = {value: '', disabled: false, roll: false, cube1: 1, cube2: 1};
    
    handleKeyDown = (e) =>{
        if(e.key !== 'Enter')
            return;
        this.setState({disabled: true});
        // communicate final score to game
        this.props.getFinalScore(e.target.value);

    }

    handleHoldClick = () =>{
        this.setState({roll: false});
        this.props.handleHold();
    }

    startNewGame = () =>{
        this.setState({value: '', disabled: false, roll: false, cube1: 1, cube2: 1});
        this.props.startNewGame();
    }
    
    // suffle = () => console.log("ffff");
    
    rollDice = () => {
        this.setState({roll: true})
        setTimeout(()=>{}, 1000);
        const a = Math.floor(Math.random() * 6) + 1;
        const b = Math.floor(Math.random() * 6) + 1;
        this.setState({cube1: a});
        this.setState({cube2: b});
        this.props.getDiceRoll(a+b);
    }

    render(){
        return (
            <div className="control">
                <div className={`cube-container ${this.state.roll && "visible"}`}>
                    <Cube result={`dice-${this.state.cube1}`} />
                    <Cube result={`dice-${this.state.cube2}`} />
                </div>
                <div className="buttons-container">
                    <Button display="Roll Dice" onClick={this.rollDice} />
                    <Button display="Hold" onClick={this.handleHoldClick}/>
                    <Button display="New Game" onClick={this.startNewGame}/>
                    
                    <input 
                        className="control__final-score" 
                        type="text" 
                        value={this.state.value}
                        onChange={(e) => this.setState({value: e.target.value})}
                        placeholder="Final Score"
                        size="11"
                        onKeyDown={this.handleKeyDown}
                        disabled={this.state.disabled}
                    />
                </div>
            </div>
        );
    }
}

export default Control;