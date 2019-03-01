import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { FooterElement } from './Footer';

const dummyFunction = () => {};

const props = {
  fetchNews: dummyFunction,
  setPageNumber: dummyFunction,
  pageNumber: 1,
  news: { source: 'test' },
};

describe('<Footer/>', () => {
  it('renders the footer', () => {
    shallow(<FooterElement {...props} />);
    expect(renderer.create(<FooterElement {...props} />).toJSON()).toMatchSnapshot();
  });
});
