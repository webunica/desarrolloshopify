# 📧 Página de Contacto con SMTP - Configuración Completa

## ✅ Archivos Creados

He preparado una página de contacto completa con servicio SMTP. Aquí están los archivos creados:

### 1. Frontend
- **`/app/contacto/page.tsx`** - Página principal con metadata SEO
- **`/app/contacto/ContactoClient.tsx`** - Componente cliente con formulario interactivo

### 2. Backend
- **`/app/api/contact/route.ts`** - API endpoint para procesar y enviar emails
- **`/lib/email.ts`** - Utilidad de configuración SMTP con nodemailer

### 3. Configuración
- **`.env.example`** - Actualizado con variables SMTP necesarias

## 🚀 Pasos para Activar el Sistema

### Paso 1: Instalar Nodemailer

Debido a restricciones de PowerShell, necesitas ejecutar el comando en **CMD**:

```bash
cd c:\Users\studioo\Desktop\00000000_DESARROLLOSHOPIFY\web
npm install nodemailer @types/nodemailer
```

**Alternativa:** Si prefieres usar PowerShell, primero habilita la ejecución de scripts:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Paso 2: Configurar Variables de Entorno

Crea o actualiza tu archivo `.env` con la siguiente configuración:

```bash
# SMTP Configuration for Contact Form
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="tu-email@gmail.com"
SMTP_PASS="tu-app-password"
SMTP_FROM="tu-email@gmail.com"
CONTACT_EMAIL_TO="destino@ejemplo.com"
```

### Paso 3: Configurar Gmail (Recomendado)

Si usas Gmail, sigue estos pasos:

1. Ve a tu **Cuenta de Google** → Seguridad
2. Habilita la **Verificación en 2 pasos**
3. Ve a **Contraseñas de aplicaciones**: https://myaccount.google.com/apppasswords
4. Genera una nueva contraseña de aplicación para "Correo"
5. Copia esa contraseña de 16 caracteres
6. Úsala en `SMTP_PASS` (sin espacios)

**Ejemplo de configuración Gmail:**
```bash
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="miempresa@gmail.com"
SMTP_PASS="abcd efgh ijkl mnop"  # Tu contraseña de aplicación
SMTP_FROM="miempresa@gmail.com"
CONTACT_EMAIL_TO="contacto@miempresa.com"
```

### Paso 4: Probar el Sistema

1. Inicia el servidor de desarrollo:
```bash
npm run dev
```

2. Navega a: `http://localhost:3000/contacto`

3. Completa y envía el formulario de prueba

4. Verifica que el email llegue a la dirección configurada en `CONTACT_EMAIL_TO`

## 📮 Otros Proveedores SMTP (Alternativas)

### SendGrid (Gratis hasta 100 emails/día)
```bash
SMTP_HOST="smtp.sendgrid.net"
SMTP_PORT="587"
SMTP_USER="apikey"
SMTP_PASS="tu-api-key-de-sendgrid"
SMTP_FROM="verificado@tudominio.com"
```

### Mailgun (Gratis hasta 5,000 emails/mes primeros 3 meses)
```bash
SMTP_HOST="smtp.mailgun.org"
SMTP_PORT="587"
SMTP_USER="postmaster@tunominio.mailgun.org"
SMTP_PASS="tu-contraseña-mailgun"
SMTP_FROM="contacto@tudominio.com"
```

### Outlook/Hotmail
```bash
SMTP_HOST="smtp-mail.outlook.com"
SMTP_PORT="587"
SMTP_USER="tu-email@outlook.com"
SMTP_PASS="tu-contraseña"
SMTP_FROM="tu-email@outlook.com"
```

### Amazon SES (Muy económico)
```bash
SMTP_HOST="email-smtp.us-east-1.amazonaws.com"
SMTP_PORT="587"
SMTP_USER="tu-access-key"
SMTP_PASS="tu-secret-key"
SMTP_FROM="verificado@tudominio.com"
```

## ✨ Características Implementadas

### Diseño Premium
- ✅ Degradados modernos y glassmorphism
- ✅ Animaciones suaves con Framer Motion
- ✅ Diseño responsive (mobile-first)
- ✅ Theme oscuro consistente con el sitio

### Validación Robusta
- ✅ Validación en frontend con React Hook Form
- ✅ Validación en backend con Zod
- ✅ Mensajes de error específicos y claros
- ✅ Feedback visual inmediato

