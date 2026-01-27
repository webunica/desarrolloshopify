import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { AgenciasSection } from "@/components/AgenciasSection";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Blog Shopify Chile | Guías, Tips y Estrategias E-commerce",
    description: "Aprende a vender más con nuestros artículos expertos sobre Shopify, pagos online, logística y marketing digital en Chile.",
};

const articles = [
    {
        title: "Guía Definitiva: Vender con Shopify en Chile (2025)",
        excerpt: "Todo lo que necesitas saber sobre impuestos, envíos y pagos para montar tu tienda online legal y operativa.",
        category: "Guía Completa",
        slug: "guia-shopify-chile",
        date: "25 Ene, 2026",
        img: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Mejores Pasarelas de Pago y Couriers",
        excerpt: "Comparativa de Webpay, MercadoPago, Starken y BlueExpress. Comisiones, tiempos de abono y cobertura.",
        category: "Pagos y Logística",
        slug: "pagos-logistica-shopify-chile",
        date: "24 Ene, 2026",
        img: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Shopify vs Jumpseller vs WooCommerce",
        excerpt: "Análisis honesto de pros y contras para emprendedores chilenos. ¿Cuál te conviene más?",
        category: "Comparativa",
        slug: "shopify-vs-woocommerce-jumpseller",
        date: "22 Ene, 2026",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "10 Trucos para mejorar la velocidad de tu tienda",
        excerpt: "Optimiza imágenes, scripts y apps para lograr un Core Web Vitals en verde y mejorar tu SEO.",
        category: "Optimización",
        slug: "velocidad-shopify-chile",
        date: "20 Ene, 2026",
        img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Caso de Éxito: Cómo EcoStore aumentó sus ventas un 300%",
        excerpt: "De 2 millones a 8 millones mensuales. Analizamos la estrategia de migración y optimización CRO.",
        category: "Caso de Éxito",
        slug: "caso-exito-ecostore",
        date: "18 Ene, 2026",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    }
];

export default function BlogPage() {
    return (
        <main className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-purple-900 selection:text-white">
            <Navbar />

            <section className="pt-40 pb-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="max-w-3xl mb-16">
                        <span className="text-purple-400 font-medium tracking-tight mb-4 block">
                            Recursos & Conocimiento
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                            Blog de E-commerce
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            Guías tácticas, tutoriales técnicos y estrategias probadas para escalar tu tienda Shopify en el mercado chileno.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, i) => (
                            <Link href={`/blog/${article.slug}`} key={i} className="group flex flex-col h-full">
                                <article className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 h-full hover:bg-slate-900 hover:border-purple-500/30 transition-all duration-300 flex flex-col">
                                    <div className="mb-6 aspect-video bg-slate-800 rounded-xl overflow-hidden relative">
                                        <img
                                            src={article.img}
                                            alt={article.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
                                        <div className="absolute bottom-4 left-4 bg-slate-950/80 px-3 py-1 rounded-full text-xs font-medium text-white backdrop-blur-sm border border-white/10">
                                            {article.category}
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 text-slate-500 text-sm mb-3">
                                            <span>{article.date}</span>
                                            <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                                            <span>5 min lectura</span>
                                        </div>
                                        <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                                            {article.title}
                                        </h2>
                                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                            {article.excerpt}
                                        </p>
                                    </div>

                                    <div className="flex items-center text-purple-400 text-sm font-medium mt-auto group-hover:translate-x-1 transition-transform">
                                        Leer artículo <ArrowRight className="w-4 h-4 ml-2" />
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <AgenciasSection />
            <Footer />
        </main>
    );
}
