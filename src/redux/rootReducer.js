import { combineReducers } from '@reduxjs/toolkit';
import timerReducer from './slices/timerSlice';
import soundReducer from './slices/soundSlice';

const rootReducer = combineReducers({
  timer: timerReducer,
  sound: soundReducer,
});

export default rootReducer;
