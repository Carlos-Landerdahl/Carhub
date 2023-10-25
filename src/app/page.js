'use client';

import { useTheme } from '@mui/material/styles';
import { Box, Typography, Link } from '@mui/material';
import SearchBlock from '@/components/shared/search';

export default function Home() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: '100vh',
        mt: '80px',
      }}
    >
      <SearchBlock />
    </Box>
  );
}
