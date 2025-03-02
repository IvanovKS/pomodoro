import { combineReducers } from '@reduxjs/toolkit';
import timerReducer from './slices/timerSlice';

const rootReducer = combineReducers({
  timer: timerReducer,
});

export default rootReducer;
