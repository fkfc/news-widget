import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as newsListActions from '../redux/actions/newsList';
import Button from './Button';

const handleFetchNewsButtonClick = (fetchNews, pageNumber, setPageNumber, source) => {
  fetchNews(pageNumber, source);
  setPageNumber(pageNumber + 1);
};

const Wrapper = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  margin-top: 30px;
`;


export function FooterElement(props) {
  const {
    fetchNews,
    pageNumber,
    setPageNumber,
    news,
  } = props;

  return (
    <Wrapper>
      <Button
        onClick={
          () => handleFetchNewsButtonClick(fetchNews, pageNumber, setPageNumber, news.source)
        }
      >
        Mostrar mais
      </Button>
    </Wrapper>
  );
}

FooterElement.propTypes = {
  fetchNews: PropTypes.func.isRequired,
  setPageNumber: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
  news: PropTypes.shape({}).isRequired,
};

const mapStateToProps = ({ news }) => (
  {
    news,
  }
);

const mapDispatchToProps = {
  fetchNews: newsListActions.dispatchFetchNews,
};

export default connect(mapStateToProps, mapDispatchToProps)(FooterElement);
