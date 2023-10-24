'use client';

import { useTheme } from '@mui/material/styles';
import { Box, Typography, Link } from '@mui/material';

export default function Home() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: '100vh',
        mt: '80px',
        padding: '10px',
        background: theme.palette.background.main,
      }}
    >
      <Typography variant="h1" color={theme.palette.primary.text}>
        Content
      </Typography>
      <Link href={`/login`} sx={{ color: 'blueviolet', textDecoration: 'none' }}>
        Login
      </Link>
    </Box>
  );
}
