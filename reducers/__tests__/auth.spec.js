import auth from '../auth';
import { REQUEST_ACCESSTOKEN, RECEIVE_ACCESSTOKEN } from '../../actions/auth';

describe('auth reducer', () => {
  test('should be handle initial state', () => {
    expect(auth(undefined, {})).toEqual({
      needAuthentication: true,
      code: '',
      accessToken: '',
      user: {}
    });
  });

  test('should be handle REQUEST_ACCESSTOKEN', () => {
    expect(
      auth(
        {
          needAuthentication: true,
          code: '',
          accessToken: '',
          user: {}
        },
        {
          type: REQUEST_ACCESSTOKEN,
          code: 'd97612b276981b09b28bf00b5c379bb2'
        }
      )
    ).toEqual({
      needAuthentication: true,
      code: 'd97612b276981b09b28bf00b5c379bb2',
      accessToken: '',
      user: {}
    });
  });

  test('should be handle RECEIVE_ACCESSTOKEN', () => {
    expect(
      auth(
        {
          needAuthentication: true,
          code: 'd97612b276981b09b28bf00b5c379bb2',
          accessToken: '',
          user: {}
        },
        {
          type: RECEIVE_ACCESSTOKEN,
          accessToken: 'bee308fb3a208e96be92accbe370f151',
          user: { id: 1, username: 'neighborhood999' }
        }
      )
    ).toEqual({
      needAuthentication: false,
      code: 'd97612b276981b09b28bf00b5c379bb2',
      accessToken: 'bee308fb3a208e96be92accbe370f151',
      user: { id: 1, username: 'neighborhood999' }
    });
  });
});
