import '../src/app/globals.css';
import { logout } from '../api/authApi';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Verificar si el usuario está autenticado
  useEffect(() => {
    const authToken = localStorage.getItem('authToken');

    // Redirigir al login si faltan los tokens y la ruta no es login
    if ((!authToken) && router.pathname !== '/login') {
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    logout();  // Llama a la función para eliminar los tokens
    router.push('/login');  // Redirige al usuario a la página de login
  };

  return (
    <div className="flex min-h-screen">
      {/* Mostrar el sidebar solo si no estamos en la página de login */}
      {router.pathname !== '/login' && (
        <aside className="w-64 bg-gray-800 text-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-6">Navegación</h2>
          <nav>
            <ul className="space-y-4">
              <li>
                <Link href="/tipoAmbientes" legacyBehavior>
                  <a className="hover:bg-gray-700 p-2 block rounded">Gestionar TipoAmbientes</a>
                </Link>
              </li>
              <li>
                <Link href="/ambientes" legacyBehavior>
                  <a className="hover:bg-gray-700 p-2 block rounded">Gestionar Ambientes</a>
                </Link>
              </li>
              <li>
                <Link href="/equipos" legacyBehavior>
                  <a className="hover:bg-gray-700 p-2 block rounded">Gestionar Equipos</a>
                </Link>
              </li>
              <li>
                <Link href="/detalleambienteequipos" legacyBehavior>
                  <a className="hover:bg-gray-700 p-2 block rounded">Gestionar Detalles de Ambiente y Equipos</a>
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className="logout-button">
                  Cerrar Sesión
                </button>
              </li>
            </ul>
          </nav>
        </aside>
      )}

      {/* Main content */}
      <main className={`flex-1 ${router.pathname === '/login' ? 'w-full' : ''}`}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;



