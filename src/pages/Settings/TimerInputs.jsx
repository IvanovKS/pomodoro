import { Box, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDurations } from '../../redux/slices/timerSlice';

function TimerInputs() {
  const dispatch = useDispatch();
  const durations = useSelector((state) => state.timer.durations);

  const [times, setTimes] = useState({
    Pomodoro: durations.Pomodoro / 60,
    'Short break': durations['Short break'] / 60,
    'Long break': durations['Long break'] / 60,
  });

  const handleChange = (key, min, max) => (event) => {
    let value = Number(event.target.value);
    if (value !== '') {
      value = Math.max(min, Math.min(max, value));
    }
    setTimes((prev) => ({ ...prev, [key]: value }));
    setTimeout(() => {
      dispatch(
        setDurations({
          Pomodoro: key === 'Pomodoro' ? value * 60 : times.Pomodoro * 60,
          'Short break':
            key === 'Short break' ? value * 60 : times['Short break'] * 60,
          'Long break':
            key === 'Long break' ? value * 60 : times['Long break'] * 60,
        })
      );
    }, 0);
  };

  const handleKeyDown = (event) => {
    if (!['ArrowUp', 'ArrowDown'].includes(event.key)) {
      event.preventDefault();
    }
  };

  const inputs = [
    { label: 'Pomodoro', min: 10, max: 50 },
    { label: 'Short Break', min: 1, max: 20 },
    { label: 'Long Break', min: 5, max: 30 },
  ];

  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      {inputs.map(({ label, min, max }) => {
        return (
          <TextField
            type="number"
            key={label}
            label={label}
            variant="outlined"
            value={times[label]}
            onChange={handleChange(label, min, max)}
            onKeyDown={handleKeyDown}
            slotProps={{
              input: {
                min,
                max,
                step: 1,
              },
            }}
          />
        );
      })}
    </Box>
  );
}

export default TimerInputs;
