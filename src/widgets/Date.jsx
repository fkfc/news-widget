import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DateDisplay = styled.div`
  color: #A4A4A4;
  font-size: 20px;
`;

// Convert from 2019-02-28T23:07:51.4030325Z to 28/02/2019
const getReadableDate = (dateTime) => {
  const dateArray = dateTime.toString().split('T')[0].split('-');
  const year = dateArray[0];
  const month = dateArray[1];
  const day = dateArray[2];

  return `${day}/${month}/${year}`;
};

export default function Date(props) {
  const { date } = props;
  return (
    <DateDisplay>
      {getReadableDate(date)}
    </DateDisplay>
  );
}

Date.propTypes = {
  date: PropTypes.string.isRequired,
};
