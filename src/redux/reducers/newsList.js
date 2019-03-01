import * as NewsListActionTypes from '../actiontypes/newsList';

let itemCounter = 0;

const emptyNews = {
  id: null,
  title: '',
  source: '',
  date: null,
  url: '#',
};

const emptyNewsListState = {
  ids: [],
  source: null,
  byId: {},
};

const emptySourcesListState = {
  ids: [],
  byId: {},
};

function addItem(item, state) {
  const id = itemCounter;
  itemCounter += 1;
  return {
    ...state,
    ids: [...state.ids, id],
    byId: {
      ...state.byId,
      [id]: { ...emptyNews, ...item, id },
    },
  };
}

function setSource(source, state) {
  return {
    ...state,
    source,
  };
}

function clearList(state) {
  itemCounter = 0;
  return {
    ...emptyNewsListState,
    source: state.source,
  };
}

function sourcesReducer(state = emptySourcesListState, action) {
  switch (action.type) {
    case (NewsListActionTypes.ADD_ITEM):
      if (!state.ids.includes(action.payload.source.id)) {
        return {
          ...state,
          ids: [...state.ids, action.payload.source.id],
          byId: {
            ...state.byId,
            [action.payload.source.id]: action.payload.source,
          },
        };
      }
      return state;
    default:
      return state;
  }
}

function newsReducer(state = emptyNewsListState, action) {
  switch (action.type) {
    case (NewsListActionTypes.ADD_ITEM):
      return addItem(action.payload, state);
    case (NewsListActionTypes.SET_SOURCE):
      return setSource(action.payload, state);
    case (NewsListActionTypes.CLEAR_LIST):
      return clearList(state);
    default:
      return state;
  }
}

const newsList = {
  news: newsReducer,
  sources: sourcesReducer,
};

export default newsList;
