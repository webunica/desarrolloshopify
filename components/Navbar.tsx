"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sparkles, Menu, X } from "lucide-react";
import { ContactModal } from "@/components/ContactModal";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: "/#inicio", label: "Inicio" },
        { href: "/#metodo", label: "Método" },
        { href: "/servicios", label: "Servicios" },
        { href: "/precios", label: "Precios" },
        { href: "/portafolio", label: "Portafolio" },
        { href: "/blog", label: "Blog" },
        { href: "/contacto", label: "Contacto" },
        { href: "/#agencias", label: "Agencias" },
        { href: "/#info-detallada", label: "Info" },
    ];

    return (
        <>
            <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/10">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity z-50 flex items-center gap-2">
                        <Image src="/logo-header.png" alt="DesarrolloShopify.cl Logo" width={32} height={32} className="w-8 h-8 object-contain" />
                        DesarrolloShopify.cl
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-6 lg:gap-8 text-sm font-medium text-slate-300">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="hover:text-[#95bf47] transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <Button
                            onClick={() => setIsContactModalOpen(true)}
                            variant="default"
                            size="sm"
                            className="hidden md:flex bg-white text-black hover:bg-slate-200 shadow-lg font-bold transition-all duration-300 hover:scale-105"
                        >
                            Comienza Aquí <Sparkles className="ml-2 h-4 w-4" />
                        </Button>

                        {/* Botón Hamburguesa Móvil */}
                        <button
                            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors z-50"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden overflow-hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/10"
                        >
                            <div className="flex flex-col p-6 space-y-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-lg font-medium text-slate-300 hover:text-[#95bf47] hover:pl-2 transition-all"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <div className="pt-4 border-t border-white/10">
                                    <Button
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            setIsContactModalOpen(true);
                                        }}
                                        className="w-full bg-white text-black hover:bg-slate-200 font-bold py-6"
                                    >
                                        Comienza Aquí <Sparkles className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </>
    );
}
