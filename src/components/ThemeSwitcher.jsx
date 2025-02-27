import React from 'react';
import { useThemeContext } from '../context/ThemeContext';
import { FormControlLabel, Switch, Typography } from '@mui/material';

function ThemeSwitcher() {
  const { darkMode, toggleTheme } = useThemeContext();

  return (
    <FormControlLabel
      control={<Switch checked={darkMode} onChange={toggleTheme} />}
      label={
        <Typography sx={{ display: { xs: 'none', md: 'inline' } }}>
          {darkMode ? 'Dark theme' : 'Light theme'}
        </Typography>
      }
    />
  );
}

export default ThemeSwitcher;
