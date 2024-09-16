import { useState, useEffect } from 'react';
import { createAmbiente } from '../../api/ambienteApi'; 
import { getTipoAmbientes } from '../../api/tipoAmbienteApi'; 
import { useRouter } from 'next/router';

const CreateAmbiente = () => {
  const [form, setForm] = useState({ codigo: '', ubicacion: '', capacidad: '', tipo_ambiente: '' });
  const [tipoAmbientes, setTipoAmbientes] = useState([]);
  const router = useRouter();

  // Cargar tipos de ambiente al montar el componente
  useEffect(() => {
    const fetchTipoAmbientes = async () => {
      const response = await getTipoAmbientes();  
      setTipoAmbientes(response.data);
    };

    fetchTipoAmbientes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createAmbiente(form);  
    router.push('/ambientes');  
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Crear un nuevo ambiente</h1>
        
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

          {/* Tipo de Ambiente (Select) */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Tipo de Ambiente</label>
            <select
              value={form.tipo_ambiente}
              onChange={(e) => setForm({ ...form, tipo_ambiente: e.target.value })}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            >
              <option value="">Seleccione un tipo</option>
              {tipoAmbientes.map((tipo) => (
                <option key={tipo.id} value={tipo.id}>
                  {tipo.nombre}
                </option>
              ))}
            </select>
          </div>

          {/* Botón para enviar el formulario */}
          <div className="text-center">
            <button 
              type="submit" 
              className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
            >
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAmbiente;

