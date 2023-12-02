'use client';

import { Box, Button, Card, TextField, Typography, CircularProgress } from '@mui/material';
import Link from 'next/link';
import theme from '@/styles/theme';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Toast } from '@/components/shared/toasts/toastForm';
import { useAuth } from '@/context/AuthContext';

export default function Home() {
  const { onLogin } = useAuth();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email inválido')
      .min(3, 'O email deve ter pelo menos 3 caracteres')
      .required('O campo email é obrigatório.'),
    password: Yup.string()
      .min(3, 'A senha deve ter pelo menos 3 caracteres')
      .required('O campo senha é obrigatório.'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await onLogin(values);
        Toast.fire({
          icon: 'success',
          title: 'Login feito com sucesso',
        });
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: 'Usuário não encontrado',
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        background: theme.palette.background.gradient,
      }}
    >
      <Card raised sx={{ padding: 2, maxWidth: '400px', margin: '0px 10px' }}>
        <Typography sx={{ mb: '20px' }} variant="h5" gutterBottom>
          Iniciar sessão
        </Typography>
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && !!formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          label="Senha"
          name="password"
          variant="outlined"
          type="password"
          fullWidth
          sx={{ marginBottom: 2 }}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && !!formik.errors.password}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={formik.handleSubmit}
          disabled={formik.isSubmitting}
          sx={{ height: '50px' }}
        >
          {formik.isSubmitting ? (
            <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <CircularProgress size={20} />
            </Box>
          ) : (
            'Entrar'
          )}
        </Button>
        <Button
          component={Link}
          href={`/register`}
          variant="outlined"
          color="primary"
          fullWidth
          sx={{ mt: 1 }}
        >
          Criar conta
        </Button>
      </Card>
    </Box>
  );
}
