'use client';

import { Box, Typography } from '@mui/material';
import theme from '@/styles/theme';
import React from 'react';
import Image from 'next/image';
import crash404 from '../assets/crash404.png';

export default function NotFound() {
  return (
    <Box
      sx={{
        background: theme.palette.background.gradient,
        mt: '80px',
        justifyContent: 'center',
        alignItems: 'center',
        height: '75vh',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          height: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            padding: '20px',
            height: '100%',
            background: theme.palette.background.paper,
            borderRadius: '10px',
            boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.25)',
            width: '50%',
            height: '80%',
            fontFamily: theme.typography.fontFamily,
          }}
        >
          <Typography variant="h1" component="h1" sx={{ fontSize: '50px', textAlign: 'center' }}>
            404 - Página não encontrada
          </Typography>
          <Typography variant="h6" component="h1" sx={{ fontSize: '24px', textAlign: 'center' }}>
            Ooooops...Parece que você desviou e saiu da rota. <br /> Volte para a página inicial.
          </Typography>
        </Box>
        <Image src={crash404} width={500} height={500} alt="" style={{ objectFit: 'contain' }} />
      </Box>
    </Box>
  );
}
