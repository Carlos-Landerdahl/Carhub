import React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Footer() {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.background.secundary, py: 3 }}>
      <Container maxWidth="lg">
        <Box textAlign="center">
          <Typography variant="h6" color={theme.palette.primary.text}>
            Nome da Empresa
          </Typography>
          <Typography variant="body2" color={theme.palette.primary.text}>
            Email: exemplo@email.com
          </Typography>
          <Box mt={2}>
            <Link href="#" color={theme.palette.primary.text} variant="body2">
              Política de Privacidade
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
