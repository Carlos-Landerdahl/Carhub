'use client';

import React from 'react';
import { Container, Typography, Link, Box, Button } from '@mui/material';
import theme from '@/styles/theme';
import { FacebookRounded, LinkedIn, Instagram, Twitter } from '@mui/icons-material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: theme.palette.background.navbar,
        color: theme.palette.default.primary,
        height: '100%',
        padding: '19px 50px 23px 50px',
      }}
    >
      <Typography>@2023 CarHub RentalCar</Typography>
      <Box sx={{ display: { xs: 'none', sm: 'flex', gap: '30px' } }}>
        <FacebookRounded fontSize="large" />
        <LinkedIn fontSize="large" />
        <Twitter fontSize="large" />
        <Instagram fontSize="large" />
      </Box>
    </Box>
  );
}

export default Footer;
