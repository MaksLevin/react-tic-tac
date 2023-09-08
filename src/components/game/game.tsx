import React, { FunctionComponent, useState } from 'react';
import Button from '@mui/material/Button';

import { UsersDataProps } from '../../core/models/user-model';
import Board from '../board';

import './game.scss';

const Game: FunctionComponent<UsersDataProps> = ({ usersData }) => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: string[]): void {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number): void {
    setCurrentMove(nextMove);
  }

  const historyMoves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <Button key={move} onClick={() => jumpTo(move)} size="small">
        {description}
      </Button>
    );
  });

  return (
    <section className="wrapper">
      <div className="users-board">
        <p className="text-body1-blue">First Player: {usersData.firstPlayer}</p>
        <p className="text-body1-blue">Second Player: {usersData.secondPlayer}</p>
      </div>
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-history">
          <h3 className="game-history-title text-h3">History</h3>
          <div className="game-history-buttons">{historyMoves}</div>
        </div>
      </div>
    </section>
  );
};

export default Game;
