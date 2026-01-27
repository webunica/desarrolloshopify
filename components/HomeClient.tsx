"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, BarChart3, Rocket, CheckCircle2, Star, Smartphone, CreditCard, LayoutTemplate, Code2, ShieldCheck, Zap } from "lucide-react";
import { CodeLeftRain } from "@/components/CodeLeftRain";
import { ShopifyInfoTabs } from "@/components/ShopifyInfoTabs";
import { Navbar } from "@/components/Navbar";
import { TechMarquee } from "@/components/TechMarquee";
import { DesignCarousel } from "@/components/DesignCarousel";

interface CMSSection {
    id: string;
    component: string;
    content: any;
    order: number;
    isVisible: boolean;
}

export default function HomeClient({ sections = [] }: { sections?: CMSSection[] }) {
    const isEnabled = (compName: string) => {
        if (sections.length === 0) return true;
        const section = sections.find(s => s.component === compName);
        return section?.isVisible ?? false;
    };

    return (
        <main className="min-h-screen bg-transparent relative">
            <Navbar />

            {isEnabled("CodeLeftRain") && (
                <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-950 bg-grid-pattern">
                    <CodeLeftRain />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-transparent to-transparent z-0 pointer-events-none" />

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-semibold text-indigo-300 mb-8 backdrop-blur-md shadow-sm">
                            <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                            Shopify Partners
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 text-white drop-shadow-sm max-w-5xl mx-auto leading-tight">
                            <span className="gradient-text">Desarrollo y Diseño</span> de Tiendas Shopify en Chile
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                            Llevamos tu negocio al siguiente nivel con un E-commerce diseñado para vender. Resultados medibles y tiendas optimizadas.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm font-semibold text-slate-300">
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 shadow-sm hover:border-purple-500/50 transition-colors">
                                <CheckCircle2 className="w-4 h-4 text-green-400" /> Integración Transbank & MercadoPago
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 shadow-sm hover:border-purple-500/50 transition-colors">
                                <CheckCircle2 className="w-4 h-4 text-green-400" /> Autoadministrable 100%
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 shadow-sm hover:border-purple-500/50 transition-colors">
                                <CheckCircle2 className="w-4 h-4 text-green-400" /> Personalización de Diseño Única
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                            <Link href="/iniciar">
                                <Button size="lg" className="h-14 px-8 text-lg bg-white text-slate-950 hover:bg-slate-200 rounded-full shadow-lg shadow-white/10 hover:shadow-xl hover:-translate-y-0.5 transition-all font-bold">
                                    Cotizar mi Tienda (Gratis)
                                </Button>
                            </Link>
                            <Link href="#portfolio">
                                <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-2 border-white/10 bg-transparent hover:border-white/20 hover:bg-white/5 text-white rounded-full shadow-sm font-semibold transition-all">
                                    Ver Tiendas Realizadas
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            <section id="partners" className="border-y border-slate-900 bg-slate-950">
                <TechMarquee />
            </section>

            <section id="servicios" className="py-24 relative overflow-hidden">
                {/* Background Parallax */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: "url('/uploads/graphic-designers-meeting-2.webp')" }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">¿Por qué elegirnos?</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            Entendemos el mercado chileno. No te entregamos solo una web, te entregamos un canal de ventas operativo.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ServiceCard
                            icon={<CreditCard className="w-6 h-6 text-green-400" />}
                            title="Vende en Pesos"
                            desc="Pasarelas locales listas (Webpay, Fintoc) para que el dinero llegue directo a tu cuenta bancaria."
                        />
                        <ServiceCard
                            icon={<Rocket className="w-6 h-6 text-purple-400" />}
                            title="Envíos Automáticos"
                            desc="Conecta con Starken, Chilexpress o BlueExpress y olvida las planillas y etiquetas manuales."
                        />
                        <ServiceCard
                            icon={<CheckCircle2 className="w-6 h-6 text-blue-400" />}
                            title="Facturación SII"
                            desc="Integraciones sugeridas para emitir boletas y facturas electrónicas automáticamente."
                        />
                        <ServiceCard
                            icon={<BarChart3 className="w-6 h-6 text-orange-400" />}
                            title="Diseño UX/UI"
                            desc="No usamos plantillas básicas; adaptamos la experiencia visual para generar confianza."
                        />
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/servicios">
                            <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 hover:text-purple-400 font-bold transition-all">
                                Ver todos los servicios <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section id="portfolio" className="pt-[66px] pb-32 bg-slate-950 text-white overflow-hidden">
                <DesignCarousel />
                <div className="mt-12 text-center">
                    <Link href="/portafolio">
                        <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 hover:text-purple-400 font-bold transition-all">
                            Ver todo el portafolio <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </section>

            <section id="personalizacion" className="py-24 bg-slate-950 border-t border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent z-0 pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-semibold text-purple-300 mb-6">
                                <span className="mr-2">⚡</span> Código Liquid a Medida
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                                Más allá de las plantillas. <br />
                                <span className="gradient-text">Personalización total.</span>
                            </h2>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                No nos limitamos a lo que ofrece el tema por defecto. Escribimos código <strong>Liquid, HTML, CSS y JS</strong> personalizado para crear funcionalidades únicas que tu competencia no tiene.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors">
                                    <div className="bg-purple-500/20 p-2 rounded-lg text-purple-400">
                                        <LayoutTemplate className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Secciones Exclusivas</h4>
                                        <p className="text-sm text-slate-400">Creamos bloques y secciones modulares que se adaptan 100% a tu identidad de marca.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors">
                                    <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                                        <Rocket className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Optimización de Velocidad</h4>
                                        <p className="text-sm text-slate-400">Limpiamos código innecesario para lograr puntuaciones 90+ en Google PageSpeed.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4 mt-8">
                                <Link href="/agencias">
                                    <Button variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:text-white transition-colors gap-2">
                                        ¿Eres Agencia? <span className="text-xs bg-purple-500/20 px-2 py-0.5 rounded text-purple-200">Partnership</span>
                                    </Button>
                                </Link>
                                <Link href="/iniciar?type=custom">
                                    <Button className="bg-white text-slate-950 hover:bg-slate-200 font-bold">
                                        Quiero personalizar mi plantilla
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="flex-1 w-full relative">
                            <div className="relative rounded-2xl bg-[#1e1e1e] border border-white/10 shadow-2xl overflow-hidden aspect-square md:aspect-[4/3] group">
                                <div className="flex items-center gap-2 px-4 py-3 bg-[#252526] border-b border-white/5">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                    <div className="ml-4 text-xs text-slate-500 font-mono">product-template.liquid</div>
                                </div>
                                <div className="p-6 font-mono text-xs md:text-sm overflow-hidden text-slate-400 space-y-2">
                                    <div className="flex gap-2">
                                        <span className="text-purple-400">if</span>
                                        <span className="text-blue-300">(product.available)</span>
                                        <span className="text-purple-400">{`{`}</span>
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-purple-400">return</span>
                                        <span className="text-green-300"> (</span>
                                    </div>
                                    <div className="pl-8 text-green-400"> {`<div className="custom-cart-btn">`} </div>
                                    <div className="pl-12 text-white"> Añadir al Carrito ✨ </div>
                                    <div className="pl-8 text-green-400"> {`</div>`} </div>
                                    <div className="pl-4 text-green-300"> ) </div>
                                    <div className="text-purple-400"> {`}`} </div>
                                    <div className="mt-4 text-slate-500 italic"> // Estilos personalizados </div>
                                    <div className="text-blue-300 bg-white/5 p-2 rounded">
                                        .custom-btn {`{`} <br />
                                        &nbsp;&nbsp;background: #6366f1; <br />
                                        {`}`}
                                    </div>
                                </div>
                                <div className="absolute bottom-6 right-6 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg text-xs font-bold flex items-center gap-2 animate-bounce">
                                    <CheckCircle2 className="w-4 h-4" /> 100% Custom
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="metodo" className="py-24 bg-slate-900/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-900/20 to-transparent pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="mb-16">
                        <span className="text-purple-400 font-bold tracking-wider uppercase text-sm mb-2 block">Nuestro Proceso Colaborativo</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Método de 3 Pasos</h2>
                        <p className="text-slate-400 max-w-2xl text-lg">
                            Te involucramos en cada etapa. No somos una caja negra; co-creamos tu éxito digital contigo.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <FeatureCard
                            number="01"
                            title="Co-Diseño & Estrategia"
                            desc="Nos reunimos contigo para definir objetivos. Diseñamos la experiencia (UX/UI) en adobe XD y validamos cada pantalla contigo antes de programar."
                        />
                        <FeatureCard
                            number="02"
                            title="Desarrollo Transparente"
                            desc="Construimos tu tienda dándote acceso al entorno de desarrollo (preview). Podrás ver el avance en tiempo real y aportar feedback directo."
                        />
                        <FeatureCard
                            number="03"
                            title="Lanzamiento & Capacitación"
                            desc="No solo te entregamos la tienda; te enseñamos a usarla. Capacitamos a tu equipo y te acompañamos durante el lanzamiento oficial."
                        />
                    </div>

                    <div className="text-center">
                        <Link href="https://wa.me/56966198752" target="_blank">
                            <Button size="lg" className="h-14 px-8 text-lg bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-green-500/20 font-bold transition-all">
                                Conversar por WhatsApp <span className="ml-2 text-xl">💬</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>





            <section id="testimonios" className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Lo que dicen nuestros clientes</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-white/5 relative shadow-lg">
                            <div className="text-5xl text-purple-500/30 absolute top-4 right-6 font-serif select-none">"</div>
                            <p className="text-slate-300 mb-6 relative z-10 italic font-medium leading-relaxed">"Increíble trabajo. Nuestra tasa de conversión se duplicó en el primer mes de lanzamiento."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">C</div>
                                <div><p className="font-bold text-white text-sm">Carlos M.</p><p className="text-xs text-slate-400 font-medium uppercase tracking-wider">CEO, FashionShoes</p></div>
                            </div>
                        </div>
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-white/5 relative shadow-lg">
                            <div className="text-5xl text-purple-500/30 absolute top-4 right-6 font-serif select-none">"</div>
                            <p className="text-slate-300 mb-6 relative z-10 italic font-medium leading-relaxed">"Entendieron perfectamente la estética que buscábamos. Soporte 10/10."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">A</div>
                                <div><p className="font-bold text-white text-sm">Andrea R.</p><p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Marketing, OrganicFood</p></div>
                            </div>
                        </div>
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-white/5 relative shadow-lg">
                            <div className="text-5xl text-purple-500/30 absolute top-4 right-6 font-serif select-none">"</div>
                            <p className="text-slate-300 mb-6 relative z-10 italic font-medium leading-relaxed">"La migración de WooCommerce a Shopify fue transparente y sin perder datos. Un alivio."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">F</div>
                                <div><p className="font-bold text-white text-sm">Felipe S.</p><p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Fundador, TechGear</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="py-32 bg-slate-950 border-t border-white/5 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-2xl">
                            <span className="text-purple-400 font-medium tracking-tight mb-4 block">
                                Recursos 100% Gratuitos
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                                Blog de E-commerce
                            </h2>
                        </div>
                        <Link href="/blog">
                            <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 hover:text-purple-400 font-bold hidden md:flex">
                                Ver todos los artículos <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>

                    <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:px-0 md:overflow-visible">
                        {[
                            {
                                title: "Guía Definitiva: Vender con Shopify (2025)",
                                excerpt: "Todo lo que necesitas saber sobre impuestos, envíos y pagos.",
                                cat: "Guía Completa",
                                slug: "guia-shopify-chile",
                                date: "25 Ene, 2026",
                                img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop"
                            },
                            {
                                title: "Mejores Pasarelas de Pago en Chile",
                                excerpt: "Comparativa de Webpay, MercadoPago, Starken y BlueExpress.",
                                cat: "Pagos y Logística",
                                slug: "pagos-logistica-shopify-chile",
                                date: "24 Ene, 2026",
                                img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop"
                            },
                            {
                                title: "Shopify vs Jumpseller vs WooCommerce",
                                excerpt: "Análisis honesto de pros y contras para emprendedores chilenos.",
                                cat: "Comparativa",
                                slug: "shopify-vs-woocommerce-jumpseller",
                                date: "22 Ene, 2026",
                                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
                            },
                            {
                                title: "10 Trucos de Velocidad y SEO",
                                excerpt: "Optimiza imágenes, scripts y apps para mejorar tu SEO.",
                                cat: "Optimización",
                                slug: "velocidad-shopify-chile",
                                date: "20 Ene, 2026",
                                img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop"
                            }
                        ].map((article, i) => (
                            <Link href={`/blog/${article.slug}`} key={i} className="min-w-[300px] md:min-w-0 snap-center group flex flex-col h-full">
                                <article className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 h-full hover:bg-slate-900 hover:border-purple-500/30 transition-all duration-300 flex flex-col">
                                    <div className="mb-6 aspect-video rounded-xl overflow-hidden relative">
                                        <img src={article.img} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                        <div className="absolute top-3 left-3 bg-slate-950/80 px-3 py-1 rounded-full text-xs font-medium text-white backdrop-blur-sm border border-white/10">
                                            {article.cat}
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 text-slate-500 text-sm mb-3">
                                            <span>{article.date}</span>
                                            <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                                            <span>5 min</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                                            {article.title}
                                        </h3>
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
                    <div className="mt-8 text-center md:hidden">
                        <Link href="/blog">
                            <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 hover:text-purple-400 font-bold w-full">
                                Ver todos los artículos <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {
                isEnabled("ShopifyInfoTabs") && (
                    <ShopifyInfoTabs />
                )
            }

            <section id="agencias" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-950 bg-grid-pattern border-t border-white/10">
                <CodeLeftRain />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-transparent to-transparent z-0 pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-semibold text-purple-300 mb-8 backdrop-blur-md">
                        <span className="mr-2">🤝</span> Partnership B2B
                    </div>

                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 text-white">
                        Tu Partner Técnico <br />
                        <span className="gradient-text">Shopify White-Label</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
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

            <footer className="py-12 border-t border-white/5 bg-slate-950 text-center text-slate-500 text-sm">
                <p>© {new Date().getFullYear()} Desarrolloshopify.cl. Todos los derechos reservados.</p>
                <p className="mt-2">Santiago, Chile.</p>
            </footer>
        </main>
    );
}

function FeatureCard({ number, title, desc }: { number: string, title: string, desc: string }) {
    return (
        <div className="p-8 rounded-2xl bg-white/5 border border-white/5 shadow-sm hover:border-purple-500/30 transition-all text-left group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-white group-hover:text-purple-500 transition-colors pointer-events-none select-none">
                {number}
            </div>
            <div className="mb-6 text-4xl font-bold text-slate-200 group-hover:text-purple-400 transition-colors relative z-10">
                {number}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white relative z-10">{title}</h3>
            <p className="text-slate-400 leading-relaxed font-medium relative z-10">{desc}</p>
        </div>
    );
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="p-6 rounded-2xl bg-white/5 border border-white/5 shadow-sm hover:shadow-lg hover:border-purple-500/20 transition-all group">
            <div className="mb-4 bg-white/10 p-3 rounded-xl w-fit shadow-sm border border-white/10 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-300">
                {icon}
            </div>
            <h3 className="font-bold text-lg mb-2 text-white">{title}</h3>
            <p className="text-sm text-slate-400 font-medium leading-relaxed">{desc}</p>
        </div>
    )
}
