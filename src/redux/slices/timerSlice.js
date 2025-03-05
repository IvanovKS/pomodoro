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
    decrementTime: (state) => {
      if (state.timeLeft > 0) {
        state.timeLeft -= 1;
      } else {
        state.isRunning = false;
      }
    },
    setDurations: (state, action) => {
      state.durations = action.payload;
      state.timeLeft = state.durations[state.mode];
    },
  },
});

export const {
  startTimer,
  stopTimer,
  setMode,
  setTimeLeft,
  decrementTime,
  setDurations,
} = timerSlice.actions;

export default timerSlice.reducer;
