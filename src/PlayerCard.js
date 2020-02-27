import React from 'react';

const scissors = "https://i.imgur.com/pgjyhIZ.png";
const rock = "https://i.imgur.com/LghSkIw.png";
const papper = "https://i.imgur.com/2gsdqvR.png";

const PlayerCard = (props) => {
  return (
    <div className="player-card">{props.sign}</div>
  )
}

export default PlayerCard;
