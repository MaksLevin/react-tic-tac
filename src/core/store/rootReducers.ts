import { combineReducers } from 'redux';

import { reducerLoginUser } from './login/users-login.reducer';

export const rootReducer = combineReducers({
  reducerLoginUser,
});
