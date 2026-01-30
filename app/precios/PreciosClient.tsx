'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Check,
    Sparkles,
    Zap,
    Rocket,
    ChevronDown,
    Calendar,
    MessageCircle,
    Shield,
    Clock,
    TrendingUp
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';

interface PricingPlan {
    id: string;
    name: string;
    price: string;
    priceNumeric: number;
    badge?: string;
    badgeColor?: string;
    icon: any;
    description: string;
    ideal: string;
    features: string[];
    highlight: boolean;
    deliveryTime: string;
    productCapacity: string;
}

const plans: PricingPlan[] = [
    {
        id: 'inicia',
        name: 'INICIA',
        price: '$580.000',
        priceNumeric: 580000,
        icon: Sparkles,
        badge: 'IDEAL PARA COMENZAR',
        badgeColor: 'from-blue-500 to-cyan-500',
        description: 'Lanza tu tienda con lo esencial',
        ideal: '🌟 Ideal para emprendedores que inician su negocio online',
        productCapacity: 'Hasta 50 productos',
        deliveryTime: 'Hasta 4 semanas',
        highlight: false,
        features: [
            'Configuración completa de tienda Shopify',
            'Conexión de dominio + validación de correo',
            'Instalación de plantilla premium Envato o Shopify',
            '⚠️ Sin personalización (solo configuración del theme)',
            'Capacidad para hasta 50 productos',
            'Migración de productos desde otra plataforma',
            'Certificado SSL incluido',
            'Panel administrador completo',
            'Integración de medio de pago (Mercado Pago, PayPal, Flow o Ventipay)',
            'Métodos de envío configurados',
            'Habilitación multicourier (Shipit o Sendu)',
            'Configuración de variaciones (talla, color, etc.)',
            'Integración redes sociales (Facebook e Instagram)',
            'App Botón de WhatsApp',
            'Carrusel de imágenes',
            'Formulario con respuesta automática',
            'Sitio responsive móvil',
            'Optimización SEO Básica',
            'Soporte técnico 3 meses',
            'Hasta 3 cambios post-entrega'
        ]
    },
    {
        id: 'mejora',
        name: 'MEJORA',
        price: '$980.000',
        priceNumeric: 980000,
        icon: Zap,
        badge: 'MÁS POPULAR',
        badgeColor: 'from-purple-500 to-pink-500',
        description: 'El favorito de nuestros clientes',
        ideal: '⚙️ Para negocios en crecimiento que necesitan más funcionalidades',
        productCapacity: 'Hasta 100 productos',
        deliveryTime: 'Hasta 6 semanas',
        highlight: true,
        features: [
            '✨ Todo lo del Plan INICIA, más:',
            'Capacidad para hasta 100 productos',
            '🎨 Diseño personalizado por secciones',
            'Personalización de colores, tipografías y estilos',
            'Ajustes de diseño según tu marca',
            'Integración con Google Analytics y Facebook Pixel',
            'Optimización SEO Avanzada',
            'Ajustes avanzados de estructura y navegación',
            'Chat en vivo opcional (Tawk.to o WhatsApp Business)',
            'Integración con newsletter y formulario de suscripción',
            'Capacitación personalizada con videos exclusivos',
            'Correos automáticos de carritos abandonados',
            'Notificaciones automáticas de compra',
            'Soporte técnico 6 meses',
            'Hasta 5 cambios post-entrega'
        ]
    },
    {
        id: 'pro',
        name: 'PRO',
        price: '$1.400.000',
        priceNumeric: 1400000,
        icon: Rocket,
        badge: 'DESARROLLO A MEDIDA',
        badgeColor: 'from-amber-500 to-orange-500',
        description: 'Theme personalizado desde cero',
        ideal: '🚀 Para empresas que necesitan un diseño único y diferenciador',
        productCapacity: 'Hasta 500 productos',
        deliveryTime: 'Hasta 8 semanas',
        highlight: false,
        features: [
            '🎨 Desarrollo de theme desde cero',
            'Diseño 100% personalizado a tu marca',
            'Capacidad para hasta 500 productos',
            'Migración completa de productos e imágenes',
            'Integración con ERP, Bsale o sistema de inventario',
            'Automatización de marketing con Mailchimp o Klaviyo',
            'Optimización SEO completa y avanzada',
            'Configuración App (Google Ads / Meta Ads)',
            'Configuración completa de Analytics 4',
            'Páginas optimizadas para campañas',
            'Secciones personalizadas ilimitadas',
            'Integración con herramientas externas (Calendly, CRM, Zapier)',
            'Soporte técnico preferente 6 meses',
            'Auditoría final completa',
            'Videos de ayuda para administración',
            'Hasta 10 cambios post-entrega'
        ]
    },
    {
        id: 'pro2',
        name: 'PRO 2',
        price: '$2.200.000',
        priceNumeric: 2200000,
        icon: Rocket,
        badge: 'ENTERPRISE',
        badgeColor: 'from-violet-500 to-purple-500',
        description: 'La solución enterprise sin límites',
        ideal: '💎 Para marcas consolidadas que necesitan una solución completa',
        productCapacity: 'Productos ilimitados',
        deliveryTime: 'Hasta 12 semanas',
        highlight: false,
        features: [
            '🚀 Todo lo del Plan PRO, más:',
            '♾️ Sin límite de productos',
            'Theme enterprise completamente a medida',
            'Arquitectura optimizada para alto tráfico',
            'Funcionalidades avanzadas personalizadas',
            'Integración completa con sistemas empresariales',
            'Automatizaciones complejas y workflows',
            'Multi-idioma y multi-moneda',
            'Optimización de rendimiento avanzada',
            'CDN y optimización de imágenes',
            'Configuración de seguridad avanzada',
            'Dashboard personalizado de métricas',
            'Integración con BI y herramientas analytics',
            'Soporte técnico prioritario 12 meses',
            'Auditorías trimestrales de rendimiento',
            'Capacitación completa del equipo',
            'Hasta 20 cambios post-entrega'
        ]
    }
];

