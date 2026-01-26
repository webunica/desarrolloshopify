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
            <p>Vender por internet en Chile ha crecido exponencialmente...</p>
            <h2>1. ¿Por qué Shopify?</h2>
            <p>Shopify se ha consolidado como la plataforma líder...</p>
            <h2>2. Pasarelas de Pago en Chile</h2>
            <p>Integrar Webpay, MercadoPago y otras es crucial...</p>
            <h3>Webpay Plus</h3>
            <p>La opción más clásica...</p>
            <h2>3. Logística y Envíos</h2>
            <p>Conectar con Starken o Chilexpress...</p>
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
