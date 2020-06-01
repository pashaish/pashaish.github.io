import Sendsay from 'sendsay-api';

export const AUTH_PENDING = 'AUTH_PENDING';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';

export const tryAuthAsync = (login, sublogin, password) => (dispatch) => {
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
