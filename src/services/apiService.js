import axios from './axios';

const get = async (url, token) => {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await axios.get(url, { headers });
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

const postWithAuth = async (url, data, token) => {
  try {
    const response = await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Erro ao fazer a requisição POST para ${url}:`, error);
    throw error;
  }
};

const deleteWithAuth = async (url, token) => {
  try {
    const response = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Erro ao fazer a requisição DELETE para ${url}:`, error);
    throw error;
  }
};

export const updateCar = async (carId, carData, token) => {
  try {
    const response = await axios.put(`/api/cars/${carId}`, carData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Erro ao fazer a requisição PUT para /api/cars/${carId}:`, error);
    throw error;
  }
};

export const linkCharacteristicToCar = async (characteristicId, carId, token) => {
  try {
    const url = `/api/characteristics/link/${characteristicId}/car/${carId}`;
    const response = await axios.post(
      url,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(`Erro ao fazer a requisição POST para ${url}:`, error);
    throw error;
  }
};

export const createUser = (userData) => post('/api/users', userData);
export const checkout = (data, token) => postWithAuth('/api/bookings', data, token);

export const createBooking = (bookingData, token) =>
  postWithAuth('/api/bookings', bookingData, token);

export const createCar = async (carData, token) => {
  const url = '/api/cars';
  return await postWithAuth(url, carData, token);
};

export const cancelBooking = (bookingId, token) =>
  deleteWithAuth(`/api/bookings/${bookingId}`, token);

export const deleteCar = (carId, token) => deleteWithAuth(`/api/cars/${carId}`, token);

export const fetchBookingsByUserId = (userId, token) => get(`/api/bookings/user/${userId}`, token);

export const fetchCategories = () => get('/api/categories');
export const fetchAllCars = () => get('/api/cars');
export const fetchCarById = (id) => get(`/api/cars/${id}`);
export const fetchCarsByCity = (city) => get(`/api/cars/city?city=${encodeURIComponent(city)}`);
export const fetchCities = () => get('/api/cities');
