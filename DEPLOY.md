# Guía de Despliegue (Deploy)

Para subir tu aplicación **DesarrolloShopify.cl** al hosting, tienes dos opciones principales.

## Opción A: Vercel (Recomendada - GRATIS + RÁPIDO)

Esta es la forma nativa de desplegar Next.js.

1.  Sube este código a un repositorio en **GitHub**, GitLab o Bitbucket.
2.  Crea una cuenta en [Vercel.com](https://vercel.com).
3.  Click en **"New Project"** e importa tu repositorio.
4.  En la configuración del proyecto ("Environment Variables"), añade:
    *   `DATABASE_URL`: Tu conexión a PostgreSQL (puedes crear una gratis en [Neon.tech](https://neon.tech) o [Supabase](https://supabase.com)).
5.  Click en **Deploy**.
6.  ¡Listo! Vercel detecta todo automáticamente.

## Opción B: Hosting Tradicional (cPanel / VPS)

Si tu hosting tiene soporte para **Node.js** (versión 18 o superior).

### 1. Preparar Archivos
Si no usas Git, debes subir los archivos manualmente.
Crea un archivo `.zip` con **todo el contenido de la carpeta `web`**, EXCEPTO:
*   La carpeta `node_modules` (NO la subas, pesa mucho y se instala en el servidor).
*   La carpeta `.next` (se genera en el build).
*   La carpeta `.git`.

Sube el ZIP al Administrador de Archivos de tu hosting y descomprímelo.

### 2. Configurar Entorno
En tu hosting, busca la sección **"Setup Node.js App"** (o similar).
*   **Node.js Version**: Selecciona 18.x o 20.x.
*   **Application Mode**: Production.
*   **Application Root**: La carpeta donde descomprimiste.
*   **Application Startup File**: `node_modules/next/dist/bin/next` (o simplemente deja `package.json` si el hosting lo lee).
    *   *Nota*: En cPanel a veces es mejor crear un archivo `server.js` simple que haga `require('next')`.

### 3. Variables de Entorno
Crea un archivo `.env` en la raíz del servidor con:
```env
DATABASE_URL="postgresql://usuario:pass@host:5432/db"
```

### 4. Instalar y Construir
Entra a la terminal del hosting (SSH o terminal web) y navega a la carpeta.
Ejecuta:
```bash
# 1. Instalar dependencias
npm install --omit=dev  (o simplemente npm install)

# 2. Generar cliente de base de datos
npx prisma generate

# 3. Construir la aplicación
npm run build

# 4. Iniciar (si no usas el gestor de cPanel)
npm start
```

## Checklist Antes de Subir
- [ ] Tu base de datos (PostgreSQL) está creada y accesible.
- [ ] Has probado el build localmente (`npm run build`).
- [ ] Tienes las credenciales del Admin (`admin123` hardcoded en `/app/admin/login/page.tsx`).

## Archivos Importantes
- `prisma/schema.prisma`: Define tu base de datos.
- `app/api/upload/route.ts`: Actualmente guarda archivos en disco (`public/uploads`). **En Vercel esto se borra al redesplegar**. Para producción real, considera conectar AWS S3 (te dejamos el código base, solo falta instalar SDK).
