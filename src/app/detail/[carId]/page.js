'use client';

import React from 'react';
import dataJson from '@/data.json';
import { Box, Button, Container, Typography, Grid, Card, CardMedia, CardContent, ButtonBase, Paper } from '@mui/material';
import {ArrowBackIos, CarRental} from '@mui/icons-material';
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
    <Box
      component="div"
      sx={{
        background: theme.palette.background.gradient,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
      <Container
        maxWidth="lg"
      >
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.text.text,
            fontWeight: 'bold',
          }} gutterBottom>
          Detalhes do Carro - {carDetails.brand} {carDetails.model}
        </Typography>
        <Paper
          elevation={3}
          sx={{
            background: theme.palette.background.light,
            borderRadius: '14px',
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
              Categoria: {carDetails.category}
            </Typography>
            <Button
              startIcon={<ArrowBackIos/>}
              sx={{ color: theme.palette.background.button, fontWeight: 'bold' }}
            >
              Voltar
            </Button>
          </Link>
          <Card sx={{ display:"flex", borderRadius: "0"}}>
            <CardMedia
              component="img"
              alt={`${carDetails.brand} ${carDetails.model}`}
              height="auto"
              image={carDetails.image}
            />
            <CardContent sx={{
              display: 'flex',
              flexDirection: "column",
              justifyContent: "space-between"
            }}>
              <Box component="div">
                <Typography variant="h6" gutterBottom>
                  Descrição
                </Typography>
                <Typography variant="body1">
                  {carDetails.description}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Ano: {carDetails.year}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Preço por Dia:  R$ {carDetails.price_per_day.toFixed(2)}
                </Typography>
              </Box>
              <Button 
                variant="contained" 
                color="primary" 
                startIcon={<CarRental/>} 
                disabled={!carDetails.available}
              >
                {carDetails.available ? "Alugar Agora" : "Indisponível"}
              </Button>
            </CardContent>
          </Card>
        </Paper>
      </Container>
    </Box>
  );
}
