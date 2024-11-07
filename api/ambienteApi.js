import axiosInstance from '../utils/axiosInstance';

// Obtener todos los ambientes
export const getAmbientes = async () => {
  return await axiosInstance.get('recursos/ambiente/');
};

// Obtener un ambiente por ID
export const getAmbienteById = async (id) => {
  return await axiosInstance.get(`recursos/ambiente/${id}/`);
};

// Crear un nuevo ambiente
export const createAmbiente = async (data) => {
  return await axiosInstance.post('recursos/ambiente/', data);
};

// Actualizar un ambiente existente
export const updateAmbiente = async (id, data) => {
  return await axiosInstance.put(`recursos/ambiente/${id}/`, data);
};

// Eliminar un ambiente
export const deleteAmbiente = async (id) => {
  return await axiosInstance.delete(`recursos/ambiente/${id}/`);
};
