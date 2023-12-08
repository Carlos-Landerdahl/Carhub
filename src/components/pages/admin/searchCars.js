import { Box } from '@mui/material';
import CarManagement from './carManagement';

export default function SearchCars() {
  return (
    <Box
      sx={{
        p: '10px',
      }}
    >
      <CarManagement />
    </Box>
  );
}
