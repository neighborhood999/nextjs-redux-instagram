// @flow

import type { UserAction } from '../types';
import * as UserConstants from '../constants/user';

export const requestUserAndPhotos = (): UserAction => ({
  type: UserConstants.REQUEST_USER_AND_PHOTOS
});

export const receiveUser = (info: {}): UserAction => ({
  type: UserConstants.RECEIVE_USER,
  info
});

export const receiveSelfPhotos = (photos: Array<{}>): UserAction => ({
  type: UserConstants.RECEIVE_SELF_PHOTOS,
  photos
});
