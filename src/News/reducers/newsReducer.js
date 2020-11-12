import { act } from 'react-dom/test-utils';
import * as actionTypes from '../actions/types';

const initialState = [];

const newsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_NEWS: {
      return [...state, payload];
    }
    case actionTypes.DELETE_NEWS:
      return state.filter((item) => item.id !== payload);
    case actionTypes.APROVE_NEWS: {
      const newState = [...state];
      newState.forEach((item) => {
        if (item.id === payload) item.isAproved = true;
      });
      return newState;
    }
    default:
      return state;
  }
};

export default newsReducer;
