import { call, take, put } from 'redux-saga/effects';
import { watchLoadAccessToken } from '../';
import { requestApiToken } from '../../api';
import * as authActions from '../../actions/auth';

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
      take(authActions.REQUEST_ACCESSTOKEN)
    );

    expect(generator.next(mockQueryCode).value).toEqual(
      call(requestApiToken, 'fa8aa50f4a801cbb6d686309eafe3994')
    );

    const { data: { access_token, user } } = mockResponseData;
    expect(generator.next(mockResponseData).value).toEqual(
      put(authActions.receiveAccessToken({ access_token, user }))
    );
  });
});
