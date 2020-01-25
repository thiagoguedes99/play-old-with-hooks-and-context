import React, { useContext } from 'react';

import GameContext from '../../contexts/game-context';

import './index.css';

export default function Winner() {
  const { winner } = useContext(GameContext);

  return (
    <div>
      <h1>Ganhador: {winner}</h1>
    </div>
  );
}
