import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import TimerInputs from './TimerInputs';
import SelectSound from './SelectSound';

function Settings() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <AccessTimeFilledIcon
          sx={{
            color: 'info.main',
            fontSize: 32,
          }}
        />
        <Typography
          variant="h4"
          sx={{
            display: 'block',
            color: 'info.main',
            m: 2,
          }}
        >
          Timer
        </Typography>
      </Box>
      <Typography variant="h6" gutterBottom>
        Time(minutes)
      </Typography>
      <TimerInputs />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <VolumeUpIcon
          sx={{
            color: 'info.main',
            fontSize: 32,
          }}
        />
        <Typography
          variant="h4"
          sx={{
            display: 'block',
            color: 'info.main',
            m: 2,
          }}
        >
          Sound
        </Typography>
      </Box>
      <Typography variant="h6" gutterBottom>
        Alarm sound
      </Typography>
      <SelectSound />
      <Button
        variant="contained"
        href="/"
        sx={{
          mt: 3,
          width: 'auto',
          alignSelf: 'flex-start',
        }}
      >
        Go home
      </Button>
    </Container>
  );
}

export default Settings;
