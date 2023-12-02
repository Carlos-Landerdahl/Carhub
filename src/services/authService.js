import axios from './axios';
import qs from 'qs';
import Cookies from 'js-cookie';

const authService = {
  login: async (credentials) => {
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
      return response.data.access_token;
    } else {
      throw new Error('Falha ao obter o token de acesso');
    }
  },

  fetchUser: async (accessToken) => {
    const response = await axios.get('/users/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  },

  logout: () => {
    Cookies.remove('accessToken');
    localStorage.removeItem('accessToken');
  },
};

export default authService;
