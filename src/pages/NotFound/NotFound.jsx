import React from 'react';
import { Box, Button, Container } from '@mui/material';
import Lottie from 'lottie-react';
import notFoundAnimation from '../../assets/animations/notFound.json';

function NotFound() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
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
        <Button
          variant="contained"
          href="/"
          sx={{
            mt: 3,
          }}
        >
          Go home
        </Button>
      </Box>
    </Container>
  );
}

export default NotFound;
