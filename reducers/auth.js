import { REQUEST_ACCESSTOKEN, RECEIVE_ACCESSTOKEN } from '../actions';

const auth = (
  state = {
    needAuthentication: true,
    accessToken: '',
    user: {}
  },
  action
) => {
  switch (action.type) {
    case REQUEST_ACCESSTOKEN:
      return { ...state };
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
