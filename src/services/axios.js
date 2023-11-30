import axios from 'axios';

const baseUrl = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default baseUrl;
