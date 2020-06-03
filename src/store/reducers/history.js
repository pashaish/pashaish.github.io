// @ts-check

import { v4 } from 'uuid';
import { HISTORY_ADD, HISTORY_DELETE, HISTORY_DELETE_ALL } from '../actions/historyActions';

/**
 * @type {{
 *  body: string;
 *  timestamp: number;
 *  isValid: boolean;
 *  id: string;
 * }[]}
 */
const initialState = [];

/**
 * @param {initialState} state;
 * @param {string} body;
 * @returns {{
 *  body: string;
 *  timestamp: number;
 *  isValid: boolean;
 *  id: string;
 * }|null}
 */
const isContains = (state, body) => {
  const newObj = JSON.parse(body);
  let result;
  for (const req of state) {
    const obj = JSON.parse(req.body);
    const newObjKeys = Object.keys(newObj);
    const objKeys = Object.keys(obj);

    if (newObjKeys.length !== objKeys.length) continue;

    for (const oKey of objKeys) {
      if (newObj[oKey] !== obj[oKey]) {
        result = null;
        break;
      }
      result = req;
    }
    if (result !== null) {
      return result;
    }
  }
  return result;
};


/**
 * @param {initialState} state,
 * @param {{type: string, payload: any}} action,
 * @returns {initialState}
 */
export const history = (state = initialState, action) => {
  switch (action.type) {
    case HISTORY_ADD:
      const obj = isContains(state, action.payload.body);
      if (obj) {
        return state.map((req) => (obj.id === req.id ? {
          body: action.payload.body,
          id: obj.id,
          isValid: action.payload.isValid,
          timestamp: new Date().getTime(),
        } : req)).sort((prev, next) => next.timestamp - prev.timestamp);
      }
      return [...state, {
        id: v4(),
        body: action.payload.body,
        isValid: action.payload.isValid,
        timestamp: new Date().getTime(),
      }].sort((prev, next) => next.timestamp - prev.timestamp).slice(0, 15);
    case HISTORY_DELETE:
      return state.filter((req) => req.id !== action.payload.id);
    case HISTORY_DELETE_ALL:
      return [];
    default:
      return state;
  }
};
