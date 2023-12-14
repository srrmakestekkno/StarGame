
import React, { useState } from 'react';
import "../styles/App.css";
import "../styles/index.css";
import Game from './Game';

// App logic to change state.
// UI logic to describe state.

const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  // unmount the previous game 
  // mount a new game with the new key
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />
}

export default StarMatch;