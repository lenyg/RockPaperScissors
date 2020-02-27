import React, {Component} from 'react';
import PlayerCard from './PlayerCard';

class Game extends Component {
  constructor (){
  super();
  this.signs = ["rock","scissors", "paper"];
  this.state = {
    playerOne: "rock",
    playerTwo: "paper",
  }
}

//This is where my methods live!
playGame = () => {
  this.setState({
    playerOne: this.signs[Math.floor(Math.random() * 3)],
    playerTwo: this.signs[Math.floor(Math.random() * 3)],
  })
}
decideWinner = () => {
  if(this.state.playerOne === this.state.playerTwo){
    return "It's a Tie!"
  }
  if(
    ((this.state.playerOne === this.signs[0]) && (this.state.playerTwo === this.signs[1]))
     ||
     ((this.state.playerOne === this.signs[1]) && (this.state.playerTwo === this.signs[2]))
     ||
     ((this.state.playerOne === this.signs[3]) && (this.state.playerTwo === this.signs[0]))) {
    return "Player One Wins!"
  }else {
    return "Player Two Wins!"
  }
}


  render() {
    return (
      <div className="container">
        <div>
        <PlayerCard sign={this.state.playerOne}/>
        <PlayerCard sign={this.state.playerTwo}/>
        </div>
        <div className="winner">{this.decideWinner()}</div>
        <button type="button" onClick={this.playGame}> Play Game </button>
      </div>

    )
  }
}

export default Game;