const faqs = [
    {
        question: '¿Qué incluye el soporte técnico?',
        answer: 'El soporte técnico incluye ayuda con dudas de funcionamiento, resolución de problemas técnicos, y garantía de funcionamiento óptimo durante el periodo especificado en cada plan.'
    },
    {
        question: '¿Puedo cambiar de plan después de contratar?',
        answer: 'Sí, puedes hacer upgrade a un plan superior en cualquier momento. Solo pagarás la diferencia proporcional según el avance del proyecto.'
    },
    {
        question: '¿Qué pasa si necesito más productos de los incluidos?',
        answer: 'Evaluamos caso a caso. En general, podemos aumentar la capacidad con un costo adicional o puedes hacer upgrade al siguiente plan.'
    },
    {
        question: '¿Hay costos ocultos o pagos recurrentes?',
        answer: 'No hay costos ocultos en nuestros servicios. Los únicos pagos recurrentes son los de Shopify (plan mensual) y el dominio (anual), que son directamente con esos proveedores.'
    },
    {
        question: '¿Qué incluyen los "cambios post-entrega"?',
        answer: 'Los cambios post-entrega incluyen ajustes menores como cambio de textos, imágenes o configuraciones. No incluyen nuevas secciones o funcionalidades adicionales.'
    },
    {
        question: '¿Cuándo empiezo a pagar Shopify?',
        answer: 'El plan de Shopify lo contratas directamente con ellos. Te ayudamos con el proceso y puedes aprovechar periodos de prueba gratuitos que Shopify ofrece.'
    }
];

