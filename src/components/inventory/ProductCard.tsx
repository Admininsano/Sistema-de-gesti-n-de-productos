import { Product } from '@/types';
import { Button } from '@/components/common/Button';
import { formatCurrency } from '@/utils/helpers';

interface ProductCardProps {
  product: Product;
  onEdit?: (product: Product) => void;
  onDelete?: (id: string) => void;
}

/**
 * Componente tarjeta de producto
 */
export const ProductCard = ({ product, onEdit, onDelete }: ProductCardProps) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
          {product.category}
        </span>
      </div>
      
      <p className="text-gray-600 text-sm mb-3">{product.description}</p>
      
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-2xl font-bold text-blue-600">
            {formatCurrency(product.price)}
          </p>
          <p className="text-sm text-gray-500">
            Stock: <span className="font-semibold">{product.quantity}</span>
          </p>
        </div>
      </div>
      
      <div className="flex gap-2">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => onEdit?.(product)}
          className="flex-1"
        >
          Editar
        </Button>
        <Button
          variant="danger"
          size="sm"
          onClick={() => product.id && onDelete?.(product.id)}
          className="flex-1"
        >
          Eliminar
        </Button>
      </div>
    </div>
  );
};
