import Sendsay from 'sendsay-api';

export const AUTH_PENDING = 'AUTH_PENDING';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const tryAuthAsyncAct = (login, sublogin, password) => async (
  dispatch,
) => {
  dispatch({ type: AUTH_PENDING });
  const sendsay = new Sendsay();
  try {
    await sendsay.login({
      login,
      sublogin,
      password,
    });

    dispatch({
      type: AUTH_SUCCESS,
      payload: {
        session: sendsay.session,
        login,
        sublogin,
      },
    });
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: error });
  }
};

export const logoutAct = () => ({
  type: AUTH_LOGOUT,
});

export const checkAuthAsyncAct = (session) => async (dispatch) => {
  const sendsay = new Sendsay();

  try {
    await sendsay.request({
      session,
      action: 'pong',
    });

    try {
      const user = await sendsay.request({
        session,
        action: 'sys.settings.get',
        list: ['about.owner.email'],
      });

      dispatch({
        type: AUTH_SUCCESS,
        payload: { session, login: user.list['about.owner.email'][0] },
      });
    } catch (e) {
      dispatch({ type: AUTH_ERROR, payload: e });
    }
  } catch (e) {
    dispatch({ type: AUTH_ERROR });
  }
};
