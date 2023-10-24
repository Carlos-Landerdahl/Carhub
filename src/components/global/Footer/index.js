'use client';

import React from 'react';
import { Container, Typography, Link, Box, useTheme } from '@mui/material';

function Footer() {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: '#595959', py: 3 }}>
      <Container maxWidth="lg">
        <Box textAlign="center">
          <Typography variant="h6" color="white">
            Nome da Empresa
          </Typography>
          <Typography variant="body2" color="white">
            Email: exemplo@email.com
          </Typography>
          <Box mt={2}>
            <Link
              href="#"
              sx={{ color: 'white', textDecoration: 'none' }}
              color={theme.palette.primary.text}
              variant="body2"
            >
              Política de Privacidade
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
