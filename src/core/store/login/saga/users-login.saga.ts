import { put, takeEvery, call } from '@redux-saga/core/effects';

import { FetchUserAvatarSuccess } from '../actions/users-login.action';
import { fetchWrapper } from '../../../api/api';
import { setUserAvatarSuccess } from '../actionCreators/users-login.actionCreators';

const fetchUserAvatarFromApi = () => fetchWrapper.get('/users/1');

function* fetchUserAvatar(): any {
  const data = yield call(fetchUserAvatarFromApi);
  const dataJson = yield call(() => new Promise((res) => res(data.json())));
  yield put(setUserAvatarSuccess(dataJson.playerAvatar));
}

export default function* fetchUserAvatarWatcher() {
  yield takeEvery(FetchUserAvatarSuccess, fetchUserAvatar);
}
