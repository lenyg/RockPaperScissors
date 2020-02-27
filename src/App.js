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
  render() {
    return (
      <div className="container">
        <div>
        <PlayerCard sign={this.state.playerOne}/>
        <PlayerCard sign={this.state.playerTwo}/>
        </div>
        <div className="winner">Here is the winner</div>
        <button type="button"> Play Game </button>
      </div>

    )
  }
}

export default Game;
