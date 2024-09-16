import axios from 'axios';

const API_URL = 'http://localhost:8000/api';  // Asegúrate de reemplazar con la URL correcta

// Obtener todos los ambientes
export const getAmbientes = async () => {
  return await axios.get(`${API_URL}/ambientes/`);
};

// Obtener un ambiente por ID
export const getAmbienteById = async (id) => {
  return await axios.get(`${API_URL}/ambientes/${id}/`);
};

// Crear un nuevo ambiente
export const createAmbiente = async (data) => {
  return await axios.post(`${API_URL}/ambientes/`, data);
};

// Actualizar un ambiente existente
export const updateAmbiente = async (id, data) => {
  return await axios.put(`${API_URL}/ambientes/${id}/`, data);
};

// Eliminar un ambiente
export const deleteAmbiente = async (id) => {
  return await axios.delete(`${API_URL}/ambientes/${id}/`);
};

