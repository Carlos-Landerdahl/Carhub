'use client';

import React from 'react';
import theme from '@/styles/theme';
import { Card, CardContent, Typography, CardMedia, CardActionArea } from '@mui/material';

function CategoryCard({ imageUrl, description, name, onClick, isActive }) {
  const isActiveStyle = isActive ? { opacity: '0.55' } : {};

  return (
    <Card
      sx={{
        width: '100%',
        height: '290px',
        borderRadius: '10px',
        boxShadow: '0 4px 4px 0 rgb(0, 0, 0, 0.25)',
        mt: '16px',
        ...isActiveStyle,
      }}
      onClick={onClick}
    >
      <CardActionArea onClick={onClick}>
        <CardMedia component="img" height={183} image={imageUrl} alt={name} />
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
            {name}
          </Typography>
          <Typography sx={theme.typography.label}>{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CategoryCard;
