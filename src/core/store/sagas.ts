import { all } from '@redux-saga/core/effects';
import { fetchUserAvatarWatcher, postUserAvatarWatcher } from './login/users-login.saga';

export function* rootWatcher() {
  yield all([fetchUserAvatarWatcher(), postUserAvatarWatcher()]);
}
