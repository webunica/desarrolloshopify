"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, CreditCard, Truck, RefreshCw, BarChart3, HelpCircle, ArrowRight, Zap, Target, Smartphone, Globe, Package, Settings, Users, Layers, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const ShopifyInfoTabs = () => {
    const [activeTab, setActiveTab] = useState("beneficios");

    const tabs = [
        { id: "beneficios", label: "Beneficios", icon: <Target className="w-4 h-4" /> },
        { id: "incluye", label: "Qué incluye", icon: <Layers className="w-4 h-4" /> },
        { id: "proceso", label: "Proceso", icon: <RefreshCw className="w-4 h-4" /> },
        { id: "pagos", label: "Pagos y Envíos", icon: <CreditCard className="w-4 h-4" /> },
        { id: "proyectos", label: "Tipos de Proyectos", icon: <ShoppingBag className="w-4 h-4" /> },
        { id: "faq", label: "Preguntas Frecuentes", icon: <HelpCircle className="w-4 h-4" /> },
    ];

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden" id="info-detallada">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Header Section */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                        Desarrollo de <span className="gradient-text">Tiendas Shopify en Chile</span>
                    </h2>
                    <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                        Diseñamos y desarrollamos tiendas Shopify profesionales para pymes y empresas en Chile,
                        con integración de medios de pago locales, envíos nacionales y una experiencia de compra optimizada.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="https://wa.me/56966198752" target="_blank">
                            <Button size="lg" className="bg-white text-slate-950 hover:bg-slate-200 font-bold rounded-full px-8 h-12">
                                Cotizar tienda Shopify
                            </Button>
                        </Link>
                        <Link href="#proceso">
                            <Button variant="outline" size="lg" onClick={() => setActiveTab("proceso")} className="border-white/10 text-white hover:bg-white/5 rounded-full px-8 h-12">
                                Ver cómo trabajamos
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Tabs Navigation */}
                <div className="flex flex-wrap justify-center gap-2 mb-12 p-2 bg-slate-900/50 rounded-full border border-white/5 w-fit mx-auto backdrop-blur-sm">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id ? "text-white" : "text-slate-400 hover:text-slate-200"
                                }`}
                        >
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="active-tab"
                                    className="absolute inset-0 bg-purple-600 rounded-full shadow-lg shadow-purple-900/30"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                {tab.icon} {tab.label}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Tabs Content */}
                <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {activeTab === "beneficios" && <BeneficiosContent />}
                            {activeTab === "incluye" && <IncluyeContent />}
                            {activeTab === "proceso" && <ProcesoContent />}
                            {activeTab === "pagos" && <PagosContent />}
                            {activeTab === "proyectos" && <ProyectosContent />}
                            {activeTab === "faq" && <FaqContent />}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

const BeneficiosContent = () => (
    <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-6">
                <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Enfoque en Pymes</h3>
            <p className="text-slate-400 leading-relaxed">Trabajamos día a día con pymes y marcas locales, entendemos sus tiempos, presupuestos y la necesidad de tener resultados concretos.</p>
        </div>
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                <Settings className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Implementación Técnica</h3>
            <p className="text-slate-400 leading-relaxed">Nos encargamos del desarrollo técnico completo: estructura, colecciones, páginas informativas y ajustes generales del tema.</p>
        </div>
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors">
            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400 mb-6">
                <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Ecosistema Chileno</h3>
            <p className="text-slate-400 leading-relaxed">Configuramos medios de pago y envíos usados en Chile para que tus clientes compren con confianza y sin fricciones.</p>
        </div>
    </div>
);

const IncluyeContent = () => (
    <div className="bg-slate-900/50 rounded-2xl border border-white/5 p-8 md:p-12">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">Todo lo que necesitas para lanzar</h3>
        <div className="grid md:grid-cols-2 gap-6">
            {[
                { title: "Configuración Shopify", desc: "Creación de la tienda, dominios y ajustes generales." },
                { title: "Diseño Visual Pro", desc: "Personalización de tema premium adaptado a tu marca." },
                { title: "Estructura de Colecciones", desc: "Categorías claras para facilitar la navegación y SEO." },
                { title: "Carga de Productos", desc: "Subida de productos, variantes y fichas completas." },
                { title: "Páginas Clave", desc: "Quiénes somos, contacto, legales y políticas." },
                { title: "SEO On-Page", desc: "Optimización de títulos, descripciones y encabezados." },
                { title: "Integración Social", desc: "Conexión con Instagram, Facebook y canales de venta." },
                { title: "Capacitación", desc: "Sesión 1 a 1 para aprender a administrar tu tienda." },
            ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 mt-1 shrink-0" />
                    <div>
                        <h4 className="font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const ProcesoContent = () => (
    <div className="relative">
        {/* Connector Line (Desktop) */}
        <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/30 to-purple-500/0" />

        <div className="grid md:grid-cols-3 gap-8">
            {[
                { step: "01", title: "Diagnóstico", desc: "Revisamos tu modelo de negocio y catálogo." },
                { step: "02", title: "UX/UI", desc: "Definimos estructura y estilo visual." },
                { step: "03", title: "Desarrollo", desc: "Implementación y configuración técnica." },
                { step: "04", title: "Integraciones", desc: "Configuración de pagos y envíos." },
                { step: "05", title: "Testing", desc: "Pruebas de flujo de compra y ajustes." },
                { step: "06", title: "Capacitación", desc: "Entrega y soporte inicial." },
            ].map((item, i) => (
                <div key={i} className="relative z-10 bg-slate-900 p-6 rounded-xl border border-white/5 hover:border-purple-500/50 transition-all group group-hover:-translate-y-1">
                    <div className="w-10 h-10 rounded-full bg-slate-800 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        {item.step}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
            ))}
        </div>
    </div>
);

const PagosContent = () => (
    <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <CreditCard className="text-indigo-400" /> Pasarelas de Pago
            </h3>
            <ul className="space-y-4">
                <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2" />
                    <div>
                        <strong className="text-white block">Locales (Chile)</strong>
                        <span className="text-slate-400 text-sm">Transbank (Webpay Plus), Mercado Pago, Fintoc, Flow.</span>
                    </div>
                </li>
                <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2" />
                    <div>
                        <strong className="text-white block">Internacionales</strong>
                        <span className="text-slate-400 text-sm">PayPal, Stripe (si aplica), pagos en dólares.</span>
                    </div>
                </li>
            </ul>
        </div>
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Truck className="text-emerald-400" /> Envíos y Logística
            </h3>
            <ul className="space-y-4">
                <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2" />
                    <div>
                        <strong className="text-white block">Nacionales</strong>
                        <span className="text-slate-400 text-sm">Tarifas fijas por región/comuna o integración API directa.</span>
                    </div>
                </li>
                <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2" />
                    <div>
                        <strong className="text-white block">Multicourier</strong>
                        <span className="text-slate-400 text-sm">Envíame, Shipit, o integraciones directas con Starken/BlueExpress.</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
);

const ProyectosContent = () => (
    <div className="grid md:grid-cols-3 gap-6">
        {[
            {
                title: "Tiendas Nuevas",
                desc: "Perfecto para emprender desde cero. Te entregamos una tienda 'llave en mano' lista para recibir tu primer pedido.",
                icon: <Rocket className="w-8 h-8 text-pink-400" />
            },
            {
                title: "Migraciones",
                desc: "Migramos tu tienda desde WooCommerce, Jumpseller o Wix hacia Shopify, cuidando tu SEO, productos y base de clientes.",
                icon: <RefreshCw className="w-8 h-8 text-cyan-400" />
            },
            {
                title: "Marcas Consolidadas",
                desc: "Proyectos a medida para catálogos grandes que requieren funcionalidades avanzadas, integraciones ERP y optimización de conversión.",
                icon: <Start className="w-8 h-8 text-amber-400" />
            },
        ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors text-center">
                <div className="bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
            </div>
        ))}
    </div>
);

// Helper Icon for Projects
const Rocket = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
)

const Start = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
)


const FaqContent = () => (
    <div className="max-w-3xl mx-auto space-y-4">
        {[
            { q: "¿Cuánto cuesta el desarrollo?", a: "El valor depende del alcance (cantidad de productos, diseño a medida vs plantilla). Tenemos planes para emprendedores desde precios accesibles." },
            { q: "¿En cuánto tiempo está lista?", a: "Proyectos estándar toman entre 2 a 4 semanas una vez entregada toda la información (logo, productos, textos)." },
            { q: "¿Necesito saber programar?", a: "No. Te entregamos una tienda 100% autoadministrable y te capacitamos para que la operes sin depender de nosotros." },
            { q: "¿Qué pasa con el soporte?", a: "Incluimos garantía post-lanzamiento para asegurar que todo funcione perfecto. También ofrecemos planes de mantenimiento opcionales." },
            { q: "¿Es escalable?", a: "Absolutamente. Shopify permite empezar pequeño y escalar a millones de ventas sin cambiar de plataforma." },
        ].map((item, i) => (
            <div key={i} className="bg-slate-900/80 rounded-xl border border-white/5 overflow-hidden">
                <details className="group p-4">
                    <summary className="flex justify-between items-center font-bold text-white cursor-pointer list-none text-lg">
                        {item.q}
                        <span className="transition-transform group-open:rotate-180">
                            <ArrowRight className="w-5 h-5 rotate-90 text-slate-500 group-open:text-purple-400" />
                        </span>
                    </summary>
                    <div className="text-slate-400 mt-3 pl-4 border-l-2 border-purple-500/30 text-base leading-relaxed">
                        {item.a}
                    </div>
                </details>
            </div>
        ))}
    </div>
);
