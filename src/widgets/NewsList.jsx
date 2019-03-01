import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import News from './News';

const Wrapper = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: column;
  padding-top: 20px;
`;


function renderList(newsList) {
  const { ids: newsIds, byId: newsById } = newsList;

  return newsIds.map((id) => {
    const {
      title,
      source,
      date,
      url,
    } = newsById[id];
    return (
      <News
        key={id}
        title={title}
        source={source.name}
        date={date}
        url={url}
      />
    );
  });
}

export function NewsListElement(props) {
  const { news } = props;
  return (
    <Wrapper>
      {renderList(news)}
    </Wrapper>
  );
}

NewsListElement.propTypes = {
  news: PropTypes.shape({}).isRequired,
};

const mapStateToProps = ({ news }) => (
  {
    news,
  }
);

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsListElement);
