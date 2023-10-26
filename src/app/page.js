'use client';

import { Box } from '@mui/material';
import SearchBlock from '@/components/shared/search';
import theme from '@/styles/theme';

export default function Home() {
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
