import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import TimerInputs from './TimerInputs';

function Settings() {
  return (
    <Container maxWidth="lg">
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
            scale: 1.2,
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
            scale: 1.2,
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
        Alarm sound
      </Typography>
    </Container>
  );
}

export default Settings;
