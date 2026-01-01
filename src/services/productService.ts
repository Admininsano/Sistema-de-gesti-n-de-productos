import { supabase } from '@/lib/supabase';
import { Product, ApiResponse } from '@/types';

// Servicio para operaciones de productos
export const productService = {
  // Obtener todos los productos
  async getAll(): Promise<ApiResponse<Product[]>> {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*');
      
      if (error) throw error;
      
      return { success: true, data: data as Product[] };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Error al obtener productos',
      };
    }
  },

  // Obtener producto por ID
  async getById(id: string): Promise<ApiResponse<Product>> {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      
      return { success: true, data: data as Product };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Error al obtener producto',
      };
    }
  },

  // Crear producto
  async create(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<Product>> {
    try {
      const { data, error } = await supabase
        .from('products')
        .insert([product])
        .select()
        .single();
      
      if (error) throw error;
      
      return { success: true, data: data as Product };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Error al crear producto',
      };
    }
  },

  // Actualizar producto
  async update(id: string, product: Partial<Product>): Promise<ApiResponse<Product>> {
    try {
      const { data, error } = await supabase
        .from('products')
        .update(product)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      
      return { success: true, data: data as Product };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Error al actualizar producto',
      };
    }
  },

  // Eliminar producto
  async delete(id: string): Promise<ApiResponse<null>> {
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      
      return { success: true, data: null };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Error al eliminar producto',
      };
    }
  },
};
