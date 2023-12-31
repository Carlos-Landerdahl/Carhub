'use client';

import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './emotionCache';
import theme from '@/styles/theme';
import { CarProvider } from '@/context/carContext';
import { AuthProvider } from '@/context/authContext';

export default function Providers({ children }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <AuthProvider>
        <CarProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </CarProvider>
      </AuthProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
