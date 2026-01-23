# DesarrolloShopify.cl - Plataforma MVP

Este proyecto es una aplicación Web (Next.js 14 App Router) para la captación y gestión de servicios de desarrollo de tiendas Shopify.

## Stack Tecnológico

- **Framework**: Next.js 14+ (App Router, Server Components)
- **Lenguaje**: TypeScript
- **Estilos**: TailwindCSS 3 + CSS Modules + Shadcn/UI patterns
- **Base de Datos**: PostgreSQL (via Prisma ORM)
- **Validación**: Zod
- **UI Kit**: Lucide React Icons

## Estructura del Proyecto

- `/app`: Rutas de la aplicación
  - `/`: Landing Page (SSG/ISR)
  - `/iniciar`: Captura de Lead
  - `/wizard`: Formulario multi-paso interactivo
  - `/panel/[token]`: Panel del cliente
  - `/admin`: Dashboard administrativo (Pass: `admin123`)
  - `/api`: Endpoints (Leads, Wizard Save, Uploads)
- `/prisma`: Schema de base de datos
- `/components`: Componentes UI reutilizables
- `/lib`: Utilidades y cliente Prisma

## Configuración Local

1.  **Instalar dependencias**:
    ```bash
    npm install
    ```

2.  **Configurar Base de Datos**:
    Crea un archivo `.env` en la raíz con tu URL de conexión a PostgreSQL.
    ```env
    DATABASE_URL="postgresql://user:password@localhost:5432/desarrolloshopify"
    ```
    *Nota: Si no tienes Postgres local, puedes usar una instancia gratuita en Supabase o Neon.tech, o cambiar el provider a "sqlite" en `prisma/schema.prisma` para pruebas rápidas.*

3.  **Inicializar DB**:
    ```bash
    npx prisma db push
    ```

4.  **Correr el Servidor**:
    ```bash
    npm run dev
    ```
    Visita `http://localhost:3000`

## Despliegue (Vercel)

1.  Push a GitHub.
2.  Importar proyecto en Vercel.
3.  Configurar Varible de Entorno `DATABASE_URL`.
4.  Deploy.

## Notas Adicionales

- Las subidas de archivos en desarrollo se guardan en `public/uploads`. Para producción, se recomienda integrar AWS S3 o R2 modificando `app/api/upload/route.ts`.
- La seguridad del admin es básica (Cookie simple) para fines de MVP.
