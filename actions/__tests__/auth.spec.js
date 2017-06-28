import { REQUEST_ACCESSTOKEN, RECEIVE_ACCESSTOKEN } from '../../constants/auth';
import * as actions from '../auth';

describe('auth action', () => {
  test('requestAccessToken should create requestAccessToken action', () => {
    expect(actions.requestAccessToken(123)).toEqual({
      type: REQUEST_ACCESSTOKEN,
      code: 123
    });
  });

  test('receiveAccessToken should create receiveAccessToken action', () => {
    expect(
      actions.receiveAccessToken({
        access_token: 123456,
        user: {
          id: 1,
          username: 'neighborhood999'
        }
      })
    ).toEqual({
      type: RECEIVE_ACCESSTOKEN,
      accessToken: 123456,
      user: {
        id: 1,
        username: 'neighborhood999'
      }
    });
  });
});
