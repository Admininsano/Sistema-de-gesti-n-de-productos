import { database } from '@/lib/firebase';
import { ref, set, get, update, remove, push, onValue } from 'firebase/database';
import { Product, ApiResponse } from '@/types';

const PRODUCTS_PATH = 'products';

// Servicio para operaciones CRUD de productos con Firebase
export const firebaseProductService = {
  // Obtener todos los productos
  async getAll(): Promise<ApiResponse<Product[]>> {
    try {
      const productsRef = ref(database, PRODUCTS_PATH);
      const snapshot = await get(productsRef);
      
      if (snapshot.exists()) {
        const data = snapshot.val();
        const products: Product[] = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        return { success: true, data: products };
      }
      
      return { success: true, data: [] };
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
      const productRef = ref(database, `${PRODUCTS_PATH}/${id}`);
      const snapshot = await get(productRef);
      
      if (snapshot.exists()) {
        const product: Product = {
          id,
          ...snapshot.val()
        };
        return { success: true, data: product };
      }
      
      return {
        success: false,
        error: 'Producto no encontrado',
      };
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
      const productsRef = ref(database, PRODUCTS_PATH);
      const newProductRef = push(productsRef);
      
      const newProduct: Product = {
        ...product,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      
      await set(newProductRef, newProduct);
      
      return {
        success: true,
        data: {
          id: newProductRef.key!,
          ...newProduct
        },
        message: 'Producto creado exitosamente'
      };
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
      const productRef = ref(database, `${PRODUCTS_PATH}/${id}`);
      
      const updates = {
        ...product,
        updatedAt: Date.now(),
      };
      
      await update(productRef, updates);
      
      // Obtener el producto actualizado
      const snapshot = await get(productRef);
      
      return {
        success: true,
        data: {
          id,
          ...snapshot.val()
        },
        message: 'Producto actualizado exitosamente'
      };
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
      const productRef = ref(database, `${PRODUCTS_PATH}/${id}`);
      await remove(productRef);
      
      return {
        success: true,
        data: null,
        message: 'Producto eliminado exitosamente'
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Error al eliminar producto',
      };
    }
  },

  // Escuchar cambios en tiempo real
  onProductsChange(callback: (products: Product[]) => void) {
    const productsRef = ref(database, PRODUCTS_PATH);
    
    return onValue(productsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const products: Product[] = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        callback(products);
      } else {
        callback([]);
      }
    });
  }
};
