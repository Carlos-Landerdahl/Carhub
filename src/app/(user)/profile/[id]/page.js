'use client';

import { useEffect, useState } from 'react';
import axios from '@/services/axios';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Box,
  Avatar,
  Chip,
} from '@mui/material';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useAuth } from '@/context/authContext';
import { fetchCarById } from '@/services/apiService';
import { teal, amber } from '@mui/material/colors';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import theme from '@/styles/theme';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Link from 'next/link';
import GlobalLoader from '@/components/global/loader';

export default function Profile() {
  const { user } = useAuth();
  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('accessToken');

  const formatDate = (dateString) => {
    return format(parseISO(dateString), 'dd/MM/yyyy', { locale: ptBR });
  };

  useEffect(() => {
    if (user) {
      setLoading(true);
      axios
        .get(`/api/bookings/user/${user.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(async (response) => {
          const bookings = response.data;
          const carsDetailsPromises = bookings.map((booking) =>
            fetchCarById(booking.carId).catch((error) => {
              console.error('Erro ao buscar detalhes do carro:', error);
              return null;
            }),
          );
          const carsDetails = await Promise.all(carsDetailsPromises);

          const reservasComDetalhes = bookings.map((booking, index) => ({
            ...booking,
            carDetails: carsDetails[index] || {},
          }));
          setReservas(reservasComDetalhes);
        })
        .catch((error) => {
          console.error('Erro ao buscar reservas:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [token, user]);

  return (
    <Box
      sx={{
        width: '100%',
        background: theme.palette.background.gradient,
      }}
    >
      <Container
        sx={{
          p: '100px 10px 10px 10px',
          display: 'flex',
          minHeight: '100vh',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            mb: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 2,
            borderRadius: '4px',
            boxShadow: 1,
            width: '100%',
            maxWidth: 360,
            bgcolor: theme.palette.background.lightBlue,
          }}
        >
          <Avatar
            sx={{ mb: 2, bgcolor: theme.palette.background.main, maxWidth: 56, maxHeight: 56 }}
            alt="User Profile"
          >
            {user ? user.fullName.charAt(0) : 'Carregando avatar'}
          </Avatar>
          <Typography variant="h5" component="h2">
            {user ? user.fullName : 'Carregando nome completo'}
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            {user ? user.username : 'Carregando email'}
          </Typography>
          <Chip label="Usuário" color="primary" />
        </Box>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          padding={3}
          color={theme.palette.text.text}
        >
          Reservas do {user ? user.fullName : 'usuário'}
        </Typography>
        {!loading ? (
          <GlobalLoader />
        ) : (
          <Grid
            container
            spacing={2}
            sx={{
              justifyContent: 'center',
            }}
          >
            {reservas.length > 0 ? (
              reservas.map((reserva) => (
                <Grid item xs={12} md={6} lg={4} key={reserva.id}>
                  <Card variant="outlined" sx={{ boxShadow: 3 }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <DirectionsCarFilledIcon sx={{ color: amber[800] }} />
                        <Typography variant="h6" gutterBottom sx={{ mb: '0' }}>
                          {reserva.carDetails.model || 'Modelo não disponível'}
                        </Typography>
                      </Box>
                      <Typography color="text.secondary">
                        {reserva.carDetails.brand || 'Marca não disponível'}
                      </Typography>
                      <Typography color="text.secondary">{`Ano: ${
                        reserva.carDetails.carYear || 'Ano não disponível'
                      }`}</Typography>
                      <Box display="flex" alignItems="center" my={1}>
                        <AccessTimeIcon sx={{ mr: 1, color: teal[300] }} />
                        <Typography variant="body2">
                          {`Horário da retirada: ${reserva.bookingStart}`}
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center" my={1}>
                        <EventIcon sx={{ mr: 1, color: teal[300] }} />
                        <Typography variant="body2">
                          {`Data da retirada: ${formatDate(reserva.bookingDate)}`}
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center" my={1}>
                        <EventIcon sx={{ mr: 1, color: teal[300] }} />
                        <Typography variant="body2">
                          {`Data da devolução: ${formatDate(reserva.returnDate)}`}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <Box
                sx={{
                  textAlign: 'center',
                  p: theme.spacing(3),
                }}
              >
                <DriveEtaIcon
                  sx={{
                    fontSize: 80,
                    color: theme.palette.primary.main,
                    mb: 2,
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.text,
                    mb: 3,
                  }}
                >
                  Não há reservas vinculadas ao perfil.
                </Typography>
                <Link href={'/'} passHref>
                  <Button variant="contained" color="primary" startIcon={<DriveEtaIcon />}>
                    Reservar um carro
                  </Button>
                </Link>
              </Box>
            )}
          </Grid>
        )}
      </Container>
    </Box>
  );
}
