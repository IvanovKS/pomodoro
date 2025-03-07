import React, { useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import ActionButton from './ActionButton';
import PomodoroButtons from './PomodoroButtons';
import formatOfTimer from '../../utils/formatOfTimer';
import { decrementTime } from '../../redux/slices/timerSlice';
import soundFiles from '../../constants/soundFiles';

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const dispatch = useDispatch();
  const timeLeft = useSelector((state) => state.timer.timeLeft);
  const isRunning = useSelector((state) => state.timer.isRunning);
  const currentSound = useSelector((state) => state.sound.currentSound);

  const audioRef = useRef(null);
  useEffect(() => {
    if (timeLeft === 0) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }

      audioRef.current = new Audio(soundFiles[currentSound]);
      audioRef.current.play().catch((error) => console.error('Error', error));
    }
  }, [timeLeft, currentSound]);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      dispatch(decrementTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, dispatch]);

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
          p: isMobile ? 0 : 2,
          alignContent: 'center',
        }}
      >
        <PomodoroButtons />
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
            {formatOfTimer(timeLeft)}
          </Typography>
        </Box>
        <ActionButton />
      </Box>
    </Container>
  );
}

export default Home;
