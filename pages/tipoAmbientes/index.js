import { useState, useEffect } from 'react';
import { getTipoAmbientes } from '../../api/tipoAmbienteApi';
import Link from 'next/link';

const TipoAmbientes = () => {
  const [tipoAmbientes, setTipoAmbientes] = useState([]);

  useEffect(() => {
    fetchTipoAmbientes();
  }, []);

  const fetchTipoAmbientes = async () => {
    const response = await getTipoAmbientes();
    setTipoAmbientes(response.data);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Lista de Tipos de Ambientes</h1>
      
      <div className="mb-6 text-center">
        <Link href="/tipoAmbientes/create" legacyBehavior>
          <a className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition">
            Crear un nuevo Tipo de Ambiente
          </a>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 overflow-x-auto">
        <table className="min-w-full text-left text-gray-700">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 font-semibold">Nombre</th>
              <th className="px-6 py-3 font-semibold">Descripción</th>
              <th className="px-6 py-3 font-semibold">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tipoAmbientes.map((tipo) => (
              <tr key={tipo.id} className="bg-white hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{tipo.nombre}</td>
                <td className="px-6 py-4 text-gray-500">{tipo.descripcion}</td>
                <td className="px-6 py-4">
                  <Link href={`/tipoAmbientes/${tipo.id}`} legacyBehavior>
                    <a className="text-blue-500 hover:text-blue-700">Ver detalles / Editar</a>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TipoAmbientes;


