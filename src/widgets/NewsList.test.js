import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { NewsListElement } from './NewsList';
import News from './News';

const props = {
  news: {
    ids: [1, 2],
    source: null,
    byId: {
      1: {
        title: 'title1',
        source: {
          id: 'sourceid',
          name: 'sourcename',
        },
        date: '2019-02-28T23:07:51.4030325Z',
        url: 'url',
      },
      2: {
        title: 'title2',
        source: {
          id: 'sourceid',
          name: 'sourcename',
        },
        date: '2019-02-28T23:07:51.4030325Z',
        url: 'url',
      },
    },
  },
};

describe('<NewsList/>', () => {
  expect(renderer.create(<NewsListElement {...props} />).toJSON()).toMatchSnapshot();
  it('it has the same number of News elements as news articles provided via props', () => {
    const wrapper = shallow(<NewsListElement {...props} />);
    expect(wrapper.find(News).length).toEqual(props.news.ids.length);
  });
});
