import { Box, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDurations } from '../../redux/slices/timerSlice';

function TimerInputs() {
  const dispatch = useDispatch();
  const durations = useSelector((state) => state.timer.durations);

  const [pomodoroTime, setPomodoroTime] = useState(durations.Pomodoro / 60);
  const [shortBreakTime, setShortBreakTime] = useState(
    durations['Short break'] / 60
  );
  const [longBreakTime, setLongBreakTime] = useState(
    durations['Long break'] / 60
  );

  const handleChange = (setter, min, max, key) => (event) => {
    let value = Number(event.target.value);
    if (value !== '') {
      value = Math.max(min, Math.min(max, value));
    }
    setter(value);
    setTimeout(() => {
      dispatch(
        setDurations({
          Pomodoro: key === 'Pomodoro' ? value * 60 : pomodoroTime * 60,
          'Short break':
            key === 'Short break' ? value * 60 : shortBreakTime * 60,
          'Long break': key === 'Long break' ? value * 60 : longBreakTime * 60,
        })
      );
    }, 0);
  };
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        type="number"
        label="Pomodoro"
        variant="outlined"
        value={pomodoroTime}
        onChange={handleChange(setPomodoroTime, 10, 50, 'Pomodoro')}
        onKeyDown={(event) => {
          if (!['ArrowUp', 'ArrowDown'].includes(event.key)) {
            event.preventDefault();
          }
        }}
        slotProps={{
          input: {
            min: 10,
            max: 50,
            step: 1,
          },
        }}
      />
      <TextField
        type="number"
        label="Short Break"
        variant="outlined"
        value={shortBreakTime}
        onChange={handleChange(setShortBreakTime, 1, 20, 'Short break')}
        onKeyDown={(event) => {
          if (!['ArrowUp', 'ArrowDown'].includes(event.key)) {
            event.preventDefault();
          }
        }}
        slotProps={{
          input: {
            min: 1,
            max: 20,
            step: 1,
          },
        }}
      />
      <TextField
        type="number"
        label="Long Break"
        variant="outlined"
        value={longBreakTime}
        onChange={handleChange(setLongBreakTime, 5, 30, 'Long break')}
        onKeyDown={(event) => {
          if (!['ArrowUp', 'ArrowDown'].includes(event.key)) {
            event.preventDefault();
          }
        }}
        slotProps={{
          input: {
            min: 5,
            max: 30,
            step: 1,
          },
        }}
      />
    </Box>
  );
}

export default TimerInputs;
