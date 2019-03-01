import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NewsList from './NewsList';
import Header from './Header';
import Footer from './Footer';
import { dispatchFetchNews } from '../redux/actions/newsList';

const Wrapper = styled.div`
  padding: 70px;
`;

export class MainWidgetElement extends React.Component {
  constructor(props) {
    super(props);
    const { fetchNews } = props;
    this.state = {
      pageNumber: 2,
    };
    fetchNews(1);
  }

  setPageNumber = (number) => {
    this.setState({ pageNumber: number });
  }


  render() {
    const { pageNumber } = this.state;
    return (
      <Wrapper>
        <Header pageNumber={pageNumber} setPageNumber={this.setPageNumber} />
        <NewsList />
        <Footer pageNumber={pageNumber} setPageNumber={this.setPageNumber} />
      </Wrapper>
    );
  }
}

MainWidgetElement.propTypes = {
  fetchNews: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  fetchNews: dispatchFetchNews,
};

export default connect(null, mapDispatchToProps)(MainWidgetElement);
