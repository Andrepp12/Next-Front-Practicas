import axios from 'axios';

const API_URL = 'http://localhost:8000/api/tipo-ambiente';

// Obtener todos los tipos de ambientes
export const getTipoAmbientes = async () => {
  return await axios.get(`${API_URL}/`);
};

// Obtener un tipo de ambiente por ID
export const getTipoAmbienteById = async (id) => {
  return await axios.get(`${API_URL}/${id}/`);
};

// Crear un nuevo tipo de ambiente
export const createTipoAmbiente = async (data) => {
  return await axios.post(`${API_URL}/`, data);
};

// Actualizar un tipo de ambiente existente
export const updateTipoAmbiente = async (id, data) => {
  return await axios.put(`${API_URL}/${id}/`, data);
};

// Eliminar un tipo de ambiente
export const deleteTipoAmbiente = async (id) => {
  return await axios.delete(`${API_URL}/${id}/`);
};
