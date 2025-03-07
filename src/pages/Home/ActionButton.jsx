import React from 'react';
import { Box, Button, Stack } from '@mui/material';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import { useDispatch, useSelector } from 'react-redux';
import { startTimer, stopTimer } from '../../redux/slices/timerSlice';

function ActionButton() {
  const dispatch = useDispatch();
  const isRunning = useSelector((state) => state.timer.isRunning);

  const handleClick = () => {
    if (isRunning === true) {
      dispatch(stopTimer());
    }
    if (isRunning === false) {
      dispatch(startTimer());
    }
  };
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button
          onClick={handleClick}
          variant="contained"
          startIcon={
            isRunning === false ? (
              <PlayCircleFilledWhiteIcon />
            ) : (
              <PauseCircleIcon />
            )
          }
          sx={{
            width: '60%',
            '& .MuiButton-startIcon svg': {
              fontSize: 32,
            },
          }}
        >
          {isRunning === false ? 'start' : 'pause'}
        </Button>
      </Stack>
    </Box>
  );
}

export default ActionButton;
