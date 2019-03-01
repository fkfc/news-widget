import newsList from './reducers/newsList';
import * as NewsListActions from './actions/newsList';


describe('newsList', () => {
  it('should be able to add an item to the store', () => {
    const addItemAction = NewsListActions.addItem({
      title: 'article.title',
      source: 'article.source',
      date: 'article.publishedAt',
      url: 'article.url',
    });
    const currentState = newsList.news(undefined, { type: 'dummy' });
    const newState = newsList.news(currentState, addItemAction);
    const numberOfItemsAdded = newState.ids.length - currentState.ids.length;
    expect(numberOfItemsAdded).toEqual(1);
  });

  it('should be able to clear the list', () => {
    const dummyDispatch = (clearListAction) => {
      // add an item first
      const addItemAction = NewsListActions.addItem({
        title: 'article.title',
        source: 'article.source',
        date: 'article.publishedAt',
        url: 'article.url',
      });
      const initialState = newsList.news(undefined, { type: 'dummy' });
      const currentState = newsList.news(initialState, addItemAction);

      // clear the list
      expect(newsList.news(currentState, clearListAction).ids.length).toEqual(0);
    };
    NewsListActions.dispatchClearList()(dummyDispatch);
  });

  it('should be able to set the source filter', () => {
    const source = 'sourceTest';
    const dummyDispatch = (setSourceAction) => {
      const initialState = newsList.news(undefined, { type: 'dummy' });
      expect(newsList.news(initialState, setSourceAction).source).toEqual(source);
    };
    NewsListActions.dispatchSetSource(source)(dummyDispatch);
  });
});
