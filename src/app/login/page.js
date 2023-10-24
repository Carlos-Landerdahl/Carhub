'use client';

import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

export default function Home() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: '100vh',
          mt: '80px',
          padding: '10px',
          background: theme.palette.background.main,
        }}
      >
        <Typography variant="h1" color={theme.palette.primary.text}>
          page login
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
