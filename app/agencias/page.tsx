"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Users, Zap, ShieldCheck } from "lucide-react";
import { BackgroundBubble } from "@/components/BackgroundBubble";

export default function AgenciasPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-white selection:bg-purple-500/30 selection:text-purple-200 relative overflow-hidden">
            <BackgroundBubble />
            {/* Navbar (Simplified for subpage) */}
            <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity">
                        DesarrolloShopify.cl
                    </Link>
                    <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
                        <Link href="/#metodo" className="hover:text-purple-400 transition-colors">Método</Link>
                        <Link href="/#servicios" className="hover:text-purple-400 transition-colors">Servicios</Link>
                    </div>
                    <Link href="/iniciar">
                        <Button variant="default" size="sm" className="bg-white text-slate-950 hover:bg-slate-200 shadow-md font-bold">
                            Iniciar Proyecto
                        </Button>
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-950 bg-grid-pattern">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-transparent to-transparent z-0 pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-semibold text-purple-300 mb-8 backdrop-blur-md">
                        <span className="mr-2">🤝</span> Partnership B2B
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-white">
                        Tu Partner Técnico <br />
                        <span className="gradient-text">Shopify White-Label</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Escala tu agencia de marketing o diseño delegando el desarrollo complejo. Entregamos tiendas Shopify pixel-perfect, rápidas y funcionales bajo tu marca.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                        <Link href="https://wa.me/56984410379">
                            <Button size="lg" className="h-14 px-8 text-lg bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg hover:shadow-purple-500/20 font-bold transition-all">
                                Agendar Reunión Partner
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-24 bg-slate-900/50 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors">
                            <div className="bg-purple-500/10 w-fit p-3 rounded-xl mb-6 text-purple-400">
                                <Code2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Código Limpio & Custom</h3>
                            <p className="text-slate-400 leading-relaxed">
                                No usamos page builders pesados. Desarrollamos temas optimizados y secciones personalizadas con Liquid.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors">
                            <div className="bg-blue-500/10 w-fit p-3 rounded-xl mb-6 text-blue-400">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Marca Blanca (White Label)</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Trabajamos como una extensión invisible de tu equipo. Tú hablas con el cliente, nosotros hacemos la magia técnica.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors">
                            <div className="bg-green-500/10 w-fit p-3 rounded-xl mb-6 text-green-400">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Velocidad de Entrega</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Sistemas estandarizados que nos permiten lanzar tiendas en tiempos récord sin sacrificar calidad.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-slate-950 text-center text-slate-500 text-sm border-t border-white/5">
                <p>© {new Date().getFullYear()} Desarrolloshopify.cl. Todos los derechos reservados.</p>
            </footer>
        </main>
    );
}

// Reusing style utilities from globals.css mainly (bg-grid-pattern, gradient-text)
