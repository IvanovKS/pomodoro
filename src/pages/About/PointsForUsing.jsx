import React from 'react';
import { Typography } from '@mui/material';
import SpanChildren from './SpanChildren';

function PointsForUsing({ text, spanText, index }) {
  return (
    <Typography
      variant="body1"
      gutterBottom
      sx={{
        textAlign: 'justify',
      }}
    >
      {index}
      <SpanChildren spanText={spanText} />
      {text}
    </Typography>
  );
}

export default PointsForUsing;
