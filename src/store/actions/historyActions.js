export const HISTORY_ADD = 'HISTORY_ADD';
export const HISTORY_DELETE = 'HISTORY_DELETE';

export const historyAddAct = (body, isValid) => ({
  type: HISTORY_ADD,
  payload: {
    body,
    isValid,
  },
});

export const historyUpdateAct = (body, isValid, id) => ({
  type: HISTORY_ADD,
  payload: {
    body,
    isValid,
    id,
  },
});

export const historyDeleteAct = (id) => ({
  type: HISTORY_DELETE,
  payload: {
    id,
  },
});
