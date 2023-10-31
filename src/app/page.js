'use client';

import { useTheme } from '@mui/material/styles';
import { Box, Typography, Link } from '@mui/material';
import MainBody from '@/components/global/mainBody';
import theme from '@/styles/theme';
import ProductCard from '@/components/global/productCard';
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
      <Box 
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        marginTop: '200px',
      }}>
      <ProductCard /> {/* componente adicionado só para visualização do layout, apagar depois  */}
      </Box>
    </Box>
  );
}
