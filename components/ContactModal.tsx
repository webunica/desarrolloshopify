'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2, CheckCircle2 } from 'lucide-react';

interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    message: string;
}

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
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
                setTimeout(() => {
                    setIsSuccess(false);
                    onClose();
                }, 3000);
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
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="glass-panel rounded-2xl p-8 border border-purple-500/20 relative">
                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors group"
                                    aria-label="Cerrar modal"
                                >
                                    <X className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                                </button>

                                {/* Header */}
                                <div className="mb-6">
                                    <h2 className="text-3xl font-bold gradient-text mb-2">
                                        ¡Comienza tu proyecto!
                                    </h2>
                                    <p className="text-slate-300">
                                        Cuéntanos sobre tu proyecto y te responderemos pronto
                                    </p>
                                </div>

                                {/* Success Message */}
                                {isSuccess && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        <p className="text-green-300">¡Mensaje enviado exitosamente!</p>
                                    </motion.div>
                                )}

                                {/* Form */}
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="modal-name" className="block text-sm font-medium text-slate-300 mb-2">
                                                Nombre completo *
                                            </label>
                                            <input
                                                id="modal-name"
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
                                            <label htmlFor="modal-email" className="block text-sm font-medium text-slate-300 mb-2">
                                                Email *
                                            </label>
                                            <input
                                                id="modal-email"
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

                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="modal-phone" className="block text-sm font-medium text-slate-300 mb-2">
                                                Teléfono
                                            </label>
                                            <input
                                                id="modal-phone"
                                                type="tel"
                                                {...register('phone')}
                                                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                placeholder="+56 9 1234 5678"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="modal-company" className="block text-sm font-medium text-slate-300 mb-2">
                                                Empresa
                                            </label>
                                            <input
                                                id="modal-company"
                                                type="text"
                                                {...register('company')}
                                                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                placeholder="Tu Empresa S.A."
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="modal-message" className="block text-sm font-medium text-slate-300 mb-2">
                                            Mensaje *
                                        </label>
                                        <textarea
                                            id="modal-message"
                                            rows={5}
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
                                        disabled={isSubmitting || isSuccess}
                                        className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 group"
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

                                    <p className="text-sm text-slate-400 text-center">
                                        * Campos requeridos
                                    </p>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
