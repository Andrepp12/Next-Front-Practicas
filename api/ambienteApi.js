import axios from 'axios';

const API_URL = 'http://localhost:8000/api/ambiente';  // Asegúrate de reemplazar con la URL correcta

// Obtener todos los ambientes
export const getAmbientes = async () => {
  return await axios.get(`${API_URL}/`);
};

// Obtener un ambiente por ID
export const getAmbienteById = async (id) => {
  return await axios.get(`${API_URL}/${id}/`);
};

// Crear un nuevo ambiente
export const createAmbiente = async (data) => {
  return await axios.post(`${API_URL}/`, data);
};

// Actualizar un ambiente existente
export const updateAmbiente = async (id, data) => {
  return await axios.put(`${API_URL}/${id}/`, data);
};

// Eliminar un ambiente
export const deleteAmbiente = async (id) => {
  return await axios.delete(`${API_URL}/${id}/`);
};