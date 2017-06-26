import { call, take, put, select } from 'redux-saga/effects';
import {
  watchLoadAccessToken,
  watchFetchUserProfileAndPhotos,
  fetchInstagramAPIEndpoints
} from '../';
import fetchJSONP from 'fetch-jsonp';
import { endPoint } from '../../utils';
import { requestApiToken } from '../../api';
import { selectAuthState } from '../../reducers/selectors';
import * as authConstants from '../../constants/auth';
import * as authActions from '../../actions/auth';
import * as userActions from '../../actions/user';
import * as userConstants from '../../constants/user';
import { mockUser, mockPhotos } from '../../actions/__tests__/user.spec';

describe('redux saga', () => {
  test('should watch load access token flow', () => {
    const mockQueryCode = { code: 'fa8aa50f4a801cbb6d686309eafe3994' };
    const mockResponseData = {
      data: {
        access_token: '071785dd71832da26b273cf495aec8e8',
        user: {
          id: 1,
          username: 'neighrbohood999'
        }
      }
    };
    const generator = watchLoadAccessToken();

    expect(generator.next().value).toEqual(
      take(authConstants.REQUEST_ACCESSTOKEN)
    );

    expect(generator.next(mockQueryCode).value).toEqual(
      call(requestApiToken, 'fa8aa50f4a801cbb6d686309eafe3994')
    );

    const { data: { access_token, user } } = mockResponseData;
    expect(generator.next(mockResponseData).value).toEqual(
      put(authActions.receiveAccessToken({ access_token, user }))
    );
  });

  test('should watch fetch user profile and photos', () => {
    const generator = watchFetchUserProfileAndPhotos();
    const mockAuthState = {
      accessToken: '66bdb115508aae38640bffb69ffe32a6',
      user: {
        id: '999'
      }
    };

    expect(generator.next().value).toEqual(
      take(userConstants.REQUEST_USER_AND_PHOTOS)
    );

    expect(generator.next().value).toEqual(select(selectAuthState));

    expect(generator.next(mockAuthState).value).toEqual(
      call(
        fetchInstagramAPIEndpoints,
        mockAuthState.user['id'],
        mockAuthState.accessToken
      )
    );

    expect(generator.next(mockUser).value).toEqual(
      put(userActions.receiveUser(mockUser))
    );

    expect(generator.next().value).toEqual(
      call(
        fetchInstagramAPIEndpoints,
        mockAuthState.user['id'],
        mockAuthState.accessToken,
        'media/recent/'
      )
    );

    expect(generator.next(mockPhotos).value).toEqual(
      put(userActions.receiveSelfPhotos(mockPhotos))
    );
  });

  test('should create fetchInstagramAPIEndpoints Saga', () => {
    const mockID = '999';
    const mockToken = '66bdb115508aae38640bffb69ffe32a6';
    const mockResponse = {
      json() {
        return 'Something Data';
      }
    };
    const generator = fetchInstagramAPIEndpoints(mockID, mockToken);

    expect(generator.next().value).toEqual(
      call(fetchJSONP, endPoint(mockID, mockToken))
    );
    expect(generator.next(mockResponse).value).toEqual(mockResponse.json());
  });
});
