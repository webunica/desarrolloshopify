import { Metadata } from 'next';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

// Mock database of articles - should match the list in /blog/page.tsx
// In a real app, this would come from a Database or CMS
const articles = {
    "guia-shopify-chile": {
        title: "Guía Definitiva: Vender con Shopify en Chile (2025)",
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
        date: "25 Ene, 2026",
        category: "Guía Completa"
    },
    "pagos-logistica-shopify-chile": {
        title: "Mejores Pasarelas de Pago y Couriers para Shopify",
        content: `
            <p>Elegir la pasarela correcta puede definir tu conversión...</p>
            <h2>Comparativa de Comisiones</h2>
            <p>Analizamos las tarifas de Transbank vs MercadoPago...</p>
        `,
        date: "24 Ene, 2026",
        category: "Pagos y Logística"
    },
    "shopify-vs-woocommerce-jumpseller": {
        title: "Shopify vs Jumpseller vs WooCommerce",
        content: `
            <p>Muchos emprendedores dudan al iniciar...</p>
            <h2>Jumpseller: La opción local</h2>
            <p>Bueno para empezar, pero limitado en escalabilidad...</p>
            <h2>WooCommerce: Potencia pero mantenimiento</h2>
            <p>Ideal si tienes equipo técnico...</p>
            <h2>Shopify: El estándar global</h2>
            <p>La mejor opción llave en mano...</p>
        `,
        date: "22 Ene, 2026",
        category: "Comparativa"
    },
    "velocidad-shopify-chile": {
        title: "10 Trucos para mejorar la velocidad de tu tienda",
        content: `
            <p>La velocidad de carga es factor de ranking en Google...</p>
            <h2>1. Optimiza imágenes</h2>
            <p>Usa WebP y comprime...</p>
        `,
        date: "20 Ene, 2026",
        category: "Optimización"
    }
};

type Props = {
    params: { slug: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = params.slug;
    const article = articles[slug as keyof typeof articles];

    if (!article) {
        return {
            title: "Artículo no encontrado",
        };
    }

    return {
        title: `${article.title} | Blog DesarrolloShopify.cl`,
        description: `Lee nuestro artículo sobre ${article.title}. Expertos en Shopify Chile.`,
    };
}

export default function BlogPost({ params }: Props) {
    const slug = params.slug;
    const article = articles[slug as keyof typeof articles];

    if (!article) {
        notFound();
    }

    return (
        <main className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-purple-900 selection:text-white">
            <Navbar />

            <article className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <Link href="/blog" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-8 font-medium">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Volver al Blog
                    </Link>

                    <div className="mb-10">
                        <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                            <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full border border-purple-500/20">{article.category}</span>
                            <span>{article.date}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                            {article.title}
                        </h1>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-slate-300 prose-a:text-purple-400 hover:prose-a:text-purple-300 prose-strong:text-white border-t border-white/10 pt-10">
                        {/* Dangerous HTML rendering for mock content - in real app use a sanitizer or MDX */}
                        <div dangerouslySetInnerHTML={{ __html: article.content }} />
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
