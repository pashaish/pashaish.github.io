export const AUTH = 'AUTH';

export const tryAuth = ({ login, password }) => ({
  type: AUTH,
  payload: {
    login,
    password,
  },
});
