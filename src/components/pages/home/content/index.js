'use client';

import { Box, Typography, Grid, Container, Button } from '@mui/material';
Container;
import theme from '@/styles/theme';
import CategoryCard from '../cards/categoryCard';
import RecommendCard from '../cards/recommendCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styles from './styles.css';
import { fetchCategories, fetchAllCars, fetchCarsByCity } from '../../../../services/api';
import { useEffect, useState, useContext } from 'react';
import { CarContext } from '@/context/CarContext';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import FilterListOffIcon from '@mui/icons-material/FilterListOff';
import GlobalLoader from '@/components/global/loader/GlobalLoader';

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
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingCars, setLoadingCars] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);
  const { selectedCity } = useContext(CarContext);
  const filteredRecommendedCars = activeCategory
    ? recommendedCars.filter((car) => car.category.id === activeCategory)
    : recommendedCars;
  const hasCars = filteredRecommendedCars.length > 0;

  const handleRemoveFilters = () => {
    setActiveCategory(null);
  };

  useEffect(() => {
    const loadCategories = async () => {
      const categoryData = await fetchCategories();
      setCategories(categoryData);
      setLoadingCategories(false);
    };

    const loadCars = async () => {
      try {
        const carsData = selectedCity ? await fetchCarsByCity(selectedCity) : await fetchAllCars();
        setRecommendedCars(carsData);
        setLoadingCars(false);
      } catch (error) {
        console.error('Erro ao buscar carros:', error);
      }
    };

    loadCategories();
    loadCars();
  }, [selectedCity]);

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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            gap: '10px',
            flexWrap: 'wrap',
          }}
        >
          <Typography sx={theme.typography.heading} color={theme.palette.text.text}>
            Buscar por categoria
          </Typography>
          {activeCategory && (
            <Button
              variant="outlined"
              color="primary"
              onClick={handleRemoveFilters}
              style={{
                borderRadius: '8px',
                border: `2px solid ${theme.palette.text.danger}`,
                color: theme.palette.text.light,
                display: 'flex',
                gap: '5px',
              }}
            >
              <FilterListOffIcon />
              Remover filtros
            </Button>
          )}
        </Box>
        {loadingCategories ? (
          <GlobalLoader />
        ) : (
          <Slider {...settings}>
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                name={category.name}
                imageUrl={category.imageUrl}
                description={category.description}
                isActive={category.id === activeCategory}
                onClick={() => {
                  setActiveCategory(category.id);
                }}
              />
            ))}
          </Slider>
        )}
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
        {loadingCars ? (
          <GlobalLoader />
        ) : !hasCars ? (
          <Box sx={{ textAlign: 'center', padding: '20px' }}>
            <Typography
              variant="h6"
              sx={{
                color: `${theme.palette.text.light}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
              }}
            >
              <ErrorOutlineIcon sx={{ color: `${theme.palette.text.danger}` }} />
              Infelizmente, não temos carros disponíveis nesta categoria no momento.
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={2}>
            {filteredRecommendedCars.map((car) => (
              <RecommendCard
                key={car.id}
                id={car.id}
                brand={car.brand}
                description={car.description}
                imageUrl={car.imageUrl}
                model={car.model}
                cityName={car.rentalCompany.city.name}
              />
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
}

export default Content;
