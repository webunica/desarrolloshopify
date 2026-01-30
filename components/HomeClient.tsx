"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, BarChart3, Rocket, CheckCircle2, Star, Smartphone, CreditCard, LayoutTemplate, Code2, ShieldCheck, Zap } from "lucide-react";
import { CodeLeftRain } from "@/components/CodeLeftRain";
import { ShopifyInfoTabs } from "@/components/ShopifyInfoTabs";
import { Navbar } from "@/components/Navbar";
import { TechMarquee } from "@/components/TechMarquee";
import { DesignCarousel } from "@/components/DesignCarousel";
import { AgenciasSection } from "@/components/AgenciasSection";

interface CMSSection {
    id: string;
    component: string;
    content: any;
    order: number;
    isVisible: boolean;
}

export default function HomeClient({ sections = [], latestArticles = [] }: { sections?: CMSSection[], latestArticles?: any[] }) {
    const isEnabled = (compName: string) => {
        if (sections.length === 0) return true;
        const section = sections.find(s => s.component === compName);
        return section?.isVisible ?? false;
    };

    return (
        <main className="min-h-screen bg-background relative text-foreground">
            <Navbar />

            {isEnabled("CodeLeftRain") && (
                <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background bg-grid-pattern">
                    <CodeLeftRain />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-transparent to-transparent z-0 pointer-events-none" />

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-semibold text-indigo-300 mb-8 backdrop-blur-md shadow-sm">
                            <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                            Shopify Partners
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 text-foreground drop-shadow-sm max-w-5xl mx-auto leading-tight">
                            <span className="gradient-text">Desarrollo y Diseño</span> de Tiendas Shopify en Chile
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                            Llevamos tu negocio al siguiente nivel con un E-commerce diseñado para vender. Resultados medibles y tiendas optimizadas.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm font-semibold text-muted-foreground">
                            <div className="flex items-center gap-2 bg-secondary/30 px-4 py-2 rounded-full border border-border shadow-sm hover:border-primary/50 transition-colors">
                                <CheckCircle2 className="w-4 h-4 text-green-500" /> Integración Transbank & MercadoPago
                            </div>
                            <div className="flex items-center gap-2 bg-secondary/30 px-4 py-2 rounded-full border border-border shadow-sm hover:border-primary/50 transition-colors">
                                <CheckCircle2 className="w-4 h-4 text-green-500" /> Autoadministrable 100%
                            </div>
                            <div className="flex items-center gap-2 bg-secondary/30 px-4 py-2 rounded-full border border-border shadow-sm hover:border-primary/50 transition-colors">
                                <CheckCircle2 className="w-4 h-4 text-green-500" /> Personalización de Diseño Única
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                            <Link href="/iniciar">
                                <Button size="lg" className="h-14 px-8 text-lg bg-white text-slate-950 hover:bg-slate-200 rounded-full shadow-lg shadow-white/10 hover:shadow-xl hover:-translate-y-0.5 transition-all font-bold">
                                    Cotizar mi Tienda (Gratis)
                                </Button>
                            </Link>
                            <Link href="#portfolio">
                                <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-2 border-border bg-transparent hover:border-primary hover:bg-secondary/50 text-foreground rounded-full shadow-sm font-semibold transition-all">
                                    Ver Tiendas Realizadas
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            <section id="partners" className="border-y border-border bg-background">
                <TechMarquee />
            </section>

            <section id="servicios" className="py-24 relative overflow-hidden">
                {/* Background Parallax */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: "url('/uploads/graphic-designers-meeting-2.webp')" }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">¿Por qué elegirnos?</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
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
                            <Button variant="outline" className="border-border text-foreground hover:bg-secondary hover:text-primary font-bold transition-all">
                                Ver todos los servicios <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section id="portfolio" className="pt-[66px] pb-32 bg-background text-foreground overflow-hidden">
                <DesignCarousel />
                <div className="mt-12 text-center">
                    <Link href="/portafolio">
                        <Button variant="outline" className="border-border text-foreground hover:bg-secondary hover:text-primary font-bold transition-all">
                            Ver todo el portafolio <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </section>

            <section id="personalizacion" className="py-24 bg-background border-t border-border relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent z-0 pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <div className="inline-flex items-center rounded-full border border-[#95bf47]/30 bg-[#95bf47]/10 px-4 py-1.5 text-sm font-semibold text-[#95bf47] mb-6">
                                <span className="mr-2">⚡</span> Código Liquid a Medida
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                                Más allá de las plantillas. <br />
                                <span className="gradient-text">Personalización total.</span>
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                No nos limitamos a lo que ofrece el tema por defecto. Escribimos código <strong>Liquid, HTML, CSS y JS</strong> personalizado para crear funcionalidades únicas que tu competencia no tiene.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/30 transition-colors">
                                    <div className="bg-[#95bf47]/20 p-2 rounded-lg text-[#95bf47]">
                                        <LayoutTemplate className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-foreground font-bold mb-1">Secciones Exclusivas</h3>
                                        <p className="text-sm text-muted-foreground">Creamos bloques y secciones modulares que se adaptan 100% a tu identidad de marca.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/30 transition-colors">
                                    <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                                        <Rocket className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-foreground font-bold mb-1">Optimización de Velocidad</h3>
                                        <p className="text-sm text-muted-foreground">Limpiamos código innecesario para lograr puntuaciones 90+ en Google PageSpeed.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4 mt-8">
                                <Link href="/agencias">
                                    <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 hover:text-foreground transition-colors gap-2">
                                        ¿Eres Agencia? <span className="text-xs bg-primary/20 px-2 py-0.5 rounded text-primary">Partnership</span>
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
                            <div className="relative rounded-2xl bg-[#1e1e1e] border border-white/10 shadow-2xl overflow-hidden aspect-square md:aspect-[4/3] group dark:border-white/10 border-slate-200">
                                WARNING: Forcing dark mode editor look but maybe we want light mode editor too? Keeping it dark code editor style is usually fine even in light mode.
                                <div className="flex items-center gap-2 px-4 py-3 bg-[#252526] border-b border-white/5">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                    <div className="ml-4 text-xs text-slate-500 font-mono">product-template.liquid</div>
                                </div>
                                <div className="p-6 font-mono text-xs md:text-sm overflow-hidden text-slate-400 space-y-2">
                                    <div className="flex gap-2">
                                        <span className="text-[#95bf47]">if</span>
                                        <span className="text-blue-300">(product.available)</span>
                                        <span className="text-[#95bf47]">{`{`}</span>
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-[#95bf47]">return</span>
                                        <span className="text-green-300"> (</span>
                                    </div>
                                    <div className="pl-8 text-green-400"> {`<div className="custom-cart-btn">`} </div>
                                    <div className="pl-12 text-white"> Añadir al Carrito ✨ </div>
                                    <div className="pl-8 text-green-400"> {`</div>`} </div>
                                    <div className="pl-4 text-green-300"> ) </div>
                                    <div className="text-[#95bf47]"> {`}`} </div>
                                    <div className="mt-4 text-slate-500 italic"> // Estilos personalizados </div>
                                    <div className="text-blue-300 bg-white/5 p-2 rounded">
                                        .custom-btn {`{`} <br />
                                        &nbsp;&nbsp;background: #6366f1; <br />
                                        {`}`}
                                    </div>
                                </div>
                                <div className="absolute bottom-6 right-6 bg-[#95bf47] text-white px-4 py-2 rounded-lg shadow-lg text-xs font-bold flex items-center gap-2 animate-bounce">
                                    <CheckCircle2 className="w-4 h-4" /> 100% Custom
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="metodo" className="py-24 bg-background/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-900/20 to-transparent pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="mb-16">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Nuestro Proceso Colaborativo</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Método de 3 Pasos</h2>
                        <p className="text-muted-foreground max-w-2xl text-lg">
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





            <section id="testimonios" className="py-24 bg-background/50 text-foreground relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Lo que dicen nuestros clientes</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-secondary/30 p-8 rounded-2xl border border-border relative shadow-lg">
                            <div className="text-5xl text-primary/30 absolute top-4 right-6 font-serif select-none">"</div>
                            <p className="text-muted-foreground mb-6 relative z-10 italic font-medium leading-relaxed">"Increíble trabajo. Nuestra tasa de conversión se duplicó en el primer mes de lanzamiento."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center text-white font-bold text-sm">C</div>
                                <div><p className="font-bold text-foreground text-sm">Carlos M.</p><p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">CEO, FashionShoes</p></div>
                            </div>
                        </div>
                        <div className="bg-secondary/30 p-8 rounded-2xl border border-border relative shadow-lg">
                            <div className="text-5xl text-purple-500/30 absolute top-4 right-6 font-serif select-none">"</div>
                            <p className="text-muted-foreground mb-6 relative z-10 italic font-medium leading-relaxed">"Entendieron perfectamente la estética que buscábamos. Soporte 10/10."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">A</div>
                                <div><p className="font-bold text-foreground text-sm">Andrea R.</p><p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Marketing, OrganicFood</p></div>
                            </div>
                        </div>
                        <div className="bg-secondary/30 p-8 rounded-2xl border border-border relative shadow-lg">
                            <div className="text-5xl text-purple-500/30 absolute top-4 right-6 font-serif select-none">"</div>
                            <p className="text-muted-foreground mb-6 relative z-10 italic font-medium leading-relaxed">"La migración de WooCommerce a Shopify fue transparente y sin perder datos. Un alivio."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">F</div>
                                <div><p className="font-bold text-foreground text-sm">Felipe S.</p><p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Fundador, TechGear</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="py-32 bg-background border-t border-border relative overflow-hidden">
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
                            <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 hover:text-[#95bf47] font-bold hidden md:flex">

                                Ver todos los artículos <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>

                    <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:px-0 md:overflow-visible">
                        {latestArticles.map((article: any) => (
                            <Link href={`/blog/${article.slug}`} key={article.id} className="min-w-[300px] md:min-w-0 snap-center group flex flex-col h-full">
                                <article className="bg-secondary/20 border border-border rounded-2xl p-6 h-full hover:bg-secondary/40 hover:border-primary/30 transition-all duration-300 flex flex-col">
                                    <div className="mb-6 aspect-video rounded-xl overflow-hidden relative">
                                        <img
                                            src={article.imageUrl || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"}
                                            alt={article.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute top-3 left-3 bg-background/80 px-3 py-1 rounded-full text-xs font-medium text-foreground backdrop-blur-sm border border-border">
                                            {article.category}
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 text-muted-foreground text-sm mb-3">
                                            <span>{new Date(article.publishedAt || article.createdAt).toLocaleDateString("es-CL", { day: "numeric", month: "short", year: "numeric" })}</span>
                                            <span className="w-1 h-1 bg-border rounded-full"></span>
                                            <span>5 min</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                                            {article.excerpt || "Haga clic para leer el artículo completo..."}
                                        </p>
                                    </div>

                                    <div className="flex items-center text-primary text-sm font-medium mt-auto group-hover:translate-x-1 transition-transform">
                                        Leer artículo <ArrowRight className="w-4 h-4 ml-2" />
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {isEnabled("ShopifyInfoTabs") && (
                <ShopifyInfoTabs />
            )}

            <AgenciasSection />

            <footer className="py-12 border-t border-border bg-background text-center text-muted-foreground text-sm">
                <p>© {new Date().getFullYear()} Desarrolloshopify.cl. Todos los derechos reservados.</p>
                <p className="mt-2">Santiago, Chile.</p>
            </footer>
        </main>
    );
}

function FeatureCard({ number, title, desc }: { number: string, title: string, desc: string }) {
    return (
        <div className="p-8 rounded-2xl bg-secondary/30 border border-border shadow-sm hover:border-primary/30 transition-all text-left group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-foreground group-hover:text-primary transition-colors pointer-events-none select-none">
                {number}
            </div>
            <div className="mb-6 text-4xl font-bold text-muted-foreground group-hover:text-primary transition-colors relative z-10">
                {number}
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground relative z-10">{title}</h3>
            <p className="text-muted-foreground leading-relaxed font-medium relative z-10">{desc}</p>
        </div>
    );
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="p-6 rounded-2xl bg-secondary/30 border border-border shadow-sm hover:shadow-lg hover:border-primary/20 transition-all group">
            <div className="mb-4 bg-secondary/50 p-3 rounded-xl w-fit shadow-sm border border-border group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                {icon}
            </div>
            <h3 className="font-bold text-lg mb-2 text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground font-medium leading-relaxed">{desc}</p>
        </div>
    );
}
