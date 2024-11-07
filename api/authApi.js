// authApi.js
import axiosInstance from '../utils/axiosInstance';

// Función para iniciar sesión y obtener el token de autorización
export const login = async (username, password) => {
  try {
    const response = await axiosInstance.post('auth/login', {
      username,
      password,
    });

    const authToken = response.data.token;
    localStorage.setItem('authToken', authToken);

    return authToken;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  }
};


// Función para cerrar sesión y limpiar los tokens
export const logout = () => {
  localStorage.removeItem('authToken');
};
