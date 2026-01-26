import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmail({
  name,
  email,
  phone,
  company,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}) {
  const mailOptions = {
    from: `"${name}" <${process.env.SMTP_FROM}>`,
    to: process.env.CONTACT_EMAIL_TO,
    replyTo: email,
    subject: `Nuevo Contacto desde DesarrolloShopify.cl - ${name}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: 600; color: #667eea; margin-bottom: 5px; }
            .value { background: white; padding: 12px; border-radius: 6px; border-left: 3px solid #667eea; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">✉️ Nuevo Mensaje de Contacto</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">DesarrolloShopify.cl</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Nombre:</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              ${phone ? `
              <div class="field">
                <div class="label">📱 Teléfono:</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              ` : ''}
              
              ${company ? `
              <div class="field">
                <div class="label">🏢 Empresa:</div>
                <div class="value">${company}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">💬 Mensaje:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
              
              <div class="footer">
                <p>Este mensaje fue enviado desde el formulario de contacto de DesarrolloShopify.cl</p>
                <p>Fecha: ${new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' })}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
Nuevo Mensaje de Contacto - DesarrolloShopify.cl

Nombre: ${name}
Email: ${email}
${phone ? `Teléfono: ${phone}` : ''}
${company ? `Empresa: ${company}` : ''}

Mensaje:
${message}

---
Enviado el: ${new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' })}
    `.trim(),
  };

  await transporter.sendMail(mailOptions);
}

export async function sendConfirmationEmail({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  const confirmationMailOptions = {
    from: `"DesarrolloShopify.cl" <${process.env.SMTP_FROM}>`,
    to: email,
    subject: '¡Gracias por contactarnos! - DesarrolloShopify.cl',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
            .container { max-width: 600px; margin: 40px auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 30px; text-align: center; }
            .header h1 { margin: 0; font-size: 28px; font-weight: 700; }
            .header p { margin: 10px 0 0 0; opacity: 0.95; font-size: 16px; }
            .content { padding: 40px 30px; }
            .greeting { font-size: 18px; font-weight: 600; color: #333; margin-bottom: 20px; }
            .message { color: #555; line-height: 1.8; margin-bottom: 30px; }
            .blog-section { background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 10px; padding: 25px; margin: 30px 0; border-left: 4px solid #667eea; }
            .blog-title { font-size: 16px; font-weight: 700; color: #667eea; margin-bottom: 10px; }
            .blog-description { color: #666; margin-bottom: 15px; font-size: 14px; line-height: 1.6; }
            .btn { display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 10px; transition: transform 0.2s; }
            .btn:hover { transform: translateY(-2px); }
            .contact-info { background: #f8f9fa; border-radius: 10px; padding: 20px; margin: 30px 0; }
            .contact-item { margin: 10px 0; color: #555; }
            .contact-item strong { color: #667eea; }
            .footer { background: #f8f9fa; padding: 30px; text-align: center; color: #666; font-size: 13px; line-height: 1.8; }
            .social-links { margin: 20px 0; }
            .social-links a { color: #667eea; text-decoration: none; margin: 0 10px; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✨ ¡Gracias por contactarnos!</h1>
              <p>Tu mensaje ha sido recibido exitosamente</p>
            </div>
            
            <div class="content">
              <div class="greeting">Hola ${name},</div>
              
              <div class="message">
                <p>Muchas gracias por ponerte en contacto con <strong>DesarrolloShopify.cl</strong>.</p>
                
                <p>Hemos recibido tu mensaje y nuestro equipo lo está revisando. Te contactaremos <strong>dentro de las próximas 24 horas</strong> para conversar sobre cómo podemos ayudarte con tu proyecto de e-commerce.</p>
                
                <p>Mientras tanto, te invitamos a conocer más sobre Shopify y el e-commerce en Chile:</p>
              </div>

              <div class="blog-section">
                <div class="blog-title">📚 Artículo Recomendado</div>
                <h3 style="margin: 10px 0; color: #333;">Guía Completa de Shopify en Chile 2026</h3>
                <div class="blog-description">
                  Descubre todo lo que necesitas saber sobre Shopify en Chile: desde la configuración inicial hasta estrategias avanzadas de ventas. Una guía paso a paso para emprendedores y empresas.
                </div>
                <a href="https://desarrolloshopify.cl/blog/guia-shopify-chile" class="btn">Leer Artículo Completo →</a>
              </div>

              <div class="contact-info">
                <div class="contact-item">
                  <strong>🌐 Sitio Web:</strong> 
                  <a href="https://desarrolloshopify.cl" style="color: #667eea; text-decoration: none;">desarrolloshopify.cl</a>
                </div>
                <div class="contact-item">
                  <strong>📧 Email:</strong> contacto@desarrolloshopify.cl
                </div>
                <div class="contact-item">
                  <strong>📱 WhatsApp:</strong> Disponible en nuestra web
                </div>
              </div>
            </div>

            <div class="footer">
              <p><strong>DesarrolloShopify.cl</strong></p>
              <p>Expertos en desarrollo y optimización de tiendas Shopify en Chile</p>
              
              <div class="social-links">
                <a href="https://desarrolloshopify.cl/blog">Blog</a> |
                <a href="https://desarrolloshopify.cl/servicios">Servicios</a> |
                <a href="https://desarrolloshopify.cl/portafolio">Portafolio</a>
              </div>
              
              <p style="margin-top: 20px; font-size: 12px; color: #999;">
                Este es un correo automático de confirmación. Por favor no respondas a este mensaje.
                <br>Para contactarnos, escríbenos a: contacto@desarrolloshopify.cl
              </p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
¡Gracias por contactarnos, ${name}!

Tu mensaje ha sido recibido exitosamente.

Hemos recibido tu mensaje y nuestro equipo lo está revisando. Te contactaremos dentro de las próximas 24 horas para conversar sobre cómo podemos ayudarte con tu proyecto de e-commerce.

Mientras tanto, te invitamos a leer nuestro artículo:
📚 Guía Completa de Shopify en Chile 2026
https://desarrolloshopify.cl/blog/guia-shopify-chile

---
Contacto:
🌐 Web: https://desarrolloshopify.cl
📧 Email: contacto@desarrolloshopify.cl

DesarrolloShopify.cl
Expertos en desarrollo y optimización de tiendas Shopify en Chile

Este es un correo automático de confirmación.
Para contactarnos, escríbenos a: contacto@desarrolloshopify.cl
    `.trim(),
  };

  await transporter.sendMail(confirmationMailOptions);
}
