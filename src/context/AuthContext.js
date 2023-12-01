import Cookies from 'js-cookie';
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from '../services/axios';
import { useRouter } from 'next/navigation';
import qs from 'qs';
import { Toast } from '@/components/shared/toasts/toastForm';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const accessToken = Cookies.get('accessToken');

    if (accessToken) {
      fetchUser(accessToken);
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
      Cookies.remove('accessToken');
      setUser(null);
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

        await fetchUser(response.data.access_token);
        Toast.fire({
          icon: 'success',
          title: 'Login feito com sucesso',
        });
        router.push('/');
      }
    } catch (error) {
      Toast.fire({
        icon: 'error',
        title: 'Usuário não encontrado',
      });
      console.error('Erro no login:', error.response ? error.response.data : error);
    }
  };

  const logout = () => {
    Cookies.remove('accessToken');
    setUser(null);
    router.push('/');
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
