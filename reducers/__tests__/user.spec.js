import user from '../user';
import { mockUser, mockPhotos } from '../../actions/__tests__/user.spec';
import {
  REQUEST_USER_AND_PHOTOS,
  RECEIVE_USER,
  RECEIVE_SELF_PHOTOS
} from '../../actions/user';

describe('user reducer', () => {
  test('should be handle initial state', () => {
    expect(user(undefined, {})).toEqual({
      isFetching: false,
      userDetails: {},
      photos: []
    });
  });

  test('should be handle REQUEST_USER_AND_PHOTOS state', () => {
    expect(
      user(
        {
          isFetching: false,
          userDetails: {},
          photos: []
        },
        { type: REQUEST_USER_AND_PHOTOS }
      )
    ).toEqual({
      isFetching: true,
      userDetails: {},
      photos: []
    });
  });

  test('should be handle RECEIVE_USER state', () => {
    expect(
      user(
        {
          isFetching: true,
          userDetails: {},
          photos: []
        },
        { type: RECEIVE_USER, info: mockUser }
      )
    ).toEqual({
      isFetching: false,
      userDetails: mockUser,
      photos: []
    });
  });

  test('should be handle RECEIVE_SELF_PHOTOS state', () => {
    expect(
      user(
        {
          isFetching: true,
          userDetails: {},
          photos: []
        },
        { type: RECEIVE_SELF_PHOTOS, photos: mockPhotos }
      )
    ).toEqual({
      isFetching: false,
      userDetails: {},
      photos: mockPhotos
    });
  });
});
