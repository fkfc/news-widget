import { combineReducers } from 'redux';
import newsList from './newsList';

const appReducer = combineReducers({
  ...newsList,
});

export default function (state, action = {}) {
  return appReducer(state, action);
}
