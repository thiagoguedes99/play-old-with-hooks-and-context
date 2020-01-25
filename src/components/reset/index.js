import React, { useContext } from 'react';

import GameContext from '../../contexts/game-context';

import './index.css';

export default function Reset() {
  const { setSquare, setIsXNext, setWinner, setHistory } = useContext(GameContext);

  function handleClick() {
    setSquare(Array(9).fill(null));
    setIsXNext(true);
    setIsXNext(true);
    setWinner(null);
    setHistory([]);
  }
  return (
    <div className="reset">
      <button type="button" className="reset__button" onClick={handleClick}>
        Reset
      </button>
    </div>
  );
}
