import Sendsay from 'sendsay-api';

export const AUTH_PENDING = 'AUTH_PENDING';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const tryAuthAsyncAction = (login, sublogin, password) => (dispatch) => {
  dispatch({ type: AUTH_PENDING });
  const sendsay = new Sendsay();
  sendsay.login({
    login,
    sublogin,
    password,
  }).then(() => {
    dispatch({ type: AUTH_SUCCESS, payload: { session: sendsay.session } });
  }).catch((error) => {
    dispatch({ type: AUTH_ERROR, payload: error });
  });
};

export const logoutAction = () => ({
  type: AUTH_LOGOUT,
});

export const checkAuthAsyncAction = (session) => (dispatch) => {
  const sendsay = new Sendsay();
  sendsay.request({
    session,
    action: 'pong',
  }).then(() => {
    dispatch({ type: AUTH_SUCCESS, payload: { session } });
  }).catch(() => {
    dispatch({ type: AUTH_ERROR });
  });
};
