// @ts-check
import './jssInit';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Login } from './views/Login';
import { store } from './store/store';

const root = document.getElementById('root');

if (root === null) {
  throw new Error('Root element not found');
}

ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  root,
);
