import React, { useContext } from 'react';

import GameContext from '../../contexts/game-context';

import './index.css';

export default function Square({ value, index }) {
  // const { squares, setSquare, isXNext, setIsXNext, winner } = useContext(
  //   GameContext
  // );

  // eslint-disable-next-line
  const {
    squares,
    setSquare,
    isXNext,
    setIsXNext,
    winner,
    history,
    setHistory,
  } = useContext(GameContext);

  function handleClick() {
    // if (squares[index]) return;

    if (squares[index] === null && winner === null) {
      const newSquares = [...squares];
      newSquares[index] = isXNext ? 'X' : 'O';
      setSquare(newSquares);
      setIsXNext(!isXNext);
      setHistory([...history, { squares: newSquares, isXNext: !isXNext }]);
    }
  }

  return (
    <button type="button" onClick={handleClick}>
      {value}
    </button>
  );
}
