import React, { FunctionComponent } from 'react';

import './game.css';
import { UsersDataProps } from '../../core/models/user-model';

const Game: FunctionComponent<UsersDataProps> = (props) => {
  return (
    <section>
      <p>First Player: {props.usersData.firstPlayer}</p>
      <p>Second Player: {props.usersData.secondPlayer}</p>
    </section>
  );
};

export default Game;
