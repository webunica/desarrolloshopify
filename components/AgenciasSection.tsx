"use client";

import { Code2, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CodeLeftRain } from "@/components/CodeLeftRain";

export function AgenciasSection() {
    return (
        <section id="agencias" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background bg-grid-pattern border-t border-border">
            <CodeLeftRain />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-transparent to-transparent z-0 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-semibold text-purple-300 dark:text-purple-300 text-purple-600 mb-8 backdrop-blur-md">
                    <span className="mr-2">🤝</span> Partnership B2B
                </div>

                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 text-foreground">
                    Tu Partner Técnico <br />
                    <span className="gradient-text">Shopify White-Label</span>
                </h2>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
                    Escala tu agencia de marketing o diseño delegando el desarrollo complejo. Entregamos tiendas Shopify pixel-perfect, rápidas y funcionales bajo tu marca.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-24">
                    <Link href="https://wa.me/56966198752" target="_blank">
                        <Button size="lg" className="h-14 px-8 text-lg bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg hover:shadow-purple-500/20 font-bold transition-all">
                            Agendar Reunión Partner
                        </Button>
                    </Link>
                </div>

                {/* Agencias Benefits */}
                <div className="grid md:grid-cols-3 gap-8 text-left">
                    <div className="p-8 rounded-2xl bg-secondary/30 border border-border hover:border-purple-500/30 transition-colors">
                        <div className="bg-purple-500/10 w-fit p-3 rounded-xl mb-6 text-purple-600 dark:text-purple-400">
                            <Code2 className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">Código Limpio & Custom</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            No usamos page builders pesados. Desarrollamos temas optimizados y secciones personalizadas con Liquid.
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl bg-secondary/30 border border-border hover:border-purple-500/30 transition-colors">
                        <div className="bg-blue-500/10 w-fit p-3 rounded-xl mb-6 text-blue-600 dark:text-blue-400">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">Marca Blanca (White Label)</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Trabajamos como una extensión invisible de tu equipo. Tú hablas con el cliente, nosotros hacemos la magia técnica.
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl bg-secondary/30 border border-border hover:border-purple-500/30 transition-colors">
                        <div className="bg-green-500/10 w-fit p-3 rounded-xl mb-6 text-green-600 dark:text-green-400">
                            <Zap className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">Velocidad de Entrega</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Sistemas estandarizados que nos permiten lanzar tiendas en tiempos récord sin sacrificar calidad.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
