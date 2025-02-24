import { Box } from '@mui/material';
import Lottie from 'lottie-react';
import notFoundAnimation from '../../assets/animations/notFound.json';
import React from 'react';

function NotFound() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
      }}
    >
      <Lottie
        animationData={notFoundAnimation}
        loop={true}
        style={{ width: 300, height: 300 }}
      />
    </Box>
  );
}

export default NotFound;
