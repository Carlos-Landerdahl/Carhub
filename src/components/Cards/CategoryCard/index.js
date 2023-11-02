'use client';

import React from 'react';
import theme from '@/styles/theme';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';

function CategoryCard({image, brand, description, category, price }) {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
                <img src={image} alt={brand} style={{ width: '100%', objectFit: "contain", height: "100%" }} />
                <CardContent>
                    <Typography variant="h6" sx={{ color: "#000" }}>{brand}</Typography>
                    <Typography variant="subtitle1">{category}</Typography>
                    <Typography variant="body2">{price}</Typography>
                    <Typography variant="body2">{description}</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default CategoryCard;