export const REQUEST_ACCESSTOKEN = 'REQUEST_ACCESSTOKEN';
export const RECEIVE_ACCESSTOKEN = 'RECEIVE_ACCESSTOKEN';

export const requestAccessToken = code => ({
  type: REQUEST_ACCESSTOKEN,
  code
});

export const receiveAccessToken = ({ access_token, user }) => ({
  type: REQUEST_ACCESSTOKEN,
  accessToken: access_token,
  user
});
