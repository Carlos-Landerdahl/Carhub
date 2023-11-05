'use client';

import { Box } from '@mui/material';
import theme from '@/styles/theme';
import SearchBlock from '@/components/shared/search/index.js';
import MainBody from '@/components/global/mainBody';

export default function Home() {
  return (
    <Box
      sx={{
        background: theme.palette.background.gradient,
        mt: '80px',
      }}
    >
      <SearchBlock />
      <MainBody />
    </Box>
  );
}
