import React from 'react';
import { Box, Button, useMediaQuery, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../../redux/slices/timerSlice';

const buttons = [
  { id: 1, value: 'Pomodoro' },
  { id: 2, value: 'Short break' },
  { id: 3, value: 'Long break' },
];

function PomodoroButtons() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.timer.mode);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
            variant={mode === elem.value ? 'contained' : 'outlined'}
            onClick={() => dispatch(setMode(elem.value))}
            size="small"
            sx={{
              m: isMobile ? 0 : 1,
              width: isMobile ? '100px' : '130px',
              alignSelf: 'flex-start',
              p: isMobile ? 0 : 1,
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
