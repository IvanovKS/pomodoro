import React from 'react';
import { Box } from '@mui/material';
import img from '../assets/images/android-chrome-192x192.png';

function AvatarImg({ sx }) {
  return (
    <Box
      component="img"
      src={img}
      alt="pomodoro"
      sx={{
        width: '100%',
        maxWidth: 50,
        borderRadius: 2,
        ...sx,
      }}
    ></Box>
  );
}

export default AvatarImg;
