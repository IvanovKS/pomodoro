import { Box, Typography, Link, Container } from '@mui/material';
import React from 'react';

function Footer() {
  return (
    <Container maxWidth="lg">
      <Box
        component="footer"
        sx={{
          flexShrink: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
        }}
      >
        <Typography variant="body2">© 2025 Pomodoro App</Typography>
        <Box>
          <Link
            href="https://github.com/IvanovKS"
            sx={{ color: 'red', mx: 1 }}
            target="_blank"
          >
            GitHub
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default Footer;
