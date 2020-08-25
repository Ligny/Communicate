export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_EXIST = 'SIGNUP_EXIST';

export const loginRequest = (data) => ({ type: LOGIN_REQUEST, payload: { data } });
export const loginSuccess = payload => ({ type: LOGIN_SUCCESS, payload });
export const loginFailure = () => ({ type: LOGIN_FAILURE });
export const logOut = () => ({ type: LOGOUT });
export const logOutRequest = () => ({ type: LOGOUT_REQUEST });
export const signupRequest = (data) => ({ type: SIGNUP_REQUEST, payload: { data } });
export const signupExist = () => ({ type: SIGNUP_EXIST });