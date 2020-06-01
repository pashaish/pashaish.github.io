// @ts-check
import { AUTH_PENDING, AUTH_ERROR, AUTH_SUCCESS } from '../actions/authActions';

const initialState = {
  session: '',
  isAuth: false,
  errorMessage: '',
  isPendingRequest: false,
};

/**
 * @param {initialState} state
 * @param {{type: string, payload: any}} action
 * @returns {initialState}
 */
export const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_PENDING:
      return {
        ...state,
        isPendingRequest: true,
        errorMessage: '',
      };
    case AUTH_ERROR:
      return {
        ...state,
        isAuth: false,
        session: '',
        isPendingRequest: false,
        errorMessage: JSON.stringify({
          id: action.payload.id,
          explain: action.payload.explain,
        }),
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuth: true,
        isPendingRequest: false,
        session: action.payload.session,
        errorMessage: '',
      };
    default:
      return state;
  }
};
