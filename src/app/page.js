'use client';

import { Box } from '@mui/material';
import SearchBlock from '@/components/shared/search';
import theme from '@/styles/theme';
import ProductCard from '@/components/global/productCard';

export default function Home() {
  return (
    <Box
      sx={{
        height: '100vh',
        mt: '80px',
      }}
    >
      <SearchBlock />
      <ProductCard /> {/* componente adicionado só para visualização do layout, apagar depois  */}
    </Box>
  );
}
