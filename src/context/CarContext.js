import React, { createContext, useState } from 'react';

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState('');

  return (
    <CarContext.Provider value={{ selectedCity, setSelectedCity }}>{children}</CarContext.Provider>
  );
};
