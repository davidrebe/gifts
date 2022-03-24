import { LOGIN, LOGOUT } from '../actions/login-actions';

const reduceLogin = function reduceLogin(login, email) {
  return { ...login, email, token: email };
};

const LOGIN_INITIAL_STATE = {
  email: undefined,
  token: undefined,
};

export default function reduceLoginActions(login = LOGIN_INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return reduceLogin(login, payload);
    case LOGOUT:
      return LOGIN_INITIAL_STATE;
    default:
      return login;
  }
}
