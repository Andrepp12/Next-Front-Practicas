import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      {/* <aside className="w-64 bg-gray-800 text-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-6">Navegación</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link href="/tipoAmbientes" className="hover:bg-gray-700 p-2 block rounded">
                Gestionar TipoAmbientes
              </Link>
            </li>
            <li>
              <Link href="/ambientes" className="hover:bg-gray-700 p-2 block rounded">
                Gestionar Ambientes
              </Link>
            </li>
            <li>
              <Link href="/equipos" className="hover:bg-gray-700 p-2 block rounded">
                Gestionar Equipos
              </Link>
            </li>
            <li>
              <Link href="/detalleambienteequipos" className="hover:bg-gray-700 p-2 block rounded">
                Gestionar Detalles de Ambiente y Equipos
              </Link>
            </li>
          </ul>
        </nav>
      </aside> */}

      {/* Main content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-4">Página Principal</h1>
        <p className="text-lg">Esta es la página principal de tu aplicación Next.js</p>
      </main>
    </div>
  );
}

  
  
