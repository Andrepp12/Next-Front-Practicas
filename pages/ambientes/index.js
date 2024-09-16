import { useState, useEffect } from 'react';
import { getAmbientes } from '../../api/ambienteApi';  // Ruta relativa correcta
import Link from 'next/link';

const Ambientes = () => {
  const [ambientes, setAmbientes] = useState([]);

  useEffect(() => {
    fetchAmbientes();
  }, []);

  const fetchAmbientes = async () => {
    const response = await getAmbientes();
    setAmbientes(response.data);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Lista de Ambientes</h1>

      <div className="mb-6 text-center">
        <Link href="/ambientes/create" legacyBehavior>
          <a className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition">
            Crear un nuevo ambiente
          </a>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 overflow-x-auto">
        <table className="min-w-full text-left text-gray-700">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 font-semibold">Código</th>
              <th className="px-6 py-3 font-semibold">Ubicación</th>
              <th className="px-6 py-3 font-semibold">Capacidad</th>
              <th className="px-6 py-3 font-semibold">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {ambientes.map((ambiente) => (
              <tr key={ambiente.id} className="bg-white hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{ambiente.codigo}</td>
                <td className="px-6 py-4">{ambiente.ubicacion}</td>
                <td className="px-6 py-4">{ambiente.capacidad}</td>
                <td className="px-6 py-4">
                  <Link href={`/ambientes/${ambiente.id}`} legacyBehavior>
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

export default Ambientes;


