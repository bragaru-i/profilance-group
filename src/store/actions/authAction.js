import * as actionsTypes from './types';

export const login = (formData) => {
  const { user, pass } = formData;
  if (user === 'user' && pass === 'user') {
    return {
      type: actionsTypes.AUTHENTICATE,
      payload: 'user',
    };
  }
  if (user === 'admin' && pass === 'admin') {
    return {
      type: actionsTypes.AUTHENTICATE,
      payload: 'admin',
    };
  }
  return {
    type: actionsTypes.AUTHENTICATE_FAIL,
  };
};

export const logout = () => ({ type: actionsTypes.UNAUTHENTICATE });
