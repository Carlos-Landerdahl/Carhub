'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#708090',
      text: '#fff',
    },
    background: {
      main: '#333333',
      secondary: '#595959',
    },
  },
  typography: {
    subtitle1: {
      fontFamily: 'Roboto, sans-serif',
    },

    h1: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '2rem',
      fontWeight: 'bold',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          fontFamily: 'Roboto, sans-serif',
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
