# 🚀 Configuración de Variables SMTP en Producción

## Variables de Entorno Necesarias

Para que el formulario de contacto funcione en producción, necesitas configurar estas variables de entorno en tu plataforma de hosting:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-email@gmail.com
SMTP_PASS=tu-app-password
SMTP_FROM=tu-email@gmail.com
CONTACT_EMAIL_TO=destino@ejemplo.com
```

---

## 📦 Por Plataforma de Deploy

### **Vercel** (Recomendado para Next.js)

1. Ve a tu proyecto en [vercel.com](https://vercel.com)
2. Click en **Settings** → **Environment Variables**
3. Agregar una por una:

```
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_USER = tu-email@gmail.com
SMTP_PASS = abcdefghijklmnop (contraseña de aplicación Gmail)
SMTP_FROM = tu-email@gmail.com
CONTACT_EMAIL_TO = contacto@tudominio.com
```

4. Selecciona **Production**, **Preview** y **Development**
5. Click en **Save**
6. **Redeploy** el proyecto para que tome las variables

### **Netlify**

1. Ve a **Site settings** → **Build & deploy** → **Environment**
2. Click en **Edit variables**
3. Agregar las 6 variables SMTP
4. Click en **Save**
5. Haz un nuevo deploy (Netlify re-buildea automáticamente)

### **Railway**

1. Abre tu proyecto
2. Ve a la pestaña **Variables**
3. Click en **+ New Variable**
4. Agregar cada variable SMTP
5. El servicio se reiniciará automáticamente

### **DigitalOcean App Platform**

1. Ve a tu app → **Settings** → **App-Level Environment Variables**
2. Click en **Edit**
3. Agregar las variables SMTP
4. Click en **Save**
5. Redeploy la aplicación

### **Heroku**

1. Ve a tu app dashboard
2. **Settings** → **Config Vars** → **Reveal Config Vars**
3. Agregar cada variable como par KEY=VALUE
4. No necesita redeploy manual

### **AWS Amplify**

1. Abre tu app en Amplify Console
2. **App settings** → **Environment variables**
3. Click en **Manage variables**
4. Agregar las 6 variables
5. Save y redeploy

### **Render**

1. Dashboard → Tu proyecto → **Environment**
2. Click en **Add Environment Variable**
3. Agregar las variables SMTP
4. Auto-redeploy al guardar

---

## 🔐 Seguridad - Contraseña de Aplicación Gmail

### Para Gmail (Más común)

1. Ve a [myaccount.google.com](https://myaccount.google.com)
2. **Seguridad** → Habilita **Verificación en 2 pasos** (si no la tienes)
3. Regresa a **Seguridad** → Busca **Contraseñas de aplicaciones**
4. Selecciona **Correo** y tu dispositivo
5. Google genera una contraseña de 16 caracteres: `abcd efgh ijkl mnop`
6. **Copia** esa contraseña (sin espacios) en `SMTP_PASS`

### Ejemplo:
```bash
SMTP_PASS=abcdefghijklmnop
```

---

## 🧪 Verificar Variables en Producción

Después de configurar, puedes verificar con este código temporal en tu API:

```typescript
// En app/api/contact/route.ts temporalmente
export async function GET() {
  return Response.json({
    hasHost: !!process.env.SMTP_HOST,
    hasPort: !!process.env.SMTP_PORT,
    hasUser: !!process.env.SMTP_USER,
    hasPass: !!process.env.SMTP_PASS,
    hasFrom: !!process.env.SMTP_FROM,
    hasTo: !!process.env.CONTACT_EMAIL_TO,
  });
}
```

Visita `https://tudominio.com/api/contact` y deberías ver todos en `true`.

⚠️ **IMPORTANTE**: Elimina este código después de verificar.

---

## 🎯 Proveedores SMTP Alternativos

### **SendGrid** (100 emails gratis/día)

```bash
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=SG.tu-api-key-de-sendgrid
SMTP_FROM=verificado@tudominio.com
CONTACT_EMAIL_TO=contacto@tudominio.com
```

**Configuración:**
1. Regístrate en [sendgrid.com](https://sendgrid.com)
2. **Settings** → **API Keys** → Create API Key
3. Copia el API key completo
4. Usa `apikey` como username

### **Mailgun** (5,000 emails gratis primeros 3 meses)

```bash
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=postmaster@tudominio.mailgun.org
SMTP_PASS=tu-contraseña-mailgun
SMTP_FROM=contacto@tudominio.com
CONTACT_EMAIL_TO=soporte@tudominio.com
```

### **Amazon SES** (Muy económico después del tier gratuito)

```bash
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_USER=tu-access-key-id
SMTP_PASS=tu-secret-access-key
SMTP_FROM=verificado@tudominio.com
CONTACT_EMAIL_TO=admin@tudominio.com
```

### **Resend** (Moderno, 100 emails/día gratis)

```bash
SMTP_HOST=smtp.resend.com
SMTP_PORT=587
SMTP_USER=resend
SMTP_PASS=re_tu_api_key
SMTP_FROM=onboarding@resend.dev
CONTACT_EMAIL_TO=tu-email@tudominio.com
```

---

## 🚨 Troubleshooting

### Error: "Invalid login"
- Verifica que uses **contraseña de aplicación**, no tu contraseña normal
- Confirma que 2FA está habilitado en Gmail

### Error: "Connection timeout"
- Verifica el puerto (587 para TLS, 465 para SSL)
- Algunos hosts bloquean puertos SMTP, usa SendGrid o Mailgun

### Los emails van a spam
- Usa un dominio verificado
- Configura SPF, DKIM y DMARC
- Usa servicios profesionales (SendGrid, Mailgun)

### Error: "Variables undefined"
- Asegúrate de haber guardado las variables
- Haz un **redeploy** completo
- Verifica que no haya typos en los nombres

---

## ✅ Checklist Final

- [ ] Variables configuradas en plataforma de deploy
- [ ] Contraseña de aplicación generada (si usas Gmail)
- [ ] Redeploy realizado
- [ ] Formulario probado en producción
- [ ] Email recibido correctamente
- [ ] Variables verificadas (opcional)

---

## 📧 Contacto de Prueba

Una vez configurado, prueba enviando un mensaje desde:
```
https://tudominio.com/contacto
```

Deberías recibir un email profesional con el formato que configuramos.

---

**Listo!** 🎉 Tu sistema de contacto estará funcionando en producción.
