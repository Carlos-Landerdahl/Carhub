'use client';

import Cookies from 'js-cookie';
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from '../services/axios';
import { useRouter } from 'next/navigation';
import qs from 'qs';
import { Toast } from '@/components/shared/toasts/toastForm';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    try {
      setLoading(true);
      const storedToken = localStorage.getItem('accessToken');

      if (storedToken) {
        setToken(storedToken);
        fetchUser(storedToken);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setToken(null);
      setUser(null);

      console.error('Usuário inválido' + error);
    }
  }, []);

  const fetchUser = async (accessToken) => {
    try {
      const response = await axios.get('/users/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setUser(response.data);
    } catch (error) {
      console.error('Erro ao buscar informações do usuário:', error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    const basicAuth = `Basic ${Buffer.from(
      `${process.env.NEXT_PUBLIC_CLIENT_ID}:${process.env.NEXT_PUBLIC_CLIENT_SECRET}`,
    ).toString('base64')}`;

    try {
      const response = await axios.post(
        '/oauth2/token',
        qs.stringify({
          username: credentials.email,
          password: credentials.password,
          grant_type: 'password',
        }),
        {
          headers: {
            Authorization: basicAuth,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );

      if (response.data.access_token) {
        Cookies.set('accessToken', response.data.access_token, { expires: 1 });
        localStorage.setItem('accessToken', response.data.access_token);
        setToken(response.data.access_token);

        await fetchUser(response.data.access_token).finally(() => setLoading(false));

        Toast.fire({
          icon: 'success',
          title: 'Login feito com sucesso',
        });
        router.push('/');
        router.refresh();
      }
    } catch (error) {
      setLoading(false);

      Toast.fire({
        icon: 'error',
        title: 'Usuário não encontrado',
      });

      console.error('Erro no login:', error.response ? error.response.data : error);
    }
  };

  const logout = () => {
    try {
      Cookies.remove('accessToken');
      localStorage.removeItem('accessToken');

      setUser(null);
      setToken(null);

      router.push('/');
    } catch (error) {
      console.error(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
