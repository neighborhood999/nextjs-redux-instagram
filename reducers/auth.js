import { REQUEST_ACCESSTOKEN, RECEIVE_ACCESSTOKEN } from '../actions/auth';

const auth = (
  state = {
    needAuthentication: true,
    code: '',
    accessToken: '',
    user: {}
  },
  action
) => {
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
