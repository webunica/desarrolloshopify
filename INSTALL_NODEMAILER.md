# Instrucciones para instalar nodemailer

## Opción 1: Usar CMD en lugar de PowerShell
Abre el símbolo del sistema (CMD) y ejecuta:
```
cd c:\Users\studioo\Desktop\00000000_DESARROLLOSHOPIFY\web
npm install nodemailer @types/nodemailer
```

## Opción 2: Habilitar scripts en PowerShell (como administrador)
```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Luego ejecuta:
```
npm install nodemailer @types/nodemailer
```

## Configuración SMTP

Una vez instalado nodemailer, configura las variables de entorno en tu archivo `.env`:

```bash
# SMTP Configuration for Contact Form
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="tu-email@gmail.com"
SMTP_PASS="tu-app-password"
SMTP_FROM="tu-email@gmail.com"
CONTACT_EMAIL_TO="destino@ejemplo.com"
```

### Para Gmail:
1. Ve a tu cuenta de Google
2. Habilita la verificación en 2 pasos
3. Genera una "Contraseña de aplicación" en https://myaccount.google.com/apppasswords
4. Usa esa contraseña en SMTP_PASS

### Otros proveedores SMTP:
- **SendGrid**: smtp.sendgrid.net (puerto 587)
- **Mailgun**: smtp.mailgun.org (puerto 587)
- **Amazon SES**: email-smtp.[region].amazonaws.com (puerto 587)
- **Outlook**: smtp-mail.outlook.com (puerto 587)

## Verificar instalación
```
npm list nodemailer
```
