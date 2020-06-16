import Sendsay from 'sendsay-api';

export const HISTORY_ADD = 'HISTORY_ADD';
export const HISTORY_DELETE = 'HISTORY_DELETE';
export const HISTORY_DELETE_ALL = 'HISTORY_DELETE_ALL';
export const HISTORY_REQ_VALUE_SET = 'HISTORY_REQ_VALUE_SET';

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
export const historyReqValueSet = ({ reqValue, resValue, isValid }) => ({
  type: HISTORY_REQ_VALUE_SET,
  payload: {
    reqValue,
    resValue,
    isValid,
  },
});
export const requestHistoryAsyncAct = (reqValue, session) => async (
  dispatch,
) => {
  const ss = new Sendsay();

  try {
    const result = await ss.request({
      ...JSON.parse(reqValue),
      session,
    });
    dispatch(historyAddAct(reqValue.replace(/\s/gim, ''), true));
    dispatch(
      historyReqValueSet({
        reqValue,
        resValue: JSON.stringify(result, null, '  '),
        isValid: true,
      }),
    );
  } catch (e) {
    dispatch(historyAddAct(reqValue.replace(/\s/gim, ''), false));
    dispatch(
      historyReqValueSet({
        resValue: JSON.stringify(e, null, '  '),
        isValid: false,
        reqValue,
      }),
    );
  }
};
