import { Typography } from '@mui/material';
import React from 'react';

function SpanChildren({ spanText }) {
  return (
    <Typography
      component="span"
      sx={{ color: 'primary.main', fontWeight: 'bold' }}
    >
      {spanText}
    </Typography>
  );
}

export default SpanChildren;
