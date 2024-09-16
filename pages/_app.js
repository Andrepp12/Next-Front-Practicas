import '../src/app/globals.css';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
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
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;


