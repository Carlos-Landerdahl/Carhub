'use client';

import { useTheme } from '@mui/material/styles';
import { Box, Typography, Link } from '@mui/material';
import MainBody from '@/components/global/MainBody';
import theme from '@/styles/theme';
import ProductCard from '@/components/Cards/RecommendCard';
import SearchBlock from '@/components/shared/search/index.js';

export default function Home() {
  return (
    <Box
      sx={{
        background: theme.palette.background.gradient,
        height: '100vh',
        mt: '80px',
      }}
    >
      <SearchBlock />
      <MainBody/>
    </Box>
  );
}
