import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');

    // Verifica que ambos tokens estén presentes
    if (!authToken) {
      router.push('/login'); // Redirige a la página de login si faltan los tokens
    }
  }, [router]);

  return <>{children}</>;
};

export default ProtectedRoute;
