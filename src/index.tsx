import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store/store';
import Root from 'views/Root';
import ErrorProvider from 'context/errorProvider';
import { worker } from 'mocks/browser';
import 'assets/styles/fonts.css';

const render = async () => {
  await worker.start();

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
};

render();
