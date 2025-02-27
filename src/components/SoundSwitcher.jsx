import React from 'react';
import { useSoundContext } from '../context/SoundContext';
import { Box, IconButton } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

function SoundSwitcher() {
  const { isSound, toggleSound } = useSoundContext();
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', fontSize: 32, pl: 1 }}
    >
      <IconButton sx={{ p: 0 }} onClick={toggleSound}>
        {isSound ? <VolumeUpIcon /> : <VolumeOffIcon />}
      </IconButton>
    </Box>
  );
}

export default SoundSwitcher;
