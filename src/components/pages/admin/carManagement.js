'use client';

import React, { useEffect, useState } from 'react';
import CarTable from './carTable';
import { deleteCar, fetchAllCars, updateCar } from '@/services/apiService';
import Toast from '@/components/shared/toasts';

export default function CarManagement() {
  const [cars, setCars] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('accessToken');
      setToken(storedToken);
    }

    async function loadCars() {
      try {
        const carsData = await fetchAllCars();
        setCars(carsData);
      } catch (error) {
        console.error('Não foi possível buscar os carros:', error);
      }
    }

    if (token) {
      loadCars();
    }
  }, [token]);

  const handleUpdateCar = async (carId, updatedCar) => {
    try {
      const data = await updateCar(carId, updatedCar, token);
      setCars(cars.map((car) => (car.id === carId ? data : car)));
      Toast.fire({
        icon: 'success',
        title: 'Atualização feita com sucesso',
      });
    } catch (error) {
      Toast.fire({
        icon: 'error',
        title: 'Erro ao modificar carro',
      });
    }
  };

  const handleDeleteCar = async (carId) => {
    try {
      await deleteCar(carId, token);
      setCars(cars.filter((car) => car.id !== carId));
      Toast.fire({
        icon: 'success',
        title: 'Carro deletado com sucesso',
      });
    } catch (error) {
      console.error('Erro ao deletar o carro:', error);
      if (error.response && error.response.status === 500) {
        Toast.fire({
          icon: 'error',
          title: 'Carro está em uso',
        });
      } else {
        Toast.fire({
          icon: 'error',
          title: 'Não foi possível excluir o carro',
        });
      }
    }
  };

  return (
    <div>
      <CarTable cars={cars} onUpdateCar={handleUpdateCar} onDeleteCar={handleDeleteCar} />
    </div>
  );
}
