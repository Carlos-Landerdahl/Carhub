import { Typography } from '@mui/material';
import theme from '@/styles/theme';

export default function CarRentalInfo({ pricePerDay }) {
  return (
    <Typography
      variant="body1"
      gutterBottom
      align="center"
      sx={{
        color: theme.palette.text.price,
        background: theme.palette.background.lightGreen,
        border: '1px solid #0a8526',
        borderRadius: '8px',
        p: '5px',
        mt: '8px',
        margin: { xs: '10px 10px 10px 0' },
        maxWidth: '200px',
      }}
    >
      Preço por Dia: <strong>R$ {pricePerDay}</strong>
    </Typography>
  );
}
