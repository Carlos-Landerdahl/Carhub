'use client';

import React from 'react';
import dataJson from '@/data.json';
import { Box, Button, Container, Typography, Grid } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from 'next/link';

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
    <Container maxWidth="xl" sx={{ p: '23px 0', marginTop: '80px' }}>
      <Box sx={{ width: '100%', mb: 4 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <img
              src={carDetails.image}
              alt={carDetails.model}
              style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
              {carDetails.brand} - {carDetails.model}
            </Typography>
            <Typography variant="body1">{carDetails.description}</Typography>
            {/* Adicione mais detalhes aqui, como preço, ano, etc. */}
          </Grid>
        </Grid>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 4,
          }}
        >
          <Typography variant="h5">{carDetails.category}</Typography>
          <Link href="/" passHref>
            <Button startIcon={<ArrowBackIosIcon />}>Voltar</Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
