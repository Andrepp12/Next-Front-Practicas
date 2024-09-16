import { useState } from 'react';
import { createTipoAmbiente } from '../../api/tipoAmbienteApi';
import { useRouter } from 'next/router';

const CreateTipoAmbiente = () => {
  const [form, setForm] = useState({ nombre: '', descripcion: '' });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTipoAmbiente(form);  // Llama a la API para crear un nuevo tipo de ambiente
    router.push('/tipoAmbientes');  // Redirige a la página de listar
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Crear un nuevo Tipo de Ambiente</h1>
        
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

export default CreateTipoAmbiente;
