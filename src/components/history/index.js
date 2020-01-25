import React, { useContext } from 'react';

import GameContext from '../../contexts/game-context';

import './index.css';

export default function History() {
  const { history, setSquare, setIsXNext } = useContext(GameContext);

  function handleSetHistory({ squares, isXNext }) {
    setSquare(squares);
    setIsXNext(isXNext);
  }

  return (
    <div>
      <h1>history</h1>

      {history.map((item, index) => (
        <button type="button" onClick={() => handleSetHistory(item)}>
          Voltar para history: {index}
        </button>
      ))}
    </div>
  );
}
