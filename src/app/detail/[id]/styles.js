import theme from '@/styles/theme';

export const infoCardStyle = {
  color: theme.palette.text.main,
  background: theme.palette.background.lightBlue,
  border: `1px solid ${theme.palette.background.button}`,
  borderRadius: '8px',
  p: '5px',
  mt: '8px',
  maxWidth: '150px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '5px',
};

export const container = {
  background: theme.palette.background.gradient,
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const backLink = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: theme.palette.background.secondary,
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
  padding: 10,
};

export const pricePerDay = {
  color: theme.palette.text.price,
  background: theme.palette.background.lightGreen,
  border: '1px solid #0a8526',
  borderRadius: '8px',
  p: '5px',
  mt: '8px',
  maxWidth: '200px',
};
