'use client';

import { Box, Typography, Grid, Container } from '@mui/material';
Container;
import theme from '@/styles/theme';
import dataJson from '@/data.json';
import CategoryCard from '../cards/categoryCard';
import RecommendCard from '../cards/recommendCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styles from './styles.css';
import { fetchCategories, fetchRecommendedCars } from '../../../../services/api';
import { useEffect, useState } from 'react';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Content() {
  const [categories, setCategories] = useState([]);
  const [recommendedCars, setRecommendedCars] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const filteredRecommendedCars = activeCategory
    ? recommendedCars.filter((car) => car.category.id === activeCategory)
    : recommendedCars;

  useEffect(() => {
    const loadRecommendedCars = async () => {
      const carsData = await fetchRecommendedCars();
      setRecommendedCars(carsData);
    };

    const loadCategories = async () => {
      const categoryData = await fetchCategories();
      setCategories(categoryData);
    };

    loadCategories();
    loadRecommendedCars();
  }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{
        p: '23px 12px 23px 12px',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'block',
          padding: '18px',
        }}
      >
        <Typography sx={theme.typography.heading} color={theme.palette.text.text}>
          Buscar por categoria
        </Typography>
        <Slider {...settings} className="slickTrackCustom">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              imageUrl={category.imageUrl}
              description={category.description}
              onClick={() => {
                setActiveCategory(category.id);
              }}
            />
          ))}
        </Slider>
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
          {filteredRecommendedCars.map((car) => (
            <RecommendCard key={car.id} {...car} />
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Content;
