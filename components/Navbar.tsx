"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { ContactModal } from "@/components/ContactModal";

export function Navbar() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 w-full z-50 glass-panel">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity">
                        DesarrolloShopify.cl
                    </Link>
                    <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
                        <Link href="/#inicio" className="hover:text-purple-400 transition-colors">Inicio</Link>
                        <Link href="/#metodo" className="hover:text-purple-400 transition-colors">Método</Link>
                        <Link href="/servicios" className="hover:text-purple-400 transition-colors">Servicios</Link>
                        <Link href="/precios" className="hover:text-purple-400 transition-colors">Precios</Link>
                        <Link href="/portafolio" className="hover:text-purple-400 transition-colors">Portafolio</Link>
                        <Link href="/blog" className="hover:text-purple-400 transition-colors">Blog</Link>
                        <Link href="/contacto" className="hover:text-purple-400 transition-colors">Contacto</Link>
                        <Link href="/#agencias" className="hover:text-purple-400 transition-colors">Agencias</Link>
                        <Link href="/#info-detallada" className="hover:text-purple-400 transition-colors">Info</Link>
                    </div>
                    <Button
                        onClick={() => setIsContactModalOpen(true)}
                        variant="default"
                        size="sm"
                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg font-bold transition-all duration-300 hover:scale-105"
                    >
                        Comienza Aquí <Sparkles className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </nav>

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </>
    );
}
