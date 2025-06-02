import axios from 'axios';

// Create axios instance with default configuration
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'https://localhost:7213/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
});

// Request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    localStorage.removeItem('token');
                    window.location.href = '/login';
                    break;
                case 403:
                    console.error('Access forbidden');
                    break;
                case 404:
                    console.error('Resource not found');
                    break;
                case 500:
                    console.error('Server error');
                    break;
                default:
                    console.error('An error occurred:', error.response.data);
            }
        } else if (error.request) {
            console.error('No response received from server');
        } else {
            console.error('Error:', error.message);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance; 