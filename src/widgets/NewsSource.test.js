import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import NewsSource from './NewsSource';

const props = {
  sourceName: 'newsSourceTest',
};

describe('<NewsSource/>', () => {
  expect(renderer.create(<NewsSource {...props} />).toJSON()).toMatchSnapshot();
  it('renders the news source widget with the correct name', () => {
    const wrapper = shallow(<NewsSource {...props} />);
    expect(wrapper.text()).toEqual(props.sourceName);
  });
});
