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

export const fetchAllCars = async () => {
  try {
    const response = await axios.get('/api/cars');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar carros recomendados:', error);
    throw error;
  }
};

export const fetchCarById = async (id) => {
  try {
    const response = await axios.get(`/api/cars/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar detalhes do carro:', error);
    throw error;
  }
};

export const fetchCarsByCity = async (city) => {
  try {
    const response = await axios.get(`/api/cars/city?city=${encodeURIComponent(city)}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar carros pela cidade:', error);
    throw error;
  }
};

export const fetchCities = async () => {
  try {
    const response = await axios.get('/api/cities');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar cidades:', error);
    throw error;
  }
};
