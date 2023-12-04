import axios from './axios';
import qs from 'qs';
import Cookies from 'js-cookie';
import Toast from '@/components/shared/toasts';

const authService = {
  login: async (credentials) => {
    try {
      const basicAuth = `Basic ${Buffer.from(
        `${process.env.NEXT_PUBLIC_CLIENT_ID}:${process.env.NEXT_PUBLIC_CLIENT_SECRET}`,
      ).toString('base64')}`;

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
        Toast.fire({
          icon: 'success',
          title: 'Login feito com sucesso',
        });
        return response.data.access_token;
      }
    } catch (error) {
      if (error.response) {
        Toast.fire({
          icon: 'error',
          title: 'Usuário não encontrado',
        });
        const errorMessage = error.response.data.error_description || 'Usuário não encontrado';
        throw new Error(errorMessage);
      } else {
        throw new Error('Erro ao se conectar com o servidor');
      }
    }
  },

  fetchUser: async (accessToken) => {
    try {
      const response = await axios.get('/api/users/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Não foi possível buscar os detalhes do usuário.');
    }
  },

  logout: () => {
    Cookies.remove('accessToken');
    localStorage.removeItem('accessToken');
  },
};

export default authService;
