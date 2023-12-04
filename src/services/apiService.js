import axios from './axios';

const get = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Erro ao fazer a requisição GET para ${url}:`, error);
    throw error;
  }
};

const post = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error(`Erro ao fazer a requisição POST para ${url}:`, error);
    throw error;
  }
};

export const createUser = (userData) => post('/api/users', userData);

export const fetchCategories = () => get('/api/categories');
export const fetchAllCars = () => get('/api/cars');
export const fetchCarById = (id) => get(`/api/cars/${id}`);
export const fetchCarsByCity = (city) => get(`/api/cars/city?city=${encodeURIComponent(city)}`);
export const fetchCities = () => get('/api/cities');
