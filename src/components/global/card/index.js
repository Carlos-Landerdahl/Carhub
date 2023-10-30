'use client';

import { Box } from '@mui/material';
import Image from 'next/image';

function CategoryCard({ name, carCount, imageSrc }) {
    return (
    <Box sx={{
        width: '19.375rem',
        height: '17rem',
        backgroundColor: '#fff',
        borderRadius: '10px',
        border: '1px solid #F3F1ED',
        boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
        flexShrink: '0',
        display: 'flex',
        flexDirection: 'column',
        p: 0,
    }}>
        <Image style={{
        width: '100%',
        maxHeight: '75%',
        objectFit: 'contain',
          m: 0,
        }} src={imageSrc} alt={name} />
        <h2 style={{ margin: '0', marginLeft: '5px' }}>{name}</h2>
        <p style={{ margin: '0', marginLeft: '5px' }}>{carCount} carros</p>
    </Box>
    );
}

export default CategoryCard;