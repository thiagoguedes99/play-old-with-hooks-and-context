import React from 'react';
import ReactDOM from 'react-dom';

import { GameContextProvider } from './contexts/game-context';
import Home from './pages/home';

import './index.css';

ReactDOM.render(
  <GameContextProvider>
    <Home />
  </GameContextProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
