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

import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export const dynamic = "force-dynamic"; // Ensure we get fresh data

export default async function BlogPage() {
    const articles = await prisma.article.findMany({
        orderBy: { publishedAt: "desc" },
    });
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
                        {articles.length === 0 && (
                            <div className="col-span-full text-center py-20 text-slate-500">
                                <p>No hay artículos publicados aún.</p>
                            </div>
                        )}
                        {articles.map((article) => (
                            <Link href={`/blog/${article.slug}`} key={article.id} className="group flex flex-col h-full">
                                <article className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 h-full hover:bg-slate-900 hover:border-purple-500/30 transition-all duration-300 flex flex-col">
                                    <div className="mb-6 aspect-video bg-slate-800 rounded-xl overflow-hidden relative">
                                        {article.imageUrl ? (
                                            <img
                                                src={article.imageUrl}
                                                alt={article.title}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-slate-600">
                                                Sin Imagen
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
                                        <div className="absolute bottom-4 left-4 bg-slate-950/80 px-3 py-1 rounded-full text-xs font-medium text-white backdrop-blur-sm border border-white/10">
                                            {article.category}
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 text-slate-500 text-sm mb-3">
                                            <span>{format(article.publishedAt || article.createdAt, "d MMM, yyyy", { locale: es })}</span>
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
