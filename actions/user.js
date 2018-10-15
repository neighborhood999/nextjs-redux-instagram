import * as UserConstants from '../constants/user';

export const requestUserAndPhotos = () => ({
  type: UserConstants.REQUEST_USER_AND_PHOTOS
});

export const receiveUser = (info = {}) => ({
  type: UserConstants.RECEIVE_USER,
  info
});

export const receiveSelfPhotos = (photos = []) => ({
  type: UserConstants.RECEIVE_SELF_PHOTOS,
  photos
});
