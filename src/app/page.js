'use client';

import { Box } from '@mui/material';
import theme from '@/styles/theme';
import SearchFilter from '@/components/shared/search/index.js';
import Content from '@/components/pages/home/content';

export default function Home() {
  return (
    <Box
      sx={{
        background: theme.palette.background.gradient,
        mt: '80px',
      }}
    >
      <SearchFilter />
      <Content />
    </Box>
  );
}
