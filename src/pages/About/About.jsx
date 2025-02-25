import React from 'react';
import { Box, Typography, Link, Button, Container } from '@mui/material';
import PointsForUsing from './PointsForUsing';

function About() {
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
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          margin: '0 auto',
        }}
      >
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
          down work into intervals, traditionally 25 minutes in length,
          separated by short breaks. Each interval is known as a pomodoro, from
          the Italian word for 'tomato', after the tomato-shaped kitchen timer
          that Cirillo used as a university student.
        </Typography>
        <Typography variant="h6" gutterBottom>
          <Link
            href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
            sx={{ color: 'red', display: 'block' }}
            target="_blank"
          >
            Wikipedia
          </Link>
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
        <PointsForUsing
          index="1) "
          spanText="Start timer"
          text=" and focus on the task for 25 minutes"
        ></PointsForUsing>
        <PointsForUsing
          index="2) "
          spanText="Take a break"
          text=" for 5 minutes when the alarm ring"
        ></PointsForUsing>
        <PointsForUsing
          index="3) "
          spanText="Iterate"
          text=" 3-5 until you finish the tasks"
        ></PointsForUsing>
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
    </Container>
  );
}

export default About;
