import {
  REQUEST_USER_AND_PHOTOS,
  RECEIVE_USER,
  RECEIVE_SELF_PHOTOS
} from '../../constants/user';
import * as actions from '../user';

export const mockUser = {
  data: {
    id: 1,
    username: 'P.J',
    full_name: 'neighborhood999',
    profile_picture: 'http://distillery.s3.amazonaws.com/profiles/test.jpg',
    bio: 'A guy who write some code.',
    website: 'https://github.com/neighborhood999',
    counts: {
      media: 999,
      follows: 999,
      followed_by: 999
    }
  }
};

export const mockPhotos = {
  pagination: {},
  data: [
    {
      id: '1531091099493110630_291769334',
      user: {
        id: '291769334',
        full_name: 'P.J',
        profile_picture:
          'https://scontent.cdninstagram.com/t51.2885-19/s150x150/test1_a.jpg',
        username: 'bivinity'
      },
      images: {
        thumbnail: {
          width: 150,
          height: 150,
          url:
            'https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/test1_n.jpg'
        },
        low_resolution: {
          width: 320,
          height: 320,
          url:
            'https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/test1_n.jpg'
        },
        standard_resolution: {
          width: 640,
          height: 640,
          url:
            'https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/test1_n.jpg'
        }
      },
      created_time: '1496835790',
      caption: {
        id: '17868762136080570',
        text: '夏日園遊會 🍕',
        created_time: '1496835790',
        from: {
          id: '291769334',
          full_name: 'P.J',
          profile_picture:
            'https://scontent.cdninstagram.com/t51.2885-19/s150x150/test1_a.jpg',
          username: 'bivinity'
        }
      },
      user_has_liked: false,
      likes: {
        count: 40
      },
      tags: [],
      filter: 'Normal',
      comments: {
        count: 4
      },
      type: 'image',
      link:
        'https://www.instagram.com/p/BVCX7-Ig6NmFGe5BjH0eaiB1QkABnZJSV3HHTY0/',
      location: {
        latitude: 25.03583064,
        longitude: 121.566263635,
        name: 'Commune A7',
        id: 1000478093421678
      },
      attribution: null,
      users_in_photo: []
    }
  ]
};

describe('user action', () => {
  test('requestUserAndPhotos should create requestUserAndPhotos action', () => {
    expect(actions.requestUserAndPhotos()).toEqual({ type: REQUEST_USER_AND_PHOTOS });
  });

  test('receiveUser should create receiveUser action', () => {
    expect(actions.receiveUser(mockUser)).toEqual({
      type: RECEIVE_USER,
      info: mockUser
    });
  });

  test('receiveSelfPhotos should create receiveSelfPhotos action', () => {
    expect(actions.receiveSelfPhotos(mockPhotos)).toEqual({
      type: RECEIVE_SELF_PHOTOS,
      photos: mockPhotos
    });
  });
});
