import { Box, Typography } from '@mui/material';
import {
  Beenhere,
  Luggage,
  Speed,
  AirlineSeatReclineExtra as AirlineSeatReclineExtraIcon,
  DirectionsCar as DirectionsCarIcon,
} from '@mui/icons-material';
import theme from '@/styles/theme';

const infoCardStyle = {
  color: theme.palette.text.main,
  background: theme.palette.background.lightBlue,
  border: `1px solid ${theme.palette.background.button}`,
  borderRadius: '8px',
  p: '5px',
  mt: '8px',
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

export default function CarCharacteristics({ carYear, seats, trunk }) {
  return (
    <Box
      component="div"
      sx={{ mb: '8px', display: 'flex', flexWrap: 'wrap', gap: '10px', width: '100%' }}
    >
      <InfoCard icon={<Beenhere />}>Ano: {carYear}</InfoCard>
      <InfoCard icon={<AirlineSeatReclineExtraIcon />}>{seats}</InfoCard>
      <InfoCard icon={<DirectionsCarIcon />}>Automático</InfoCard>
      <InfoCard icon={<Luggage />}>{trunk}</InfoCard>
      <InfoCard icon={<Speed />}>Quilometragem ilimitada</InfoCard>
    </Box>
  );
}
