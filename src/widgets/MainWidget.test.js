import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { MainWidgetElement } from './MainWidget';

const dummyFunction = () => {};

const props = {
  fetchNews: dummyFunction,
};

describe('<MainWidget/>', () => {
  it('renders the main widget with 3 elements', () => {
    const wrapper = shallow(<MainWidgetElement {...props} />);
    expect(wrapper.children().length).equal(3);
  });
});
