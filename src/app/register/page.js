'use client';

import { Box, Button, Card, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    switch (name) {
      case 'firstName':
        setFormErrors({
          ...formErrors,
          firstName: value.length >= 5 ? '' : 'Nome deve conter pelo menos 5 letras',
        });
        break;
      case 'lastName':
        setFormErrors({
          ...formErrors,
          lastName: value.length >= 3 ? '' : 'Sobrenome deve conter pelo menos 3 letras',
        });
        break;
      case 'email':
        setFormErrors({
          ...formErrors,
          email: validateEmail(value) ? '' : 'Email não é válido',
        });
        break;
      case 'password':
        setFormErrors({
          ...formErrors,
          password:
            value.match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/g) && value.length >= 3
              ? ''
              : 'Senha deve conter pelo menos 3 letras e um número',
        });
        break;
      case 'confirmPassword':
        setFormErrors({
          ...formErrors,
          confirmPassword: value === formData.password ? '' : 'As senhas não correspondem',
        });
        break;
      default:
        break;
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '80px',
        background: 'linear-gradient(90deg, #0a2239 0%, #4b6a90 100%)',
      }}
    >
      <Box
        sx={{
          padding: '16px',
          maxWidth: '400px',
          margin: '10px',
          background: 'white',
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
          sx={{ marginBottom: 2 }}
          value={formData.firstName}
          onChange={handleInputChange}
          error={!!formErrors.firstName}
          helperText={formErrors.firstName}
        />
        <TextField
          name="lastName"
          label="Sobrenome"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
          value={formData.lastName}
          onChange={handleInputChange}
          error={!!formErrors.lastName}
          helperText={formErrors.lastName}
        />
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
          value={formData.email}
          onChange={handleInputChange}
          error={!!formErrors.email}
          helperText={formErrors.email}
        />
        <TextField
          name="password"
          label="Senha"
          variant="outlined"
          type="password"
          fullWidth
          sx={{ marginBottom: 2 }}
          value={formData.password}
          onChange={handleInputChange}
          error={!!formErrors.password}
          helperText={formErrors.password}
        />
        <TextField
          name="confirmPassword"
          label="Confirme a senha"
          variant="outlined"
          type="password"
          fullWidth
          sx={{ marginBottom: 2 }}
          value={formData.confirmPassword}
          onChange={handleInputChange}
          error={!!formErrors.confirmPassword}
          helperText={formErrors.confirmPassword}
        />
        <Button variant="contained" color="primary" fullWidth>
          Criar conta
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
