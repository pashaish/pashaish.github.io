// @ts-check
import { AUTH } from '../actions/authActions';

const initialState = {
  login: '',
  password: '',
  isAuth: false,
  errorMessage: '',
};

/**
 * @param {initialState} state
 * @param {{type: string, payload: {login: string, password: string}}} action
 * @returns {initialState}
 */
export const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
      };
    default:
      return state;
  }
};
