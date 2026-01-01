


import { createClient } from '@supabase/supabase-js';
import { CONFIG } from '@/config';

// Cliente de Supabase
export const supabase = createClient(
  CONFIG.SUPABASE_URL,
  CONFIG.SUPABASE_KEY
);

// Funciones de utilidad para Supabase
export const supabaseUtils = {
  // Verificar conexión
  async checkConnection() {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('count')
        .limit(1);
      
      return !error;
    } catch {
      return false;
    }
  },
};
