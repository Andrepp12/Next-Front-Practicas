import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getAmbienteById, updateAmbiente, deleteAmbiente } from '../../api/ambienteApi';

const AmbienteDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [form, setForm] = useState({ codigo: '', ubicacion: '', capacidad: '' });

  useEffect(() => {
    if (id) {
      fetchAmbiente();
    }
  }, [id]);

  const fetchAmbiente = async () => {
    const response = await getAmbienteById(id);
    setForm(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateAmbiente(id, form);
    router.push('/ambientes');  // Redirige a la lista de ambientes
  };

  const handleDelete = async () => {
    await deleteAmbiente(id);
    router.push('/ambientes');  // Redirige a la lista de ambientes después de eliminar
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Detalles del Ambiente</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Código */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Código</label>
            <input
              type="text"
              placeholder="Código"
              value={form.codigo}
              onChange={(e) => setForm({ ...form, codigo: e.target.value })}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            />
          </div>

          {/* Ubicación */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Ubicación</label>
            <input
              type="text"
              placeholder="Ubicación"
              value={form.ubicacion}
              onChange={(e) => setForm({ ...form, ubicacion: e.target.value })}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            />
          </div>

          {/* Capacidad */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Capacidad</label>
            <input
              type="number"
              placeholder="Capacidad"
              value={form.capacidad}
              onChange={(e) => setForm({ ...form, capacidad: e.target.value })}
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

export default AmbienteDetails;

