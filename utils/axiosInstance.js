// axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/bsc-unt/',
});

// Interceptor para incluir el token de autorización
axiosInstance.interceptors.request.use(
    (config) => {
        const authToken = localStorage.getItem('authToken');

        console.log('Auth Token:', authToken);       // Verifica el token de autorización
 
        
        if (authToken) {
            config.headers['Authorization'] = authToken;
        }
        console.log(config)
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;
