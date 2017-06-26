import {
  REQUEST_USER_AND_PHOTOS,
  RECEIVE_USER,
  RECEIVE_SELF_PHOTOS
} from '../constants/user';

const auth = (
  state = {
    isFetching: false,
    userDetails: {},
    photos: []
  },
  action
) => {
  switch (action.type) {
    case REQUEST_USER_AND_PHOTOS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_USER:
      return {
        ...state,
        isFetching: false,
        userDetails: action.info
      };
    case RECEIVE_SELF_PHOTOS:
      return {
        ...state,
        isFetching: false,
        photos: action.photos
      };
    default:
      return state;
  }
};

export default auth;
