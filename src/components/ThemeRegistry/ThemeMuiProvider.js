'use client';

import { ThemeProvider } from '@emotion/react';
import theme from '@/styles/theme';
import { CssBaseline } from '@mui/material';

export function ThemeMuiProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
