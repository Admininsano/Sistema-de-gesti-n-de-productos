import Link from 'next/link';
import { ROUTES } from '@/constants';

/**
 * Componente Header de navegación
 */
export const Header = () => {
  return (
    <header className="bg-white shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href={ROUTES.HOME} className="text-2xl font-bold text-blue-600">
              Inventario
            </Link>
          </div>
          
          <div className="flex gap-4">
            <Link
              href={ROUTES.PRODUCTS}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Productos
            </Link>
            <Link
              href={ROUTES.CATEGORIES}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Categorías
            </Link>
            <Link
              href={ROUTES.SETTINGS}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Configuración
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
