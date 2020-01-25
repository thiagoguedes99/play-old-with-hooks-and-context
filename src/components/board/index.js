import React, { useContext } from 'react';

import GameContext from '../../contexts/game-context';
import Square from '../../components/square';

import './index.css';

export default function Board() {
  // const context = useContext(GameContext);
  const { squares, setSquare } = useContext(GameContext);

  return (
    <div className="board__container">
      <div className="board">
        {squares.map((item, index) => (
          <Square value={item} index={index} />
        ))}
      </div>
    </div>
  );
}
