'use client';

import { useTheme } from '@mui/material/styles';
import { Typography, Link, Container, Box } from '@mui/material';
import MainBody from '@/components/global/MainBody';
import theme from '@/styles/theme';
import ProductCard from '@/components/Cards/RecommendCard';
import SearchBlock from '@/components/shared/search/index.js';

export default function Home() {
  return (
    <Box
      sx={{
        background: theme.palette.background.gradient,
        mt: '80px',
      }}
    >
      <SearchBlock />
      <MainBody/>
    </Box>
  );
}
