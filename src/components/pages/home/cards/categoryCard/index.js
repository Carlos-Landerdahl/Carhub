'use client';

import React from 'react';
import theme from '@/styles/theme';
import { Card, CardContent, Typography, Grid, CardMedia, CardActionArea, Box } from '@mui/material';

function CategoryCard({ image, description, category_name }) {
  return (
    <Card
      sx={{
        width: '100%',
        height: '290px',
        borderRadius: '10px',
        boxShadow: '0 4px 4px 0 rgb(0, 0, 0, 0.25)',
        mt: '16px',
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height={183} image={image} alt={category_name} />
        <CardContent
          sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            justifyContent: 'start',
          }}
        >
          <Typography
            style={{ color: theme.palette.text.paragraph }}
            sx={theme.typography.paragraph}
          >
            {category_name}
          </Typography>
          <Typography sx={theme.typography.label}>{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CategoryCard;