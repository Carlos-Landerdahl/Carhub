'use client';

import { useEffect, useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, TextField, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import ptBR from 'date-fns/locale/pt-BR';
import theme from '@/styles/theme';
import { fetchCarById } from '@/services/api';
import CheckoutConfirmation from '@/components/pages/checkout/confirmation';

export default function Checkout({ params: { id } }) {
  const [car, setCar] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const today = new Date();

  useEffect(() => {
    const loadCarDetails = async () => {
      try {
        const carData = await fetchCarById(id);
        setCar(carData);
      } catch (error) {
        console.error('Erro ao buscar detalhes do carro:', error);
      }
    };

    loadCarDetails();
  }, [id]);

  if (!car) {
    return <Typography>Carregando informações do carro...</Typography>;
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
      <Box
        sx={{
          background: theme.palette.background.gradient,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          padding: 4,
          mt: '80px',
          [theme.breakpoints.down('md')]: {
            height: '100%',
          },
        }}
      >
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            gap: '10px',
            maxWidth: '1065px',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box>
            <Card>
              <CardMedia
                component="img"
                height="350px"
                image={car.imageUrl}
                alt={`${car.brand} ${car.model}`}
                sx={{
                  [theme.breakpoints.down('md')]: {
                    height: '250px',
                  },
                }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'stretch',
                    gap: '10px',
                  }}
                >
                  {car.brand} {car.model} em {car.rentalCompany.city.name} -{' '}
                  {car.rentalCompany.city.state}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {car.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              maxWidth: '1065px',
              width: '100%',
            }}
          >
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Finalizar Reserva
                </Typography>
                <Box
                  component="form"
                  noValidate
                  autoComplete="off"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  <TextField required id="fullname" label="Nome" fullWidth />
                  <TextField required id="email" label="Email" fullWidth />
                  <DatePicker
                    label="Data de Aluguel"
                    minDate={today}
                    value={startDate}
                    onChange={setStartDate}
                  />
                  <DatePicker
                    label="Data de Devolução"
                    value={endDate}
                    onChange={setEndDate}
                    minDate={startDate || today}
                  />
                  <CheckoutConfirmation />
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}
