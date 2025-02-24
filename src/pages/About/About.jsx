import React from 'react';
import { Box, Typography, Link } from '@mui/material';

function About() {
  return (
    <Box>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          display: 'block',
          color: 'info.main',
          mt: 3,
          '&::after': {
            content: "''",
            display: 'block',
            width: '50px',
            pt: 1,
            borderBottom: '4px solid #1976d2',
            opacity: 0.6,
          },
        }}
      >
        What is Pomodoro Technique?
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{
          textAlign: 'justify',
        }}
      >
        The Pomodoro Technique is created by Francesco Cirillo for a more
        productive way to work and study. The technique uses a timer to break
        down work into intervals, traditionally 25 minutes in length, separated
        by short breaks. Each interval is known as a pomodoro, from the Italian
        word for 'tomato', after the tomato-shaped kitchen timer that Cirillo
        used as a university student.
        <Typography variant="h6" gutterBottom>
          <Link
            href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
            sx={{ color: 'red', display: 'block' }}
            target="_blank"
          >
            Wikipedia
          </Link>
        </Typography>
      </Typography>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          display: 'block',
          color: 'info.main',
          mt: 3,
          '&::after': {
            content: "''",
            display: 'block',
            width: '50px',
            pt: 1,
            borderBottom: '4px solid #1976d2',
            opacity: 0.6,
          },
        }}
      >
        How to use the Pomodoro Timer?
      </Typography>
    </Box>
  );
}

export default About;
