import React from "react";
import './control.css'

class Control extends React.Component{
    state = {value: '', disabled: false};
    
    handleKeyDown = (e) =>{
        if(e.key !== 'Enter')
            return;
        this.setState({disabled: true});
        // communicate final score to game
        this.props.getFinalScore(e.target.value);

    }

    rollDice = () => {
        const a = Math.round(Math.random() * 6) + 1;
        const b = Math.round(Math.random() * 6) + 1;
        this.props.getDiceRoll(a+b);
    }

    render(){
        return (
            <div className="control">
                <button className="control__new-game" onClick={this.props.startNewGame}>New Game</button>
                <button onClick={this.rollDice}>Roll Dice</button>
                <button onClick={this.props.handleHold}>Hold</button>
                {/* {console.log("gg")} */}
                <div>
                    <input 
                        className="control__final-score" 
                        type="text" 
                        value={this.state.value}
                        onChange={(e) => this.setState({value: e.target.value})}
                        placeholder="Final Score"
                        onKeyDown={this.handleKeyDown}
                        disabled={this.state.disabled}
                    />
                </div>
            </div>
        );
    }
}

export default Control;