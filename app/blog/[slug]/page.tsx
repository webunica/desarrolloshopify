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
        title: "Mejores Pasarelas de Pago y Couriers para Shopify en Chile",
        content: `
            <p class="lead text-xl text-slate-300">Una tienda bonita no sirve de nada si no puedes cobrar ni entregar. En Chile, la "última milla" y el checkout son los puntos donde más ventas se caen.</p>
            
            <h2>Pasarelas de Pago: La Batalla de las Comisiones</h2>
            <p>Al 2025, las opciones se han consolidado. Aquí el desglose:</p>
            
            <h3>1. MercadoPago (El Líder Actual)</h3>
            <p>Es la opción más fácil de integrar. No requiere contratos complejos ni validaciones técnicas.</p>
            <ul>
                <li><strong>Comisión:</strong> Aprox 2.79% + IVA (Liberación en 14 días) o 2.99% + IVA (Al instante).</li>
                <li><strong>Ventaja:</strong> UX increíble, guarda tarjetas, alta tasa de aprobación.</li>
            </ul>

            <h3>2. Webpay Plus (Vía Integradores)</h3>
            <p>Directo con Transbank suele ser engorroso tecnológicamente para Shopify. Lo ideal es usar integradores como <strong>Pago Fácil</strong> o la nueva app nativa si está disponible.</p>
            <ul>
                <li><strong>Ventaja:</strong> "Es Webpay", la marca genera confianza inmediata en el comprador chileno mayor de 40 años.</li>
            </ul>

            <h3>3. Fintoc (Pagos con Transferencia)</h3>
            <p>La revolución de las transferencias simplificadas. Te ahorras la comisión de tarjeta de crédito.</p>
            <ul>
                <li><strong>Comisión:</strong> Mucho más baja (a veces tarifa fija por transacción).</li>
                <li><strong>Ideal para:</strong> Tickets altos donde la comisión porcentual duele.</li>
            </ul>

            <h2>Logística: ¿Cómo envío a Arica y Punta Arenas?</h2>
            
            <h3>La "Vieja Escuela": Contrato directo</h3>
            <p>Tener cuenta en Chilexpress o Starken. Te dan mejores tarifas si tienes volumen, pero integrarlos a la web para que calculen el precio al cliente es difícil.</p>

            <h3>La Solución Moderna: Multi-Couriers (Aggregators)</h3>
            <p>Apps como <strong>Envíame</strong> o <strong>Shipit</strong> son el estándar.</p>
            <ul>
                <li>Se conectan a tu Shopify.</li>
                <li>En el checkout, el cliente pone su dirección y la app le muestra: "Starken: $4.000, BlueExpress: $3.500".</li>
                <li>Tú imprimes la etiqueta desde un panel único.</li>
            </ul>

            <p class="bg-slate-900 p-4 border-l-4 border-purple-500 my-6"><strong>Consejo Pro:</strong> Usa <strong>BlueExpress</strong> para cobertura nacional económica y <strong>99Minutos</strong> o apps de última milla para "Same Day Delivery" en Santiago.</p>
        `,
        date: "24 Ene, 2026",
        category: "Pagos y Logística"
    },
    "shopify-vs-woocommerce-jumpseller": {
        title: "Shopify vs Jumpseller vs WooCommerce: Análisis 2026",
        content: `
            <p class="lead text-xl text-slate-300">La eterna pregunta del emprendedor chileno. ¿Apoyo al software local (Jumpseller), me voy por la libertad total (WooCommerce) o elijo al gigante global (Shopify)?</p>

            <h2>1. Jumpseller (La Opción Local)</h2>
            <p>Una plataforma chilena/portuguesa muy popular.</p>
            <ul>
                <li><strong>Pros:</strong> Integraciones locales nativas impecables (Facturación, couriers). Soporte en español real. Precios en pesos chilenos y accesibles.</li>
                <li><strong>Contras:</strong> El editor de diseño es más limitado. Menos apps externas. Si quieres crecer globalmente, se queda corto.</li>
            </ul>

            <h2>2. WooCommerce (Wordpress)</h2>
            <p>El rey del "hazlo tú mismo". Software libre.</p>
            <ul>
                <li><strong>Pros:</strong> "Gratis" (solo pagas hosting). Control total del código.</li>
                <li><strong>Contras:</strong> <strong>Falso gratis</strong>. Tienes que pagar buen hosting, plugins de seguridad, actualizaciones manuales. Es muy fácil que el sitio se caiga o se infecte si no tienes mantenimiento técnico.</li>
            </ul>

            <h2>3. Shopify (El Estándar Global)</h2>
            <p>Software as a Service (SaaS). Pagas arriendo por tecnología de punta.</p>
            <ul>
                <li><strong>Pros:</strong> No se cae nunca. Checkout optimizado para vender (el mejor del mundo). Miles de apps.</li>
                <li><strong>Contras:</strong> Costo mensual en dólares. Comisiones por transacción si no usas su pasarela propia.</li>
            </ul>

            <h2>Veredicto Final</h2>
            <p>Si eres un negocio pequeño con presupuesto ajustado y foco 100% Chile: <strong>Jumpseller</strong> es un excelente inicio.</p>
            <p>Si eres una marca que busca escalar, invertir en marketing y quiere delegar la parte técnica para enfocarse en vender: <strong>Shopify</strong> es el camino indiscutido.</p>
            <p>Evita <strong>WooCommerce</strong> a menos que tengas un equipo de TI dedicado.</p>
        `,
        date: "22 Ene, 2026",
        category: "Comparativa"
    },
    "velocidad-shopify-chile": {
        title: "10 Trucos para mejorar la velocidad de tu tienda",
        content: `
            <p class="lead text-xl text-slate-300">Amazon descubrió que por cada 100ms de retraso, las ventas caen un 1%. En Shopify, la velocidad es dinero.</p>

            <h2>1. Comprime tus Imágenes (Vital)</h2>
            <p>El error #1. Subir fotos de producto de 4MB directas de la cámara. Shopify optimiza, pero no hace milagros.</p>
            <p><strong>Solución:</strong> Pasa todo por TinyPNG o usa apps como <strong>Crush.pics</strong> antes de subir. Intenta que ningún banner pese más de 200KB.</p>

            <h2>2. Cuidado con las Apps</h2>
            <p>Cada app que instalas agrega código Javascript a tu tienda (` + "`" + `bloat` + "`" + `). Esas apps de "ruleta de descuentos" o "lentejuelas cayendo" están matando tu velocidad.</p>
            <p><strong>Acción:</strong> Audita tus apps y borra las que no uses. El código a veces queda "sucio" en los archivos del tema, requiere limpieza.</p>

            <h2>3. Usa un Tema 2.0 (Dawn)</h2>
            <p>Los temas antiguos de Shopify eran lentos. La nueva arquitectura "Online Store 2.0" (como el tema Dawn gratuito) es extremadamente rápida y usa JSON templates.</p>

            <h2>4. Lazy Loading</h2>
            <p>Técnica donde las imágenes de abajo no cargan hasta que el usuario hace scroll. Los temas modernos lo traen por defecto. Asegúrate de que tu imagen principal (LCP) NO tenga lazy loading, esa debe cargar de inmediato.</p>

            <h2>5. Videos: Siempre hosteados fuera</h2>
            <p>Nunca subas un video MP4 pesado al banner. Usa la integración nativa de YouTube o Vimeo, o usa GIFs/WebM muy comprimidos de menos de 2MB.</p>

            <p class="my-6"><strong>¿Tu tienda sigue lenta?</strong> A veces el problema es código residual. En <a href="/contacto" class="text-purple-400 font-bold">DesarrolloShopify.cl</a> hacemos auditorías de performance técnica.</p>
        `,
        date: "20 Ene, 2026",
        category: "Optimización"
    }
};

type Props = {
    params: Promise<{ slug: string }>
};

export async function generateStaticParams() {
    return Object.keys(articles).map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
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

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const article = articles[slug as keyof typeof articles];

    if (!article) {
        notFound();
    }

    return (
        <main className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-purple-900 selection:text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": article.title,
                        "datePublished": article.date, // Note: Ideally retrieve ISO date from CMS
                        "author": {
                            "@type": "Organization",
                            "name": "DesarrolloShopify.cl"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "DesarrolloShopify.cl",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://desarrolloweb.cl/og-image.png"
                            }
                        }
                    })
                }}
            />
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
