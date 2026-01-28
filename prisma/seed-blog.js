const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();
console.log('Available models:', Object.keys(prisma).filter(key => key[0] !== '_' && key[0] !== '$'));


const articles = [
    {
        title: "Guía Definitiva: Vender con Shopify en Chile (2026)",
        content: `
            <p class="lead text-xl text-slate-300">Si estás buscando lanzar tu tienda online en Chile, probablemente ya sabes que <strong>Shopify</strong> es una de las opciones más robustas del mundo. Pero, ¿cómo funciona en el mercado chileno? ¿Qué pasarelas de pago usar? ¿Cómo conectar boleta electrónica?</p>
            
            <p>En esta guía completa, desglosamos todo lo que necesitas para convertirte en un experto del e-commerce local.</p>

            <h2>¿Por qué elegir Shopify en Chile?</h2>
            <p>A diferencia de plataformas locales como Jumpseller o Bootic, Shopify es un ecosistema global. Esto significa que tienes acceso a miles de aplicaciones, temas de diseño de clase mundial y una estabilidad técnica que no te abandonará en el CyberMonday.</p>
            <ul>
                <li><strong>Estabilidad:</strong> No se cae con peaks de tráfico.</li>
                <li><strong>App Store:</strong> Plugins para todo (marketing, logística, facturación).</li>
                <li><strong>Omnicanalidad:</strong> Vende en Instagram, Facebook y tu web desde un solo lugar.</li>
            </ul>

            <h2>1. Configurando los Pagos (Lo más importante)</h2>
            <p>El cliente chileno confía en marcas conocidas. Para vender, necesitas ofrecer métodos de pago locales. Olvídate de solo PayPal.</p>
            
            <h3>MercadoPago</h3>
            <p>Hoy en día es el estándar de oro. Permite pagar con tarjeta de crédito, débito e incluso saldo de cuenta MercadoPago. La integración es nativa y muy fácil de configurar desde el panel de Shopify.</p>
            
            <h3>Webpay Plus (Transbank)</h3>
            <p>El clásico de Chile. Para usarlo en Shopify, generalmente necesitas un integrador o usar soluciones como <strong>Pago Fácil</strong> o la app oficial si tienes código de comercio propio. Es vital para capturar al público más tradicional.</p>

            <h2>2. Logística y Despachos</h2>
            <p>Chile es un país largo, y la logística puede ser una pesadilla si no se automatiza. Shopify te permite conectar apps como:</p>
            <ul>
                <li><strong>Envíame:</strong> Multi-courier (Chilexpress, Starken, BlueExpress). Cotiza en tiempo real.</li>
                <li><strong>Shipit:</strong> Otra excelente opción para automatizar etiquetas y seguimiento.</li>
            </ul>
            <p>Tip experto: Cobra el envío en el checkout o ofrece "Envío Gratis sobre $50.000" para aumentar tu ticket promedio.</p>

            <h2>3. Boleta Electrónica y el SII</h2>
            <p>Para estar legal, necesitas emitir boletas. Afortunadamente, no tienes que hacerlo a mano.</p>
            <p>Existen apps como <strong>LibreDTE</strong>, <strong>Haulmer</strong> o <strong>Bsale</strong> que se sincronizan con Shopify. Cada vez que vendes, la boleta se genera automáticamente y se envía al cliente y al SII.</p>

            <h2>4. ¿Cuánto cuesta realmente?</h2>
            <p>Debes considerar tres costos mensuales:</p>
            <ol>
                <li><strong>Plan Shopify:</strong> Desde $19 USD/mes (Plan Basic).</li>
                <li><strong>Comisiones por venta:</strong> Shopify cobra un pequeño % (0.5% - 2%) si no usas Shopify Payments (que aún no está full en Chile), más la comisión de tu pasarela de pago (aprox 2.5% + IVA).</li>
                <li><strong>Apps extras:</strong> Considera unos $20-$50 USD extra para apps de boleta o email marketing.</li>
            </ol>

            <h2>Conclusión</h2>
            <p>Shopify es, sin duda, la mejor inversión para negocios que buscan escalar. Si bien el costo inicial puede parecer más alto que una solución 100% gratuita, el ahorro en horas de soporte técnico y la capacidad de conversión lo valen.</p>
            
            <p class="bg-slate-900 border-l-4 border-purple-500 p-4 my-8">
                <strong>¿Necesitas ayuda experta?</strong> En <a href="/">DesarrolloShopify.cl</a> nos especializamos en configurar tiendas que venden desde el día 1. <a href="/contacto">Hablemos de tu proyecto</a>.
            </p>
        `,
        createdAt: "2026-01-25T00:00:00Z",
        category: "Guía Completa",
        slug: "guia-shopify-chile-2026",
        imageUrl: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=800&auto=format&fit=crop",
        excerpt: "Todo lo que necesitas saber sobre impuestos, envíos y pagos para montar tu tienda online legal y operativa en Chile este 2026.",
        keywords: "shopify chile, vender en chile, boleta electrónica shopify, medios de pago chile, ecommerce chile, transbank, mercadopago"
    },
    {
        title: "Pasarelas de Pago Shopify Chile: MercadoPago vs Transbank vs Fintoc",
        content: `
            <p class="lead text-xl text-slate-300">Una tienda bonita no sirve de nada si no puedes cobrar. En 2026, las opciones de pago en Chile se han diversificado. Comparamos las mejores.</p>
            
            <h2>1. MercadoPago (El Líder)</h2>
            <p>Es la opción más robusta y fácil de integrar. No requiere contratos complejos ni validaciones técnicas.</p>
            <ul>
                <li><strong>Comisión:</strong> Aprox 2.79% + IVA (14 días) o 2.99% + IVA (Instantáneo).</li>
                <li><strong>Ventaja:</strong> UX fluida, Checkout Pro (dentro del sitio), guarda tarjetas.</li>
                <li><strong>Desventaja:</strong> Atención al cliente a veces lenta.</li>
            </ul>

            <h2>2. Webpay Plus (Transbank)</h2>
            <p>El estándar histórico. Genera confianza en compradores mayores.</p>
            <ul>
                <li><strong>Integración:</strong> Ahora existe integración oficial, pero muchos prefieren usar agregadores como Pago Fácil para evitar burocracia.</li>
                <li><strong>Ventaja:</strong> Confianza del consumidor.</li>
                <li><strong>Desventaja:</strong> UX de redirección a veces corta la conversión.</li>
            </ul>

            <h2>3. Fintoc (Transferencias Bancarias Simplificadas)</h2>
            <p>La revolución de las transferencias. Permite pagar directo desde la cuenta bancaria sin tarjetas.</p>
            <ul>
                <li><strong>Comisión:</strong> Fija o % muy bajo comparado a tarjetas.</li>
                <li><strong>Ventaja:</strong> Sin riesgo de contracargos. Ideal para tickets altos.</li>
                <li><strong>Desventaja:</strong> No permite cuotas (crédito).</li>
            </ul>

            <h3>Veredicto</h3>
            <p>Recomendamos usar <strong>MercadoPago</strong> como principal y <strong>Fintoc</strong> como secundario para ahorrar comisiones.</p>
        `,
        createdAt: "2026-01-24T00:00:00Z",
        category: "Pagos y Logística",
        slug: "pasarelas-pago-shopify-chile",
        imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=800&auto=format&fit=crop",
        excerpt: "Comparativa actualizada 2026 de comisiones y experiencia de usuario entre Webpay, MercadoPago y Fintoc para Shopify.",
        keywords: "pasarelas de pago, mercadopago chile, webpay shopify, fintoc, comisiones transbank, medios de pago ecommerce"
    },
    {
        title: "Migrar de WooCommerce a Shopify en Chile: ¿Vale la pena?",
        content: `
            <p class="lead text-xl text-slate-300">Muchos emprendedores inician en WooCommerce (WordPress) porque es 'gratis'. Pero cuando crecen, los problemas técnicos empiezan. Analizamos si migrar es tu solución.</p>

            <h2>El "Costo Oculto" de WooCommerce</h2>
            <p>WordPress es excelente, pero mantener una tienda segura y rápida requiere:</p>
            <ul>
                <li>Hosting VPS dedicado ($20k-$50k CLP/mes).</li>
                <li>Plugin de seguridad (Wordfence Pro).</li>
                <li>Actualizaciones semanales de plugins que pueden romper el sitio.</li>
            </ul>

            <h2>Shopify: La tranquilidad cuesta (pero paga)</h2>
            <p>Con Shopify, pagas desde $19 USD/mes, pero te olvidas de servidores, parches de seguridad y caídas en CyberDays.</p>

            <h2>Proceso de Migración</h2>
            <p>Migrar no significa perder tu SEO ni tus clientes. En <strong>DesarrolloShopify.cl</strong> realizamos migraciones integrales:</p>
            <ol>
                <li><strong>Productos:</strong> Importamos catálogo completo con SKUs.</li>
                <li><strong>Clientes:</strong> Historial de compradores.</li>
                <li><strong>Redirecciones 301:</strong> Vital para no perder posicionamiento en Google.</li>
            </ol>

            <p class="my-6">¿Tu WooCommerce carga lento? Es hora de profesionalizar tu infraestructura. <a href="/contacto">Cotiza tu migración hoy</a>.</p>
        `,
        createdAt: "2026-01-22T00:00:00Z",
        category: "Comparativa",
        slug: "migrar-woocommerce-a-shopify-chile",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        excerpt: "Análisis honesto sobre cuándo es el momento correcto para dejar WooCommerce y pasar a una plataforma SaaS como Shopify.",
        keywords: "migracion shopify, woocommerce vs shopify, cambiar plataforma ecommerce, wordpress o shopify, agencia shopify chile"
    },
    {
        title: "Logística E-commerce en Chile: Integraciones Shopify 2026",
        content: `
            <p class="lead text-xl text-slate-300">Si vendes físico, la logística es tu ventaja competitiva. Configurar envíos automáticos en Shopify Chile es más fácil de lo que crees.</p>

            <h2>Apps de Logística Imprescindibles</h2>
            
            <h3>1. Envíame</h3>
            <p>Un multi-courier que conecta tu tienda con Chilexpress, Starken, BlueExpress, 99Minutos y más.</p>
            <ul>
                <li><strong>Automatización:</strong> Imprime 100 etiquetas en 1 clic.</li>
                <li><strong>Cotizador:</strong> Muestra el precio real al cliente en el checkout.</li>
            </ul>

            <h3>2. Shipit</h3>
            <p>Similar a Envíame, con excelente soporte para retiros a domicilio y gestión de incidencias.</p>

            <h2>Estrategias de Envío</h2>
            <ul>
                <li><strong>Envío Gratis:</strong> Ofrécelo sobre un monto (ej: $50.000) para subir el ticket medio.</li>
                <li><strong>Retiro en Tienda:</strong> Shopify lo trae nativo y es muy usado en Chile (Click & Collect).</li>
                <li><strong>Same Day:</strong> Usa couriers express dentro de Santiago para entregar el mismo día.</li>
            </ul>
        `,
        createdAt: "2026-01-20T00:00:00Z",
        category: "Pagos y Logística",
        slug: "logistica-envios-shopify-chile",
        imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
        excerpt: "Cómo automatizar Starken, Chilexpress y BlueExpress en tu tienda Shopify. Apps recomendadas y estrategias de envío.",
        keywords: "envios shopify, logistica ecommerce chile, enviame, shipit, starken shopify, chilexpress shopify"
    },
    {
        title: "SEO para Shopify: Posiciona tu tienda en Google Chile",
        content: `
            <p class="lead text-xl text-slate-300">Tener la tienda más linda no sirve si nadie la encuentra. El SEO en Shopify tiene sus trucos específicos.</p>

            <h2>1. Estructura de URLs</h2>
            <p>Shopify es rígido con las URLs (/products/, /pages/), pero muy limpio. Asegúrate de usar 'slugs' descriptivos.</p>
            <p><em>Mal: /products/p-123</em><br><em>Bien: /products/zapatillas-running-nike-air</em></p>

            <h2>2. Colecciones e Interlinkeo</h2>
            <p>Las páginas de colección son poderosas. Agrega descripciones con texto rico en palabras clave al inicio o final de tus colecciones para que Google entienda de qué tratan.</p>

            <h2>3. El Blog es tu aliado</h2>
            <p>Google ama el contenido fresco. Escribe guías de uso de tus productos (como este mismo blog) para captar tráfico "top of funnel".</p>

            <h2>4. Velocidad Técnica</h2>
            <p>Usa imágenes WebP (Shopify lo hace automático a veces) y evita apps innecesarias que inyecten JS pesado.</p>

            <p class="bg-slate-900 border-l-4 border-purple-500 p-4 my-8">
                <strong>¿Necesitas auditoría SEO?</strong> Optimizamos tu tienda para que aparezca primero. <a href="/contacto">Contáctanos</a>.
            </p>
        `,
        createdAt: "2026-01-18T00:00:00Z",
        category: "Optimización",
        slug: "seo-shopify-chile-guia",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        excerpt: "Guía técnica para posicionar tu e-commerce en los primeros lugares de búsqueda en Chile. Tips on-page y técnicos.",
        keywords: "seo shopify, posicionamiento web chile, ecommerce seo, optimizacion tecnica shopify, marketing digital"
    }
];

async function main() {
    console.log("Seeding Database...");
    for (const article of articles) {
        // Prepare data object, only adding keywords if the property exists in database schema
        // We know we added keywords to schema, so we include it.
        const data = {
            title: article.title,
            content: article.content,
            category: article.category,
            slug: article.slug,
            imageUrl: article.imageUrl,
            excerpt: article.excerpt,
            published: true,
            publishedAt: new Date(article.createdAt),
            keywords: article.keywords || ""
        };

        await prisma.blogArticle.upsert({
            where: { slug: article.slug },
            update: data, // Update content if exists to refresh dev data
            create: data
        });
        console.log(`Created/Updated: ${article.title}`);
    }
    console.log("Done!");
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
