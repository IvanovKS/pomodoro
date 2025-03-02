import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'Pomodoro',
  timeLeft: 25 * 60,
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
  },
});

export const { startTimer, stopTimer } = timerSlice.actions;

export default timerSlice.reducer;
