'use client';

import { createTheme } from '@mui/material/styles';
import { ptBR } from '@mui/material/locale';

const theme = createTheme(
  {
    palette: {
      default: {
        primary: '#fff',
      },
      text: {
        main: '#595959',
        text: '#fff',
        dark: '#333333',
        light: '#E2E2E2',
        paragraph: '#383B58',
        price: '#068323',
        danger: '#C83737',
      },
      background: {
        main: '#333333',
        default: '#fff',
        secondary: '#595959',
        light: '#EFEFEF',
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
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1100,
        xl: 1536,
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
          '.swal2-container': {
            zIndex: '2000 !important',
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
  },
  ptBR,
);

export default theme;
