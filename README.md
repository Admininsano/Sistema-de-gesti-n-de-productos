# Dashboard Inventario Web 🎯

Sistema de gestión de inventario de productos moderno y elegante construido con Next.js 16, React 19, TypeScript, Tailwind CSS y Firebase Realtime Database.

## ✨ Características

- ✅ **CRUD Completo** de productos
- 🔥 **Firebase Realtime Database** - Sincronización en tiempo real
- 🎨 **UI Moderna** - Diseño limpio con Tailwind CSS
- 📊 **Dashboard con Estadísticas** - Resumen visual del inventario
- 🔍 **Búsqueda en tiempo real** - Filtrado instantáneo de productos
- 📱 **Diseño Responsive** - Funciona en móviles, tablets y desktop
- 🎯 **Dos vistas** - Tabla y Grid view
- ⚡ **TypeScript** - Tipado estático para mayor seguridad
- 🎭 **Componentes reutilizables** - Arquitectura modular
- 🔔 **Alertas de stock** - Indicadores de stock bajo y sin stock

## 🚀 Tecnologías

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS 4
- **Base de Datos**: Firebase Realtime Database
- **Linting**: ESLint

## 🛠️ Instalación y Uso

### 1. Instalar dependencias
```bash
npm install
```

### 2. Configurar Firebase
Las credenciales ya están en `.env.local`. Si necesitas cambiarlas, edita ese archivo.

### 3. Ejecutar en modo desarrollo
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Compila para producción
npm start        # Ejecuta versión de producción
npm run lint     # Ejecuta ESLint
```

## 📁 Estructura del Proyecto

```
inventario-web/
├── app/                    # App Router de Next.js
├── src/
│   ├── components/         # Componentes React
│   │   ├── common/         # Button, Input, Modal, Card, etc.
│   │   ├── layout/         # Header, Footer, Sidebar
│   │   └── inventory/      # ProductForm, ProductTable, ProductGrid
│   ├── services/           # Lógica de negocio (Firebase)
│   ├── lib/                # Configuración Firebase
│   ├── types/              # TypeScript interfaces
│   └── utils/              # Funciones auxiliares
└── public/                 # Archivos estáticos
```

## 🎨 Componentes Principales

### Dashboard
- Estadísticas en tiempo real
- Búsqueda de productos
- Vista tabla/grid
- CRUD completo

### ProductForm
- Validación de campos
- Categorías predefinidas
- Soporte para imágenes

### ProductTable / ProductGrid
- Vista de tabla detallada
- Vista de tarjetas visual
- Badges de estado
- Acciones rápidas

## 📊 Estructura de Datos

```typescript
interface Product {
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
```

## 🔥 Firebase Realtime Database

Los datos se sincronizan automáticamente en tiempo real. La estructura en Firebase es:

```
/products
  /-Abc123
    name: "Producto 1"
    description: "..."
    price: 100
    quantity: 50
    category: "Electrónica"
```

## 🎯 Categorías Disponibles

- Electrónica
- Ropa
- Alimentos
- Hogar
- Deportes
- Libros
- Juguetes
- Otros

---

Desarrollado con ❤️ usando Next.js y Firebase

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
