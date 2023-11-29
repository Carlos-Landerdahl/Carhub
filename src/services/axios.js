import axios from 'axios';

const baseUrl = axios.create({
  baseURL: 'https://deploy-carhub.onrender.com',
});

export default baseUrl;
