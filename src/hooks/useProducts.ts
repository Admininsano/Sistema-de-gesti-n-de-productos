'use client';

import { useState, useEffect } from 'react';
import { Product, ApiResponse } from '@/types';
import { productService } from '@/services/productService';

/**
 * Hook personalizado para gestionar productos
 */
export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Obtener todos los productos
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    
    const response = await productService.getAll();
    
    if (response.success && response.data) {
      setProducts(response.data);
    } else {
      setError(response.error || 'Error al cargar productos');
    }
    
    setLoading(false);
  };

  // Crear producto
  const createProduct = async (product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => {
    const response = await productService.create(product);
    
    if (response.success && response.data) {
      setProducts([...products, response.data]);
    }
    
    return response;
  };

  // Actualizar producto
  const updateProduct = async (id: string, product: Partial<Product>) => {
    const response = await productService.update(id, product);
    
    if (response.success && response.data) {
      
      setProducts(products.map(p => p.id === id ? response.data! : p));
    }
    
    return response;
  };

  // Eliminar producto
  const deleteProduct = async (id: string) => {
    const response = await productService.delete(id);
    
    if (response.success) {
      setProducts(products.filter(p => p.id !== id));
    }
    
    return response;
  };

  // Cargar productos al montar el componente
  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
    fetchProducts,
    createProduct,
    updateProduct,
    deleteProduct,
  };
};
