import { put, takeEvery, call } from '@redux-saga/core/effects';

import { FetchUserAvatarSuccess, PostUserAvatarSuccess } from './users-login.action';
import { fetchWrapper } from '../../api/api';
import { setUserAvatarSuccess } from './users-login.actionCreators';

const fetchUserAvatarFromApi = () => fetchWrapper.get('/users/1');

function* fetchUserAvatar(): any {
  const data = yield call(fetchUserAvatarFromApi);
  const dataJson = yield call(() => new Promise((res) => res(data.json())));
  yield put(setUserAvatarSuccess(dataJson.playerAvatar));
}

function* postUserAvatar(value: any): any {
  const postUserAvatarToApi = () =>
    fetchWrapper.post('/users', { id: 1, playerAvatar: value.playerAvatar });
  yield call(postUserAvatarToApi);
}

export function* fetchUserAvatarWatcher() {
  yield takeEvery(FetchUserAvatarSuccess, fetchUserAvatar);
}

export function* postUserAvatarWatcher() {
  yield takeEvery(PostUserAvatarSuccess, postUserAvatar);
}
