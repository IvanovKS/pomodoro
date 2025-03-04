import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'Pomodoro',
  timeLeft: 25 * 60,
  durations: {
    Pomodoro: 25 * 60,
    'Short break': 5 * 60,
    'Long break': 15 * 60,
  },
  isRunning: false,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    startTimer: (state) => {
      state.isRunning = true;
    },
    stopTimer: (state) => {
      state.isRunning = false;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
      state.timeLeft = state.durations[action.payload];
    },
    setTimeLeft: (state, action) => {
      state.timeLeft = action.payload;
    },
  },
});

export const { startTimer, stopTimer, setMode, setTimeLeft } =
  timerSlice.actions;

export default timerSlice.reducer;
