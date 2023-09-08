import React, { FunctionComponent } from 'react';

import Square from '../square';
import { calculateWinner } from '../../utils/calculate-winner';

import './board.scss';

type BoardPropsType = {
  isXNext: boolean;
  squares: string[];
  onPlay(nextSquares: string[]): void;
};

const Board: FunctionComponent<BoardPropsType> = ({ isXNext, squares, onPlay }) => {
  function handleClick(squareIndex: number) {
    if (calculateWinner(squares) || squares[squareIndex]) {
      return;
    }
    const nextSquares = squares.slice();
    if (isXNext) {
      nextSquares[squareIndex] = 'X';
    } else {
      nextSquares[squareIndex] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (isXNext ? 'X' : 'O');
  }

  return (
    <>
      <h3 className="status text-h3">{status}</h3>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

export default Board;
