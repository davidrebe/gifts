export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const doLogin = function doLogin(data) {
  return { type: LOGIN, payload: data };
};

export const doLogout = function doLogout() {
  return { type: LOGOUT };
};
