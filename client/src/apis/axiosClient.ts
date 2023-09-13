import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_ADDRESS,
  withCredentials: true,
  timeout: 8000,
});

export const axiosWithAuth = axios.create({
  baseURL: import.meta.env.VITE_API_ADDRESS,
  withCredentials: true,
  timeout: 8000,
});

axiosWithAuth.interceptors.request.use(
  (config) => {
    return config;
  },

  (error) => {
    console.log('interceptors error', error);
    return Promise.reject(error);
  }
);
