// @ts-check
import './jssInit';
import React from 'react';
import ReactDOM from 'react-dom';
import { Login } from './views/Login';

const root = document.getElementById('root');

if (root === null) {
  throw new Error('Root element not found');
}

ReactDOM.render(
  <Login />,
  root,
);
