'use client';

import { Inter } from 'next/font/google';
import { ThemeProvider } from '@emotion/react';
import theme from '@/styles/theme';
import { Box, CssBaseline } from '@mui/material';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body className={inter.className}>
          <Box>
            <Navbar />
            {children}
            <Footer />
          </Box>
        </body>
      </ThemeProvider>
    </html>
  );
}
