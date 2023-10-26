'use client';

import { ThemeProvider } from '@emotion/react';
import theme from '@/styles/theme';

export function ThemeMuiProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
