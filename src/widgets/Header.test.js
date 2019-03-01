import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { HeaderElement } from './Header';
import ComboBox from './ComboBox';

const dummyFunction = () => {};

const props = {
  fetchNews: dummyFunction,
  setSource: dummyFunction,
  setPageNumber: dummyFunction,
  clearList: dummyFunction,
  pageNumber: 1,
  news: { source: 'test' },
  sources: { ids: [], byId: {} },
};

describe('<HeaderElement/>', () => {
  it('renders the header with the filter selector', () => {
    const wrapper = shallow(<HeaderElement {...props} />);
    expect(wrapper.find(ComboBox).length).toEqual(1);

    expect(renderer.create(<HeaderElement {...props} />).toJSON()).toMatchSnapshot();
  });
});
