import { createSelector } from 'reselect';

import { UsersData } from '../../../models/user-model';
import { StoreData } from '../../../models/store-model';

export const selectUserData = (state: StoreData) => state.reducerLoginUser;

export const selectUsersNames = createSelector(selectUserData, (items: UsersData) => items);

export const selectUsersAvatar = createSelector(
  selectUserData,
  (items: UsersData) => items.playerAvatar
);
