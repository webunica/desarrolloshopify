'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const designs = [
    {
        id: 1,
        image: '/uploads/home-1-1.jpg',
        title: 'Moda Urbana',
        category: 'Fashion'
    },
    {
        id: 2,
        image: '/uploads/home-2-1.jpg',
        title: 'Tecnología Premium',
        category: 'Electronics'
    },
    {
        id: 3,
        image: '/uploads/home-3-1.jpg',
        title: 'Estilo de Vida',
        category: 'Lifestyle'
    },
    {
        id: 4,
        image: '/uploads/home-4.jpg',
        title: 'Decoración Minimalista',
        category: 'Home Decor'
    },
    {
        id: 5,
        image: '/uploads/home-5-2.jpg',
        title: 'Cuidado Personal',
        category: 'Beauty'
    },
    {
        id: 6,
        image: '/uploads/5-2.jpg',
        title: 'Accesorios & Joyas',
        category: 'Accessories'
    }
];

export function DesignCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative w-full py-10">
            <div className="container mx-auto px-6 mb-8 flex justify-between items-end">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Diseños que Venden</h2>
                    <p className="text-slate-400">Explora nuestras plantillas y personalizaciones de alto impacto.</p>
                </div>
                <div className="hidden md:flex gap-2">
                    <Button
                        onClick={() => scroll('left')}
                        variant="outline"
                        size="icon"
                        className="rounded-full border-white/10 hover:bg-white/10 hover:text-white"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                        onClick={() => scroll('right')}
                        variant="outline"
                        size="icon"
                        className="rounded-full border-white/10 hover:bg-white/10 hover:text-white"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </Button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto pb-12 px-6 md:px-0 scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                <div className="w-6 md:w-[calc((100vw-1200px)/2)] shrink-0" /> {/* Spacer izquierdo centrado */}

                {designs.map((design) => (
                    <motion.div
                        key={design.id}
                        className="relative shrink-0 w-[85vw] md:w-[400px] aspect-[3/4] rounded-[2rem] overflow-hidden cursor-pointer group snap-center border border-white/10 bg-slate-900"
                        whileHover={{ zIndex: 10 }}
                    >
                        {/* Imagen con Zoom Hover */}
                        <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
                            <img
                                src={design.image}
                                alt={design.title}
                                className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-125"
                            />
                            {/* Overlay degradado siempre visible pero sutil */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                        </div>

                        {/* Contenido */}
                        <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-purple-200 uppercase bg-purple-500/20 backdrop-blur-md rounded-full border border-purple-500/20">
                                {design.category}
                            </span>
                            <h3 className="text-2xl font-bold text-white mb-1 leading-tight">{design.title}</h3>
                            <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                                <p className="text-slate-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 flex items-center gap-2">
                                    Ver Diseño <ExternalLink className="w-3 h-3" />
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}

                <div className="w-6 md:w-[calc((100vw-1200px)/2)] shrink-0" /> {/* Spacer derecho */}
            </div>
        </div>
    );
}
