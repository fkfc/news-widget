import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import arrow from '../assets/arrow.png';

const Selector = styled.select`
  background: transparent;
  border: none;
  font-size: 14px;
  height: 22px;
  padding: 1px;
  color: #A4A4A4;
  appearance: none;
  padding-right: 15px;
  background: url(${arrow}) no-repeat right center;
`;

export default function ComboBox(props) {
  const {
    items,
    selectedId,
    placeHolder,
    onChange,
  } = props;
  const noItemSelected = (selectedId === null);

  return (
    <Selector
      onChange={onChange}
      value={
        (noItemSelected) ? 'placeholder' : selectedId
      }
    >
      {
        (noItemSelected) && (
          <option key="placeholder" value="placeholder" disabled>
            {placeHolder}
          </option>
        )
      }
      {
        items.ids.map(
          itemId => (
            <option key={itemId} value={itemId}>
              {items.byId[itemId].name}
            </option>
          ),
        )
      }
      <option key={null} value="">
        Nenhum
      </option>
    </Selector>
  );
}

ComboBox.propTypes = {
  items: PropTypes.shape({}).isRequired,
  selectedId: PropTypes.string,
  placeHolder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

ComboBox.defaultProps = {
  selectedId: null,
};
