import {
  REQUEST_USER_AND_PHOTOS,
  RECEIVE_USER,
  RECEIVE_SELF_PHOTOS
} from '../constants/user';

export const requestUserAndPhotos = () => ({
  type: REQUEST_USER_AND_PHOTOS
});

export const receiveUser = info => ({
  type: RECEIVE_USER,
  info
});

export const receiveSelfPhotos = photos => ({
  type: RECEIVE_SELF_PHOTOS,
  photos
});
