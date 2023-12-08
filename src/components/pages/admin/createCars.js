'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import {
  Container,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
} from '@mui/material';
import { createCar, linkCharacteristicToCar } from '@/services/apiService';
import Toast from '@/components/shared/toasts';
import Swal from 'sweetalert2';

export default function CreateCars() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      brand: '',
      model: '',
      carYear: '',
      imageUrl: '',
      pricePerDay: '',
      isAvailable: false,
      description: '',
      categoryId: '',
      rentalCompanyId: '',
      characteristicId: '',
    },
    validationSchema: Yup.object({
      brand: Yup.string().required('Campo obrigatório'),
      model: Yup.string().required('Campo obrigatório'),
      carYear: Yup.number().required('Campo obrigatório'),
      imageUrl: Yup.string().required('Campo obrigatório'),
      pricePerDay: Yup.number().required('Campo obrigatório'),
      isAvailable: Yup.boolean(),
      description: Yup.string().required('Campo obrigatório'),
      categoryId: Yup.number().required('Campo obrigatório'),
      rentalCompanyId: Yup.number().required('Campo obrigatório'),
      characteristicId: Yup.number().required('Campo obrigatório'),
    }),
    onSubmit: async (values) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        Swal.fire({
          title: 'Tem certeza?',
          text: 'Você está prestes a criar um novo carro.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sim, criar!',
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              const newCar = await createCar(values, token);
              await linkCharacteristicToCar(values.characteristicId, newCar.id, token);
              Toast.fire({
                icon: 'success',
                title: 'Carro criado com sucesso',
              });
              console.log('Carro adicionado com sucesso');
            } catch (error) {
              Toast.fire({
                icon: 'error',
                title: 'Erro ao adicionar carro',
              });
              console.error('Erro ao adicionar carro', error);
            }
          }
        });
      } else {
        console.error('Token de autenticação não encontrado');
      }
    },
  });

  return (
    <Box
      sx={{
        p: '10px',
      }}
    >
      <Container
        component="main"
        maxWidth="md"
        sx={{
          background: 'white',
          borderRadius: '4px',
        }}
      >
        <Typography variant="h4" gutterBottom pt={2} sx={{ textAlign: 'center' }}>
          Painel admin
        </Typography>
        <Typography variant="body1" gutterBottom mb={2}>
          Criar novo carro:
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Marca"
                name="brand"
                value={formik.values.brand}
                onChange={formik.handleChange}
                error={formik.touched.brand && Boolean(formik.errors.brand)}
                helperText={formik.touched.brand && formik.errors.brand}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Modelo"
                name="model"
                value={formik.values.model}
                onChange={formik.handleChange}
                error={formik.touched.model && Boolean(formik.errors.model)}
                helperText={formik.touched.model && formik.errors.model}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Ano do Carro"
                name="carYear"
                type="number"
                value={formik.values.carYear}
                onChange={formik.handleChange}
                error={formik.touched.carYear && Boolean(formik.errors.carYear)}
                helperText={formik.touched.carYear && formik.errors.carYear}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="URL da Imagem"
                name="imageUrl"
                value={formik.values.imageUrl}
                onChange={formik.handleChange}
                error={formik.touched.imageUrl && Boolean(formik.errors.imageUrl)}
                helperText={formik.touched.imageUrl && formik.errors.imageUrl}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Preço por Dia"
                name="pricePerDay"
                type="number"
                value={formik.values.pricePerDay}
                onChange={formik.handleChange}
                error={formik.touched.pricePerDay && Boolean(formik.errors.pricePerDay)}
                helperText={formik.touched.pricePerDay && formik.errors.pricePerDay}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formik.values.isAvailable}
                    onChange={formik.handleChange}
                    name="isAvailable"
                  />
                }
                label="Disponível"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Descrição"
                name="description"
                multiline
                rows={4}
                value={formik.values.description}
                onChange={formik.handleChange}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="ID da Categoria"
                name="categoryId"
                type="number"
                value={formik.values.categoryId}
                onChange={formik.handleChange}
                error={formik.touched.categoryId && Boolean(formik.errors.categoryId)}
                helperText={formik.touched.categoryId && formik.errors.categoryId}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="ID da Empresa de Aluguel"
                name="rentalCompanyId"
                type="number"
                value={formik.values.rentalCompanyId}
                onChange={formik.handleChange}
                error={formik.touched.rentalCompanyId && Boolean(formik.errors.rentalCompanyId)}
                helperText={formik.touched.rentalCompanyId && formik.errors.rentalCompanyId}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                label="ID da Característica"
                name="characteristicId"
                type="number"
                value={formik.values.characteristicId}
                onChange={formik.handleChange}
                error={formik.touched.characteristicId && Boolean(formik.errors.characteristicId)}
                helperText={formik.touched.characteristicId && formik.errors.characteristicId}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2, height: '40px' }}
          >
            Adicionar Carro
          </Button>
        </form>
      </Container>
    </Box>
  );
}
