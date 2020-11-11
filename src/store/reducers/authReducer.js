import * as actionTypes from '../actions/types';
const initialSTate = {
  isAuth: false,
  role: '',
  error: '',
};

const authReducer = (state = initialSTate, { type, payload }) => {
  switch (type) {
    case actionTypes.AUTHENTICATE:
      return { ...state, isAuth: true, role: payload };

    case actionTypes.UNAUTHENTICATE:
      return { ...state, isAuth: false, role: '' };
    case actionTypes.AUTHENTICATE_FAIL:
      return { ...state, isAuth: false, error: 'Credentials are not valid', role: '' };
    default:
      return state;
  }
};
export default authReducer;
