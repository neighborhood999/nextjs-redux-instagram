import * as actions from '../auth';

describe('auth action', () => {
  test('requestAccessToken should create requestAccessToken action', () => {
    expect(actions.requestAccessToken(123)).toEqual({
      type: actions.REQUEST_ACCESSTOKEN,
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
      type: actions.RECEIVE_ACCESSTOKEN,
      accessToken: 123456,
      user: {
        id: 1,
        username: 'neighborhood999'
      }
    });
  });
});
