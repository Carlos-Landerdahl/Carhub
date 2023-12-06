'use client';

import { useEffect, useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, TextField, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import ptBR from 'date-fns/locale/pt-BR';
import theme from '@/styles/theme';
import { checkout, fetchCarById } from '@/services/apiService';
import CheckoutConfirmation from '@/components/pages/checkout/confirmation';
import { useFormik } from 'formik';
import { useAuth } from '@/context/authContext';
import Toast from '@/components/shared/toasts';
import * as Yup from 'yup';
import { parseISO } from 'date-fns';
import { format } from 'date-fns';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const validationSchema = Yup.object({
  bookingStart: Yup.string().required('O horário de início é obrigatório'),
  bookingDate: Yup.date().required('A data de início é obrigatória'),
  returnDate: Yup.date()
    .required('A data de retorno é obrigatória')
    .min(Yup.ref('bookingDate'), 'A data de retorno não pode ser anterior à data de início'),
});

export default function Checkout({ params: { id } }) {
  const { user } = useAuth();
  const [car, setCar] = useState(null);
  const today = new Date();

  const formik = useFormik({
    initialValues: {
      bookingStart: '',
      bookingDate: '',
      returnDate: '',
    },
    validationSchema,
    onSubmit: (values) => {
      const bookingData = {
        carId: parseInt(id),
        userId: user?.id,
        bookingStart: format(values.bookingStart, 'HH:mm:ss'),
        bookingDate: format(values.bookingDate, 'yyyy-MM-dd'),
        returnDate: format(values.returnDate, 'yyyy-MM-dd'),
      };

      const token = localStorage.getItem('accessToken');
      if (token) {
        checkout(bookingData, token)
          .then((response) => {
            Toast.fire({
              icon: 'success',
              title: 'Reserva realizada',
            });
            console.log('Reserva criada com sucesso:', response);
          })
          .catch((error) => {
            Toast.fire({
              icon: 'error',
              title: 'Você já possui uma reserva',
            });
            console.error('Erro ao criar reserva:', error);
          });
      } else {
        console.error('Token de autenticação não encontrado');
      }
    },
  });

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
                  onSubmit={formik.handleSubmit}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  <TextField
                    id="fullname"
                    fullWidth
                    value={user ? user.fullName : 'Carregando informações'}
                    disabled
                  />
                  <TextField
                    id="email"
                    value={user ? user.username : 'Carregando informações'}
                    disabled
                    fullWidth
                  />
                  <DatePicker
                    label="Retirada"
                    value={formik.values.bookingDate ? parseISO(formik.values.bookingDate) : null}
                    inputFormat="dd/MM/yyyy"
                    name="bookingDate"
                    onChange={(value) => formik.setFieldValue('bookingDate', value)}
                    fullWidth
                    minDate={formik.bookingDate || today}
                    slotProps={{
                      textField: {
                        helperText: formik.touched.bookingDate && formik.errors.bookingDate,
                        error: formik.touched.bookingDate && Boolean(formik.errors.bookingDate),
                      },
                    }}
                  />
                  <TimePicker
                    label="Horário de Retirada"
                    name="bookingStart"
                    value={formik.values.bookingStart ? parseISO(formik.values.bookingStart) : null}
                    onChange={(value) => formik.setFieldValue('bookingStart', value)}
                    slotProps={{
                      textField: {
                        helperText: formik.touched.bookingStart && formik.errors.bookingStart,
                        error: formik.touched.bookingStart && Boolean(formik.errors.bookingStart),
                      },
                    }}
                    fullWidth
                  />
                  <DatePicker
                    label="Devolução"
                    name="returnDate"
                    value={formik.values.returnDate ? parseISO(formik.values.returnDate) : null}
                    inputFormat="dd/MM/yyyy"
                    minDate={formik.returnDate || today}
                    onChange={(value) => formik.setFieldValue('returnDate', value)}
                    fullWidth
                    slotProps={{
                      textField: {
                        helperText: formik.touched.returnDate && formik.errors.returnDate,
                        error: formik.touched.returnDate && Boolean(formik.errors.returnDate),
                      },
                    }}
                  />
                  <Button variant="contained" type="submit" sx={{ height: '50px' }}>
                    Reservar
                  </Button>
                  {/* <CheckoutConfirmation /> */}
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}
