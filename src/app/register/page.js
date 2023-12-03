'use client';

import { Box, Button, TextField, Typography, CircularProgress } from '@mui/material';
import Link from 'next/link';
import theme from '@/styles/theme';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Toast } from '@/components/shared/toasts/toastForm';
import { useState } from 'react';
import { createUser } from '@/services/api';

export default function Register() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('O campo nome é obrigatório')
      .min(3, 'O campo nome deve conter pelo menos 3 letras'),
    lastName: Yup.string()
      .required('O campo sobrenome é obrigatório')
      .min(3, 'O campo sobrenome deve conter pelo menos 3 letras'),
    email: Yup.string().email('Email inválido').required('O campo email é obrigatório'),
    password: Yup.string().required('O campo senha é obrigatório'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'As senhas não coincidem')
      .required('O campo confirme a senha é obrigatório'),
  });

  const handleTrim = (e) => {
    const { name, value } = e.target;
    formik.setFieldValue(name, value.trim());
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setSubmitting(true);
        await createUser({
          fullName: `${values.firstName} ${values.lastName}`,
          email: values.email,
          password: values.password,
        });
        Toast.fire({
          icon: 'success',
          title: 'Conta criada com sucesso',
        });
        router.push('/login');
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: error.response?.data?.message || 'Erro ao criar a conta',
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
        marginTop: '80px',
        background: theme.palette.background.gradient,
      }}
    >
      <Box
        sx={{
          padding: '16px',
          maxWidth: '400px',
          margin: '10px',
          background: theme.palette.default.primary,
          borderRadius: '4px',
        }}
      >
        <Typography sx={{ mb: '20px' }} variant="h5" gutterBottom>
          Criar conta
        </Typography>
        <TextField
          name="firstName"
          label="Nome"
          variant="outlined"
          fullWidth
          onBlur={handleTrim}
          sx={{ marginBottom: 2 }}
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && !!formik.errors.firstName}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          name="lastName"
          label="Sobrenome"
          variant="outlined"
          onBlur={handleTrim}
          fullWidth
          sx={{ marginBottom: 2 }}
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && !!formik.errors.lastName}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && !!formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          name="password"
          label="Senha"
          variant="outlined"
          type="password"
          fullWidth
          sx={{ marginBottom: 2 }}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && !!formik.errors.password}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          name="confirmPassword"
          label="Confirme a senha"
          variant="outlined"
          type="password"
          fullWidth
          sx={{ marginBottom: 2 }}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={formik.touched.confirmPassword && !!formik.errors.confirmPassword}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={formik.handleSubmit}
          disabled={isSubmitting}
          sx={{ height: '50px' }}
        >
          {isSubmitting ? <CircularProgress size={20} /> : 'Criar conta'}
        </Button>
        <Typography sx={{ mt: 2, textAlign: 'center' }}>
          Já tem uma conta?
          <Button
            component={Link}
            sx={{
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
            href={`/login`}
            variant="text"
            color="primary"
          >
            Iniciar sessão
          </Button>
        </Typography>
      </Box>
    </Box>
  );
}
