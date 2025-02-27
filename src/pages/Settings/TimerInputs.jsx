import { Box, TextField } from '@mui/material';
import React, { useState } from 'react';

function TimerInputs() {
  const [pomodoroTime, setPomodoroTime] = useState(25);
  const [shortBreakTime, setShortBreakTime] = useState(5);
  const [longBreakTime, setLongBreakTime] = useState(15);

  const handleChange = (setter, min, max) => (event) => {
    let value = Number(event.target.value);
    value = Math.max(min, Math.min(max, value));
    setter(value);
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
        onChange={handleChange(setPomodoroTime, 10, 50)}
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
        onChange={handleChange(setShortBreakTime, 1, 20)}
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
        onChange={handleChange(setLongBreakTime, 5, 30)}
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
