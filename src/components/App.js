import React from "react";
import Player from './Player';
import Control from './Control';
import './app.css'

class App extends React.Component{

    state = {finalScore: 0}

    setFinalScore = (value) => this.setState({finalScore : value});

    render(){
        return (
            <div className="app">
                <Player curPlayer='1' />
                <Player curPlayer='2'/>
                <Control getFinalScore={this.setFinalScore} />
    
            </div>
        )
    }
}

export default App;