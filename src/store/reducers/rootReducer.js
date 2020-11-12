import { combineReducers } from 'redux';

import newsReducer from '../../News/reducers/newsReducer';

import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  news: newsReducer,
});
export default rootReducer;
