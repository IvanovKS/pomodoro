import React, { useState } from 'react';
import { Box, Button, Stack } from '@mui/material';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

function ActionButton() {
  const [isStart, setIsStart] = useState(false);

  const handleClick = () => {
    setIsStart(!isStart);
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
            isStart === false ? (
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
          {isStart === false ? 'start' : 'pause'}
        </Button>
      </Stack>
    </Box>
  );
}

export default ActionButton;
