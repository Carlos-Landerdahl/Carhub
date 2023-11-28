import { Box, Typography } from '@mui/material';

export default function CarDetails({ brand, model, description }) {
  return (
    <Box component="div">
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        {brand} {model}
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </Box>
  );
}