export default function PreciosClient() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState<string>('');
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

    const handleContactClick = (planName: string) => {
        setSelectedPlan(planName);
        setIsContactModalOpen(true);
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-background bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/20 via-background to-background">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-20" />

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6"
                            >
                                <Shield className="w-4 h-4 text-secondary dark:text-primary" />
                                <span className="text-sm text-secondary dark:text-primary">Precios transparentes, sin sorpresas</span>
                            </motion.div>

                            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                <span className="gradient-text">Planes diseñados para tu éxito</span>
                            </h1>

                            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                Elige el plan perfecto para tu negocio. Todos incluyen pago en <strong className="text-foreground">6 cuotas sin interés</strong> y soporte técnico garantizado.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-primary" />
                                    <span>100+ proyectos completados</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-primary" />
                                    <span>Shopify Partners certificados</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-primary" />
                                    <span>Valoración 4.9/5</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Pricing Cards */}
                <section className="pb-20 relative z-10">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
                            {plans.map((plan, index) => (
                                <PricingCard
                                    key={plan.id}
                                    plan={plan}
                                    index={index}
                                    onContactClick={handleContactClick}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Value Proposition */}
                <section className="pb-20 relative z-10">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto glass-panel rounded-2xl p-8 md:p-12 border border-border bg-card/50">
                            <div className="grid md:grid-cols-3 gap-8 text-center">
                                <div>
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                                        <TrendingUp className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">Pagos Flexibles</h3>
                                    <p className="text-muted-foreground">Paga hasta en 6 cuotas sin interés con tarjeta de crédito.</p>
                                </div>
                                <div>
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                                        <Clock className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">Garantía de Funcionamiento</h3>
                                    <p className="text-muted-foreground">3 meses de garantía de funcionamiento post-entrega (según plan).</p>
                                </div>
                                <div>
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                                        <Shield className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">Soporte y Capacitación</h3>
                                    <p className="text-muted-foreground">Soporte continuo e instrucción vía videollamada grabada. Cursos pronto disponibles.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="pb-20 relative z-10">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center mb-12"
                            >
                                <h2 className="text-4xl font-bold mb-4">
                                    <span className="gradient-text">Preguntas Frecuentes</span>
                                </h2>
                                <p className="text-muted-foreground">
                                    Resolvemos tus dudas sobre precios y planes
                                </p>
                            </motion.div>

                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div
                                            onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                                            className="w-full glass-panel rounded-xl p-6 border border-border bg-card/30 hover:bg-card/50 hover:border-primary/40 transition-all text-left group cursor-pointer"
                                        >
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-lg font-semibold text-foreground pr-8">
                                                    {faq.question}
                                                </h3>
                                                <ChevronDown
                                                    className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ${expandedFaq === index ? 'rotate-180' : ''
                                                        }`}
                                                />
                                            </div>
                                            {expandedFaq === index && (
                                                <motion.p
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="mt-4 text-muted-foreground leading-relaxed"
                                                >
                                                    {faq.answer}
                                                </motion.p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="pb-20 relative z-10">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto glass-panel rounded-2xl p-12 border border-primary/20 bg-card/50 text-center"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                                ¿No estás seguro cuál plan elegir?
                            </h2>
                            <p className="text-xl text-muted-foreground mb-8">
                                Agenda una consultoría gratuita y te ayudamos a encontrar la mejor solución para tu negocio
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => handleContactClick('Consultoría')}
                                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2 group"
                                >
                                    <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    Hablar con un experto
                                </button>
                                <a
                                    href="/contacto"
                                    className="px-8 py-4 bg-secondary/30 text-foreground font-semibold rounded-lg hover:bg-secondary/50 border border-border transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <Calendar className="w-5 h-5" />
                                    Ver todos nuestros servicios
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>

            <Footer />

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </>
    );
}

interface PricingCardProps {
    plan: PricingPlan;
    index: number;
    onContactClick: (planName: string) => void;
}

function PricingCard({ plan, index, onContactClick }: PricingCardProps) {
    const [showAllFeatures, setShowAllFeatures] = useState(false);
    const Icon = plan.icon;
    const visibleFeatures = showAllFeatures ? plan.features : plan.features.slice(0, 8);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative ${plan.highlight ? 'lg:-mt-4 lg:mb-4' : ''}`}
        >
            <div className={`glass-panel rounded-2xl p-8 border h-full flex flex-col bg-card ${plan.highlight
                ? 'border-primary/50 shadow-2xl shadow-primary/10'
                : 'border-border'
                }`}>
                {/* Badge */}
                {plan.badge && (
                    <div className={`inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${plan.badgeColor} rounded-full text-xs font-bold text-white mb-4 w-fit`}>
                        <Sparkles className="w-3 h-3" />
                        {plan.badge}
                    </div>
                )}

                {/* Icon & Name */}
                <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 bg-gradient-to-br ${plan.badgeColor} rounded-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                </div>

                {/* Price */}
                <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                        <span className="text-4xl md:text-5xl font-bold gradient-text">{plan.price}</span>
                        <span className="text-muted-foreground">+ IVA</span>
                    </div>
                    <p className="text-sm text-secondary dark:text-primary mt-2">💳 Paga en 6 cuotas sin interés</p>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-2">{plan.description}</p>
                <p className="text-sm text-muted-foreground/80 mb-6">{plan.ideal}</p>

                {/* CTAs */}
                <div className="space-y-3 mb-6">
                    <button
                        onClick={() => onContactClick(plan.name)}
                        className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${plan.highlight
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg'
                            : 'bg-secondary text-foreground hover:bg-secondary/80 border border-border'
                            }`}
                    >
                        Comenzar ahora
                    </button>
                    <button
                        onClick={() => onContactClick(`Consulta ${plan.name}`)}
                        className="w-full px-6 py-3 bg-transparent text-secondary dark:text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                        Cotizar sin costo
                    </button>
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-secondary/30 rounded-lg">
                    <div>
                        <p className="text-xs text-muted-foreground mb-1">Capacidad</p>
                        <p className="text-sm font-semibold text-foreground">{plan.productCapacity}</p>
                    </div>
                    <div>
                        <p className="text-xs text-muted-foreground mb-1">Entrega</p>
                        <p className="text-sm font-semibold text-foreground">{plan.deliveryTime}</p>
                    </div>
                </div>

                {/* Features */}
                <div className="flex-1">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3">Incluye:</h4>
                    <ul className="space-y-2 mb-4">
                        {visibleFeatures.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    {plan.features.length > 8 && (
                        <button
                            onClick={() => setShowAllFeatures(!showAllFeatures)}
                            className="text-sm text-secondary dark:text-primary hover:text-primary/80 font-medium flex items-center gap-1"
                        >
                            {showAllFeatures ? 'Ver menos' : `Ver todas las features (+${plan.features.length - 8})`}
                            <ChevronDown className={`w-4 h-4 transition-transform ${showAllFeatures ? 'rotate-180' : ''}`} />
                        </button>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
