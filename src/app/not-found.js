'use client';

import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import custom404Img from '/public/img/404-page-not-found.svg';
import Image from 'next/image';
import theme from '@/styles/theme';
import { useRouter } from 'next/navigation';

export default function Custom404() {
  const router = useRouter();

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: theme.palette.background.gradient,
        p: 2,
      }}
    >
      <Container
        component="main"
        maxWidth="md"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
          borderRadius: '8px',
        }}
      >
        <Image
          src={custom404Img}
          alt="Página não encontrada"
          width={650}
          height={650}
          style={{
            maxWidth: '100%',
            mt: '40px',
            height: 'auto',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            p: 2,
            maxWidth: '450px',
            width: '100%',
            gap: '10px',
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ color: theme.palette.text.text }}>
            Você saiu da rota
          </Typography>
          <Typography variant="body" gutterBottom sx={{ color: theme.palette.text.text }}>
            Não foi possível encontrar esta página
          </Typography>
          <Button variant="contained" color="primary" onClick={() => router.push('/')}>
            Voltar para a página inicial
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
