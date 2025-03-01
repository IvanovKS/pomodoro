import React from 'react';
import { Box, Button } from '@mui/material';

const buttons = [
  { id: 1, value: 'Pomodoro' },
  { id: 2, value: 'Short break' },
  { id: 3, value: 'Long break' },
];

function PomodoroButtons() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {buttons.map((elem) => {
        return (
          <Button
            key={elem.id}
            variant="contained"
            size="small"
            sx={{
              m: 1,
              width: '130px',
              alignSelf: 'flex-start',
            }}
          >
            {elem.value}
          </Button>
        );
      })}
    </Box>
  );
}

export default PomodoroButtons;
