// @flow

import type { AuthAction } from '../types';
import { REQUEST_ACCESSTOKEN, RECEIVE_ACCESSTOKEN } from '../constants/auth';

export const requestAccessToken = (code: string): AuthAction => ({
  type: REQUEST_ACCESSTOKEN,
  code
});

export const receiveAccessToken = ({
  access_token,
  user
}: {
  access_token: string,
  user: {}
}): AuthAction => ({
  type: RECEIVE_ACCESSTOKEN,
  accessToken: access_token,
  user
});
