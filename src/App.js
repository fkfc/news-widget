import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MainWidget from './widgets/MainWidget';
import store from './redux/store';
import GlobalStyle from './theme/globalStyle';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <MainWidget />
      </Provider>
    );
  }
}

export default App;
