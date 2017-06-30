import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import objectAssignDeep from 'object-assign-deep';
import Profile from '../Profile';
import { mockUser, mockPhotos } from '../../actions/__tests__/user.spec';

const setup = nextProps => {
  const props = objectAssignDeep(
    {
      user: {
        isFetching: false,
        isFetchingPhotos: false,
        isDone: false,
        isDonePhotos: false,
        userDetails: {},
        photos: []
      },
      actions: {
        requestUserAndPhotos: jest.fn(),
        receiveUser: jest.fn(),
        receiveSelfPhotos: jest.fn()
      }
    },
    nextProps
  );

  const component = mount(<Profile {...props} />);

  return {
    component,
    props
  };
};

describe('Profile Component', () => {
  test('Profile should be wrapped up in in lifecycle', () => {
    expect(Profile.displayName).toBe(
      'lifecycle(onlyUpdateForPropTypes(mapProps(Profile)))'
    );
  });

  test('ProfileSection and PhotosSection should be render Loader when fetching api', () => {
    const { component, props } = setup();

    expect(component.find('Loader')).toHaveLength(2);
    expect(component.find('Divider')).toHaveLength(1);
  });

  test('should called requestUserAndPhotos when componentDidMount', () => {
    const { props } = setup();

    expect(props.actions.requestUserAndPhotos).toBeCalled();
  });

  test('should render ProfileSection', () => {
    const { component, props } = setup({
      user: { isDone: true, userDetails: mockUser.data }
    });

    expect(component.find('h3').text()).toBe('P.J neighborhood999');
    expect(component.find('h4').text()).toBe('999 則貼文 | 999 位粉絲 | 追蹤 999 人');
    expect(component.find('small').at(1).text()).toBe(
      'A guy who write some code.'
    );

    const tree = renderer.create(<Profile {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render PhotosSection', () => {
    const { component, props } = setup({
      user: {
        isDonePhotos: true,
        userDetails: mockUser.data,
        photos: mockPhotos.data
      }
    });

    expect(component.find('Card')).toHaveLength(1);
    expect(component.find('CardContent').at(1).find('span').text()).toBe(
      ' 40 個讚'
    );

    const tree = renderer.create(<Profile {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
