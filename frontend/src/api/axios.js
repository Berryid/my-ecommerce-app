// In frontend/src/api/axios.js
import axios from 'axios';

// Define the base URL for your API
const baseURL = 'http://127.0.0.1:8000';

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// This is key for authentication
// We'll check local storage for a token and apply it to every request
axiosInstance.interceptors.request.use(
  (config) => {
    // Try to get the token from localStorage
    const token = localStorage.getItem('authToken');
    if (token) {
      // Djoser expects 'JWT ' prefix for its JWTAuthentication
      config.headers['Authorization'] = `JWT ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;