'use client';

import React from 'react';
import { Box } from '@mui/material';
// import styled from 'styled-components';
import CategoryCard from '@/components/global/card';
import carro2 from '/public/img/carro2.jpg';


function MainBody () {
    return (
        <Box sx={{
            backgroundColor: '#fcba03',
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
