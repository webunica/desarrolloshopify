'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const designs = [
    { id: 1, image: '/uploads/moda.jpg', title: 'Moda Urbana', category: 'Fashion' },
    { id: 2, image: '/uploads/home-2-1.jpg', title: 'Tecnología Premium', category: 'Electronics' },
    { id: 3, image: '/uploads/home-3-1.jpg', title: 'Estilo de Vida', category: 'Lifestyle' },
    { id: 4, image: '/uploads/home-4.jpg', title: 'Decoración Minimalista', category: 'Home Decor' },
    { id: 5, image: '/uploads/cuidado.jpg', title: 'Cuidado Personal', category: 'Beauty' },
    { id: 6, image: '/uploads/home-5-2.jpg', title: 'Accesorios & Joyas', category: 'Accessories' },
    { id: 7, image: '/uploads/sport.jpg', title: 'Deportes Extremos', category: 'Sports' },
    { id: 8, image: '/uploads/demo-02.jpg', title: 'Gourmet & Food', category: 'Food' },
    { id: 9, image: '/uploads/marketplace.jpg', title: 'Supermercado & Retail', category: 'Marketplace' },
    { id: 10, image: '/uploads/licores.jpg', title: 'Vinos & Licores', category: 'Drinks' },
    { id: 11, image: '/uploads/moda hombre.jpg', title: 'Moda Masculina', category: 'Fashion' },
    { id: 12, image: '/uploads/cuidado-2.jpg', title: 'Skincare Premium', category: 'Beauty' },
    { id: 13, image: '/uploads/sport-2.jpg', title: 'Fitness & Gym', category: 'Sports' }
];

export function DesignCarousel() {
    return (
        <div className="relative w-full py-20 overflow-hidden bg-slate-950">
            <div className="container mx-auto px-6 mb-12 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Diseños que Venden</h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                    Explora nuestras plantillas y personalizaciones de alto impacto visual.
                </p>
            </div>

            {/* Contenedor del Marquee Infinito */}
            <div className="relative w-full flex overflow-x-hidden group">
                {/* Contenedor animado */}
                <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap gap-8 px-4">
                    {/* Primera Tira */}
                    <CarouselItems />
                    {/* Segunda Tira (Duplicada para loop) */}
                    <CarouselItems />
                    {/* Tercera Tira (Para pantallas anchas) */}
                    <CarouselItems />
                </div>
            </div>

            {/* Sombras laterales para efecto de desvanecimiento */}
            <div className="absolute top-0 left-0 h-full w-20 md:w-40 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 h-full w-20 md:w-40 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
        </div>
    );
}

function CarouselItems() {
    return (
        <div className="flex gap-8 items-center">
            {designs.map((design) => (
                <div
                    key={design.id}
                    className="relative shrink-0 w-[80vw] md:w-[450px] aspect-[4/5] rounded-[2rem] overflow-hidden cursor-pointer group/card border border-white/10 bg-slate-900 shadow-2xl"
                >
                    {/* Imagen con Zoom Hover */}
                    <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
                        <img
                            src={design.image}
                            alt={design.title}
                            className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover/card:scale-125"
                        />
                        {/* Overlay degradado */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover/card:opacity-80 transition-opacity duration-500" />
                    </div>

                    {/* Contenido */}
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                        <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-purple-200 uppercase bg-purple-500/20 backdrop-blur-md rounded-full border border-purple-500/20">
                            {design.category}
                        </span>
                        <h3 className="text-3xl font-bold text-white mb-2 leading-tight drop-shadow-lg">{design.title}</h3>
                        <div className="h-0 group-hover/card:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover/card:opacity-100">
                            <p className="text-slate-300 text-sm mt-2 flex items-center gap-2 font-medium">
                                Ver Detalle <ExternalLink className="w-4 h-4" />
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
