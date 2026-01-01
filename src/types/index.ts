// Tipos para el inventario
export interface Product {
  id?: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  category: string;
  imageUrl?: string;
  createdAt?: number;
  updatedAt?: number;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
