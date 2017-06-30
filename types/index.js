// @flow

import { REQUEST_ACCESSTOKEN, RECEIVE_ACCESSTOKEN } from '../constants/auth';
import {
  REQUEST_USER_AND_PHOTOS,
  RECEIVE_USER,
  RECEIVE_SELF_PHOTOS
} from '../constants/user';

export type AuthAction =
  | { type: typeof REQUEST_ACCESSTOKEN, +code: string }
  | { type: typeof RECEIVE_ACCESSTOKEN, +accessToken: string, +user: {} };

export type UserAction =
  | { type: typeof REQUEST_USER_AND_PHOTOS }
  | { type: typeof RECEIVE_USER, +info: {} }
  | { type: typeof RECEIVE_SELF_PHOTOS, +photos: Array<{}> };

export type Action = AuthAction | UserAction;

export type AuthState = {
  +needAuthentication: boolean,
  +code: string,
  +accessToken: string,
  +user: {}
};

export type UserState = {
  +isFetching: boolean,
  +isFetchingPhotos: boolean,
  +isDone: boolean,
  +isDonePhotos: boolean,
  +userDetails: {},
  +photos: Array<{}>
};
