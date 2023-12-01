'use client';

import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Card, CardContent, Paper, Divider } from '@mui/material';
import theme from '@/styles/theme';
import { Location } from '@/components/pages/detail/location';
import RentalPolicy from '@/components/pages/detail/policy';
import { fetchCarById } from '@/services/api';
import CarHeader from '@/components/pages/detail/carHeader';
import CarMedia from '@/components/pages/detail/carMedia';
import CarDetails from '@/components/pages/detail/carDetails';
import CarCharacteristics from '@/components/pages/detail/carCharacteristics';
import CarRentalInfo from '@/components/pages/detail/carRentalInfo';
import RentButton from '@/components/pages/detail/rentButton';
import { useRouter } from 'next/navigation';

export default function DetailCar({ params: { id } }) {
  const router = useRouter();
  const [carDetails, setCarDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCarDetails = async () => {
      try {
        const details = await fetchCarById(id);
        setCarDetails(details);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    loadCarDetails();
  }, [id]);

  if (loading) {
    return <Typography>Carregando...</Typography>;
  }

  if (error || !carDetails) {
    return <Typography>Carro não encontrado.</Typography>;
  }

  return (
    <>
      <Location
        city={carDetails.rentalCompany.city.name}
        state={carDetails.rentalCompany.city.state}
      />
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
            <CarHeader name={carDetails.category.name} onBackClick={() => router.push('/')} />
            <Card
              sx={{
                display: 'flex',
                borderRadius: '0',
                height: { lg: '500px', md: '100%' },
                flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' },
              }}
            >
              <CarMedia
                brand={carDetails.brand}
                model={carDetails.model}
                imageUrl={carDetails.imageUrl}
              />
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <CarDetails
                  brand={carDetails.brand}
                  model={carDetails.model}
                  description={carDetails.description}
                />
                <CarCharacteristics
                  carYear={carDetails.carYear}
                  seats={carDetails.characteristic[0].seats}
                  trunk={carDetails.characteristic[0].trunk}
                />
                <Divider sx={{ background: theme.palette.background.secondary, opacity: '0.6' }} />
                <CarRentalInfo pricePerDay={carDetails.pricePerDay} />
                <RentalPolicy />
                <RentButton isAvailable={carDetails.isAvailable} id={carDetails.id} />
              </CardContent>
            </Card>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
