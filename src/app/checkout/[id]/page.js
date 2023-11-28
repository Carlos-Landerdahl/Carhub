'use client';

import { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  TextField,
  Button,
  Grid,
} from '@mui/material';
import theme from '@/styles/theme';
import { fetchCarById } from '@/services/api';
import LocationCityIcon from '@mui/icons-material/LocationCity';

export default function Checkout({ params: { id } }) {
  const [car, setCar] = useState(null);

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
    <Box
      sx={{
        background: theme.palette.background.gradient,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        padding: 4,
        mt: '80px',

        [theme.breakpoints.down('md')]: {
          height: '100%',
        },
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          {/* Bloco de Informações do Carro */}
          <Card>
            <CardMedia
              component="img"
              height="500px"
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
                {car.brand} {car.model} <LocationCityIcon />
                {car.rentalCompany.city.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {car.description}
              </Typography>
              {/* Outras informações do carro podem ser adicionadas aqui */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Bloco para Concluir o Aluguel */}
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Finalizar Reserva
              </Typography>
              <Box component="form" noValidate autoComplete="off">
                {/* Formulário de Conclusão do Aluguel */}
                <TextField required id="firstName" label="Nome" fullWidth margin="normal" />
                <TextField required id="lastName" label="Sobrenome" fullWidth margin="normal" />
                <TextField required id="email" label="Email" fullWidth margin="normal" />
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Concluir Reserva
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
