import React from "react";
import Player from './Player/Player';
import Control from './Control/Control';
import Winner from "./Winner/Winner";
import './app.css'

class App extends React.Component{

    state = {finalScore: 20, 
        curPlayer: 1,
        winner: null,
        players: [
        {
          name: '1',
          totalScore: 0,
          currentScore: 0
        },
        {
          name: '2',
          totalScore: 0,
          currentScore: 0
        }
      ],
    }

    setFinalScore = (value) => this.setState({finalScore : value});

    getPlayerState = (playerState) => this.setState({player : playerState});

    changePlayer = () => {
        let tempCurPlayer = this.state.curPlayer;
        tempCurPlayer = (tempCurPlayer % this.state.players.length) + 1;
        this.setState({curPlayer: tempCurPlayer });
    }
    
    handleHold = () =>{
        const tempPlayers = this.state.players;
        const tempCurrentScore = this.state.players[this.state.curPlayer-1].currentScore;
        const tempTotalScore = this.state.players[this.state.curPlayer-1].totalScore;
        
        if(tempCurrentScore + tempTotalScore >= this.state.finalScore){
            this.setState({winner: this.state.curPlayer})
        }
        
        tempPlayers[this.state.curPlayer-1].totalScore = tempCurrentScore + tempTotalScore;
        tempPlayers[this.state.curPlayer-1].currentScore = 0;

        //change player 
        this.changePlayer();      
    }

    getDiceRoll = (rollSum) => {
        const tempPlayers = this.state.players;
        
        if(rollSum === 12){
            tempPlayers[this.state.curPlayer-1].currentScore = 0;
            this.changePlayer();
        }
        else{
            const tempCurrentScore = this.state.players[this.state.curPlayer-1].currentScore;
            tempPlayers[this.state.curPlayer-1].currentScore = tempCurrentScore + rollSum;
        }

        this.setState({players: tempPlayers});
    }

    startNewGame = () =>{
        this.setState({finalScore: 20, 
            curPlayer: 1,
            winner: null,
            players: [
            {
              name: '1',
              totalScore: 0,
              currentScore: 0
            },
            {
              name: '2',
              totalScore: 0,
              currentScore: 0
            }
          ],
        });
    }

    render(){
        return (
            <div className="app">
                <Player id="p1" player={this.state.players[0]} getPlayer={this.getPlayerState} active={`${this.state.curPlayer === 1 ? 'active' : ''}`}/>
                <Player id="p2" player={this.state.players[1]} getPlayer={this.getPlayerState} active={`${this.state.curPlayer === 2 ? 'active' : ''}`}/>
                <Control getFinalScore={this.setFinalScore} getDiceRoll={this.getDiceRoll} handleHold={this.handleHold} startNewGame={this.startNewGame} />
                {
                    this.state.winner && <Winner winner={this.state.winner} />
                }
    
            </div>
        )
    }
}

export default App;