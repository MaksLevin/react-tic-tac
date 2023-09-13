import { combineReducers } from 'redux';

import { reducerLoginUser } from './login/reducers/users-login.reducer';

export const rootReducer = combineReducers({
  reducerLoginUser,
});
