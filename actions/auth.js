import { REQUEST_ACCESSTOKEN, RECEIVE_ACCESSTOKEN } from '../constants/auth';

export const requestAccessToken = code => ({
  type: REQUEST_ACCESSTOKEN,
  code
});

export const receiveAccessToken = ({
  access_token,
  user
}) => ({
  type: RECEIVE_ACCESSTOKEN,
  accessToken: access_token,
  user
});
