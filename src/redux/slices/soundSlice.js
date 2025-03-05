import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSound: 'Bell',
};

const soundSlice = createSlice({
  name: 'sound',
  initialState,
  reducers: {
    setSound: (state, action) => {
      state.currentSound = action.payload;
    },
  },
});

export const { setSound } = soundSlice.actions;

export default soundSlice.reducer;
