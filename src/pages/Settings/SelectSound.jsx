import React, { useRef, useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Bell from '../../assets/audio/Bell.mp3';
import Clock from '../../assets/audio/Clock.mp3';
import Future from '../../assets/audio/Future.mp3';
import Robot from '../../assets/audio/Robot.mp3';

const soundFiles = {
  Bell,
  Clock,
  Future,
  Robot,
};

const sounds = [
  { label: 'Bell', value: 'Bell' },
  { label: 'Clock', value: 'Clock' },
  { label: 'Future', value: 'Future' },
  { label: 'Robot', value: 'Robot' },
];

function SelectSound() {
  const [selectedSound, setSelectedSound] = useState(sounds[0].value);
  const audioRef = useRef(null);

  const handleChange = (event) => {
    const newSound = event.target.value;
    setSelectedSound(newSound);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    audioRef.current = new Audio(soundFiles[newSound]);
    audioRef.current.play().catch((error) => console.error('Error', error));
  };

  return (
    <Box sx={{ minWidth: 50 }}>
      <FormControl fullWidth>
        <InputLabel id="sound-label">Sound</InputLabel>
        <Select
          labelId="sound-label"
          value={selectedSound}
          label="Sound"
          onChange={handleChange}
        >
          {sounds.map((elem, index) => {
            return (
              <MenuItem key={index} value={elem.value}>
                {elem.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectSound;
