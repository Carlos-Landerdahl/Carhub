'use client';

import React from 'react';

import { Box } from '@mui/material';
import CreateCars from '@/components/pages/admin/createCars';
import SearchCars from '@/components/pages/admin/searchCars';
import theme from '@/styles/theme';

export default function AdminPanel() {
  return (
    <Box
      sx={{
        height: '100%',
        pt: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: theme.palette.background.gradient,
      }}
    >
      <CreateCars />
      <SearchCars />
    </Box>
  );
}
