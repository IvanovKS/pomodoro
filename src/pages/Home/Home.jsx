import React from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ActionButton from './ActionButton';

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
        maxWidth="sm"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          margin: '0 auto',
          backgroundColor: '#d7edff40',
          borderRadius: 1,
          p: 2,
          alignContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
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
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant={isMobile ? 'h2' : 'h1'}
            gutterBottom
            sx={{
              display: 'block',
              color: 'info.main',
              mt: 3,
              fontWeight: 700,
              letterSpacing: '20px',
            }}
          >
            15:00
          </Typography>
        </Box>
        <ActionButton />
      </Box>
    </Container>
  );
}

export default Home;
