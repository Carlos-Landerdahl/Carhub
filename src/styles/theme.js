'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    default: {
      primary: '#fff',
    },
    text: {
      main: '#595959',
      text: '#fff',
      paragraph: '#383B58',
      price: '#068323',
    },
    background: {
      main: '#333333',
      secondary: '#595959',
      light: '#E2E2E2',
      lightGreen: '#e9ffef',
      lightBlue: '#E8F3FF',
      navbar: '#202125',
      button: '#5E8FCE',
      gradient: 'linear-gradient(90deg, #0a2239 0%, #4b6a90 100%)',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    heading: {
      fontSize: '1.5rem',
      fontStyle: 'normal',
      fontWeight: 'bold',
      lineHeight: 'normal',
    },
    paragraph: {
      fontSize: '1.25rem',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: 'normal',
    },
    label: {
      fontFamily: 'Quicksand, sans-serif',
      fontSize: '.875rem',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: 'normal',
      opacity: '0.5',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
        body: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        'h1, h2, h3, h4, h5, h6': {
          margin: '0 0 1rem 0',
        },
        'p, ul, ol': {
          margin: '0 0 1rem 0',
        },
        a: {
          textDecoration: 'none',
        },
        '.custom-toast': {
          zIndex: '1100 !important',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          '&.Mui-error': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  },
});

export default theme;
