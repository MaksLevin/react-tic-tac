import React, { FunctionComponent } from 'react';

import './square.scss';

type SquarePropsType = {
  value: string;
  onSquareClick(): void;
};

const Square: FunctionComponent<SquarePropsType> = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
