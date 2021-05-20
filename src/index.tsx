import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store/store';
import Root from 'views/Root';
import 'assets/styles/fonts.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
