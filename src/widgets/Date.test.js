import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Date from './Date';

const props = {
  date: '2019-02-28T23:07:51.4030325Z',
};

describe('<Date/>', () => {
  expect(renderer.create(<Date {...props} />).toJSON()).toMatchSnapshot();

  it('renders the date widget with the correct date', () => {
    const wrapper = shallow(<Date {...props} />);
    expect(wrapper.text()).toEqual('28/02/2019');
  });
});
