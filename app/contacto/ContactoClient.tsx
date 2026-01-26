'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AgenciasSection } from '@/components/AgenciasSection';
import { CodeLeftRain } from '@/components/CodeLeftRain';

interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    message: string;
}

export default function ContactoClient() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>();

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                setIsSuccess(true);
                toast.success('¡Mensaje enviado correctamente!', {
                    description: 'Te responderemos a la brevedad.',
                });
                reset();
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                toast.error('Error al enviar el mensaje', {
                    description: result.message || 'Por favor, intenta nuevamente.',
                });
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Error de conexión', {
                description: 'No pudimos enviar tu mensaje. Verifica tu conexión.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 relative">
                {/* Animación de fondo de código */}
                <CodeLeftRain />

                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-20" />

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center max-w-3xl mx-auto"
                        >
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                <span className="gradient-text">Hablemos de tu proyecto</span>
                            </h1>
                            <p className="text-xl text-slate-300 leading-relaxed">
                                Estamos aquí para ayudarte a llevar tu tienda Shopify al siguiente nivel.
                                Cuéntanos sobre tu proyecto y te responderemos pronto.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="pb-20 relative z-10">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {/* Contact Info Cards */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="lg:col-span-1 space-y-6"
                            >
                                <ContactInfoCard
                                    icon={<Mail className="w-6 h-6" />}
                                    title="Email"
                                    content="contacto@desarrolloshopify.cl"
                                    href="mailto:contacto@desarrolloshopify.cl"
                                />

                                <ContactInfoCard
                                    icon={<Phone className="w-6 h-6" />}
                                    title="WhatsApp"
                                    content="+56 9 1234 5678"
                                    href="https://wa.me/56912345678"
                                />

                                <ContactInfoCard
                                    icon={<MapPin className="w-6 h-6" />}
                                    title="Ubicación"
                                    content="Santiago, Chile"
                                />

                                {/* Extra Info */}
                                <div className="glass-panel rounded-2xl p-6 border border-purple-500/20">
                                    <h3 className="text-lg font-semibold mb-3 gradient-text">
                                        ¿Por qué elegirnos?
                                    </h3>
                                    <ul className="space-y-2 text-sm text-slate-300">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                                            <span>Expertos certificados en Shopify</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                                            <span>Diseños modernos y conversivos</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                                            <span>Soporte continuo post-lanzamiento</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                                            <span>Optimización SEO incluida</span>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="lg:col-span-2"
                            >
                                <div className="glass-panel rounded-2xl p-8 border border-purple-500/20">
                                    <h2 className="text-2xl font-bold mb-6 gradient-text">
                                        Envíanos un mensaje
                                    </h2>

                                    {isSuccess && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3"
                                        >
                                            <CheckCircle2 className="w-5 h-5 text-green-400" />
                                            <p className="text-green-300">¡Mensaje enviado exitosamente!</p>
                                        </motion.div>
                                    )}

                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                                                    Nombre completo *
                                                </label>
                                                <input
                                                    id="name"
                                                    type="text"
                                                    {...register('name', {
                                                        required: 'El nombre es requerido',
                                                        minLength: {
                                                            value: 2,
                                                            message: 'El nombre debe tener al menos 2 caracteres',
                                                        },
                                                    })}
                                                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                    placeholder="Juan Pérez"
                                                />
                                                {errors.name && (
                                                    <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                                    Email *
                                                </label>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    {...register('email', {
                                                        required: 'El email es requerido',
                                                        pattern: {
                                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                            message: 'Email inválido',
                                                        },
                                                    })}
                                                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                    placeholder="juan@ejemplo.com"
                                                />
                                                {errors.email && (
                                                    <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                                                    Teléfono
                                                </label>
                                                <input
                                                    id="phone"
                                                    type="tel"
                                                    {...register('phone')}
                                                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                    placeholder="+56 9 1234 5678"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                                                    Empresa
                                                </label>
                                                <input
                                                    id="company"
                                                    type="text"
                                                    {...register('company')}
                                                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                    placeholder="Tu Empresa S.A."
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                                                Mensaje *
                                            </label>
                                            <textarea
                                                id="message"
                                                rows={6}
                                                {...register('message', {
                                                    required: 'El mensaje es requerido',
                                                    minLength: {
                                                        value: 10,
                                                        message: 'El mensaje debe tener al menos 10 caracteres',
                                                    },
                                                })}
                                                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                                                placeholder="Cuéntanos sobre tu proyecto, necesidades y objetivos..."
                                            />
                                            {errors.message && (
                                                <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                                            )}
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 group"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Enviando...
                                                </>
                                            ) : (
                                                <>
                                                    Enviar mensaje
                                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>

                                        <p className="text-sm text-slate-400">
                                            * Campos requeridos
                                        </p>
                                    </form>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Sección de Agencias */}
            <AgenciasSection />

            {/* Footer */}
            <Footer />
        </>
    );
}

interface ContactInfoCardProps {
    icon: React.ReactNode;
    title: string;
    content: string;
    href?: string;
}

function ContactInfoCard({ icon, title, content, href }: ContactInfoCardProps) {
    const CardContent = (
        <div className="glass-panel rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group cursor-pointer">
            <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg text-purple-400 group-hover:scale-110 transition-transform">
                    {icon}
                </div>
                <div className="flex-1">
                    <h3 className="text-sm font-medium text-slate-400 mb-1">{title}</h3>
                    <p className="text-white font-medium group-hover:text-purple-300 transition-colors">
                        {content}
                    </p>
                </div>
            </div>
        </div>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer">
                {CardContent}
            </a>
        );
    }

    return CardContent;
}
