"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Navbar() {
    return (
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
                    <Link href="/blog" className="hover:text-purple-400 transition-colors">Blog</Link>
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
    );
}
