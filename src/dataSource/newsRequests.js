import get from './dataSource';
import { ITEMS_PER_REQUEST, API_KEY, NEWS_LANGUAGE_CODE } from '../constants';

export default function fetchMoreNews(pageNumber, source = null) {
  const url = 'https://newsapi.org/v2/top-headlines';
  const getQueries = {
    apiKey: API_KEY,
    pageSize: ITEMS_PER_REQUEST,
    page: pageNumber,
    language: NEWS_LANGUAGE_CODE,
    sources: source,
  };
  return get(url, getQueries);
}
