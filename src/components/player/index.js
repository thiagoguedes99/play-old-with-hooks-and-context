import React, { useContext } from 'react';

import GameContext from '../../contexts/game-context';

import './index.css';

export default function Player() {
  const { isXNext } = useContext(GameContext);

  return (
    <div>
      <h1>player: {isXNext ? 'X' : 'O'}</h1>
    </div>
  );
}
