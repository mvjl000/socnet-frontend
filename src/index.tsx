import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store/store';
import Root from 'views/Root';
import 'assets/styles/fonts.css';
import ErrorProvider from 'context/errorProvider';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorProvider>
        <Root />
      </ErrorProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
