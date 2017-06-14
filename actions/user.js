export const REQUEST_USER_AND_PHOTOS = 'REQUEST_USER_AND_PHOTOS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_SELF_PHOTOS = 'RECEIVE_SELF_PHOTOS';

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
