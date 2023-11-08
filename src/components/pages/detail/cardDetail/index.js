import { Box, Button, Divider, Typography } from '@mui/material';
import {
  Beenhere,
  CarRental,
  Luggage,
  Speed,
  AirlineSeatReclineExtra as AirlineSeatReclineExtraIcon,
  DirectionsCar as DirectionsCarIcon,
} from '@mui/icons-material';

const infoCardStyle = {
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

const InfoCard = ({ icon, children }) => (
  <Typography variant="body2" sx={infoCardStyle}>
    {icon}
    {children}
  </Typography>
);

export function DetailCar({ params: { id } }) {
  const carDetails = dataJson.recommends.find((car) => car.id === parseInt(id, 10));

  return (
    <Box component="div">
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Descrição - {carDetails.brand} {carDetails.model}
      </Typography>
      <Typography variant="body1">{description}</Typography>
      <Box sx={{ mb: '8px' }}>
        <InfoCard icon={<Beenhere />}>Ano: {year}</InfoCard>
        <InfoCard icon={<AirlineSeatReclineExtraIcon />}>2 lugares</InfoCard>
        <InfoCard icon={<DirectionsCarIcon />}>Automático</InfoCard>
        <InfoCard icon={<Luggage />}>Mala pequena</InfoCard>
        <InfoCard icon={<Speed />}>Quilometragem ilimitada</InfoCard>
      </Box>
      <Divider sx={{ background: theme.palette.background.secondary, opacity: '0.6' }} />
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
          maxWidth: '200px',
        }}
      >
        Preço por Dia: <strong>R$ {price_per_day.toFixed(2)}</strong>
      </Typography>
      <Button variant="contained" color="primary" startIcon={<CarRental />} disabled={!available}>
        {available ? 'Alugar Agora' : 'Indisponível'}
      </Button>
    </Box>
  );
}
