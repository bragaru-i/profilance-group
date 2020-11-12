import * as actionTypes from './types';
import { v4 as uuidv4 } from 'uuid';

export const addNews = (data) => ({
  type: actionTypes.ADD_NEWS,
  payload: {
    ...data,
    id: uuidv4(),
    isAproved: false,
    time: new Date(),
  },
});
export const approveNews = (id) => ({ type: actionTypes.APROVE_NEWS, payload: id });
export const deleteNews = (id) => ({ type: actionTypes.DELETE_NEWS, payload: id });
