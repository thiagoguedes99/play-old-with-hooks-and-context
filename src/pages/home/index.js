// import React, { useState, useEffect } from 'react';
import React, { useState, useEffect, useContext } from 'react';

import GameContext from '../../contexts/game-context';
import Player from '../../components/player';
import Reset from '../../components/reset';
import Board from '../../components/board';
import Winner from '../../components/winner';
import History from '../../components/history';

import calculateWinner from '../../utils/calculateWinner';

export default function Home() {
  // const [squares, setSquare] = useState(Array(9).fill(null));
  // const [isXNext, setIsXNext] = useState(true);
  // const [winner, setWinner] = useState(null);
  // const [history, setHistory] = useState([]);
  const { squares, setWinner } = useContext(GameContext);

  useEffect(() => {
    const newWinner = calculateWinner(squares);

    newWinner && setWinner(newWinner);
    // return () => {
    //   cleanup
    // };
  }, [squares]);

  return (
    // <GameContext.Provider
    //   value={{
    //     squares,
    //     setSquare,
    //     isXNext,
    //     setIsXNext,
    //     winner,
    //     setWinner,
    //     history,
    //     setHistory,
    //   }}
    // >
    <GameContext.Provider>
      <Player />
      <Reset />
      <Board />
      <Winner />
      <History />
    </GameContext.Provider>
  );
}
