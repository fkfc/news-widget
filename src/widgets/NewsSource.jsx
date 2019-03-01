import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SourceDisplay = styled.div`
  color: #FFF;
  font-size: 20px;
  background-color: #D8D8E4;
  height: 24px;
  border-radius: 4px;
  line-height: 24px;
  text-align: center;
  margin-left: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export default function NewsSource(props) {
  const { sourceName } = props;
  return (
    <SourceDisplay>
      {sourceName}
    </SourceDisplay>
  );
}

NewsSource.propTypes = {
  sourceName: PropTypes.string.isRequired,
};
