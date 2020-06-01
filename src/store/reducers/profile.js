import { AUTH_SUCCESS } from '../actions/authActions';

export const profile = (state, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return state;
    default:
      return state;
  }
};
