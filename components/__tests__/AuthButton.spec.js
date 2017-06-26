import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import AuthButton from '../AuthButton';

describe('AuthButton Component', () => {
  test('AuthButton should be wrapped up in onlyUpdateForPropTypes', () => {
    expect(AuthButton.displayName).toBe('onlyUpdateForPropTypes(AuthButton)');
  });

  test('should be `Authentication` text when authStatus is `true`', () => {
    const component = mount(<AuthButton authStatus={true} />);
    expect(component.find('a').text()).toBe('Authentication');

    const tree = renderer.create(<AuthButton authStatus={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should be `Profile` text when authStatus is `false`', () => {
    const component = mount(<AuthButton authStatus={false} />);
    expect(component.find('a').text()).toBe('Profile');

    const tree = renderer.create(<AuthButton authStatus={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
