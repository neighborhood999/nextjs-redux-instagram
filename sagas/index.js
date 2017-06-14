import { all, call, take, put, fork } from 'redux-saga/effects';
import { requestApiToken } from '../api';
import * as actions from '../actions/auth';

export function* watchLoadAccessToken() {
  while (true) {
    const { code } = yield take(actions.REQUEST_ACCESSTOKEN);
    const { data: { access_token, user } } = yield call(requestApiToken, code);
    yield put(actions.receiveAccessToken({ access_token, user }));
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchLoadAccessToken)
  ]);
}
