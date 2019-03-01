import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ComboBox from './ComboBox';

const onChangeFunction = () => {};

const props = {
  items: { ids: ['test'], byId: { test: { name: 'Test' } } },
  selectedId: 'test',
  placeHolder: 'Placeholder',
  onChange: onChangeFunction,
};

describe('<ComboBox/>', () => {
  it('renders the combo box', () => {
    const wrapper = shallow(<ComboBox {...props} />);
    expect(wrapper.find('option').length).toBeGreaterThan(0);
    expect(renderer.create(<ComboBox {...props} />).toJSON()).toMatchSnapshot();
  });
});
