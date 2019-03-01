import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Date from './Date';
import NewsSource from './NewsSource';

const Wrapper = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: column;
  border-bottom: 2px solid #A4A4A4;
  padding-bottom: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const NewsTitle = styled.div`
  margin-top: 5px;
  margin-bottom: 25px;
  a {
    font-weight: medium;
    font-size: 24px;
    color: #4E4E4E
    font: "Roboto";
    text-decoration: none;
  }
`;

const BottomLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export default function News(props) {
  const {
    title,
    source,
    date,
    url,
  } = props;

  return (
    <Wrapper>
      <NewsTitle>
        <a href={url}>{title}</a>
      </NewsTitle>
      <BottomLine>
        <Date date={date} />
        <NewsSource sourceName={source} />
      </BottomLine>
    </Wrapper>
  );
}

News.propTypes = {
  title: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
