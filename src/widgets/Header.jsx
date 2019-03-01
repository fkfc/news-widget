import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ComboBox from './ComboBox';
import { dispatchSetSource, dispatchFetchNews, dispatchClearList } from '../redux/actions/newsList';

const Wrapper = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 40px;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-weight: medium;
  font-size: 32px;
  color: #009DFF;
  border-bottom: 5px solid #009DFF;
  font: "Roboto";
`;

const handleSourceSelectorChange = (event, props) => {
  const selectedSourceId = event.target.value;
  const {
    setSource,
    fetchNews,
    clearList,
    setPageNumber,
  } = props;

  clearList();
  setSource(selectedSourceId);
  fetchNews(1, selectedSourceId);
  setPageNumber(2);
};

handleSourceSelectorChange.propTypes = {
  setSource: PropTypes.func.isRequired,
  fetchNews: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
  setPageNumber: PropTypes.func.isRequired,
  clearList: PropTypes.func.isRequired,
};

const onComboBoxChange = props => (event) => {
  handleSourceSelectorChange(event, props);
};


export function HeaderElement(props) {
  const { sources, news } = props;
  return (
    <Wrapper>
      <Title>Notícias</Title>
      <ComboBox
        items={sources}
        selectedId={news.source}
        placeHolder="Filtrar por fonte"
        onChange={onComboBoxChange(props)}
      />
    </Wrapper>
  );
}

HeaderElement.propTypes = {
  news: PropTypes.shape({}).isRequired,
  sources: PropTypes.shape({}).isRequired,
};

const mapStateToProps = ({ news, sources }) => (
  {
    news,
    sources,
  }
);

const mapDispatchToProps = {
  setSource: dispatchSetSource,
  fetchNews: dispatchFetchNews,
  clearList: dispatchClearList,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderElement);
