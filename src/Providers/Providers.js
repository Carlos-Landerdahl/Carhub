'use client';

import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import theme from '@/styles/theme';
import { CarProvider } from '@/context/CarContext';
import { AuthProvider } from '@/context/AuthContext';

export default function Providers({ children }) {
  return (
    <AuthProvider>
      <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
        <CarProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </CarProvider>
      </NextAppDirEmotionCacheProvider>
    </AuthProvider>
  );
}
