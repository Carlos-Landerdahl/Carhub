'use client';

import { Box, Typography, Link } from '@mui/material';
import MainBody from '@/components/global/mainBody';
import SearchBlock from '@/components/shared/search';

export default function Home() {
  return (
    <Box
      sx={{
        height: '100vh',
        mt: '80px',
      }}
    >
      <SearchBlock/>
      <MainBody />
    </Box>
  );
}
