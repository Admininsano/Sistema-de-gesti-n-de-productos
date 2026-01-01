'use client';

import React from 'react';
import { Product } from '@/types';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { formatCurrency } from '@/utils/helpers';

interface ProductGridProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onEdit,
  onDelete,
}) => {
  const getStockBadge = (quantity: number) => {
    if (quantity === 0) return { variant: 'danger' as const, text: 'Sin stock' };
    if (quantity < 10) return { variant: 'warning' as const, text: 'Stock bajo' };
    return { variant: 'success' as const, text: 'En stock' };
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => {
        const stockBadge = getStockBadge(product.quantity);
        return (
          <Card key={product.id} hover className="overflow-hidden">
            {/* Imagen */}
            <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
              {product.imageUrl ? (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <svg className="w-16 h-16 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              )}
              <div className="absolute top-3 right-3">
                <Badge variant="info">{product.category}</Badge>
              </div>
            </div>

            {/* Contenido */}
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-900 mb-1 line-clamp-1">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                {product.description}
              </p>

              {/* Precio y Stock */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-2xl font-bold text-blue-600">
                    {formatCurrency(product.price)}
                  </p>
                  <p className="text-xs text-gray-500">
                    Stock: <span className="font-semibold">{product.quantity}</span>
                  </p>
                </div>
                <Badge variant={stockBadge.variant}>
                  {stockBadge.text}
                </Badge>
              </div>

              {/* Acciones */}
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => onEdit(product)}
                  className="flex-1 flex items-center justify-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Editar
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => onDelete(product)}
                  className="flex-1 flex items-center justify-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Eliminar
                </Button>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
