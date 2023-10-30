'use client';

import { Box } from '@mui/material';
import { Height, WidthFull } from '@mui/icons-material';
import theme from '@/styles/theme';

function ProductCard() {
    return (
        <Box sx={{
            Width: '730px',
            Height: '317px',
            background: theme.palette.background.secondary,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            padding: '16px',
        }} >
        <h1>ProductCard</h1>
        </Box>
    )}

export default ProductCard;