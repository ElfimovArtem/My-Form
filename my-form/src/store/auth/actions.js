import { AUTH_CHANGE_EMAIL_TEXT, AUTH_CHANGE_PASSWORD_TEXT } from './constants';

export const setAuthChangeEmail = (newEmail) => {
  return {
    type: AUTH_CHANGE_EMAIL_TEXT,
    payload: newEmail
  }
};

export const setAuthChangePassword = (newPassword) => {
  return {
    type: AUTH_CHANGE_PASSWORD_TEXT,
    payload: newPassword
  }
};
