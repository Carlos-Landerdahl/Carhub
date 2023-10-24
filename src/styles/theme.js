import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#708090',
      text: '#fff',
    },
    background: {
      main: '#333333',
      secundary: '#595959',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Arial, sans-serif',
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
        },
        body: {
          fontFamily: 'Arial, sans-serif',
          lineHeight: 1.6,
          color: 'white',
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
        img: {
          maxWidth: '100%',
        },
        'button, input, textarea, select': {
          fontFamily: 'inherit',
        },
      },
    },
  },
});

export default theme;
