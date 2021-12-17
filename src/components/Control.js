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
    render(){
        return (
            <div className="control">
                <div className="control__new-game">New Game</div>
                <div>Roll Dice</div>
                <div>Hold</div>
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