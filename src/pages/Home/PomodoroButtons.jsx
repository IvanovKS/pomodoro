import React from 'react';
import { Box, Button } from '@mui/material';

function PomodoroButtons() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Button
        variant="contained"
        size="small"
        sx={{
          m: 1,
          width: '130px',
          alignSelf: 'flex-start',
        }}
      >
        Pomodoro
      </Button>
      <Button
        variant="contained"
        size="small"
        sx={{
          m: 1,
          width: '130px',
          alignSelf: 'flex-start',
        }}
      >
        Short break
      </Button>
      <Button
        variant="contained"
        size="small"
        sx={{
          m: 1,
          width: '130px',
          alignSelf: 'flex-start',
        }}
      >
        Long break
      </Button>
    </Box>
  );
}

export default PomodoroButtons;
