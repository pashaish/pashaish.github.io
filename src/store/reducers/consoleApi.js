import { CHANGE_GLUTTER } from '../actions/consoleApiActions';

const initialState = {
  glutter: 50,
};

export const consoleApi = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_GLUTTER:
      return {
        ...state,
        glutter: action.payload.size,
      };
    default:
      return state;
  }
};
