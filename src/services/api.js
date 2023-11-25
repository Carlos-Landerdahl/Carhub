import axios from './axios';

export const fetchCategories = async () => {
  try {
    const response = await axios.get('/api/categories');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    throw error;
  }
};

export const fetchRecommendedCars = async () => {
  try {
    const response = await axios.get('/api/cars');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar carros recomendados:', error);
    throw error;
  }
};

export const fetchCarDetails = async (id) => {
  try {
    const response = await axios.get(`/api/cars/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar detalhes do carro:', error);
    throw error;
  }
};
