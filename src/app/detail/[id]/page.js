'use client';

import React from 'react';
import Link from 'next/link';
import {
  Box,
  Button,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Paper,
  Divider,
} from '@mui/material';
import {
  ArrowBackIos,
  Beenhere,
  CarRental,
  Luggage,
  Speed,
  AirlineSeatReclineExtra as AirlineSeatReclineExtraIcon,
  DirectionsCar as DirectionsCarIcon,
} from '@mui/icons-material';
import theme from '@/styles/theme';
import dataJson from '@/data.json';
import { backLink, container, infoCardStyle, pricePerDay } from './styles';

const InfoCard = ({ icon, children }) => (
  <Typography variant="body2" sx={infoCardStyle}>
    {icon}
    {children}
  </Typography>
);

export default function DetailCar({ params: { id } }) {
  const carDetails = dataJson.recommends.find((car) => car.id === parseInt(id, 10));

  if (!carDetails) {
    return (
      <Typography sx={{ height: '100vh', marginTop: '80px', color: 'black' }}>
        Carro não encontrado.
      </Typography>
    );
  }

  return (
    <Box component="div" sx={container}>
      <Container maxWidth="lg">
        <Paper
          elevation={3}
          sx={{
            background: theme.palette.background.light,
            borderRadius: '14px',
          }}
        >
          <Link href="/" passHref style={backLink}>
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
              startIcon={<ArrowBackIos />}
              sx={{ color: theme.palette.background.button, fontWeight: 'bold' }}
            >
              Voltar
            </Button>
          </Link>
          <Card sx={{ display: 'flex', borderRadius: '0' }}>
            <CardMedia
              component="img"
              alt={`${carDetails.brand} ${carDetails.model}`}
              height="auto"
              image={carDetails.image}
            />
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box component="div">
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Descrição - {carDetails.brand} {carDetails.model}
                </Typography>
                <Typography variant="body1">{carDetails.description}</Typography>
                <Box sx={{ mb: '8px' }}>
                  <InfoCard icon={<Beenhere />}>Ano: {carDetails.year}</InfoCard>
                  <InfoCard icon={<AirlineSeatReclineExtraIcon />}>2 lugares</InfoCard>
                  <InfoCard icon={<DirectionsCarIcon />}>Automático</InfoCard>
                  <InfoCard icon={<Luggage />}>mala pequena</InfoCard>
                  <InfoCard icon={<Speed />}>Quilometragem ilimitada</InfoCard>
                </Box>
                <Divider sx={{ background: theme.palette.background.secondary, opacity: '0.6' }} />
                <Typography variant="body1" gutterBottom align="center" sx={pricePerDay}>
                  Preço por Dia: <strong>R$ {carDetails.price_per_day.toFixed(2)}</strong>
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="primary"
                startIcon={<CarRental />}
                disabled={!carDetails.available}
              >
                {carDetails.available ? 'Alugar Agora' : 'Indisponível'}
              </Button>
            </CardContent>
          </Card>
        </Paper>
      </Container>
    </Box>
  );
}
