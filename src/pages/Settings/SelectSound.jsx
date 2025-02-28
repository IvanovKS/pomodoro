import React, { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const sounds = [
  { label: 'Bell', value: 'Bell.mp3' },
  { label: 'Clock', value: 'Clock.mp3' },
  { label: 'Future', value: 'Future.mp3' },
  { label: 'Robot', value: 'Robot.mp3' },
];

function SelectSound() {
  const [selectedSound, setSelectedSound] = useState(sounds[0].value);
  const handleChange = (event) => {
    setSelectedSound(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 50 }}>
      <FormControl fullWidth>
        <InputLabel id="sound-label">Sound</InputLabel>
        <Select labelId="sound-label" value={selectedSound} label="Sound" onChange={handleChange}>
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
