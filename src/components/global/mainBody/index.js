'use client';

import React from 'react';
import { Box } from '@mui/material';
// import styled from 'styled-components';
import CategoryCard from '@/components/global/card';
import carro2 from '/public/img/carro2.jpg';
import theme from '@/styles/theme';


function MainBody () {
    return (
        <Box sx={{
            background: theme.palette.background.gradient,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
        
        <CategoryCard name="Sedans" carCount={807105} imageSrc={carro2} />
        </Box>
    );
};

export default MainBody;

