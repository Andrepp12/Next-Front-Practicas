import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getTipoAmbienteById, updateTipoAmbiente, deleteTipoAmbiente } from '../../api/tipoAmbienteApi';

const TipoAmbienteDetails = () => {
  const router = useRouter();
  const { id } = router.query;  // Obtiene el ID dinámico de la URL
  const [form, setForm] = useState({ nombre: '', descripcion: '' });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchTipoAmbiente();
    }
  }, [id]);

  const fetchTipoAmbiente = async () => {
    try {
      const response = await getTipoAmbienteById(id);
      setForm(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error al obtener el tipo de ambiente:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateTipoAmbiente(id, form);  // Actualiza el tipo de ambiente
      router.push('/tipoAmbientes');  // Redirige a la lista de tipos de ambientes
    } catch (error) {
      console.error('Error al actualizar el tipo de ambiente:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTipoAmbiente(id);  // Elimina el tipo de ambiente
      router.push('/tipoAmbientes');  // Redirige a la lista después de eliminar
    } catch (error) {
      console.error('Error al eliminar el tipo de ambiente:', error);
    }
  };

  if (isLoading) {
    return <p className="text-center text-gray-500">Cargando...</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Detalles del Tipo de Ambiente</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nombre */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Nombre</label>
            <input
              type="text"
              placeholder="Nombre"
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            />
          </div>

          {/* Descripción */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Descripción</label>
            <input
              type="text"
              placeholder="Descripción"
              value={form.descripcion}
              onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            />
          </div>

          {/* Botón de actualizar */}
          <div className="text-center">
            <button 
              type="submit" 
              className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
            >
              Actualizar
            </button>
          </div>
        </form>

        {/* Botón de eliminar */}
        <div className="text-center mt-4">
          <button 
            onClick={handleDelete} 
            className="w-full px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default TipoAmbienteDetails;
