'use client';

import { useTheme } from '@mui/material/styles';
import { Box, Typography, Link } from '@mui/material';
import MainBody from '@/components/global/mainBody';
import theme from '@/styles/theme';
import SearchBlock from '@/components/shared/search/index.js';

export default function Home() {
  return (
    <Box
      sx={{
        height: '100vh',
        mt: '80px',
      }}
    >
      <SearchBlock />
      <MainBody />
      {/* <Link href={`/login`} sx={{ color: 'blueviolet', textDecoration: 'none' }}>
        Login
      </Link> */}
    </Box>
  );
}
