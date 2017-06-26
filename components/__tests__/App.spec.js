import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../App';

describe('App Component', () => {
  test('should render children component', () => {
    const wrapper = shallow(
      <App>
        <div>Hello World</div>
      </App>
    );
    expect(wrapper.contains(<div>Hello World</div>)).toBeTruthy();

    const component = renderer.create(
      <App>
        <div>Hello World</div>
      </App>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
