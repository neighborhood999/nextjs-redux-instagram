// @flow

import type { UserState, Action } from '../types';
import {
  REQUEST_USER_AND_PHOTOS,
  RECEIVE_USER,
  RECEIVE_SELF_PHOTOS
} from '../constants/user';

const auth = (
  state: UserState = {
    isFetching: false,
    isFetchingPhotos: false,
    isDone: false,
    isDonePhotos: false,
    userDetails: {},
    photos: []
  },
  action: Action
) => {
  switch (action.type) {
    case REQUEST_USER_AND_PHOTOS:
      return {
        ...state,
        isFetching: true,
        isFetchingPhotos: true
      };
    case RECEIVE_USER:
      return {
        ...state,
        isFetching: false,
        isDone: true,
        userDetails: action.info
      };
    case RECEIVE_SELF_PHOTOS:
      return {
        ...state,
        isFetchingPhotos: false,
        isDonePhotos: true,
        photos: action.photos
      };
    default:
      return state;
  }
};

export default auth;
