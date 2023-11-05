'use client';

import React from 'react';
import theme from '@/styles/theme';
import { Card, CardContent, Typography, Grid, CardMedia, CardActionArea } from '@mui/material';

function CategoryCard({ image, description, category_name }) {
    return (
        <Grid item  lg={3} md={6} sm={12} xs={12}>
            <Card
                sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    boxShadow: "0 4px 4px 0 rgb(0, 0, 0, 0.25)"
                }}
            >
                <CardActionArea
                >
                    <CardMedia
                        component="img"
                        height={183}
                        image={image}
                        alt={category_name}
                    />
                    <CardContent>
                        <Typography style={{ color: theme.palette.text.paragraph }} sx={theme.typography.paragraph}>
                            {category_name}
                        </Typography>
                        <Typography sx={theme.typography.label}>
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default CategoryCard;