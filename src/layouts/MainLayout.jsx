import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

function MainLayout() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <Header />
      <Box sx={{ flex: 1, display: 'flex' }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default MainLayout;
