export const HISTORY_ADD = 'HISTORY_ADD';
export const HISTORY_DELETE = 'HISTORY_DELETE';
export const HISTORY_DELETE_ALL = 'HISTORY_DELETE_ALL';

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

export const historyDeleteAllAct = () => ({
  type: HISTORY_DELETE_ALL,
});
