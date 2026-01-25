"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, BarChart3, Rocket, CheckCircle2, Star, Smartphone, CreditCard, LayoutTemplate, Code2, ShieldCheck, Zap } from "lucide-react";
import { CodeLeftRain } from "@/components/CodeLeftRain";
import { ShopifyInfoTabs } from "@/components/ShopifyInfoTabs";

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
            <nav className="fixed top-0 w-full z-50 glass-panel">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity">
                        DesarrolloShopify.cl
                    </Link>
                    <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
                        <Link href="/#inicio" className="hover:text-purple-400 transition-colors">Inicio</Link>
                        <Link href="/#metodo" className="hover:text-purple-400 transition-colors">Método</Link>
                        <Link href="/servicios" className="hover:text-purple-400 transition-colors">Servicios</Link>
                        <Link href="/portafolio" className="hover:text-purple-400 transition-colors">Portafolio</Link>
                        <Link href="/#agencias" className="hover:text-purple-400 transition-colors">Agencias</Link>
                        <Link href="/#info-detallada" className="hover:text-purple-400 transition-colors">Info</Link>
                    </div>
                    <Link href="/iniciar">
                        <Button variant="default" size="sm" className="bg-white text-slate-950 hover:bg-slate-200 shadow-md font-bold">
                            Iniciar Proyecto <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </nav>

            {isEnabled("CodeLeftRain") && (
                <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-950 bg-grid-pattern">
                    <CodeLeftRain />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-transparent to-transparent z-0 pointer-events-none" />

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-semibold text-indigo-300 mb-8 backdrop-blur-md shadow-sm">
                            <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                            Agencia Shopify Expert Parteners
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 text-white drop-shadow-sm max-w-5xl mx-auto leading-tight">
                            Agencia Experta en <span className="gradient-text">Desarrollo y Diseño</span> de Tiendas Shopify en Chile
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

            <section id="partners" className="py-10 border-y border-white/5 bg-slate-900/50">
                <div className="container mx-auto px-6">
                    <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
                        Tecnologías & Partners Integrados
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 filter text-slate-400 font-semibold">
                        <span className="flex items-center gap-2 text-xl hover:text-white transition-colors"><ShoppingBag className="w-5 h-5" /> Shopify Partner</span>
                        <span className="flex items-center gap-2 text-xl hover:text-white transition-colors">Webpay Plus</span>
                        <span className="flex items-center gap-2 text-xl hover:text-white transition-colors">MercadoPago</span>
                        <span className="flex items-center gap-2 text-xl hover:text-white transition-colors">Starken/Blue</span>
                        <span className="flex items-center gap-2 text-xl hover:text-white transition-colors">Google Ads</span>
                    </div>
                </div>
            </section>

            <section id="servicios" className="py-24 bg-slate-950 relative">
                <div className="container mx-auto px-6">
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
                        <span className="text-purple-400 font-bold tracking-wider uppercase text-sm mb-2 block">Nuestro Proceso</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Método de 3 Pasos</h2>
                        <p className="text-slate-400 max-w-2xl text-lg">
                            Simplificamos lo complejo para que tú solo te preocupes de vender.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            number="01"
                            title="Estrategia & Diseño"
                            desc="Analizamos tu marca y creamos un diseño único que te diferencie de la competencia."
                        />
                        <FeatureCard
                            number="02"
                            title="Desarrollo Shopify"
                            desc="Construimos tu tienda con código limpio, apps esenciales y configuraciones pro."
                        />
                        <FeatureCard
                            number="03"
                            title="Lanzamiento & Escala"
                            desc="Te entregamos la llave y te acompañamos en tus primeras ventas."
                        />
                    </div>
                </div>
            </section>

            <section id="portfolio" className="py-32 bg-slate-950 text-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="mb-16 max-w-5xl">
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
                            La plataforma de comercio <br />
                            <span className="text-slate-500">detrás de todo.</span>
                        </h2>
                        <p className="text-2xl md:text-3xl text-slate-400 font-medium leading-snug max-w-4xl">
                            <span className="text-white">Vende online y en persona.</span> Vende a nivel local y mundial.
                            Vende de forma directa y mayorista. Diseñamos para que tu marca brille en computadoras y dispositivos móviles.
                        </p>
                    </div>

                    <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:grid md:grid-cols-3 md:gap-8 md:px-0 md:overflow-visible">
                        <div className="min-w-[85vw] md:min-w-0 snap-center group cursor-pointer relative rounded-[32px] overflow-hidden aspect-[4/5] md:aspect-[3/4]">
                            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop" alt="Fashion Store" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                            <div className="absolute bottom-0 left-0 p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-4xl font-bold text-white mb-2">Glossier Vibes</h3>
                                <p className="text-slate-300 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Beauty & Skincare</p>
                            </div>
                        </div>
                        <div className="min-w-[85vw] md:min-w-0 snap-center group cursor-pointer relative rounded-[32px] overflow-hidden aspect-[4/5] md:aspect-[3/4]">
                            <img src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1000&auto=format&fit=crop" alt="Tech Store" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                            <div className="absolute bottom-0 left-0 p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-4xl font-bold text-white mb-2">Simply Organic</h3>
                                <p className="text-slate-300 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Lifestyle & Home</p>
                            </div>
                        </div>
                        <div className="min-w-[85vw] md:min-w-0 snap-center group cursor-pointer relative rounded-[32px] overflow-hidden aspect-[4/5] md:aspect-[3/4]">
                            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop" alt="Sneaker Store" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                            <div className="absolute bottom-0 left-0 p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-4xl font-bold text-white mb-2">Nike Redesign</h3>
                                <p className="text-slate-300 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Sportswear & Shoes</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/portafolio">
                            <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 hover:text-purple-400 font-bold transition-all">
                                Ver todo el portafolio <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section id="gestion" className="py-32 bg-slate-950 text-white border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="mb-16">
                        <span className="text-[#00dec4] font-medium text-lg tracking-wide">Computadoras y dispositivos móviles</span>
                        <h2 className="text-5xl md:text-6xl font-bold mt-4 tracking-tight">Cuida tu negocio</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-[#0f1f21] rounded-[32px] overflow-hidden border border-white/5 group hover:border-white/10 transition-all flex flex-col">
                            <div className="aspect-[16/10] bg-gradient-to-br from-slate-900 to-slate-800 relative p-8 flex items-end justify-center overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" className="w-[90%] h-auto rounded-t-xl shadow-2xl translate-y-4 group-hover:scale-105 transition-transform duration-500" alt="Shopify Dashboard" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f21] via-transparent to-transparent opacity-50" />
                            </div>
                            <div className="p-10 mt-auto">
                                <h3 className="text-2xl font-bold mb-4">Gestiona todo en un solo lugar</h3>
                                <p className="text-slate-400 leading-relaxed text-lg">Desde la oficina administrativa hasta la tienda, siempre tendrás el poder con el <span className="underline decoration-1 underline-offset-4 decoration-slate-600 text-white">panel de control de Shopify</span> totalmente centralizado.</p>
                            </div>
                        </div>
                        <div className="bg-[#0f1f21] rounded-[32px] overflow-hidden border border-white/5 group hover:border-white/10 transition-all flex flex-col">
                            <div className="aspect-[16/10] bg-gradient-to-br from-slate-900 to-slate-800 relative p-8 flex items-center justify-center overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=1000&auto=format&fit=crop" className="h-[110%] w-auto object-contain shadow-2xl rotate-12 group-hover:rotate-6 transition-transform duration-500" alt="Shopify Mobile App" />
                            </div>
                            <div className="p-10 mt-auto">
                                <h3 className="text-2xl font-bold mb-4">Gestiona tu tienda desde cualquier lugar</h3>
                                <p className="text-slate-400 leading-relaxed text-lg">Haz todo desde tu bolsillo con la completa <span className="underline decoration-1 underline-offset-4 decoration-slate-600 text-white">aplicación móvil de Shopify</span>.</p>
                            </div>
                        </div>
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

            {
        isEnabled("ShopifyInfoTabs") && (
            <ShopifyInfoTabs />
        )
    }

    {/* Agencias Section (Moved from separate page) */ }
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
                        <Link href="https://wa.me/56984410379" target="_blank">
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
        </main >
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
