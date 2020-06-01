// @ts-check
import './jssInit';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistedStore } from './store/store';
import { Router } from './views/Router';

const root = document.getElementById('root');

if (root === null) {
  throw new Error('Root element not found');
}

ReactDOM.render(
  <Provider store={persistedStore.store}>
    <PersistGate loading={null} persistor={persistedStore.persistor}>
      <Router />
    </PersistGate>
  </Provider>,
  root,
);
