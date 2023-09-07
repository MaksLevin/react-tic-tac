import React, { FunctionComponent } from 'react';

import { UsersDataProps } from '../../core/models/user-model';

import './game.scss';

const Game: FunctionComponent<UsersDataProps> = ({ usersData }) => {
  return (
    <section>
      <p>First Player: {usersData.firstPlayer}</p>
      <p>Second Player: {usersData.secondPlayer}</p>
    </section>
  );
};

export default Game;
