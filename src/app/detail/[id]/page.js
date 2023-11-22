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
import { Location } from '@/components/pages/detail/location';
import RentalPolicy from '@/components/pages/detail/policy';

const infoCardStyle = {
  color: theme.palette.text.main,
  background: theme.palette.background.lightBlue,
  border: `1px solid ${theme.palette.background.button}`,
  borderRadius: '8px',
  p: '5px',
  mt: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '5px',
};

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
    <>
      <Location />
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
          component="div"
          maxWidth="lg"
          sx={{
            paddingTop: '5%',
            paddingBottom: '5%',
          }}
        >
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
                {carDetails.category}
              </Typography>
              <Button
                startIcon={<ArrowBackIos />}
                sx={{ color: theme.palette.background.button, fontWeight: 'bold' }}
              >
                Voltar
              </Button>
            </Link>
            <Card
              sx={{
                display: 'flex',
                borderRadius: '0',
                height: { lg: '500px', md: '100%' },
                flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' },
              }}
            >
              <CardMedia
                component="img"
                alt={`${carDetails.brand} ${carDetails.model}`}
                image={carDetails.image}
                sx={{
                  maxWidth: { xl: '60%', lg: '50%', md: '100%' },
                  objectFit: 'cover',
                }}
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
                    {carDetails.brand} {carDetails.model}
                  </Typography>
                  <Typography variant="body1">{carDetails.description}</Typography>
                  <Box
                    component="div"
                    sx={{
                      mb: '8px',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '10px',
                      width: '100%',
                    }}
                  >
                    <InfoCard icon={<Beenhere />}>Ano: {carDetails.year}</InfoCard>
                    <InfoCard icon={<AirlineSeatReclineExtraIcon />}>2 lugares</InfoCard>
                    <InfoCard icon={<DirectionsCarIcon />}>Automático</InfoCard>
                    <InfoCard icon={<Luggage />}>Mala pequena</InfoCard>
                    <InfoCard icon={<Speed />}>Quilometragem ilimitada</InfoCard>
                  </Box>
                  <Divider
                    sx={{ background: theme.palette.background.secondary, opacity: '0.6' }}
                  />
                  <Typography
                    variant="body1"
                    gutterBottom
                    align="center"
                    sx={{
                      color: theme.palette.text.price,
                      background: theme.palette.background.lightGreen,
                      border: '1px solid #0a8526',
                      borderRadius: '8px',
                      p: '5px',
                      mt: '8px',
                      margin: { xs: '10px 10px 10px 0' },
                      maxWidth: '200px',
                    }}
                  >
                    Preço por Dia: <strong>R$ {carDetails.price_per_day.toFixed(2)}</strong>
                  </Typography>
                  <RentalPolicy />
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
    </>
  );
}
