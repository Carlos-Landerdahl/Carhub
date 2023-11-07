'use client';

import React from 'react';
import dataJson from '@/data.json';
import { Box, Button, Container, Typography, Grid } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from 'next/link';
import theme from '@/styles/theme';

export default function DetailCar({ params }) {
  const { carId } = params;
  const carDetails = dataJson.recommends.find((car) => car.id === parseInt(carId, 10));

  if (!carDetails) {
    return (
      <Typography sx={{ height: '100vh', marginTop: '80px', color: 'black' }}>
        Carro não encontrado.
      </Typography>
    );
  }

  return (
    <Box sx={{ background: theme.palette.background.gradient, height: '100vh' }}>
      <Container
        maxWidth="xl"
        sx={{
          p: '23px 0',
          marginTop: '80px',
        }}
      >
        <Box
          sx={{
            width: '100%',
            mb: 4,
            height: '100%',
            background: theme.palette.background.light,
            borderRadius: '10px',
          }}
        >
          <Link
            href="/"
            passHref
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: theme.palette.background.secondary,
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
              padding: 10,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.text.text,
                fontWeight: 'bold',
              }}
            >
              {carDetails.category}
            </Typography>
            <Button
              startIcon={<ArrowBackIosIcon />}
              sx={{ color: theme.palette.background.button, fontWeight: 'bold' }}
            >
              Voltar
            </Button>
          </Link>
          <Grid container spacing={2} alignItems="start">
            <Grid item xs={12} md={6}>
              <img
                src={carDetails.image}
                alt={carDetails.model}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderBottomLeftRadius: '10px',
                  borderBottomRightRadius: '10px',
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                {carDetails.brand} - {carDetails.model}
              </Typography>
              <Typography variant="body1">{carDetails.description}</Typography>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 4,
            }}
          ></Box>
        </Box>
      </Container>
    </Box>
  );
}
