import { combineReducers } from 'redux';
import { auth } from './auth';
import { consoleApi } from './consoleApi';

export const reducers = combineReducers({
  auth,
  consoleApi,
});
