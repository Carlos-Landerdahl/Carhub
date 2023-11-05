'use client';

import { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Button,
  CardMedia,
  CardActionArea,
  Typography,
  Grid,
  Container,
  CardActions,
} from '@mui/material';
import CategoryCard from '@/components/Cards/CategoryCard';
Container;
import theme from '@/styles/theme';
import dataJson from '@/data.json';
import RecommendCard from '@/components/Cards/RecommendCard';

function MainBody() {
  // Filter categoryData
  const filterCategoryData = dataJson.categories.map((category) => category);
  const filterRecommendData = dataJson.recommends.map((recommended) => recommended);

  console.log(filterRecommendData);

  return (
    <Container
      maxWidth="xl"
      sx={{
        p: '23px 0 23px 0',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '9px',
        }}
      >
        <Typography sx={theme.typography.heading} color={theme.palette.text.text}>
          Buscar por tipos de automóveis
        </Typography>
        <Grid container spacing={2}>
          {filterCategoryData.map((category) => (
            <CategoryCard key={category.category_name} {...category} />
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '69px',
          gap: '9px',
        }}
      >
        <Typography sx={theme.typography.heading} color={theme.palette.text.text}>
          Recomendações
        </Typography>
        <Grid container spacing={2}>
          {filterRecommendData.map((recommended) => (
            <RecommendCard key={recommended.brand} {...recommended} />
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default MainBody;
