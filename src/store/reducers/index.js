import { combineReducers } from 'redux';
import { auth } from './auth';
import { consoleApi } from './consoleApi';
import { history } from './history';

export const reducers = combineReducers({
  auth,
  consoleApi,
  history,
});
