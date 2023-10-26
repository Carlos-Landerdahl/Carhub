'use client';

import { Box } from '@mui/material';
import SearchBlock from '@/components/shared/search';
import { ThemeProvider } from '@emotion/react';
import theme from '@/styles/theme';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: '100vh',
          mt: '80px',
        }}
      >
        <SearchBlock />
      </Box>
    </ThemeProvider>
  );
}
