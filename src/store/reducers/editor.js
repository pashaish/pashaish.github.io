import { HISTORY_REQ_VALUE_SET } from '../actions/historyActions';

const initialState = {
  reqValue: '',
  resValue: '',
  isValid: true,
};

export const editor = (state = initialState, action) => {
  const { reqValue, resValue, isValid } = action.payload || {};
  switch (action.type) {
    case HISTORY_REQ_VALUE_SET:
      return {
        ...state,
        reqValue: reqValue !== undefined ? reqValue : state.reqValue,
        resValue: resValue !== undefined ? resValue : state.resValue,
        isValid: isValid !== undefined ? isValid : state.isValid,
      };
    default:
      return state;
  }
};