### Experiencia de Usuario
- ✅ Loading states durante el envío
- ✅ Notificaciones toast con Sonner
- ✅ Confirmación visual de éxito
- ✅ Reset automático del formulario

### Seguridad
- ✅ Validación de datos en servidor
- ✅ Variables de entorno para credenciales
- ✅ Rate limiting en producción (recomendado)
- ✅ Sanitización de inputs

### Email Template
- ✅ Template HTML profesional y responsive
- ✅ Versión texto plano incluida
- ✅ Branding consistente
- ✅ Información de contacto completa

## 🎯 Campos del Formulario

El formulario incluye:

- **Nombre completo** (requerido)
- **Email** (requerido, validado)
- **Teléfono** (opcional)
- **Empresa** (opcional)
- **Mensaje** (requerido, mínimo 10 caracteres)

## 🔧 Personalización

### Cambiar colores del email
Edita `/lib/email.ts` en la sección del template HTML:

```typescript
const mailOptions = {
  // ...
  html: `
    <style>
      .header { background: linear-gradient(135deg, #TU_COLOR_1 0%, #TU_COLOR_2 100%); }
      .label { color: #TU_COLOR_ACCENT; }
      // ... más estilos
    </style>
  `
};
```

### Personalizar información de contacto
Edita `/app/contacto/ContactoClient.tsx`:

```tsx
<ContactInfoCard
  icon={<Mail className="w-6 h-6" />}
  title="Email"
  content="tu-email@tudominio.com"
  href="mailto:tu-email@tudominio.com"
/>
```

### Agregar más campos al formulario
1. Actualiza la interfaz `ContactFormData`
2. Agrega el campo en el schema de Zod (`/app/api/contact/route.ts`)
3. Incluye el campo en el template de email (`/lib/email.ts`)

## 📊 Monitoreo y Logs

Los errores se registran en la consola del servidor. Para producción, considera:

- Implementar Sentry para tracking de errores
- Agregar logging estructurado con Winston o Pino
- Guardar mensajes en base de datos para historial
- Implementar rate limiting para prevenir spam

## 🔐 Seguridad en Producción

### Variables de Entorno
Asegúrate de que tu `.env` **NUNCA** se suba a Git:
```bash
# Verifica que .gitignore incluye:
.env
.env.local
.env.production
```

### Rate Limiting (Recomendado)
Instala y configura rate limiting:
```bash
npm install express-rate-limit
```

### CAPTCHA (Opcional)
Para prevenir spam, considera integrar:
- Google reCAPTCHA v3
- hCaptcha
- Cloudflare Turnstile

## 🚀 Deploy

Antes de hacer deploy en producción:

1. ✅ Verifica las variables de entorno en tu plataforma
   - Vercel: Settings → Environment Variables
   - Netlify: Site settings → Build & deploy → Environment
   - Railway: Variables tab

2. ✅ Prueba el formulario en staging primero

3. ✅ Configura email alerts para errores críticos

4. ✅ Considera usar un dominio personalizado para emails

## 📝 Navegación

El enlace de **Contacto** ya está integrado en el Navbar principal (`/components/Navbar.tsx`), así que los usuarios pueden acceder desde cualquier página.

## 🆘 Troubleshooting

### El comando npm no funciona en PowerShell
- Usa CMD en su lugar
- O habilita scripts: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`

### Gmail rechaza conexión
- Verifica que uses una contraseña de aplicación, no tu contraseña normal
- Asegúrate de tener 2FA habilitado
- Revisa que el puerto sea 587, no 465

### Los emails van a spam
- Configura SPF, DKIM y DMARC en tu dominio
- Usa un servicio profesional como SendGrid o Mailgun
- Evita palabras spam en el asunto y contenido

### Error "nodemailer not found"
- Asegúrate de haber ejecutado `npm install nodemailer @types/nodemailer`
- Reinicia el servidor de desarrollo después de instalar

## 📞 Soporte

Si necesitas ayuda adicional:
- Revisa `INSTALL_NODEMAILER.md` para instrucciones detalladas de instalación
- Verifica que todas las variables de entorno estén correctamente configuradas
- Comprueba los logs del servidor para mensajes de error específicos

---

**¡Todo listo!** 🎉 Solo falta instalar nodemailer y configurar tus credenciales SMTP.
