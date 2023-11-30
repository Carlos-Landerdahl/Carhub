import { Box, Rating, Typography } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import theme from '@/styles/theme';
import { useState } from 'react';

export function Location({ city, state }) {
  const [star, setStar] = useState(4);
  return (
    <Box
      sx={{
        mt: '80px',
        display: 'flex',
        padding: '10px',
        justifyContent: 'space-between',
        background: theme.palette.background.light,
      }}
    >
      <Typography
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: theme.palette.text.main,
          fontWeight: 'bold',
        }}
      >
        <PlaceIcon /> {city} - {state}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <Box>
          <Typography
            sx={{
              textAlign: 'end',
              fontWeight: 'bold',
              color: theme.palette.text.main,
            }}
          >
            Muito bom
          </Typography>
          <Rating name="read-only" value={star} readOnly />
        </Box>
        <Typography
          component="legend"
          sx={{
            background: theme.palette.background.button,
            padding: '6px 15px',
            color: theme.palette.text.text,
            fontWeight: 'bold',
            borderRadius: '8px',
            fontSize: '1.5rem',
          }}
        >
          {star}
        </Typography>
      </Box>
    </Box>
  );
}
