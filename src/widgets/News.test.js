import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import News from './News';
import Date from './Date';
import NewsSource from './NewsSource';

const props = {
  title: 'NewsTitleTest',
  source: 'NewsSourceTest',
  date: '2019-02-28T23:07:51.4030325Z',
  url: 'NewsUrlTest',
};

describe('<News/>', () => {
  expect(renderer.create(<News {...props} />).toJSON()).toMatchSnapshot();
  it('it has the title', () => {
    const wrapper = shallow(<News {...props} />);
    expect(wrapper.find('a').text()).toEqual(props.title);
  });
  it('it has the Date widget', () => {
    const wrapper = shallow(<News {...props} />);
    expect(wrapper.find(Date).length).toEqual(1);
  });
  it('it has the NewsSource widget', () => {
    const wrapper = shallow(<News {...props} />);
    expect(wrapper.find(NewsSource).length).toEqual(1);
  });
});
