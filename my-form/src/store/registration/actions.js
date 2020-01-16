import {
  REGISTRATION_CHANGE_EMAIL_TEXT,
  REGISTRATION_CHANGE_PASSWORD_TEXT,
  REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT
} from './constants';

export const setRegistrationChangeEmail = (newEmail) => {
  return {
    type: REGISTRATION_CHANGE_EMAIL_TEXT,
    payload: newEmail
  }
};

export const setRegistrationChangePassword = (newPassword) => {
  return {
    type: REGISTRATION_CHANGE_PASSWORD_TEXT,
    payload: newPassword
  }
};

export const setRegistrationChangeRepeatPassword = (newRepeatPassword) => {
  return {
    type: REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT,
    payload: newRepeatPassword
  }
};
