// @flow

import type { AuthState, Action } from '../types';
import { REQUEST_ACCESSTOKEN, RECEIVE_ACCESSTOKEN } from '../constants/auth';

const auth = (
  state: AuthState = {
    needAuthentication: true,
    code: '',
    accessToken: '',
    user: {}
  },
  action: Action
): AuthState => {
  switch (action.type) {
    case REQUEST_ACCESSTOKEN:
      return {
        ...state,
        code: action.code
      };
    case RECEIVE_ACCESSTOKEN:
      return {
        ...state,
        needAuthentication: false,
        accessToken: action.accessToken,
        user: action.user
      };
    default:
      return state;
  }
};

export default auth;
