import { all, call, take, put, fork, select } from 'redux-saga/effects';
import fetchJSONP from 'fetch-jsonp';
import { requestApiToken } from '../api';
import { endPoint } from '../utils';
import { selectAuthState } from '../reducers/selectors';
import * as authConstants from '../constants/auth';
import * as authActions from '../actions/auth';
import * as userConstants from '../constants/user';
import * as userActions from '../actions/user';

export function* fetchInstagramAPIEndpoints(id, token, path) {
  const response = yield call(fetchJSONP, endPoint(id, token, path));
  const { data } = yield response.json();

  return data;
}

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

export function* watchLoadAccessToken() {
  while (true) {
    const { code } = yield take(authConstants.REQUEST_ACCESSTOKEN);
    const { data: { access_token, user } } = yield call(requestApiToken, code);
    yield put(authActions.receiveAccessToken({ access_token, user }));
  }
}

export function* watchFetchUserProfileAndPhotos() {
  while (true) {
    yield take(userConstants.REQUEST_USER_AND_PHOTOS);
    const { accessToken, user: { id } } = yield select(selectAuthState);

    // Fetch User Profile
    const data = yield call(fetchInstagramAPIEndpoints, id, accessToken);
    yield put(userActions.receiveUser(data));

    // Fetch User Photos
    const photos = yield call(
      fetchInstagramAPIEndpoints,
      id,
      accessToken,
      'media/recent/'
    );
    yield put(userActions.receiveSelfPhotos(photos));
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchLoadAccessToken),
    fork(watchFetchUserProfileAndPhotos)
  ]);
}
