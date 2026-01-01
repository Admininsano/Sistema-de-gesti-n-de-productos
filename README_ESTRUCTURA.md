# Estructura del Proyecto - Inventario Web

Esta es una guía sobre la estructura modular del proyecto Next.js.

## 📁 Estructura de Carpetas

```
inventario-web/
├── app/                          # App Router de Next.js
│   ├── layout.tsx               # Layout raíz
│   ├── page.tsx                 # Página principal
│   ├── api/                     # Rutas API del servidor
│   └── globals.css              # Estilos globales
│
├── src/                         # Código fuente principal (modular)
│   ├── components/              # Componentes React reutilizables
│   │   ├── common/              # Componentes comunes (Button, Input, etc)
│   │   ├── layout/              # Componentes de layout (Header, Sidebar, etc)
│   │   └── inventory/           # Componentes específicos del dominio
│   │
│   ├── services/                # Lógica de negocio y servicios
│   │   └── productService.ts    # Servicios de producto
│   │
│   ├── hooks/                   # Custom React Hooks
│   │   └── useProducts.ts       # Hook para gestionar productos
│   │
│   ├── lib/                     # Utilidades y librerías
│   │   └── supabase.ts          # Cliente de Supabase
│   │
│   ├── types/                   # Tipos TypeScript
│   │   └── index.ts             # Definiciones de tipos
│   │
│   ├── utils/                   # Funciones auxiliares
│   │   └── helpers.ts           # Funciones de propósito general
│   │
│   ├── constants/               # Constantes de la aplicación
│   │   └── index.ts             # URLs, mensajes, rutas
│   │
│   ├── config/                  # Configuraciones
│   │   └── index.ts             # Config general
│   │
│   └── styles/                  # Estilos compartidos
│       └── variables.css        # Variables CSS
│
├── public/                      # Archivos estáticos
├── package.json                 # Dependencias
├── tsconfig.json               # Configuración TypeScript
└── next.config.ts              # Configuración Next.js
```

## 🎯 Propósito de cada carpeta

### `components/`
Componentes React reutilizables organizados por tipo:
- **common**: Botones, inputs, modales, badges (genéricos)
- **layout**: Header, Sidebar, Footer (estructura de la página)
- **inventory**: ProductCard, ProductList (específicos del dominio)

### `services/`
Lógica de negocio y comunicación con APIs:
- Funciones para operaciones CRUD
- Integraciones con Supabase
- Manejo de datos

### `hooks/`
Custom React Hooks para lógica reutilizable:
- `useProducts`: Gestiona estado de productos
- `useFetch`: Hook genérico para fetch
- `useForm`: Hook para formularios

### `lib/`
Utilidades y librerías configuradas:
- Cliente de Supabase
- Funciones de formateo
- Inicializaciones

### `types/`
Tipos TypeScript para toda la aplicación:
- Interfaces de datos
- Tipos de respuesta de API
- Enums

### `utils/`
Funciones auxiliares de propósito general:
- Formato de fechas y moneda
- Debounce, throttle
- Validaciones

### `constants/`
Constantes de la aplicación:
- URLs de API
- Rutas de la aplicación
- Mensajes

### `config/`
Configuraciones globales:
- Variables de entorno
- Configuraciones de la app
- Timeouts y límites

### `styles/`
Estilos compartidos:
- Variables CSS
- Temas
- Estilos globales

## 🔄 Flujo de Uso

### Crear un nuevo componente
```
src/components/inventory/ProductForm.tsx
├── Importar tipos: from '@/types'
├── Importar hooks: from '@/hooks'
├── Importar componentes: from '@/components/common'
└── Importar utilidades: from '@/utils/helpers'
```

### Crear un servicio
```
src/services/categoryService.ts
├── Importar cliente: from '@/lib/supabase'
├── Importar tipos: from '@/types'
└── Exportar funciones CRUD
```

### Usar el alias `@/`
TypeScript está configurado con alias para importaciones:
```typescript
// ❌ Evita rutas relativas complejas
import { Button } from '../../../components/common/Button';

// ✅ Usa el alias @/
import { Button } from '@/components/common/Button';
```

## 📦 Dependencias Clave

- **Next.js 16**: Framework React con SSR
- **React 19**: Librería UI
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Estilos utilitarios
- **Supabase**: Base de datos y autenticación

## 🚀 Comandos

```bash
npm run dev    # Inicia servidor de desarrollo
npm run build  # Compila para producción
npm start      # Ejecuta versión compilada
npm run lint   # Verifica código
```

## ✅ Mejores Prácticas

1. **Separación de responsabilidades**: Cada carpeta tiene un propósito específico
2. **Reutilización**: Componentes y funciones reutilizables en `common`
3. **Tipado**: Siempre usar tipos TypeScript
4. **Naming**: Nombres claros y descriptivos
5. **Modularidad**: Fácil de escalar y mantener
6. **Testing**: Estructura facilita test unitarios
