import * as NewsListActionTypes from '../actiontypes/newsList';
import fetchMoreNews from '../../dataSource/newsRequests';

function setSource(source) {
  return {
    type: NewsListActionTypes.SET_SOURCE,
    payload: source,
  };
}

function clearList() {
  return {
    type: NewsListActionTypes.CLEAR_LIST,
  };
}

export function addItem(item) {
  return {
    type: NewsListActionTypes.ADD_ITEM,
    payload: item,
  };
}

export function dispatchSetSource(source) {
  return (dispatch) => {
    dispatch(setSource(source));
  };
}

export function dispatchClearFilter() {
  return (dispatch) => {
    dispatch(clearList());
  };
}

export function dispatchFetchNews(pageNumber, source = null) {
  return async (dispatch) => {
    const serverResponse = await fetchMoreNews(pageNumber, source);
    const newsList = JSON.parse(serverResponse.text);
    newsList.articles.forEach((article) => {
      dispatch(addItem({
        title: article.title,
        source: article.source,
        date: article.publishedAt,
        url: article.url,
      }));
    });
  };
}

export function dispatchClearList() {
  return (dispatch) => {
    dispatch(clearList());
  };
}
